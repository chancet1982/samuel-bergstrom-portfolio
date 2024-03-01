import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";
import Span from "../Shared/Span";

const StyledFooter = styled(motion.footer)`
  padding: ${padding.outsideElements.double}
    ${padding.outsideElements.quadruple};
  margin: 0;
  text-align: center;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

function Footer() {
  return (
    <StyledFooter
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <Span small>2024, Samuel Bergström</Span>
    </StyledFooter>
  );
}

Footer.propTypes = {};

export default Footer;
