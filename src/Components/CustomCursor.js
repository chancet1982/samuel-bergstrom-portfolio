import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Span from "./Shared/Span";
import useMousePosition from "../utils/useMousePosition";
import { CursorContext } from "../Context/CursorContext";
import colors from "../theme/colors";

const StyledCursor = styled(motion.div)`
  position: fixed;
  z-index: 100;
  display: flex;
  flex-flow: row;
  align-content: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 10px;
  width: 10px;
  background-color: ${colors.primary};
  border-radius: 200px;
  pointer-events: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
`;

const StyledCursorText = styled(motion.span)`
  flex: auto;
  font-size: inherit;
  pointer-events: none;
  margin: auto;
`;

function CustomCursor() {
  const [cursorText, , cursorVariant] = useContext(CursorContext);

  const mouse = useMousePosition();

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.x;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.y;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: colors.offblack,
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      backgroundColor: colors.offwhite,
      color: colors.text.light.high,
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <StyledCursor
      variants={variants}
      className="circle"
      animate={cursorVariant}
      transition={spring}
    >
      <StyledCursorText>
        <Span strong>{cursorText}</Span>
      </StyledCursorText>
    </StyledCursor>
  );
}

export default CustomCursor;
