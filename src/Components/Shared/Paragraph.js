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
  color: ${({ $light }) =>
    $light ? colors.text.light.medium : colors.text.dark.medium};
  max-width: 80ch;
  ${({ $fluidType }) => $fluidType};
  font-family: ${typography.bodyFont};

  strong {
    color: ${({ $light }) =>
      $light ? colors.text.light.high : colors.text.dark.high};
  }
`;

function Paragraph({ small, large, xl, xxl, children }) {
  const light = useBgColor();

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
      $fluidType={fluidType}
      variants={textVariants}
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
};

Paragraph.defaultProps = {
  small: false,
  large: false,
  xl: false,
  xxl: false,
};

export default Paragraph;
