// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import { useScroll, useTransform } from "framer-motion";

const useCoverParallax = ({ amount }) => {
  const { scrollY } = useScroll();
  const { height } = useWindowSize();
  const coverHeight = (height / 100) * 92;
  const scrollYrange = [0, coverHeight];
  const yImageRange = [0, -coverHeight * amount];

  const parallax = useTransform(scrollY, scrollYrange, yImageRange);

  /* const smoothParallax = useSpring(parallax, {
    stiffness: 400,
    damping: 10,
  }); */

  return parallax;
};

useCoverParallax.propTypes = {
  amount: PropTypes.number,
};

useCoverParallax.defaultProps = {
  amount: 1, // 1 - normal scroll speed, 2 - faster scrolling, < 1 further away objects
};

export default useCoverParallax;
