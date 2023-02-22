import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactComponent as LogoMedia } from "../../assets/logo.svg";
import colors from "../../theme/colors";

const StyledLogo = styled(motion.div)`
  align-self: center;
  color: ${colors.text.dark.high};
  font-weight: 600;
`;

function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
        <LogoMedia />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
