import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "../../theme/colors";
import Blinds from "./Blinds";
import padding from "../../theme/padding";
import Title from "../Shared/Title";

const StyledScreenTransition = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  z-index: 3;
`;

const TransitionText = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 4;
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};

  > h1 {
    text-align: center;
    color: ${colors.primary} !important;
    mix-blend-mode: difference;
  }
`;

function ScreenTransition({ animationFinished, children }) {
  const screenTransitionVariants = {
    viewInitial: {
      opacity: 1,
    },
    viewAnimate: {
      opacity: 1,
      transition: {
        duration: children ? 4 : 2.4,
      },
    },
    viewExit: {
      opacity: 1,
    },
  };

  const screenTransitionContentVariants = {
    viewInitial: { opacity: 0 },
    viewAnimate: {
      opacity: [0, 1, 1, 0],
      transition: {
        duration: children ? 4 : 2.4,
        times: [0.24, 0.32, 0.56, 0.72],
        easing: "anticipate",
      },
    },
    viewExit: { opacity: 0 },
  };

  const onComplete = () => {
    animationFinished();
  };

  return (
    <StyledScreenTransition
      initial="viewInitial"
      animate="viewAnimate"
      exit="viewExit"
      variants={screenTransitionVariants}
      onAnimationComplete={onComplete}
    >
      <Blinds bgColor={colors.offblack} />
      {children && (
        <TransitionText
          variants={screenTransitionContentVariants}
          onAnimationComplete={onComplete}
        >
          <Title h={1}>{children}</Title>
        </TransitionText>
      )}
    </StyledScreenTransition>
  );
}

ScreenTransition.propTypes = {
  animationFinished: PropTypes.func.isRequired,
  children: PropTypes.node,
};

ScreenTransition.defaultProps = {
  children: null,
};

export default ScreenTransition;
