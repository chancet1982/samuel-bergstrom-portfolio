/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useBgColor from "../../utils/useBgColor";

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
  const light = useBgColor();

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
