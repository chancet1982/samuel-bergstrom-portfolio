/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import padding from "../../../theme/padding";
import sizes from "../../../theme/sizes";
import { BG_MEDIA_TYPES } from "../../../data/dictionaries/BG_MEDIA_TYPES";
import breakpoints from "../../../theme/breakpoints";

const StyledBackground = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;

  ${({ $isPadded }) =>
    $isPadded && {
      paddingTop: padding.outsideElements.double,
      paddingBottom: padding.outsideElements.double,
    }}

  @media (min-width: ${breakpoints.desktop}px) {
    ${({ $limitMaxWidth }) =>
      $limitMaxWidth && {
        maxWidth: `${sizes.contentWidthLimit}px`,
        margin: "0 auto",
      }}
  }
`;

const StyledBackgroundVideo = styled(motion.video)`
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
`;

/* TODO figure out how to support multiple files as source instead of single imageUrl */
function BackgroundVideo({
  bgMedia,
  limitMaxWidth,
  children,
  isPadded,
  ...rest
}) {
  const mediaUrl = bgMedia ? bgMedia.mediaUrl : null;

  return (
    <StyledBackground
      $limitMaxWidth={limitMaxWidth}
      $isPadded={isPadded}
      $bgMedia={mediaUrl}
      {...rest}
    >
      <StyledBackgroundVideo autoPlay muted $bgMedia={mediaUrl}>
        <source
          src={`${process.env.PUBLIC_URL}/${mediaUrl}`}
          type="video/webm"
        />
        <source
          src={`${process.env.PUBLIC_URL}/${mediaUrl}`}
          type="video/mp4"
        />
        <source
          src={`${process.env.PUBLIC_URL}/${mediaUrl}`}
          type="video/ogg"
        />
      </StyledBackgroundVideo>
      {children}
    </StyledBackground>
  );
}

BackgroundVideo.propTypes = {
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
  limitMaxWidth: PropTypes.bool,
  isPadded: PropTypes.bool,
};

BackgroundVideo.defaultProps = {
  limitMaxWidth: false,
  isPadded: true,
};

export default BackgroundVideo;
