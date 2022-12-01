import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize, useSize } from "react-use";
import Card from "./ListOfCards/Card";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";
import padding from "../../theme/padding";
import Button from "../Shared/Button";
import { ReactComponent as CaretRight } from "../../assets/caret-right.svg";
import { ReactComponent as CaretLeft } from "../../assets/caret-left.svg";
import colors from "../../theme/colors";

const StyledListOfCards = styled(motion.div)`
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

const StyledListNavigationButtons = styled(motion.div)`
  position: absolute;
  bottom: 8rem;
  left: 0;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${padding.horizontal.single};
  padding-right: ${padding.horizontal.single};
  box-sizing: border-box;

  > button {
    border-radius: 50%;
    overflow: hidden;
    line-height: 0;
    margin: 0;
    padding: 1rem;

    > svg {
      width: 24px;
      height: 24px;
      fill: ${colors.primary};
    }
  }
`;

/* TODO: add side scrolling with Framer motion https://codesandbox.io/s/framer-motion-2-scrollable-drag-constraints-lsonq?file=/src/App.js */
/* TODO: Make sure number of columns changes for mobile (1) table (2) and desktop (3) */

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
        <Button
          xl
          secondary
          onClick={() =>
            moveList(
              -(listOffset + initialListOffset) <= listItemWidth
                ? -(listOffset + initialListOffset)
                : listItemWidth
            )
          }
          disabled={initialListOffset + listOffset >= 0}
        >
          <CaretLeft />
        </Button>

        <Button
          xl
          secondary
          onClick={() =>
            moveList(
              availableRange + listOffset <= listItemWidth
                ? -(availableRange + listOffset)
                : -listItemWidth
            )
          }
          disabled={availableRange + listOffset <= 0}
        >
          <CaretRight />
        </Button>
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
