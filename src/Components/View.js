/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import LongScreenTransition from "./ScreenTransitions/LongScreenTransition";
import ShortScreenTransition from "./ScreenTransitions/ShortScreenTransition";
import padding from "../theme/padding";
import { ViewColorContext } from "../Context/ViewColorContext";
import colors from "../theme/colors";

const StyledView = styled(motion.main)`
  ${({ $isPadded }) =>
    $isPadded && {
      paddingTop: padding.vertical.quadruple,
    }}
`;

function View({ children, isPadded, transition, bgColor }) {
  const [, setLight] = useContext(ViewColorContext);
  const [screenTransition, setScreenTransition] = useState(transition);
  const isShort = sessionStorage.getItem("isShortLS");

  useEffect(() => {
    setLight(
      bgColor !== null &&
        bgColor !== colors.offwhite &&
        bgColor !== colors.primaryShade
    );
  }, [setLight, bgColor]);

  const removeTransition = () => {
    setScreenTransition(false);
  };

  const switchToShortScreenTransition = () => {
    sessionStorage.setItem("isShortLS", true);
    removeTransition();
  };

  const variants = {
    viewInitial: { opacity: 0 },
    viewAnimate: { opacity: 1 },
    viewExit: { opacity: 0 },
  };

  return screenTransition ? (
    isShort ? (
      <ShortScreenTransition animationFinished={() => removeTransition()} />
    ) : (
      <LongScreenTransition
        animationFinished={() => switchToShortScreenTransition()}
      />
    )
  ) : (
    <StyledView
      $isPadded={isPadded}
      initial="viewInitial"
      animate="viewAnimate"
      exit="viewExit"
      variants={variants}
      bgColor={bgColor}
    >
      {children}
    </StyledView>
  );
}

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
