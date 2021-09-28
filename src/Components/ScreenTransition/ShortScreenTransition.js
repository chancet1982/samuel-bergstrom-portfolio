import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import colors from "../../theme/colors";
import Blinds from "./Blinds";
import breakpoints from "../../theme/breakpoints";

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
  const { width } = useWindowSize();
  const isMobile = width < breakpoints.desktop;

  const amountOfBlinds = isMobile ? 1 : 3;
  const delayPerBlind = 0.2;

  const screenTransitionVariants = {
    viewInitial: {
      opacity: 1,
    },
    viewAnimate: {
      opacity: 1,
      transition: {
        duration: 1.4 + delayPerBlind * amountOfBlinds,
        staggerChildren: delayPerBlind,
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
      <Blinds
        up
        bgColor={colors.primaryShade}
        amountOfBlinds={amountOfBlinds}
        delayPerBlind={delayPerBlind}
      />
    </StyledScreenTransition>
  );
};

ShortScreenTransition.propTypes = {
  animationFinished: PropTypes.func.isRequired,
};

export default ShortScreenTransition;
