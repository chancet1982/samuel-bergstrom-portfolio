/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import padding from "../../theme/padding";
import colors from "../../theme/colors";
import shadows from "../../theme/shadows";
import breakpoints from "../../theme/breakpoints";
import useFluidTypography from "../../utils/useBodyFluidTypography";

const StyledButton = styled.button`
  padding: ${padding.vertical.half} ${padding.horizontal.quadruple};
  background-color: ${({ secondary }) =>
    secondary ? "white" : colors.primary};
  color: ${({ secondary }) =>
    secondary ? colors.primary : colors.text.light.high};
  border: ${({ secondary }) =>
    secondary ? `solid 1px ${colors.primary}` : `solid 1px transparent`};
  ${shadows.short};
  border-radius: ${padding.vertical.single};
  ${({ fluidType }) => fluidType};
  transition: all 0.3s;
  cursor: pointer;
  text-transform: uppercase;

  @media (min-width: ${breakpoints.tablet}px) {
    padding: ${padding.vertical.half} ${padding.horizontal.double};
  }

  @media (min-width: ${breakpoints.desktop}px) {
    padding: ${padding.vertical.half} ${padding.horizontal.single};
  }

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

const Button = ({
  onClick,
  children,
  secondary,
  small,
  large,
  huge,
  disabled,
  to,
}) => {
  const mapSizeToNumber = () => {
    if (small) return 1;
    if (large) return 3;
    if (huge) return 4;
    return 2;
  };

  const fluidType = useFluidTypography(mapSizeToNumber());
  const history = useHistory();

  return (
    <StyledButton
      fluidType={fluidType}
      disabled={disabled}
      secondary={secondary}
      onClick={to ? () => history.push(to) : onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  huge: PropTypes.bool,
  to: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  children: "Submit",
  secondary: false,
  disabled: false,
  small: false,
  large: false,
  huge: false,
  to: null,
};

export default Button;
