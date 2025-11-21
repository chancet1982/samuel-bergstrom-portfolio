/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import ImageWithCaption from "../Shared/ImageWithCaption";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import {
  PROBLEMATIC_IMAGE_GALLERY_TEMPLATES,
  IMAGE_GALLERY_TEMPLATES,
  PROBLEMATIC_IMAGE_GALLERY_TEMPLATES_WITH_THREE_IMAGES,
} from "../../data/dictionaries/IMAGE_GALLERY_TEMPLATES";

const StyledImageGallery = styled(motion.div)`
  padding-top: ${padding.insideElements.quadruple};
  grid-column: 1 / span 2;
  display: grid;
  grid-gap: max(
    ${padding.outsideElements.single},
    ${padding.insideElements.single}
  );

  ${({ $template }) => $template};

  > figure {
    border-radius: ${padding.insideElements.single};
  }

  ${({ $isPadded }) =>
    $isPadded && {
      paddingRight: padding.outsideElements.double,
      paddingLeft: padding.outsideElements.double,
    }}

  @media (min-width: ${breakpoints.desktop}px) {
    ${({ $limitMaxWidth }) =>
      $limitMaxWidth && {
        maxWidth: `${sizes.contentWidthLimit}px`,
        margin: "0 auto",
      }}
  }
`;

// Helper function outside the component
function getGridArea(index) {
  return String.fromCharCode(index + 65).toLowerCase();
}

function ImageGallery({ images, template, limitMaxWidth, isPadded }) {
  const { width } = useWindowSize();
  const isMobile = width < breakpoints.tablet;

  const imagesInGallery =
    isMobile && PROBLEMATIC_IMAGE_GALLERY_TEMPLATES.has(template)
      ? images.length >= 4
        ? images.slice(0, 4)
        : images.slice(0, 3)
      : images;

  const ImageGalleryTemplate = isMobile
    ? PROBLEMATIC_IMAGE_GALLERY_TEMPLATES.has(template)
      ? PROBLEMATIC_IMAGE_GALLERY_TEMPLATES_WITH_THREE_IMAGES.has(template)
        ? IMAGE_GALLERY_TEMPLATES.THREE_IMAGES_TWO_COLUMNS
        : IMAGE_GALLERY_TEMPLATES.FOUR_IMAGES_TWO_COLUMNS
      : template
    : template;

  return (
    <StyledImageGallery
      $template={ImageGalleryTemplate}
      $limitMaxWidth={limitMaxWidth}
      $isPadded={isPadded}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {imagesInGallery.map(({ imageUrl, imageAlt, caption }, index) => (
        <ImageWithCaption
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          caption={caption}
          gridArea={getGridArea(index)} // Mother of all hacks
          key={imageUrl}
          inGallery
        />
      ))}
    </StyledImageGallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      caption: PropTypes.string,
    })
  ).isRequired,
  template: PropTypes.string.isRequired,
  limitMaxWidth: PropTypes.bool,
  isPadded: PropTypes.bool,
};

ImageGallery.defaultProps = {
  limitMaxWidth: false,
  isPadded: false,
};

export default ImageGallery;
