/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ElementColorContext } from "../../Context/ElementColorContext";
import { SectionColorContext } from "../../Context/SectionColorContext";
import { ViewColorContext } from "../../Context/ViewColorContext";

const styleSpan = (small, large, huge, size, lh, inc) => `
  font-size: ${
    small ? size / 1.2 : large ? size * 1.2 : huge ? size * 1.618 : size
  }rem;
  line-height: ${small ? lh + inc : large ? lh - inc : lh};
`;

const StyledSpan = styled.span`
  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.medium : colors.text.dark.medium};

  ${({
    small,
    large,
    huge,
    theme: {
      typography: { size, lh, inc },
    },
  }) => styleSpan(small, large, huge, size, lh, inc)}
`;

const Span = ({ small, large, huge, children }) => {
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
    <StyledSpan small={small} large={large} huge={huge} light={light}>
      {children}
    </StyledSpan>
  );
};

Span.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  huge: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Span.defaultProps = {
  small: false,
  large: false,
  huge: false,
};

export default Span;
