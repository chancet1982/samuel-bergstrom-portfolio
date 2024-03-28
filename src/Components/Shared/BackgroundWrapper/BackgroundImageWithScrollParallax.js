/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion, useTransform, useScroll } from "framer-motion";
import padding from "../../../theme/padding";
import sizes from "../../../theme/sizes";
import { BG_MEDIA_TYPES } from "../../../data/dictionaries/BG_MEDIA_TYPES";
import breakpoints from "../../../theme/breakpoints";

const StyledBackground = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  contain: paint;

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

const StyledBackgroundImage = styled(motion.div)`
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: cover;
  background-position: center;

  ${({ $mediaUrl }) =>
    $mediaUrl && {
      backgroundImage: `url(${process.env.PUBLIC_URL}/${$mediaUrl})`,
    }}

  ${({ $isInHero }) =>
    !$isInHero && {
      scale: "1.32",
      top: "-16%",
      backgroundAttachment: "fixed",
    }}
`;

function BackgroundImageWithScrollParallax({
  bgMedia,
  limitMaxWidth,
  children,
  isPadded,
  isInHero,
  ...rest
}) {
  const ref = useRef(null);

  const offsetScroll = isInHero
    ? ["start start", "end start"]
    : ["start 0.8", "end 0.2"];
  const effectRange = isInHero ? ["0%", "50%"] : ["-16%", "16%"];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offsetScroll,
  });
  const parallaxEffect = useTransform(scrollYProgress, [0, 1], effectRange);
  // const smoothParallaxEffect = useSpring(parallaxEffect);
  const mediaUrl = bgMedia ? bgMedia.mediaUrl : null;

  return (
    <StyledBackground
      ref={ref}
      $limitMaxWidth={limitMaxWidth}
      $isPadded={isPadded}
      {...rest}
    >
      <StyledBackgroundImage
        $mediaUrl={mediaUrl}
        $isInHero={isInHero}
        style={{ top: parallaxEffect }}
      />
      {children}
    </StyledBackground>
  );
}

BackgroundImageWithScrollParallax.propTypes = {
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
  limitMaxWidth: PropTypes.bool,
  isPadded: PropTypes.bool,
  isInHero: PropTypes.bool,
};

BackgroundImageWithScrollParallax.defaultProps = {
  limitMaxWidth: false,
  isPadded: true,
  isInHero: false,
};

export default BackgroundImageWithScrollParallax;
