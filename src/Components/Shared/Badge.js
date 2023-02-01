import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Span from "./Span";
import shadows from "../../theme/shadows";
import colors from "../../theme/colors";

const StyledBadge = styled(motion.div)`
  position: absolute;
  top: -40px;
  right: -96px;
  transform: rotate(45deg);
  transform-origin: 0;
  padding: 0.5rem 4rem;

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }}

  ${shadows.soft}
`;

function Badge({ children, bgColor }) {
  return (
    <StyledBadge $bgColor={bgColor}>
      <Span highContrast isLight>
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
