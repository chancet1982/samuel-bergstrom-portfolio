/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "react-use";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import TitleAndText from "../Shared/TitleAndText";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import { ElementColorContext } from "../../Context/ElementColorContext";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";
import padding from "../../theme/padding";

const StyledSectionTitleAndText = styled(motion.div)`
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    ${({ $limitMaxWidth }) =>
      $limitMaxWidth && {
        maxWidth: `${sizes.contentWidthLimit}px`,
        margin: "0 auto",
      }}
  }

  ${({ $isPadded }) =>
    $isPadded && {
      paddingRight: padding.outsideElements.double,
      paddingLeft: padding.outsideElements.double,
    }}

  ${({ $paddedUp }) =>
    $paddedUp && {
      paddingTop: padding.insideElements.double,
    }}

  ${({ $paddedDown }) =>
    $paddedDown && {
      paddingBottom: padding.insideElements.double,
    }}

  ${({ $isSticky }) =>
    $isSticky && {
      position: "sticky",
      top: "0",
    }}

  ${({ $isFullScreen }) =>
    $isFullScreen && {
      display: "flex",
      minHeight: "100vh",
      /* alignItems: "center", */
      justifyContent: "center",
      flexDirection: "column",
    }}

${({ $isHalfScreen }) =>
    $isHalfScreen && {
      display: "flex",
      minHeight: "50vh",
      /* alignItems: "center", */
      justifyContent: "center",
      flexDirection: "column",
    }}
`;

/* TODO: images in textbox arent being used and can be safely removed. */
function SectionTitleAndText({
  bgColor,
  bgMedia,
  overline,
  title,
  h,
  text,
  limitMaxWidth,
  paddedUp,
  paddedDown,
  isPadded,
  isSticky,
  isCentered,
  isFullScreen,
  isHalfScreen,
  isFadingOnScroll,
}) {
  const { scrollY } = useScroll();
  const { height } = useWindowSize();
  // const coverHeight = (height / 100) * 100; // For Now only works with 100%
  const fadeStart = 0;
  const fadeEnd = height * 0.7;
  const fadeFrom = 1;
  const fadeTo = 0;

  const fadeOnScrollEffect = useTransform(
    scrollY,
    [fadeStart, fadeEnd],
    [fadeFrom, fadeTo]
  );

  // eslint-disable-next-line no-unused-vars
  const fadeEffect = isFadingOnScroll ? fadeOnScrollEffect : 1;

  const [, setElementBgColor] = useContext(ElementColorContext);

  useEffect(() => {
    if (bgColor) {
      setElementBgColor(bgColor);
    } else if (bgMedia !== null) {
      setElementBgColor("#000000");
    }
  }, [setElementBgColor, bgColor, bgMedia]);

  const renderSectionTitleAndText = () => (
    <StyledSectionTitleAndText
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      $limitMaxWidth={limitMaxWidth}
      $paddedUp={paddedUp}
      $paddedDown={paddedDown}
      $isPadded={isPadded}
      $isSticky={isSticky}
      $isFullScreen={isFullScreen}
      $isHalfScreen={isHalfScreen}
    >
      <TitleAndText
        overline={overline}
        title={title}
        h={h}
        isCentered={isCentered}
        style={{ opacity: fadeEffect }}
      >
        {text}
      </TitleAndText>
    </StyledSectionTitleAndText>
  );

  return bgColor || bgMedia ? (
    <BackgroundWrapper bgColor={bgColor} bgMedia={bgMedia}>
      {renderSectionTitleAndText()}
    </BackgroundWrapper>
  ) : (
    renderSectionTitleAndText()
  );
}

SectionTitleAndText.propTypes = {
  bgColor: PropTypes.string,
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
  }),
  overline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  limitMaxWidth: PropTypes.bool,
  paddedUp: PropTypes.bool,
  paddedDown: PropTypes.bool,
  isPadded: PropTypes.bool,
  isSticky: PropTypes.bool,
  isCentered: PropTypes.bool,
  isFullScreen: PropTypes.bool,
  isHalfScreen: PropTypes.bool,
  isFadingOnScroll: PropTypes.bool,
};

SectionTitleAndText.defaultProps = {
  bgColor: null,
  bgMedia: null,
  overline: null,
  title: null,
  h: 2,
  text: null,
  limitMaxWidth: true,
  paddedUp: false,
  paddedDown: false,
  isPadded: true,
  isSticky: false,
  isCentered: false,
  isFullScreen: false,
  isHalfScreen: false,
  isFadingOnScroll: false,
};

export default SectionTitleAndText;
