import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import colors from "../../theme/colors";

const StyledBlinds = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${({ amountOfBlinds }) => amountOfBlinds}, 1fr);
  overflow: hidden;
`;

const StyledBlind = styled(motion.div)`
  background-color: ${({ bgColor }) => bgColor || colors.offwhite};
`;

function Blinds({ up, bgColor, amountOfBlinds, delayPerBlind }) {
  const blindsVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: delayPerBlind,
      },
    },
  };

  const blindDown = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: ["-100%", "0%", "0%", "101%"],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 1.2 + delayPerBlind * amountOfBlinds,
        times: [0, 0.2, 0.8, 1],
        easing: "anticipate",
      },
    },
  };

  const blindUp = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: ["100%", "0%", "0%", "-101%"],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 0.9 + delayPerBlind * amountOfBlinds,
        times: [0, 0.2, 0.8, 1],
        easing: "anticipate",
      },
    },
  };

  return (
    <StyledBlinds
      initial="initial"
      animate="animate"
      variants={blindsVariants}
      amountOfBlinds={amountOfBlinds}
    >
      {Array.from({ length: amountOfBlinds }, () => (
        <StyledBlind
          variants={up ? blindUp : blindDown}
          bgColor={bgColor}
          key={uuid()}
        />
      ))}
    </StyledBlinds>
  );
}

Blinds.propTypes = {
  up: PropTypes.bool,
  bgColor: PropTypes.string,
  amountOfBlinds: PropTypes.number,
  delayPerBlind: PropTypes.number,
};

Blinds.defaultProps = {
  up: false,
  bgColor: null,
  amountOfBlinds: 3,
  delayPerBlind: 0.2,
};

export default Blinds;
