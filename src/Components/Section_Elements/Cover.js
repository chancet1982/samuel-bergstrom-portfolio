/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BgMedia from "./Cover/BgMedia";
import Caption from "./Cover/Caption";
import FgImage from "./Cover/FgImage";
import Highlights from "./Cover/Highlights";
import ClientPreview from "./Cover/ClientsPreview";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";

const StyledCover = styled(motion.div)`
  height: ${sizes.xl};
  position: relative;
  display: flex;
  overflow: hidden;

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }}
`;

const StyledCoverCaption = styled(motion.div)`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  padding-top: ${padding.vertical.double};
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  z-index: 1;
  width: 100%;
  background: linear-gradient(
    72deg,
    rgba(244, 244, 244, 0.8) 0%,
    rgba(244, 244, 244, 0) 100%
  );

  h1 {
    max-width: 15ch;
    ${({ $h }) =>
      $h === 0 && {
        fontWeight: 900,
      }}
  }

  p {
    @media (max-width: ${breakpoints.mobileLarge - 1}px) {
      max-width: 15ch;
    }

    @media (min-width: ${breakpoints.mobileLarge}px) and (max-width: ${breakpoints.tablet -
      1}px) {
      max-width: 20ch;
    }

    @media (min-width: ${breakpoints.tablet}px) {
      max-width: 30ch;
    }
  }

  @media (min-width: ${breakpoints.mobileLarge}px) {
    justify-content: center;
    padding-top: 0;
  }
`;

const StyledCoverFooter = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    0deg,
    rgba(244, 244, 244, 1) 0%,
    rgba(244, 244, 244, 0.3) 50%,
    rgba(244, 244, 244, 0) 100%
  );
  z-index: 1;
`;

/* TODO: Highlights vanish on scroll (they shouldnt) */
function Cover({ bgColor, bgMedia, caption, fgImage, highlights }) {
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

  return (
    <StyledCover
      $bgColor={bgColor}
      variants={coverVariants}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
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

      <StyledCoverFooter variants={coverFooterVariants}>
        {highlights ? <Highlights items={highlights} /> : <ClientPreview />}
      </StyledCoverFooter>
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
};

Cover.defaultProps = {
  bgMedia: null,
  bgColor: null,
  fgImage: null,
  caption: null,
  highlights: null,
};

export default Cover;
