import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import { COVER_MEDIA_TYPES } from "../../../data/dictionaries/COVER_MEDIA_TYPES";

const StyledCoverImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  object-fit: cover;
  z-index: -1;
`;

const StyledCoverVideo = styled(motion.video)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: auto;
  object-fit: cover;
  z-index: -1;
`;

function BgMedia({ type, mediaUrl }) {
  const { scrollY } = useScroll();
  const { height } = useWindowSize();
  const coverHeight = (height / 100) * 92;

  const coverImageParallax = useTransform(scrollY, [0, coverHeight], [1, 1.5]);

  const imageVariants = {
    hidden: { opacity: 0, y: 10 },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 0.6,
      },
    },
  };

  return type === COVER_MEDIA_TYPES.IMAGE ? (
    <StyledCoverImage
      variants={imageVariants}
      src={`${process.env.PUBLIC_URL}/${mediaUrl}`}
      style={{ scale: coverImageParallax }}
    />
  ) : (
    <StyledCoverVideo autoPlay loop muted variants={imageVariants}>
      <source src={`${process.env.PUBLIC_URL}/${mediaUrl}`} type="video/mp4" />
      <source src={`${process.env.PUBLIC_URL}/${mediaUrl}`} type="video/webm" />
      <source src={`${process.env.PUBLIC_URL}/${mediaUrl}`} type="video/ogg" />
    </StyledCoverVideo>
  );
}

BgMedia.propTypes = {
  type: PropTypes.oneOf([COVER_MEDIA_TYPES.IMAGE, COVER_MEDIA_TYPES.VIDEO])
    .isRequired,
  mediaUrl: PropTypes.string.isRequired,
};

export default BgMedia;
