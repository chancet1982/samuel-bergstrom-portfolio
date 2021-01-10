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

  /*ul {
    list-style-type: none;
    padding-inline-start: 0px;

    li:before {
      display: inline-block;
      content: "-";
      width: 1rem;
      margin-left: -1rem;
      color: ${({
    theme: { colors },
  }) => colors.primary};
    }
  }*/
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
