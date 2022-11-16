/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { imageVariants } from "../../animations/animations";
import breakpoints from "../../theme/breakpoints";

const StyledPicture = styled(motion.picture)``;

/* TODO: add support for aspect ratio and size */
function Picture({ imageUrl, imageAlt }) {
  return (
    <StyledPicture variants={imageVariants}>
      <source
        srcSet={
          imageUrl.large
            ? imageUrl.large
            : imageUrl.medium
            ? imageUrl.medium
            : imageUrl.small
        }
        media={breakpoints.desktop}
      />
      <source
        srcSet={imageUrl.medium ? imageUrl.medium : imageUrl.small}
        media={breakpoints.mobileLarge}
      />
      <img
        src={imageUrl.small}
        alt={imageAlt}
        width="300"
        height="200"
        loading="lazy"
        decoding="async"
      />
    </StyledPicture>
  );
}

Picture.propTypes = {
  imageUrl: PropTypes.shape({
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
  }).isRequired,
  imageAlt: PropTypes.string,
};

Picture.defaultProps = {
  imageAlt: null,
};

export default Picture;
