import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "../../theme/colors";
import Circle from "./Circle";

const StyledScreenTransition = styled(motion.div)`
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  z-index: 1;
`;

const ShortScreenTransition = ({ animationFinished }) => {
  const screenTransitionVariants = {
    viewInitial: {
      opacity: 1,
    },
    viewAnimate: {
      opacity: 1,
      transition: {
        duration: 1.96,
      },
    },
    viewExit: {
      opacity: 0,
    },
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
      <Circle bgColor={colors.primaryShade} />
    </StyledScreenTransition>
  );
};

ShortScreenTransition.propTypes = {
  animationFinished: PropTypes.func.isRequired,
};

export default ShortScreenTransition;
