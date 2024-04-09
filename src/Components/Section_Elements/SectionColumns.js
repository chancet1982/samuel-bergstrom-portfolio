import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import ColumnContent from "./Columns/ColumnContent";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";

const StyledColumns = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ${({ $isPadded }) =>
    $isPadded && {
      paddingRight: padding.outsideElements.double,
      paddingLeft: padding.outsideElements.double,
    }}

  grid-gap: max(
    ${padding.outsideElements.single},
    ${padding.insideElements.single}
  );

  ${({ $paddedUp }) =>
    $paddedUp && {
      paddingTop: padding.insideElements.double,
    }}

  ${({ $paddedDown }) =>
    $paddedDown && {
      paddingBottom: padding.insideElements.double,
    }}

  box-sizing: border-box;

  // TODO: add check if legth is larger than than 3
  @media (${breakpoints.mobileLarge}px < width < ${breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // TODO: add check if legth is larger than than 3
  @media (width >= ${breakpoints.tablet}px) {
    grid-template-columns: repeat(${({ $itemsLength }) => $itemsLength}, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}px) {
    ${({ $limitMaxWidth }) =>
      $limitMaxWidth && {
        maxWidth: `${sizes.contentWidthLimit}px`,
        margin: "0 auto",
      }}
  }
`;

function SectionColumns({
  limitMaxWidth,
  items,
  paddedUp,
  paddedDown,
  isPadded,
}) {
  return (
    <StyledColumns
      $limitMaxWidth={limitMaxWidth}
      $paddedUp={paddedUp}
      $paddedDown={paddedDown}
      $isPadded={isPadded}
      $itemsLength={items.length}
    >
      {items.map((item) => (
        <ColumnContent key={uuid}>{item}</ColumnContent>
      ))}
    </StyledColumns>
  );
}

SectionColumns.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  limitMaxWidth: PropTypes.bool,
  paddedUp: PropTypes.bool,
  paddedDown: PropTypes.bool,
  isPadded: PropTypes.bool,
};

SectionColumns.defaultProps = {
  limitMaxWidth: true,
  paddedUp: false,
  paddedDown: false,
  isPadded: true,
};

export default SectionColumns;
