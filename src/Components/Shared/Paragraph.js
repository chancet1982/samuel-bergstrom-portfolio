/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useBgColor from "../../utils/useBgColor";
import useFluidTypography from "../../utils/useBodyFluidTypography";
import colors from "../../theme/colors";
import typography from "../../theme/typography";
import { textVariants } from "../../animations/animations";

const StyledParagraph = styled(motion.p)`
  color: ${({ $light, $highContrast }) =>
    $light
      ? $highContrast
        ? colors.text.light.high
        : colors.text.light.medium
      : $highContrast
      ? colors.text.dark.high
      : colors.text.dark.medium};

  max-width: 80ch;
  ${({ $fluidType }) => $fluidType};
  font-family: ${typography.bodyFont};

  strong {
    color: ${({ $light }) =>
      $light ? colors.text.light.high : colors.text.dark.high};
  }
`;

function Paragraph({
  small,
  large,
  xl,
  xxl,
  children,
  highContrast,
  isLight,
  ...rest
}) {
  const light = useBgColor() || isLight;

  const mapSizeToNumber = () => {
    if (small) return 1;
    if (large) return 3;
    if (xl) return 4;
    if (xxl) return 6;
    return 2;
  };

  const fluidType = useFluidTypography(mapSizeToNumber());

  return (
    <StyledParagraph
      $light={light}
      $highContrast={highContrast}
      $fluidType={fluidType}
      variants={textVariants}
      {...rest}
    >
      {children}
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  children: PropTypes.node.isRequired,
  highContrast: PropTypes.bool,
  isLight: PropTypes.bool,
};

Paragraph.defaultProps = {
  small: false,
  large: false,
  xl: false,
  xxl: false,
  highContrast: false,
  isLight: false,
};

export default Paragraph;
