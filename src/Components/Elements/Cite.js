import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import useBgColor from "../../utils/useBgColor";
import Span from "./Span";

const styleCite = (size, lh, margin) => `
  font-size: ${size}rem;
  margin-top: ${margin}rem;
  margin-bottom: ${margin * 3}rem;
  line-height: ${lh};
`;

const StyledCite = styled.cite`
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

const Cite = ({ children }) => {
  const light = useBgColor();

  return (
    <StyledCite light={light}>
      <Span small>{children}</Span>
    </StyledCite>
  );
};

Cite.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cite;
