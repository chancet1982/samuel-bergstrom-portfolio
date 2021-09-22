import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import LongScreenTransition from "./ScreenTransition/LongScreenTransition";
import ShortScreenTransition from "./ScreenTransition/ShortScreenTransition";
import padding from "../theme/padding";
import { ViewColorContext } from "../Context/ViewColorContext";
import colors from "../theme/colors";

const StyledView = styled(motion.main)`
  ${({ isPadded }) =>
    isPadded && {
      paddingTop: padding.vertical.quadruple,
    }}
`;

const View = ({ children, isPadded, transition, bgColor }) => {
  const [, setLight] = useContext(ViewColorContext);
  const [screenTransition, setScreenTransition] = useState(transition);
  const isShort = sessionStorage.getItem("isShortLS");

  useEffect(() => {
    setLight(bgColor !== null && bgColor !== colors.offwhite);
  }, [setLight, bgColor]);

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
      isPadded={isPadded}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      bgColor={bgColor}
    >
      {children}
    </StyledView>
  );
};

View.propTypes = {
  children: PropTypes.node,
  isPadded: PropTypes.bool,
  bgColor: PropTypes.string,
  transition: PropTypes.bool,
};

View.defaultProps = {
  children: null,
  isPadded: false,
  bgColor: null,
  transition: true,
};

export default View;
