/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import breakpoints from "../../theme/breakpoints";
import { useScrollDirection } from "../../utils/useScrollDirection";
import BgMedia from "./Cover/BgMedia";
import Caption from "./Cover/Caption";
import FgImage from "./Cover/FgImage";
import Highlights from "./Cover/Highlights";
import ClientPreview from "./Cover/ClientsPreview";

const StyledCover = styled(motion.div)`
  height: ${({
    theme: {
      sizes: { large },
    },
  }) => large};
  position: relative;
  display: flex;
  overflow: hidden;

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }}
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

function Cover({
  bgColor,
  bgMedia,
  caption,
  fgImage,
  highlights,
  hideFooterOnScroll,
}) {
  const { width } = useWindowSize();

  const isDesktop = width >= breakpoints.desktop;

  const scrollDirection = useScrollDirection();

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

  const coverBottomVariants = {
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

  const renderFooter = () =>
    highlights ? <Highlights items={highlights} /> : <ClientPreview />;

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

      <Caption
        overline={caption.overline}
        title={caption.title}
        text={caption.text}
        h={caption.h}
      />

      {fgImage && (
        <FgImage
          imageUrl={fgImage.imageUrl}
          mobileImageUrl={fgImage.mobileImageUrl}
          imageAlt={fgImage.imageAlt}
        />
      )}

      <StyledCoverFooter
        variants={coverBottomVariants}
        initial="hidden"
        animate={
          scrollDirection === "down" && isDesktop && hideFooterOnScroll
            ? "hidden"
            : "inView"
        }
      >
        {renderFooter()}
      </StyledCoverFooter>
    </StyledCover>
  );
}

Cover.propTypes = {
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf(["image", "video"]),
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
  hideFooterOnScroll: PropTypes.bool,
};

Cover.defaultProps = {
  bgMedia: null,
  bgColor: null,
  fgImage: null,
  caption: null,
  highlights: null,
  hideFooterOnScroll: false,
};

export default Cover;
