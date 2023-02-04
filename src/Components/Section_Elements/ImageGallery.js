import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import ImageWithCaption from "../Shared/ImageWithCaption";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";

const StyledImageGallery = styled(motion.div)`
  padding-top: 4rem; /* TODO: this needs to be update */
  grid-column: 1 / span 2;
  display: grid;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  ${({ $template }) => $template};

  @media (min-width: ${breakpoints.desktop}px) {
    ${({ $limitMaxWidth }) =>
      $limitMaxWidth && {
        maxWidth: `${sizes.contentWidthLimit}px`,
        margin: "0 auto",
      }}
  }
`;

function ImageGallery({ images, template, limitMaxWidth }) {
  return (
    <StyledImageGallery
      $template={template}
      $limitMaxWidth={limitMaxWidth}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {images.map(({ imageUrl, imageAlt, caption }, index) => (
        <ImageWithCaption
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          caption={caption}
          gridArea={String.fromCharCode(index + 65).toLowerCase()} // Mother of all hacks
          key={uuid()}
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
};

ImageGallery.defaultProps = {
  limitMaxWidth: false,
};

export default ImageGallery;
