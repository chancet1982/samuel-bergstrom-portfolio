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
  grid-template-columns: repeat(${({ $itemsLength }) => $itemsLength}, 1fr);
  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
  column-gap: ${padding.insideElements.single};

  @media (min-width: ${breakpoints.desktop}px) {
    ${({ $limitMaxWidth }) =>
      $limitMaxWidth && {
        maxWidth: `${sizes.contentWidthLimit}px`,
        margin: "0 auto",
      }}
  }

  > div {
    padding-top: ${padding.insideElements.single};
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

function SideBySideImagesAndText({ limitMaxWidth, items }) {
  return (
    <StyledSideBySideImagesAndText
      $limitMaxWidth={limitMaxWidth}
      $itemsLength={items.length}
    >
      {items.map(({ imageUrl, imageAlt, title, h, text, bgColor }) => (
        <ElementContextProvider key={imageUrl}>
          <ImageWithTitleAndText
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            title={title}
            h={h}
            text={text}
            bgColor={bgColor}
          />
        </ElementContextProvider>
      ))}
    </StyledSideBySideImagesAndText>
  );
}

SideBySideImagesAndText.propTypes = {
  limitMaxWidth: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      h: PropTypes.number,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      bgColor: PropTypes.string,
    })
  ).isRequired,
};

SideBySideImagesAndText.defaultProps = {
  limitMaxWidth: true,
};

export default SideBySideImagesAndText;
