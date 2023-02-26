/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import BgMedia from "./Cover/BgMedia";
import Caption from "./Cover/Caption";
import FgImage from "./Cover/FgImage";
import Highlights from "./Cover/Highlights";
import ClientPreview from "./Cover/ClientsPreview";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";
import { NavBgColorContext } from "../../Context/NavBgColorContext";

const StyledCover = styled(motion.div)`
  height: ${sizes.xl};
  position: relative;
  display: flex;
  overflow: hidden;

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }}

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    background: linear-gradient(
      ${({ $isLight }) =>
        !$isLight
          ? `
      72deg,
    rgba(244, 244, 244, 0.64) 0%,
    rgba(244, 244, 244, 0) 100%
      `
          : `
      72deg,
    rgba(0, 0, 0, 0.64) 0%,
    rgba(0, 0, 0, 0) 100%
      `}
    );

    @media (min-width: ${breakpoints.mobileLarge}px) {
      background: linear-gradient(
        ${({ $isLight }) =>
          !$isLight
            ? `
      72deg,
    rgba(244, 244, 244, 0.64) 0%,
    rgba(244, 244, 244, 0) 64%
      `
            : `
      72deg,
    rgba(0, 0, 0, 0.64) 0%,
    rgba(0, 0, 0, 0) 64%
      `}
      );
    }
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

  h1 {
    max-width: 15ch;
    ${({ $h }) =>
      $h === 0 && {
        fontWeight: 900,
      }}
  }

  p {
    max-width: 40ch;
    
    @media (min-width: ${breakpoints.tablet}px) {
      max-width: 30ch;
    }
  }

  @media (min-width: ${breakpoints.mobileLarge}px) {
    justify-content: center;
    padding-top: 0;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

const StyledCoverFooter = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    ${({ $isLight, $clientsPreview }) =>
      $isLight
        ? $clientsPreview
          ? `0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.32) 50%, rgba(0,0,0,0) 100%`
          : `0deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0) 100%`
        : `0deg, rgba(244, 244, 244, 1) 0%, rgba(244, 244, 244, 0.3) 50%, rgba(244, 244, 244, 0) 100%`}
  );
  z-index: 1;
`;

function Cover({
  bgColor,
  bgMedia,
  caption,
  fgImage,
  highlights,
  clientsPreview,
  isLight,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [light, setLight] = useContext(ElementColorContext);
  const [, setNavBgColor] = useContext(NavBgColorContext);
  const { width } = useWindowSize();
  const isTabletOrDesktop = width >= breakpoints.mobileLarge;

  useEffect(() => {
    setLight(
      isLight ||
        (bgColor !== null &&
          bgColor !== colors.offwhite &&
          bgColor !== colors.primaryShade)
    );
  }, [setLight, bgColor, isLight]);

  useEffect(() => {
    if ((isInView && bgColor !== colors.offwhite) || (isInView && isLight)) {
      setNavBgColor(bgColor || "black");
    } else {
      setNavBgColor(colors.offwhite);
    }
  }, [isInView, setNavBgColor, bgColor]);

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

  const coverFooterVariants = {
    hidden: { opacity: 0, y: "100%", transition: { duration: 0.6 } },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const renderCoverFooterContent = () =>
    highlights ? (
      isTabletOrDesktop ? (
        <Highlights items={highlights} />
      ) : null
    ) : clientsPreview ? (
      <ClientPreview />
    ) : null;

  return (
    <StyledCover
      $bgColor={bgColor}
      variants={coverVariants}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      ref={ref}
      $isLight={light}
    >
      {bgMedia && <BgMedia type={bgMedia.type} mediaUrl={bgMedia.mediaUrl} />}

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

      {highlights || clientsPreview ? (
        <StyledCoverFooter
          variants={coverFooterVariants}
          $isLight={light}
          $clientsPreview={clientsPreview}
        >
          {renderCoverFooterContent()}
        </StyledCoverFooter>
      ) : null}
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
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      label: PropTypes.string,
    })
  ),
  clientsPreview: PropTypes.bool,
  isLight: PropTypes.bool,
};

Cover.defaultProps = {
  bgMedia: null,
  bgColor: null,
  fgImage: null,
  caption: null,
  highlights: null,
  clientsPreview: false,
  isLight: false,
};

export default Cover;
