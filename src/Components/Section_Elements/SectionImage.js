import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize, useOrientation } from "react-use";
import ImageWithCaption from "../Shared/ImageWithCaption";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";

const StyledSectionImage = styled(motion.div)`
  box-sizing: border-box;
  position: relative;
  z-index: 1;

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
`;

function SectionImage({
  imageUrl,
  mobileImageUrl,
  imageAlt,
  caption,
  limitMaxWidth,
  paddedUp,
  paddedDown,
  isPadded,
  isSticky,
}) {
  const { width } = useWindowSize();
  const deviceOrientation = useOrientation();
  const isMobile = width < breakpoints.tablet;
  const isLandscape = deviceOrientation.type === "landscape-primary";

  return (
    <StyledSectionImage
      $limitMaxWidth={limitMaxWidth}
      $paddedUp={paddedUp}
      $paddedDown={paddedDown}
      $isPadded={isPadded}
      $isSticky={isSticky}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <ImageWithCaption
        imageUrl={
          isMobile && !isLandscape && mobileImageUrl ? mobileImageUrl : imageUrl
        }
        imageAlt={imageAlt}
        caption={caption}
      />
    </StyledSectionImage>
  );
}

SectionImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  mobileImageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  caption: PropTypes.string,
  limitMaxWidth: PropTypes.bool,
  paddedUp: PropTypes.bool,
  paddedDown: PropTypes.bool,
  isPadded: PropTypes.bool,
  isSticky: PropTypes.bool,
};

SectionImage.defaultProps = {
  mobileImageUrl: null,
  imageAlt: null,
  caption: null,
  limitMaxWidth: false,
  paddedUp: false,
  paddedDown: false,
  isPadded: false,
  isSticky: false,
};

export default SectionImage;
