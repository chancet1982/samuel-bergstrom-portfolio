/* eslint-disable no-nested-ternary */
import styled from "styled-components";

const styleSpan = (small, large, huge, size, lh, inc) => `
  font-size: ${
    small ? size / 1.2 : large ? size * 1.2 : huge ? size * 1.618 : size
  }rem;
  line-height: ${small ? lh + inc : large ? lh - inc : lh};
`;

const Span = styled.span`
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

export default Span;
