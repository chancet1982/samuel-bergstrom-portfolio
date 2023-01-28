import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import padding from "../../theme/padding";
import Span from "../Shared/Span";

const StyledFooter = styled(motion.footer)`
  padding: ${padding.vertical.double} ${padding.horizontal.quadruple};
  background-color: ${({ theme: { colors } }) => colors.offwhite};
  position: relative;

  p {
    color: ${({
      theme: {
        colors: { text },
      },
    }) => text.dark.disabled};
    margin: 0;
  }
`;
// TODO consider moving to section renderer
function SectionFooter() {
  return (
    <StyledFooter
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <Span small>2021, Samuel Bergström</Span>
    </StyledFooter>
  );
}

export default SectionFooter;
