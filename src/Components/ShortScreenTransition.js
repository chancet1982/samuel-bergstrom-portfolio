import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "../theme/colors";
import Blinds from "./Blinds";

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
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 4,
        staggerChildren: 0.2,
      },
    },
  };

  const onComplete = () => {
    animationFinished();
  };

  return (
    <StyledScreenTransition
      initial="initial"
      animate="animate"
      variants={screenTransitionVariants}
      onAnimationComplete={onComplete}
    >
      <Blinds up bgColor={colors.primary} />
    </StyledScreenTransition>
  );
};

ShortScreenTransition.propTypes = {
  animationFinished: PropTypes.func.isRequired,
};

export default ShortScreenTransition;
