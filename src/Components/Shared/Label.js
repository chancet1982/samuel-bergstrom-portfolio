/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Span from "./Span";

const StyledLabel = styled.label`
  display: block;
`;

function Label({ children, ...rest }) {
  return (
    <StyledLabel>
      <Span {...rest}>{children}</Span>
    </StyledLabel>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
