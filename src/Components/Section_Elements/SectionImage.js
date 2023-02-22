import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageWithCaption from "../Shared/ImageWithCaption";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";

const StyledSectionImage = styled(motion.div)`
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
      /* backgroundColor: "yellow", */
    }}

${({ $paddedDown }) =>
    $paddedDown && {
      paddingBottom: padding.insideElements.double,
      /* backgroundColor: "blue", */
    }}
`;

function SectionImage({ imageUrl, imageAlt, caption, limitMaxWidth }) {
  return (
    <StyledSectionImage
      $limitMaxWidth={limitMaxWidth}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <ImageWithCaption
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        caption={caption}
      />
    </StyledSectionImage>
  );
}

SectionImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  limitMaxWidth: PropTypes.bool,
};

SectionImage.defaultProps = {
  caption: null,
  limitMaxWidth: false,
};

export default SectionImage;
