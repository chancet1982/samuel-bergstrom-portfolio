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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 3;
`;

const StyledBlind = styled(motion.div)`
  background-color: ${({ $bgColor }) => $bgColor || colors.offwhite};
  height: ${({ $amountOfBlinds }) =>
    `calc(100vh / ${$amountOfBlinds} - (${$amountOfBlinds} - 1) / ${$amountOfBlinds} * 1vh)`};
  ${({ $amountOfBlinds }) =>
    $amountOfBlinds > 1 && {
      marginBottom: "1vh",
    }};
`;

function Blinds({ right, bgColor, amountOfBlinds, delayPerBlind }) {
  const blindsVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: delayPerBlind,
      },
    },
  };

  const AnimateFromLeft = {
    initial: {
      x: "-100%",
      scaleX: "50%",
    },
    animate: {
      x: ["-100%", "0%", "0%", "101%"],
      scaleX: ["50%", "100%", "100%", "0%"],
      transition: {
        duration: 1.2 + delayPerBlind * amountOfBlinds,
        times: [0, 0.2, 0.8, 1],
        easing: "anticipate",
      },
    },
  };

  const AnimateFromRight = {
    initial: {
      x: "100%",
      scaleX: "50%",
    },
    animate: {
      x: ["100%", "0%", "0%", "-101%"],
      scaleX: ["50%", "100%", "100%", "0%"],
      transition: {
        duration: 1.2 + delayPerBlind * amountOfBlinds,
        times: [0, 0.2, 0.8, 1],
        easing: "anticipate",
      },
    },
  };

  return (
    <StyledBlinds initial="initial" animate="animate" variants={blindsVariants}>
      {Array.from({ length: amountOfBlinds }, () => (
        <StyledBlind
          variants={right ? AnimateFromRight : AnimateFromLeft}
          $bgColor={bgColor}
          key={uuid()}
          $amountOfBlinds={amountOfBlinds}
        />
      ))}
    </StyledBlinds>
  );
}

Blinds.propTypes = {
  right: PropTypes.bool,
  bgColor: PropTypes.string,
  amountOfBlinds: PropTypes.number,
  delayPerBlind: PropTypes.number,
};

Blinds.defaultProps = {
  right: false,
  bgColor: null,
  amountOfBlinds: 3,
  delayPerBlind: 0.2,
};

export default Blinds;
