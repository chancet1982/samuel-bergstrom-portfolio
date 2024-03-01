/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import padding from "../../theme/padding";
import colors from "../../theme/colors";
import shadows from "../../theme/shadows";
import useFluidTypography from "../../utils/useBodyFluidTypography";
import { formElementsVariants } from "../../animations/animations";
import useBgColor from "../../utils/useBgColor";

const StyledButton = styled(motion.button)`
  padding: ${padding.insideElements.half} ${padding.insideElements.double};
  background-color: ${({ $secondary, $light }) =>
    $secondary ? "transparent" : $light ? colors.offwhite : colors.offblack};

  color: ${({ $secondary, $light }) =>
    $secondary
      ? $light
        ? colors.text.light.high
        : colors.text.dark.high
      : $light
      ? colors.text.dark.high
      : colors.text.light.high};

  border: ${({ $secondary, $light }) =>
    $secondary
      ? $light
        ? `solid 1px ${colors.offwhite}`
        : `solid 1px ${colors.offwhite}`
      : `solid 1px transparent`};

  ${shadows.short};
  border-radius: ${padding.insideElements.half};
  transition: all 0.3s;
  cursor: pointer;
  /*text-transform: uppercase;*/
  font-weight: 600;

  ${({ $fluidType }) => $fluidType};

  &:hover {
    background-color: ${({ $secondary }) =>
      $secondary ? "transparent" : colors.primaryHover};

    color: ${({ $secondary }) => $secondary && colors.primary};

    border: ${({ $secondary }) =>
      $secondary ? `solid 1px ${colors.primary}` : `solid 1px transparent`};
    ${shadows.soft}
  }

  &:active {
    box-shadow: none;
  }

  :disabled {
    opacity: 0.3;
    box-shadow: none !important;
  }

  > a {
    text-decoration: none !important;
  }
`;

function Button({
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
  secondary,
  small,
  large,
  xl,
  disabled,
  to,
  isLight,
}) {
  const light = useBgColor() || isLight;

  const mapSizeToNumber = () => {
    if (small) return 1;
    if (large) return 3;
    if (xl) return 4;
    return 2;
  };

  const fluidType = useFluidTypography(mapSizeToNumber());
  const navigate = useNavigate();

  return (
    <StyledButton
      $light={light}
      $fluidType={fluidType}
      disabled={disabled}
      $secondary={secondary}
      onClick={to ? () => navigate(to) : onClick ? () => onClick() : null}
      onMouseEnter={onMouseEnter ? () => onMouseEnter() : null}
      onMouseLeave={onMouseEnter ? () => onMouseLeave() : null}
      variants={formElementsVariants}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xl: PropTypes.bool,
  to: PropTypes.string,
  isLight: PropTypes.bool,
};

Button.defaultProps = {
  onClick: null,
  onMouseEnter: null,
  onMouseLeave: null,
  children: "Submit",
  secondary: false,
  disabled: false,
  small: false,
  large: false,
  xl: false,
  to: null,
  isLight: false,
};

export default Button;
