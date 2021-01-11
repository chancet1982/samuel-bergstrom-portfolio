import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AppContext } from "../Context/AppContext";
import Title from "./Elements/Title";
import padding from "../theme/padding";
import breakpoints from "../theme/breakpoints";

const StyledCardFace = styled(motion.div)`
  background: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
  height: 100%;
  width: 100%;
`;

const StyledScreenTransitionContent = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.double};

  @media (min-width: ${breakpoints.tablet}px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledScreenTransition = styled(motion.div)`
  background: ${({ bgColor, theme: { colors } }) => bgColor || colors.darkgray};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  z-index: 1;
`;

//TODO: hide scrollbar while animating.
//TODO: scroll to page top while animating
//TODO: remove screen transition between page and home screen (perhaps just a short transition in case no text is being sent?)
//TODO: longer transition first time anyone uses the site (perhaps saving with a flag not to show again for the same session)
const ScreenTransition = ({ animationFinished }) => {
  const [content] = useContext(AppContext);

  const screenTransitionContentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0, 1, 1, 0],
      y: ["0%", "0%", "0%", "0%", "-100%"],
      transition: {
        duration: 6,
        times: [0, 0.2, 0.3, 0.9, 0.95],
        easing: "anticipate",
      },
    },
  };

  const screenTransitionVariants = {
    initial: { scale: 0 },
    animate: {
      scale: [0, 1, 1, 1],
      y: ["0%", "0%", "0%", "-100%"],
      transition: {
        duration: 6,
        times: [0, 0.05, 0.95, 1],
        easing: "anticipate",
        staggerChildren: 0.2,
        delayChildren: 3,
      },
    },
  };

  const variants = {
    initial: { y: "0%" },
    animate: { y: "-100%" },
  };

  const transition = {
    duration: 0.6,
  };

  const onComplete = () => {
    animationFinished();
  };

  return (
    <>
      <StyledScreenTransitionContent
        initial="initial"
        animate="animate"
        variants={screenTransitionContentVariants}
        onAnimationComplete={onComplete}
      >
        <Title h={1} light>
          {content}
        </Title>
      </StyledScreenTransitionContent>
      <StyledScreenTransition
        initial="initial"
        animate="animate"
        variants={screenTransitionVariants}
      >
        <StyledCardFace variants={variants} transition={transition} />
        <StyledCardFace variants={variants} transition={transition} />
        <StyledCardFace variants={variants} transition={transition} />
      </StyledScreenTransition>
    </>
  );
};

ScreenTransition.propTypes = {
  animationFinished: PropTypes.func.isRequired,
};

export default ScreenTransition;
