import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize, useSize } from "react-use";
import Card from "./ListOfCards/Card";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";
import padding from "../../theme/padding";

const StyledListOfCards = styled(motion.div)`
  position: relative;
  padding: 0 4vw;

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

const StyledListNavigationButtons = styled(motion.div)``;
const StyledListButton = styled(motion.button)`
  padding: 1rem 1.5rem;
`;
/* TODO: add side scrolling with Framer motion https://codesandbox.io/s/framer-motion-2-scrollable-drag-constraints-lsonq?file=/src/App.js */
/* TODO: replace listWidth magic number with useMeasrure */
/* TODO: Make sure number of columns changes for mobile (1) table (2) and desktop (3) */
/* TODO: Update design for list navigation buttons  */

function ListOfCards({ items }) {
  const numberOfColumns = 3; // Update to work on mobile as well
  const [listOffset, setListOffset] = useState(0);

  const windowSize = useWindowSize();
  const cardMarginRight = (windowSize.width / 100) * 2; // Should be equal to 2VWs
  const listItemWidth =
    (sizes.contentWidthLimit - cardMarginRight * (numberOfColumns - 1)) /
    numberOfColumns;
  const initialListOffset = (windowSize.width - sizes.contentWidthLimit) / 2;

  const [styledList, { width }] = useSize(
    // eslint-disable-next-line no-shadow, no-unused-vars
    ({ width }) => (
      <StyledList animate={{ x: listOffset }}>
        {items.map(({ mediaUrl, title, text }) => (
          <StyledListItem $listItemWidth={`${listItemWidth}px`}>
            <Card
              mediaUrl={mediaUrl}
              title={title}
              text={text}
              key={mediaUrl}
            />
          </StyledListItem>
        ))}
      </StyledList>
    ),
    { width: 0 }
  );

  const listWidth = width;
  const availableRange = listWidth + initialListOffset - windowSize.width;

  const moveList = (offset) => {
    setListOffset(listOffset + offset);
  };

  return (
    <StyledListOfCards>
      {styledList}
      <StyledListNavigationButtons>
        <StyledListButton
          onClick={() =>
            moveList(
              -(listOffset + initialListOffset) <= listItemWidth
                ? -(listOffset + initialListOffset)
                : listItemWidth
            )
          }
          disabled={initialListOffset + listOffset >= 0}
        >
          Previous
        </StyledListButton>
        <StyledListButton
          onClick={() =>
            moveList(
              availableRange + listOffset <= listItemWidth
                ? -(availableRange + listOffset)
                : -listItemWidth
            )
          }
          disabled={availableRange + listOffset <= 0}
        >
          Next
        </StyledListButton>
      </StyledListNavigationButtons>
    </StyledListOfCards>
  );
}

ListOfCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      mediaUrl: PropTypes.string.isRequired,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    })
  ).isRequired,
};

export default ListOfCards;
