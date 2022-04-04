import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import colors from "../../theme/colors";

const StyledCircleWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCircle = styled(motion.div)`
  background-color: ${({ bgColor }) => bgColor || colors.primary};
  width: 200vh;
  height: 200vh;
  border-radius: 100%;
  -webkit-mask: radial-gradient(farthest-side, #fff 98%, transparent 100%)
      center/50px 50px no-repeat,
    linear-gradient(#fff, #fff);
  -webkit-mask-composite: destination-out;

  mask: radial-gradient(farthest-side, #fff 98%, transparent 100%) center/50px
      50px no-repeat,
    linear-gradient(#fff, #fff);
  mask-composite: exclude;

  animation: whatever ease-in-out normal forwards 2s;

  @keyframes whatever {
    0% {
      opacity: 0;
      transform: scale(0);
      mask-size: 0vh 0vh, auto;
    }
    10% {
      opacity: 1;
      transform: scale(1);
      mask-size: 0vh 0vh, auto;
    }
    15% {
      opacity: 1;
      transform: scale(2);
      mask-size: 0vh 0vh, auto;
    }
    70% {
      opacity: 1;
      transform: scale(2);
      mask-size: 0vh 0vh, auto;
    }
    90% {
      opacity: 1;
      transform: scale(2);
      mask-size: 200vh 200vh, auto;
    }
    100% {
      opacity: 0;
      transform: scale(2);
      mask-size: 200vh 200vh, auto;
    }
  }
`;

const Blinds = ({ bgColor }) => {
  /* const circleGrow = {
    initial: {
      opacity: 0,
      scale: 0,
      maskSize: 0,
    },
    animate: {
      opacity: [0, 1, 1, 0],
      scale: [0, 2, 2, 2],
      transition: {
        times: [0, 0.3, 0.9, 1],
        easing: "anticipate",
      },
    },
  }; */

  return (
    <StyledCircleWrapper>
      <StyledCircle bgColor={bgColor} />
    </StyledCircleWrapper>
  );
};

Blinds.propTypes = {
  bgColor: PropTypes.string,
};

Blinds.defaultProps = {
  bgColor: null,
};

export default Blinds;
