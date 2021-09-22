import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import breakpoints from "../../theme/breakpoints";
import KeyFigure from "../Elements/KeyFigure";

const StyledKeyFigures = styled(motion.div)`
  padding: 4rem 4vw;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${breakpoints.mobile_lg}px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const KeyFigures = ({ items }) => {
  return (
    <StyledKeyFigures>
      {items.map(({ value, description }) => (
        <KeyFigure value={value} description={description} key={uuid()} />
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
