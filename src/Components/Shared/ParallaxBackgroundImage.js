/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion, useTransform, useScroll } from "framer-motion";
import colors from "../../theme/colors";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";
import breakpoints from "../../theme/breakpoints";

const StyledBackground = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;

  ${({ $bgColor }) =>
    $bgColor && {
      background: $bgColor || colors.offwhite,
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

const StyledBackgroundImage = styled(motion.div)`
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  scale: 1.32;
  ${({ $bgMedia }) =>
    $bgMedia && {
      backgroundImage: `url(${process.env.PUBLIC_URL}/${$bgMedia})`,
      backgroundSize: "cover",
    }}
`;

function BackgroundWrapper({
  bgColor,
  bgMedia,
  limitMaxWidth,
  children,
  isPadded,
  ...rest
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const parallaxEffect = useTransform(scrollYProgress, [0, 1], ["-16%", "16%"]);
  // const smoothParallaxEffect = useSpring(parallaxEffect);
  const mediaUrl = bgMedia ? bgMedia.mediaUrl : null;

  return bgColor || mediaUrl ? (
    <StyledBackground
      ref={ref}
      $bgColor={bgColor}
      $limitMaxWidth={limitMaxWidth}
      $isPadded={isPadded}
      $bgMedia={mediaUrl}
      {...rest}
    >
      <StyledBackgroundImage
        $bgMedia={mediaUrl}
        style={{ top: parallaxEffect }}
      />
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
