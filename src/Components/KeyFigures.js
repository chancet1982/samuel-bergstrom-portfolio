import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import colors from "../theme/colors";
import Title from "./Elements/Title";
import Paragraph from "./Elements/Paragraph";

const StyledKeyFigures = styled(motion.div)`
  padding: 4rem 4vw;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledKeyFigure = styled(motion.div)`
  align-items: center;
  justify-content: center;
  width: 20%;
  display: flex;
  flex-direction: column;
`;

const StyledCircle = styled(motion.div)`
  border-radius: 50%;
  height: 10ch;
  width: 10ch;
  background-color: ${colors.offwhite};
  padding: 5ch;

  > h3 {
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const KeyFigures = ({ items }) => {
  const keyFiguresVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const keyFigureVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        times: [0, 0.1, 0.9, 1],
        easing: "anticipate",
      },
    },
  };

  return (
    <StyledKeyFigures
      initial="initial"
      animate="animate"
      variants={keyFiguresVariants}
    >
      {items.map(({ value, description }) => (
        <StyledKeyFigure variants={keyFigureVariants} key={uuid()}>
          <StyledCircle>
            <Title h={3}>{value}</Title>
          </StyledCircle>
          <Paragraph>{description}</Paragraph>
        </StyledKeyFigure>
      ))}
    </StyledKeyFigures>
  );
};

KeyFigures.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default KeyFigures;
