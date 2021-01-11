import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledText = styled.div`
  color: ${({
    light,
    theme: {
      colors: { text },
    },
  }) => (light ? text.light.medium : text.dark.medium)};
`;

const Text = ({ children, light }) => {
  return <StyledText light={light}>{children}</StyledText>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
};

Text.defaultTypes = {
  light: false,
};

export default Text;
