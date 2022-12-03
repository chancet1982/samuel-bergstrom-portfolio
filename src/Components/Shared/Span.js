/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import useBgColor from "../../utils/useBgColor";
import useFluidTypography from "../../utils/useBodyFluidTypography";
import colors from "../../theme/colors";
import typography from "../../theme/typography";
import { textVariants } from "../../animations/animations";

const StyledSpan = styled(motion.span)`
  color: ${({ $light, $highContrast }) =>
    $light
      ? $highContrast
        ? colors.text.light.high
        : colors.text.light.medium
      : $highContrast
      ? colors.text.dark.high
      : colors.text.dark.medium};

  ${({ $fluidType }) => $fluidType};
  font-family: ${typography.bodyFont};

  strong {
    color: ${({ $light }) =>
      $light ? colors.text.light.high : colors.text.dark.high};
  }
`;

function Span({
  small,
  large,
  xl,
  xxl,
  children,
  highContrast,
  isLight,
  style,
}) {
  const light = useBgColor() || isLight;

  const mapSizeToNumber = () => {
    if (small) return 1;
    if (large) return 3;
    if (xl) return 4;
    if (xxl) return 8;
    return 2;
  };

  const fluidType = useFluidTypography(mapSizeToNumber(), false);

  return (
    <StyledSpan
      $light={light}
      $fluidType={fluidType}
      $highContrast={highContrast}
      variants={textVariants}
      style={style}
    >
      {children}
    </StyledSpan>
  );
}

Span.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  children: PropTypes.node.isRequired,
  highContrast: PropTypes.bool,
  isLight: PropTypes.bool,
  style: PropTypes.string,
};

Span.defaultProps = {
  small: false,
  large: false,
  xl: false,
  xxl: false,
  highContrast: false,
  isLight: false,
  style: null,
};

export default Span;
