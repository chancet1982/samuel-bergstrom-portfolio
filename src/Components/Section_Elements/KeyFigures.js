import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";
import KeyFigure from "./KeyFigures/KeyFigure";

const StyledKeyFigures = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
  padding-top: ${padding.outsideElements.double};
  padding-bottom: ${padding.outsideElements.double};
  box-sizing: border-box;

  @media (width > ${breakpoints.mobileLarge}px) {
    grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

function KeyFigures({ items }) {
  return (
    <StyledKeyFigures
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      $columns={items.length}
    >
      {items.map(({ value, label, bgColor }) => (
        <KeyFigure key={label} value={value} label={label} bgColor={bgColor} />
      ))}
    </StyledKeyFigures>
  );
}

KeyFigures.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      bgColor: PropTypes.string,
    })
  ).isRequired,
};

KeyFigures.defaultProps = {};

export default KeyFigures;
