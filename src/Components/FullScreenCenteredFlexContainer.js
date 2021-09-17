import styled from "styled-components";
import { motion } from "framer-motion";
import padding from "../theme/padding";

const FullScreenCenteredFlexContainer = styled(motion.div)`
  display: flex;
  min-height: 100vh;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ bgColor }) => bgColor};
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  padding-top: ${padding.vertical.quadruple};
  padding-bottom: ${padding.vertical.quadruple};
`;

export default FullScreenCenteredFlexContainer;
