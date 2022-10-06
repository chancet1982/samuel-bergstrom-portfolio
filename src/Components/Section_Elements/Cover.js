/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import breakpoints from "../../theme/breakpoints";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";
import { useScrollDirection } from "../../utils/useScrollDirection";
import BgMedia from "./Cover/BgMedia";
import Caption from "./Cover/Caption";
import FgImage from "./Cover/FgImage";

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

function Cover({ bgColor, bgMedia, caption, fgImage, footer }) {
  const { width } = useWindowSize();
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    setLight !== null &&
      setLight(
        bgColor !== null &&
          bgColor !== colors.offwhite &&
          bgColor !== colors.primaryShade
      );
  }, [setLight, bgColor]);

  const isDesktop = width >= breakpoints.desktop;

  const scrollDirection = useScrollDirection();

  const coverVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const coverBottomVariants = {
    hidden: { opacity: 0, y: "100%", transition: { duration: 0.6 } },
    animate: {
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
      animate="animate"
    >
      {bgMedia && <BgMedia type={bgMedia.type} mediaUrl={bgMedia.mediaUrl} />}

      <Caption
        overline={caption.overline}
        title={caption.title}
        text={caption.text}
      />

      {fgImage && (
        <FgImage imageUrl={fgImage.imageUrl} imageAlt={fgImage.imageAlt} />
      )}

      {footer && (
        <StyledCoverFooter
          variants={coverBottomVariants}
          initial="animate"
          animate={
            scrollDirection === "down" && isDesktop ? "hidden" : "animate"
          }
        >
          {footer}
        </StyledCoverFooter>
      )}
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
    imageAlt: PropTypes.string,
  }),
  caption: PropTypes.shape({
    overline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }),
  footer: PropTypes.node,
};

Cover.defaultProps = {
  bgMedia: null,
  bgColor: null,
  fgImage: null,
  caption: null,
  footer: null,
};

export default Cover;
