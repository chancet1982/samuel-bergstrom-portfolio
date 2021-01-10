import React from "react";
import PropTypes, { useState } from "prop-types";
import styled from "styled-components";
import padding from "../../theme/padding";
import colors from "../../theme/colors";
import shadows from "../../theme/shadows";

const StyledButton = styled.button`
  padding: ${padding.vertical.half} ${padding.horizontal.quadruple};
  background-color: ${({ dark, light }) =>
    dark ? colors.dark : light ? colors.light : colors.primary};
  color: ${({ dark, light }) =>
    dark
      ? colors.text.light.high
      : light
      ? colors.text.dark.high
      : colors.text.dark.high};
  border: none;
  box-shadow: ${shadows.short};
  border-radius: ${padding.vertical.single};
`;

const Button = ({ onClick, children, dark, light }) => {
  //const [loading, setLoading] = useState(false);

  return (
    <StyledButton dark={dark} light={light} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: null,
  children: "Submit",
  dark: false,
  light: false,
  disabled: false,
};

export default Button;
