import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import ImageWithCaption from "./ImageWithCaption";

const StyledImageGallery = styled.div`
  padding-top: 4rem;
  grid-column: 1 / span 2;
  display: grid;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  ${({ template }) => template};
`;

const ImageGallery = ({ images, template }) => {
  console.log("TEMPLATE:", template);
  return (
    <StyledImageGallery template={template}>
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
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      caption: PropTypes.string,
    })
  ).isRequired,
  template: PropTypes.string.isRequired,
};

export default ImageGallery;
