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
    margin-top: ${padding.insideElements.single};
    margin-bottom: ${padding.insideElements.single};
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;

    ul {
      text-align: left;
      margin: 0;
    }
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

function Highlights({ columns }) {
  const renderColumnContent = (items) => (
    <div>
      {items.map(({ value, label, renderAsList }) => (
        <ValueAndLabel
          value={value}
          renderAsList={renderAsList}
          label={label}
          key={label}
          flip
        />
      ))}
    </div>
  );

  return (
    <StyledHighlights $columns={columns.length}>
      {columns.map((items) => renderColumnContent(items))}
    </StyledHighlights>
  );
}

Highlights.propTypes = {
  columns: PropTypes.arrayOf(
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
