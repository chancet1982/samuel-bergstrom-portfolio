import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Span from "./Span";
import shadows from "../../theme/shadows";
import colors from "../../theme/colors";
import padding from "../../theme/padding";

const StyledBadge = styled(motion.div)`
  width: 250px;
  top: 48px;
  text-align: center;
  right: -56px;
  padding: 0.5rem 0;
  position: absolute;
  transform: rotate(45deg);
  padding: ${padding.insideElements.half} 0;

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }}

  ${shadows.soft}
`;

function Badge({ children, bgColor }) {
  return (
    <StyledBadge $bgColor={bgColor}>
      <Span highContrast isLight small>
        <strong>{children}</strong>
      </Span>
    </StyledBadge>
  );
}

Badge.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
};

Badge.defaultProps = {
  children: null,
  bgColor: colors.primary,
};

export default Badge;
