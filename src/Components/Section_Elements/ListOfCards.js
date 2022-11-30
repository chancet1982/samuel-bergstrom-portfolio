import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import Card from "./ListOfCards/Card";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";
import padding from "../../theme/padding";

const StyledListOfCards = styled(motion.div)`
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
const StyledListButton = styled(motion.button)``;
/* TODO: add side scrolling with Framer motion https://codesandbox.io/s/framer-motion-2-scrollable-drag-constraints-lsonq?file=/src/App.js */
/* TODO: Make sure card animation is animated  */
/* TODO: Make sure that when "Next" card is pressed it is moving things it never goes outside available range. */
/* TODO: replace listWidth magic number with useMeasrure */
/* TODO: Make sure number of columns changes for mobile (1) table (2) and desktop (3) */
/* TODO: Add left adn right gutters to the cardlist */

function ListOfCards({ items }) {
  const numberOfColumns = 3; // Update to work on mobile as well
  const [listOffset, setListOffset] = useState(0);

  const { width } = useWindowSize();
  const cardMarginRight = (width / 100) * 2; // Should be equal to 2VWs

  const listItemWidth =
    (sizes.contentWidthLimit - cardMarginRight * (numberOfColumns - 1)) /
    numberOfColumns;

  const listWidth = 2611.13; // Replace magic number with a better solution
  const moveList = (offset) => {
    console.log("listOffset: ", listOffset + offset);
    console.log(
      "AvailableRange: ",
      listWidth + (width - sizes.contentWidthLimit) / 2 - width
    );
    setListOffset(listOffset + offset);
  };

  return (
    <StyledListOfCards>
      <StyledList style={{ x: listOffset }}>
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
      <StyledListNavigationButtons>
        <StyledListButton
          onClick={() => moveList(listItemWidth)}
          disabled={-listOffset < (width - sizes.contentWidthLimit) / 2}
        >
          Previous
        </StyledListButton>
        <StyledListButton
          onClick={() => moveList(-listItemWidth)}
          disabled={
            -listOffset >
            listWidth + (width - sizes.contentWidthLimit) / 2 - width
          }
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
