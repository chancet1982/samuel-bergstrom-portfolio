import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion, useTransform, useScroll } from "framer-motion";
import { useWindowSize } from "react-use";
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

  > div {
    align-items: flex-start;
    justify-content: flex-start;

    > h5 {
      text-align: left;
      margin-top: 0;
    }
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

function Highlights({ items }) {
  const { height } = useWindowSize();
  const coverHeight = (height / 100) * 92;
  const { scrollY } = useScroll();

  const highlightsPosition = useTransform(
    scrollY,
    [0, coverHeight / 2],
    ["0%", "100%"]
  );

  const highlightsOpacity = useTransform(scrollY, [0, coverHeight / 2], [1, 0]);

  return (
    <StyledHighlights
      $columns={items.length}
      style={{
        y: highlightsPosition,
        opacity: highlightsOpacity,
      }}
    >
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
