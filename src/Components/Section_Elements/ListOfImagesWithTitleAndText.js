import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageWithTitleAndText2 from "./ListOfImagesWithTitleAndText/ImageWithTitleAndText2";

const StyledListOfImagesWithTitleAndText = styled(motion.div)``;

function ListOfImagesWithTitleAndText({ items, plainImage, stickyText }) {
  return (
    <StyledListOfImagesWithTitleAndText>
      {items.map(({ imageUrl, imageAlt, title, text }, index) => (
        <ImageWithTitleAndText2
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          title={title}
          text={text}
          horizontal
          flip={index % 2 === 1}
          key={imageUrl}
          plainImage={plainImage}
          stickyText={stickyText}
        />
      ))}
    </StyledListOfImagesWithTitleAndText>
  );
}

ListOfImagesWithTitleAndText.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      bgColor: PropTypes.string,
    })
  ).isRequired,
  plainImage: PropTypes.bool,
  stickyText: PropTypes.bool,
};

ListOfImagesWithTitleAndText.defaultProps = {
  plainImage: false,
  stickyText: false,
};

export default ListOfImagesWithTitleAndText;
