import styled from "styled-components";
import { motion } from "framer-motion";

const FullScreenCenteredFlexContainer = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ bgColor }) => bgColor};
`;

export default FullScreenCenteredFlexContainer;
