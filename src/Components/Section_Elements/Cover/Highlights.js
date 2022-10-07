import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import breakpoints from "../../../theme/breakpoints";
import KeyFigure2 from "../KeyFigures/KeyFigure2";
import sizes from "../../../theme/sizes";

const StyledHighlights = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid;
  border-bottom: 1px solid;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.mobileLarge}px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

function Highlights({ items }) {
  return (
    <StyledHighlights>
      {items.map(({ value, label }) => (
        <KeyFigure2 value={value} label={label} key={uuid()} flip />
      ))}
    </StyledHighlights>
  );
}

Highlights.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Highlights.defaultProps = {};

export default Highlights;
