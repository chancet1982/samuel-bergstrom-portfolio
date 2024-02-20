import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import breakpoints from "../../../theme/breakpoints";
import ValueAndLabel from "../../Shared/ValueAndLabel";
import sizes from "../../../theme/sizes";
import padding from "../../../theme/padding";

const StyledHighlights = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
  padding-top: ${padding.outsideElements.double};
  padding-bottom: ${padding.outsideElements.double};
  grid-gap: max(
    ${padding.outsideElements.double},
    ${padding.insideElements.single}
  );
  box-sizing: border-box;

  div {
    justify-content: flex-start;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

function Highlights({ items }) {
  return (
    <StyledHighlights $columns={items.length}>
      {items.map(({ value, label, renderAsList }) => (
        <ValueAndLabel
          value={value}
          renderAsList={renderAsList}
          label={label}
          key={label}
          flip
        />
      ))}
    </StyledHighlights>
  );
}

Highlights.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]).isRequired,
      renderAsList: PropTypes.bool,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Highlights.defaultProps = {};

export default Highlights;
