/* eslint-disable no-nested-ternary */
import styled from "styled-components";

const styleCite = (size, lh, margin) => `
  font-size: ${size}rem;
  margin-top: ${margin}rem;
  margin-bottom: ${margin * 3}rem;
  line-height: ${lh};
`;

const Cite = styled.cite`
  color: ${({
    light,
    theme: {
      colors: { text },
    },
  }) => (light ? text.light.medium : text.dark.medium)};

  ${({
    theme: {
      typography: { size, lh, margin },
    },
  }) => styleCite(size, lh, margin)}

  display: block;
  /*margin-top: 0.5rem;*/

  :before {
    display: inline-block;
    content: "-";
    width: 1rem;
    margin-left: -1rem;
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  }
`;

export default Cite;
