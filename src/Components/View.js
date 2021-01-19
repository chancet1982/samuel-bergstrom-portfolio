import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import LongScreenTransition from "./LongScreenTransition";
import ShortScreenTransition from "./ShortScreenTransition";
import padding from "../theme/padding";

const StyledView = styled(motion.main)`
  ${({ padded }) =>
    padded && {
      paddingTop: padding.vertical.quadruple,
    }}
`;

// TODO: fix fade out on exit and use animate presence.
const View = ({ children, padded, transition }) => {
  const [screenTransition, setScreenTransition] = useState(transition);
  const isShort = sessionStorage.getItem("isShortLS");

  const removeTransition = () => {
    setScreenTransition(false);
  };

  const switchToShortScreenTransition = () => {
    sessionStorage.setItem("isShortLS", true);
    removeTransition();
  };

  const ScreenTransition = () => {
    return isShort ? (
      <ShortScreenTransition animationFinished={() => removeTransition()} />
    ) : (
      <LongScreenTransition
        animationFinished={() => switchToShortScreenTransition()}
      />
    );
  };

  const variants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return screenTransition ? (
    <ScreenTransition />
  ) : (
    <StyledView
      padded={padded}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </StyledView>
  );
};

View.propTypes = {
  children: PropTypes.node,
  padded: PropTypes.bool,
  transition: PropTypes.bool,
};

View.defaultProps = {
  children: null,
  padded: false,
  transition: true,
};

export default View;
