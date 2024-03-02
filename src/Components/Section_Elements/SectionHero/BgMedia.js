/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { BG_MEDIA_TYPES } from "../../../data/dictionaries/BG_MEDIA_TYPES";
import breakpoints from "../../../theme/breakpoints";

const StyledCoverImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 92vh;
  object-fit: cover;
  z-index: -1;
`;

const StyledCoverVideo = styled(motion.video)`
  position: absolute;
  right: -50%;
  bottom: 0;
  min-width: 100vw;
  width: auto;
  height: 92vh;
  object-fit: cover;
  object-position: top left;

  @media (min-width: ${breakpoints.mobileLarge}px) {
    right: 0;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    object-position: top right;
  }
`;

function BgMedia({ type, mediaUrl, ...rest }) {
  const imageVariants = {
    hidden: { opacity: 0 },
    inView: {
      opacity: 1,
    },
  };

  return type === BG_MEDIA_TYPES.IMAGE ? (
    <StyledCoverImage
      variants={imageVariants}
      src={`${process.env.PUBLIC_URL}/${mediaUrl}`}
      {...rest}
    />
  ) : (
    <StyledCoverVideo autoPlay muted variants={imageVariants} {...rest}>
      <source src={`${process.env.PUBLIC_URL}/${mediaUrl}`} type="video/mp4" />
    </StyledCoverVideo>
  );
}

BgMedia.propTypes = {
  type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO])
    .isRequired,
  mediaUrl: PropTypes.string.isRequired,
};

export default BgMedia;
