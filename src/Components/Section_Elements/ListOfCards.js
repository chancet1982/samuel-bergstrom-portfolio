import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize, useMeasure } from "react-use";
import Card from "../Shared/Card";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";
import padding from "../../theme/padding";
import TitleAndText from "../Shared/TitleAndText";

const StyledListOfCards = styled(motion.div)`
  padding: 0 ${padding.horizontal.double};

  @media (max-width: ${breakpoints.tablet}px) {
    overflow-x: hidden;
    box-sizing: border-box;
    max-width: 100vw;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

const StyledList = styled(motion.ul)`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: max-content;
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};
  cursor: grab;
`;

const StyledListItem = styled(motion.li)`
  width: ${({ $listItemWidth }) => $listItemWidth};
  min-width: ${({ $listItemWidth }) => $listItemWidth};

  margin-right: ${padding.horizontal.single};
  display: flex;

  :last-of-type {
    margin-right: 0;
  }

  > div {
    align-items: stretch;
  }
`;

/* TODO: drag constraints are not updated for whatever reason */
/* TODO: Make sure number of columns changes for mobile (1) table (2) and desktop (3) */
function ListOfCards({ items }) {
  const numberOfColumns = 3; // Update to work on mobile as well
  const [ref, { width }] = useMeasure();
  const [availableRange, setAvailableRange] = useState(0);

  const viewport = useWindowSize();
  const viewportWidth = viewport.width;

  const cardMarginRight = (viewportWidth / 100) * 2; // Should be equal to 2VWs
  const listItemWidth =
    (sizes.contentWidthLimit - cardMarginRight * (numberOfColumns - 1)) /
    numberOfColumns;
  const initialListOffset = (viewportWidth - sizes.contentWidthLimit) / 2;

  useEffect(() => {
    setAvailableRange(width + initialListOffset - viewportWidth);
    /* console.log("availableRange: ", availableRange);
    console.log(
      "width, initialListOffset, viewportWidth",
      width,
      initialListOffset,
      viewportWidth
    ); */
  }, [width, initialListOffset, viewportWidth]);

  const renderCardContent = (title, text) => (
    <TitleAndText title={title} h={4}>
      {text}
    </TitleAndText>
  );

  return (
    <StyledListOfCards>
      <StyledList
        ref={ref}
        drag="x"
        dragConstraints={{ right: 0, left: -availableRange }}
        whileTap={{ cursor: "grabbing" }}
      >
        {items.map(({ mediaUrl, title, text }) => (
          <StyledListItem $listItemWidth={`${listItemWidth}px`} key={title}>
            <Card mediaUrl={mediaUrl}>{renderCardContent(title, text)}</Card>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledListOfCards>
  );
}

ListOfCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      mediaUrl: PropTypes.string,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    })
  ).isRequired,
};

export default ListOfCards;
