import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "./ListOfCards/Card";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";
import padding from "../../theme/padding";

const StyledListOfCards = styled(motion.div)`
  display: flex;
  align-items: stretch;
  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
  scroll-snap-type: x mandatory;

  > div {
    margin-right: ${padding.horizontal.single};
  }
`;

/* TODO: add side scrolling with Framer motion https://codesandbox.io/s/framer-motion-2-scrollable-drag-constraints-lsonq?file=/src/App.js */
function ListOfCards({ items }) {
  return (
    <StyledListOfCards>
      {items.map(({ mediaUrl, title, text }) => (
        <Card mediaUrl={mediaUrl} title={title} text={text} key={mediaUrl} />
      ))}
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
