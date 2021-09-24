import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import useBgColor from "../../utils/useBgColor";
import Span from "./Span";
import colors from "../../theme/colors";

/* TODO: check if this style is redaundant (one day) */

const StyledCite = styled.cite`
  display: block;

  :before {
    display: inline-block;
    content: "-";
    width: 1rem;
    margin-left: -1rem;
    color: ${({ light }) => (light ? colors.text.light.high : colors.primary)};
  }
`;

const Cite = ({ children }) => {
  const light = useBgColor();

  return (
    <StyledCite light={light}>
      <Span small light={light}>
        {children}
      </Span>
    </StyledCite>
  );
};

Cite.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cite;
