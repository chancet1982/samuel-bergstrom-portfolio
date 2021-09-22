/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import padding from "../../theme/padding";
import colors from "../../theme/colors";
import shadows from "../../theme/shadows";
import typography from "../../theme/typography";
import Span from "./Span";
import breakpoints from "../../theme/breakpoints";

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
  font-size: ${({ small, large, huge }) =>
    small ? size / 1.2 : large ? size * 1.2 : huge ? size * 1.618 : size}rem;
  transition: all 0.3s;
  cursor: pointer;

  @media (min-width: ${breakpoints.tablet}px) {
    padding: ${padding.vertical.half} ${padding.horizontal.double};
  }

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

  > a {
    text-decoration: none !important;
  }
`;

// TODO: fix button router "to"
const Button = ({
  onClick,
  children,
  secondaryDark,
  secondaryLight,
  small,
  large,
  huge,
  disabled,
  to,
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
      {to ? (
        <Link to={to}>
          <Span light={!secondaryLight} highContrast>
            {children}
          </Span>
        </Link>
      ) : (
        children
      )}
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
  to: PropTypes.string,
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
  to: null,
};

export default Button;
