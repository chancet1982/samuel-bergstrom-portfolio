import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "../../theme/colors";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";
import breakpoints from "../../theme/breakpoints";

const StyledBackground = styled(motion.div)`
  height: 100%;
  width: 100%;

  ${({ $bgMedia }) =>
    $bgMedia && {
      backgroundImage: `url(${process.env.PUBLIC_URL}/${$bgMedia})`,
      backgroundSize: "cover",
    }}

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor || colors.offwhite,
    }}

  ${({ $bgMedia, $bgColor, $isPadded }) =>
    (($bgMedia && $isPadded) || ($bgColor && $isPadded)) && {
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

function BackgroundWrapper({
  bgColor,
  bgMedia,
  limitMaxWidth,
  children,
  isPadded,
}) {
  /* TODO: Add support for video background */

  /* <StyledCoverVideo autoPlay loop muted variants={imageVariants}>
  <source src={`${process.env.PUBLIC_URL}/${mediaUrl}`} type="video/mp4" />
  <source src={`${process.env.PUBLIC_URL}/${mediaUrl}`} type="video/webm" />
  <source src={`${process.env.PUBLIC_URL}/${mediaUrl}`} type="video/ogg" />
</StyledCoverVideo> */
  const mediaUrl = bgMedia ? bgMedia.mediaUrl : null;

  return bgColor || mediaUrl ? (
    <StyledBackground
      $bgColor={bgColor}
      $bgMedia={mediaUrl}
      $limitMaxWidth={limitMaxWidth}
      $isPadded={isPadded}
    >
      {children}
    </StyledBackground>
  ) : (
    { children }
  );
}

BackgroundWrapper.propTypes = {
  bgColor: PropTypes.string,
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  limitMaxWidth: PropTypes.bool,
  isPadded: PropTypes.bool,
};

BackgroundWrapper.defaultProps = {
  bgColor: null,
  bgMedia: null,
  limitMaxWidth: false,
  isPadded: true,
};

export default BackgroundWrapper;
