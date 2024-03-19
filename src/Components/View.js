/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion, useIsPresent } from "framer-motion";
import { useWindowSize } from "react-use";
import { ViewColorContext } from "../Context/ViewColorContext";
import colors from "../theme/colors";
import CustomCursor from "./CustomCursor";
import breakpoints from "../theme/breakpoints";
import SplashScreen from "./SplashScreen";
import { SplashAnimationFinishedContext } from "../Context/SplashAnimationFinishedContext";
import Footer from "./Footer";
import SectionColorContextProvider from "../Context/SectionColorContext";

const StyledView = styled(motion.main)`
  z-index: 1;
  position: relative;
  background-color: ${colors.white};

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }}
`;

const StyledRollUp = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.offblack};
  z-index: 2;
`;

function View({ children, bgColor }) {
  const isPresent = useIsPresent();
  const [, setViewBgColor] = useContext(ViewColorContext);

  useEffect(() => {
    setViewBgColor(bgColor);
  }, [setViewBgColor, bgColor]);

  const { width } = useWindowSize();
  const isDesktop = width >= breakpoints.desktop;

  const [animationFinished] = useContext(SplashAnimationFinishedContext);

  return !animationFinished ? (
    <SplashScreen />
  ) : (
    <>
      <StyledView
        id="main"
        $bgColor={bgColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {isDesktop && <CustomCursor />}
        {children}
      </StyledView>
      <StyledRollUp
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.6, ease: "circOut" } }}
        exit={{ scaleY: 1, transition: { duration: 0.6, ease: "circIn" } }}
        style={{ originY: isPresent ? 0 : 1 }}
      />
      <SectionColorContextProvider>
        <Footer />
      </SectionColorContextProvider>
    </>
  );
}

View.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
};

View.defaultProps = {
  children: null,
  bgColor: null,
};

export default View;
