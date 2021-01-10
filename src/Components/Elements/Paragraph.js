/* eslint-disable no-nested-ternary */
import styled from "styled-components";

const styleParagraph = (small, large, huge, size, lh, margin, inc) => `
  font-size: ${
    small ? size / 1.2 : large ? size * 1.2 : huge ? size * 1.618 : size
  }rem;
  margin-top: ${margin}rem;
  margin-bottom: ${margin * 3}rem;
  line-height: ${small ? lh + inc : large ? lh - inc : lh};
`;

const Paragraph = styled.p`
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

export default Paragraph;
