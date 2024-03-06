/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import BgMedia from "./SectionHero/BgMedia";
import Caption from "./SectionHero/Caption";
import FgImage from "./SectionHero/FgImage";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import { ElementColorContext } from "../../Context/ElementColorContext";

const StyledCover = styled(motion.div)`
  height: ${sizes.xl};
  position: relative;
  display: flex;
  box-shadow: 0 0 100vmin rgb(0 0 0 / 24%) inset;
  overflow: hidden;

  ${({ $bgColor }) =>
    $bgColor && {
      background: $bgColor,
    }}

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    ${({ $withGradientBottom }) =>
      $withGradientBottom && {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.32) 50%, rgba(0, 0, 0, 0) 100%)`,
      }}
  }
`;

const StyledCoverCaption = styled(motion.div)`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: center;
  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  text-wrap: balance;

  @media (min-width: ${breakpoints.mobileLarge}px) {
    justify-content: center;
    padding-top: 0;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

function Cover({
  bgColor,
  bgMedia,
  caption,
  fgImage,
  withGradientBottom,
  isLight,
}) {
  const ref = useRef(null);
  const [, setElementBgColor] = useContext(ElementColorContext);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const parallaxEffect = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    if (bgColor) {
      setElementBgColor(bgColor);
    } else if (isLight || bgMedia !== null) {
      setElementBgColor("#000000");
    }
  }, [setElementBgColor, bgColor, bgMedia, isLight]);

  const coverVariants = {
    hidden: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const coverCaptionVariants = {
    hidden: { opacity: 0, y: 10 },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.7,
        duration: 0.6,
      },
    },
  };

  return (
    <StyledCover
      $bgColor={bgColor}
      variants={coverVariants}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      ref={ref}
      $withGradientBottom={withGradientBottom}
    >
      {bgMedia && (
        <BgMedia
          type={bgMedia.type}
          mediaUrl={bgMedia.mediaUrl}
          style={{ top: parallaxEffect }}
        />
      )}

      <StyledCoverCaption variants={coverCaptionVariants}>
        <Caption
          overline={caption.overline}
          title={caption.title}
          text={caption.text}
          h={caption.h}
        />
      </StyledCoverCaption>

      {fgImage && (
        <FgImage
          imageUrl={fgImage.imageUrl}
          mobileImageUrl={fgImage.mobileImageUrl}
          imageAlt={fgImage.imageAlt}
        />
      )}
    </StyledCover>
  );
}

Cover.propTypes = {
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
  }),
  bgColor: PropTypes.string,
  fgImage: PropTypes.shape({
    imageUrl: PropTypes.string,
    mobileImageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
  }),
  caption: PropTypes.shape({
    overline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    h: PropTypes.number,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }),
  withGradientBottom: PropTypes.bool,
  isLight: PropTypes.bool,
};

Cover.defaultProps = {
  bgMedia: null,
  bgColor: null,
  fgImage: null,
  caption: null,
  withGradientBottom: false,
  isLight: false,
};

export default Cover;
