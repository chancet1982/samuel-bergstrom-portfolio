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

  ${({ $bgMedia }) =>
    $bgMedia && {
      backgroundImage: `url(${process.env.PUBLIC_URL}/${$bgMedia})`,
      backgroundSize: "cover",
    }}

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

function BackgroundImage({
  bgMedia,
  limitMaxWidth,
  children,
  isPadded,
  ...rest
}) {
  const mediaUrl = bgMedia ? bgMedia.mediaUrl : null;

  return (
    <StyledBackground
      $bgMedia={mediaUrl}
      $limitMaxWidth={limitMaxWidth}
      $isPadded={isPadded}
      {...rest}
    >
      {children}
    </StyledBackground>
  );
}

BackgroundImage.propTypes = {
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
  limitMaxWidth: PropTypes.bool,
  isPadded: PropTypes.bool,
};

BackgroundImage.defaultProps = {
  limitMaxWidth: false,
  isPadded: true,
};

export default BackgroundImage;
