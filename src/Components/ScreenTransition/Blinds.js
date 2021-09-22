import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import colors from "../../theme/colors";

const StyledBlinds = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
`;

const StyledBlind = styled(motion.div)`
  background-color: ${({ bgColor }) => bgColor || colors.offwhite};
`;

const Blinds = ({ up, bgColor }) => {
  const blindsVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const blindDown = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: ["-100%", "0%", "0%", "101%"],
      transition: {
        duration: 2,
        times: [0, 0.1, 0.9, 1],
        easing: "anticipate",
      },
    },
  };

  const blindUp = {
    initial: {
      y: "100%",
    },
    animate: {
      y: ["100%", "0%", "0%", "-101%"],
      transition: {
        duration: 1.2,
        times: [0, 0.1, 0.9, 1],
        easing: "anticipate",
      },
    },
  };

  return (
    <StyledBlinds initial="initial" animate="animate" variants={blindsVariants}>
      <StyledBlind variants={up ? blindUp : blindDown} bgColor={bgColor} />
      <StyledBlind variants={up ? blindUp : blindDown} bgColor={bgColor} />
      <StyledBlind variants={up ? blindUp : blindDown} bgColor={bgColor} />
    </StyledBlinds>
  );
};

Blinds.propTypes = {
  up: PropTypes.bool,
  bgColor: PropTypes.string,
};

Blinds.defaultProps = {
  up: false,
  bgColor: null,
};

export default Blinds;
