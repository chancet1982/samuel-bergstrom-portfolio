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

const StyledButton = styled(motion.button)`
  padding: ${padding.vertical.half} ${padding.horizontal.quadruple};
  background-color: ${({ secondary }) =>
    secondary ? "white" : colors.primary};
  color: ${({ secondary }) =>
    secondary ? colors.primary : colors.text.light.high};
  border: ${({ secondary }) =>
    secondary ? `solid 1px ${colors.primary}` : `solid 1px transparent`};
  ${shadows.short};
  border-radius: 0.25rem;
  ${({ fluidType }) => fluidType};
  transition: all 0.3s;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  padding: 1rem 1.5rem;

  &:hover {
    background-color: ${({ secondary }) =>
      secondary ? colors.primaryShade : colors.primaryHover};
    ${shadows.soft}
  }

  &:active {
    box-shadow: none;
  }

  > a {
    text-decoration: none !important;
  }
`;

function Button({
  onClick,
  children,
  secondary,
  small,
  large,
  xl,
  disabled,
  to,
}) {
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
      fluidType={fluidType}
      disabled={disabled}
      secondary={secondary}
      onClick={to ? () => navigate(to) : onClick}
      variants={formElementsVariants}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xl: PropTypes.bool,
  to: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  children: "Submit",
  secondary: false,
  disabled: false,
  small: false,
  large: false,
  xl: false,
  to: null,
};

export default Button;
