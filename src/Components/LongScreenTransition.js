import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AppContext } from "../Context/AppContext";
import Title from "./Elements/Title";
import padding from "../theme/padding";
import { ViewColorContext } from "../Context/ViewColorContext";
import colors from "../theme/colors";

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
  max-height: 100vh;
  width: calc(100vw - 2 * ${padding.horizontal.quadruple});
  flex-grow: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};

  > h1 {
    text-align: center;
    color: ${colors.text.light.high} !important;
  }
`;

const StyledScreenTransition = styled(motion.div)`
  background: ${({ bgColor }) => bgColor || colors.darkgray};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  z-index: 1;
`;

// TODO: Change so text is always light during long screen transition.
// TODO: Improve screen transition so it is snazzier.
// TODO: Make screen transition take into account the URL?
const LongScreenTransition = ({ animationFinished }) => {
  const [content] = useContext(AppContext);
  const [, setLight] = useContext(ViewColorContext);

  useEffect(() => {
    setLight(true);
  }, [setLight]);

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
    <div style={{ height: "100vh" }}>
      <StyledScreenTransitionContent
        initial="initial"
        animate="animate"
        variants={screenTransitionContentVariants}
        onAnimationComplete={onComplete}
      >
        <Title h={1}>{content}</Title>
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
    </div>
  );
};

LongScreenTransition.propTypes = {
  animationFinished: PropTypes.func.isRequired,
};

export default LongScreenTransition;
