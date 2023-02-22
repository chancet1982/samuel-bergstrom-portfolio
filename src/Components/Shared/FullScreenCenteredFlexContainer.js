import styled from "styled-components";
import { motion } from "framer-motion";
import padding from "../../theme/padding";

const FullScreenCenteredFlexContainer = styled(motion.div)`
  display: flex;
  min-height: 100vh;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ bgColor }) => bgColor};
  padding: ${padding.outsideElements.double};
`;

export default FullScreenCenteredFlexContainer;
