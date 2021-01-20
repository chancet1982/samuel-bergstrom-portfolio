/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import padding from "../../theme/padding";
import colors from "../../theme/colors";
import shadows from "../../theme/shadows";
import typography from "../../theme/typography";

const { size } = typography;

const StyledButton = styled.button`
  padding: ${padding.vertical.half} ${padding.horizontal.quadruple};
  background-color: ${({ secondaryDark, secondaryLight }) =>
    secondaryDark
      ? colors.darkgray
      : secondaryLight
      ? colors.offwhite
      : colors.primary};
  color: ${({ secondaryDark, secondaryLight }) =>
    secondaryDark
      ? colors.text.light.high
      : secondaryLight
      ? colors.text.dark.high
      : colors.text.dark.high};
  border: none;
  ${shadows.short};
  border-radius: ${padding.vertical.single};
  font-family: "Fira Sans", sans-serif;
  font-size: ${({ small, large, huge }) =>
    small ? size / 1.2 : large ? size * 1.2 : huge ? size * 1.618 : size}rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ secondaryDark, secondaryLight }) =>
      secondaryDark
        ? colors.darkgrayHover
        : secondaryLight
        ? colors.offwhiteHover
        : colors.primaryHover};
    ${shadows.soft}
  }

  &:active {
    box-shadow: none;
  }
`;

const Button = ({
  onClick,
  children,
  secondaryDark,
  secondaryLight,
  small,
  large,
  huge,
  disabled,
}) => {
  // const [loading, setLoading] = useState(false);

  return (
    <StyledButton
      secondaryDark={secondaryDark}
      secondaryLight={secondaryLight}
      onClick={onClick}
      small={small}
      large={large}
      huge={huge}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  secondaryDark: PropTypes.bool,
  secondaryLight: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  huge: PropTypes.bool,
};

Button.defaultProps = {
  onClick: null,
  children: "Submit",
  secondaryDark: false,
  secondaryLight: false,
  disabled: false,
  small: false,
  large: false,
  huge: false,
};

export default Button;
