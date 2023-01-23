import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import breakpoints from "../../../theme/breakpoints";
import ValueAndLabel from "../../Shared/ValueAndLabel";
import sizes from "../../../theme/sizes";
import padding from "../../../theme/padding";

const StyledHighlights = styled(motion.div)`
  display: flex;
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};

  > div {
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 0;
    padding-right: ${padding.horizontal.single};
    flex: 1;

    h5 {
      text-align: left;
    }

    :first-of-type {
      padding-left: ${padding.horizontal.double};
    }

    :last-of-type {
      padding-right: ${padding.horizontal.double};
    }
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
        <ValueAndLabel value={value} label={label} key={label} flip />
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
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Highlights.defaultProps = {};

export default Highlights;
