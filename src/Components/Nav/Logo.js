import React from "react";
// import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import padding from "../../theme/padding";
import { ReactComponent as LogoMedia } from "../../assets/logo.svg";
import colors from "../../theme/colors";
// import { MenuExpandedContext } from "../../Context/MenuExpandedContext";

const StyledLogo = styled(motion.div)`
  align-self: center;
  color: ${colors.text.dark.high};
  font-weight: 600;
  padding-right: ${padding.horizontal.half};
`;

function Logo() {
  // const [, setExpanded] = useContext(MenuExpandedContext);

  return (
    <StyledLogo>
      <Link to="/" /* onClick={setExpanded(false)} */>
        <LogoMedia />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
