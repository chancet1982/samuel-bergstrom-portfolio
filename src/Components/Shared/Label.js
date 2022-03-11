import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Span from "./Span";

const StyledLabel = styled.label`
  display: block;
`;

const Label = ({ children }) => {
  return (
    <StyledLabel>
      <Span>{children}</Span>
    </StyledLabel>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
