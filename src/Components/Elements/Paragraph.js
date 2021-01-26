/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ElementColorContext } from "../../Context/ElementColorContext";
import { SectionColorContext } from "../../Context/SectionColorContext";
import { ViewColorContext } from "../../Context/ViewColorContext";

const styleParagraph = (small, large, huge, size, lh, margin, inc) => `
  font-size: ${
    small ? size / 1.2 : large ? size * 1.2 : huge ? size * 1.618 : size
  }rem;
  margin-top: ${margin}rem;
  margin-bottom: ${margin * 3}rem;
  line-height: ${small ? lh + inc : large ? lh - inc : lh};
`;

const StyledParagraph = styled.p`
  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.medium : colors.text.dark.medium};

  max-width: 80ch;

  ${({
    small,
    large,
    huge,
    theme: {
      typography: { size, lh, margin, inc },
    },
  }) => styleParagraph(small, large, huge, size, lh, margin, inc)}
`;

const Paragraph = ({ small, large, huge, children }) => {
  const viewContext = useContext(ViewColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const hasViewBgColor = !viewContext ? false : viewContext[0];

  const sectionContext = useContext(SectionColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const hasSectionBgColor = !sectionContext ? false : sectionContext[0];

  const elementContext = useContext(ElementColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const hasElementBgColor = !elementContext ? false : elementContext[0];

  const light = hasViewBgColor || hasSectionBgColor || hasElementBgColor;

  return (
    <StyledParagraph small={small} large={large} huge={huge} light={light}>
      {children}
    </StyledParagraph>
  );
};

Paragraph.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  huge: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  small: false,
  large: false,
  huge: false,
};

export default Paragraph;
