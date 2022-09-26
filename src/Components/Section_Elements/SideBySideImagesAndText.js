import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageWithTitleAndText from "../Shared/ImageWithTitleAndText";
import breakpoints from "../../theme/breakpoints";
import ElementContextProvider from "../../Context/ElementColorContext";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";

const StyledSideBySideImagesAndText = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4rem;
  max-width: ${sizes.contentWidthLimit}px;
  margin: 0 auto;

  > div div {
    padding-top: ${padding.vertical.single};
  }

  > div:nth-of-type(1) {
    box-sizing: border-box;

    grid-column: 1 / span 2;
    @media (min-width: ${breakpoints.tablet + 1}px) {
      grid-column: 1 / span 1;
    }
  }

  > div:nth-of-type(2) {
    box-sizing: border-box;

    grid-column: 1 / span 2;

    @media (min-width: ${breakpoints.tablet + 1}px) {
      grid-column: 2 / span 1;
    }
  }
`;

const SideBySideImagesAndText = ({ items }) => {
  return (
    <StyledSideBySideImagesAndText>
      {items.map(({ imageUrl, imageAlt, title, text, bgColor }) => (
        <ElementContextProvider key={imageUrl}>
          <ImageWithTitleAndText
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            title={title}
            text={text}
            bgColor={bgColor}
          />
        </ElementContextProvider>
      ))}
    </StyledSideBySideImagesAndText>
  );
};

SideBySideImagesAndText.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      bgColor: PropTypes.string,
    })
  ).isRequired,
};

export default SideBySideImagesAndText;
