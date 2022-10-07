import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import breakpoints from "../../../theme/breakpoints";
import KeyFigure from "../../Shared/KeyFigure";
import colors from "../../../theme/colors";
import sizes from "../../../theme/sizes";

const StyledHighlights = styled(motion.div)`
  display: flex;

  > div {
    flex: 1;
    align-items: flex-start;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
    border-top: 1px solid ${colors.text.dark.low};
  }
`;

function Highlights({ items }) {
  return (
    <StyledHighlights>
      {items.map(({ value, label }) => (
        <KeyFigure value={value} label={label} key={uuid()} flip />
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
