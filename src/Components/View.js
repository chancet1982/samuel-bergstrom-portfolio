/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion, useIsPresent } from "framer-motion";
import padding from "../theme/padding";
import { ViewColorContext } from "../Context/ViewColorContext";
import colors from "../theme/colors";

const StyledView = styled(motion.main)`
  ${({ $isPadded }) =>
    $isPadded && {
      paddingTop: padding.vertical.quadruple,
    }}

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

/* TODO: Remove options for isPadded, add support for reverseTransition */
function View({ children, isPadded, bgColor }) {
  const isPresent = useIsPresent();
  const [, setLight] = useContext(ViewColorContext);

  useEffect(() => {
    setLight(
      bgColor !== null &&
        bgColor !== colors.offwhite &&
        bgColor !== colors.primaryShade
    );
  }, [setLight, bgColor]);

  const variants = {
    viewInitial: { opacity: 0 },
    viewAnimate: { opacity: 1 },
    viewExit: { opacity: 0 },
  };

  return (
    <>
      <StyledView
        $isPadded={isPadded}
        initial="viewInitial"
        animate="viewAnimate"
        exit="viewExit"
        variants={variants}
        $bgColor={bgColor}
      >
        {children}
      </StyledView>
      <StyledRollUp
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.6, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.6, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
      />
    </>
  );
}

View.propTypes = {
  children: PropTypes.node,
  isPadded: PropTypes.bool,
  bgColor: PropTypes.string,
};

View.defaultProps = {
  children: null,
  isPadded: false,
  bgColor: null,
};

export default View;
