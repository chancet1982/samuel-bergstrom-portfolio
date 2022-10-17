import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize, useOrientation } from "react-use";
import breakpoints from "../../../theme/breakpoints";

/* TODO: make sure it works on mobile as well */
const StyledFgImage = styled(motion.img)`
  position: absolute;
  max-height: 92vh;
  right: 0;
`;

function FgImage({ imageUrl, mobileImageUrl, imageAlt }) {
  const { scrollY } = useScroll();
  const { height } = useWindowSize();
  const coverHeight = (height / 100) * 92;

  const coverImageParallax = useTransform(scrollY, [0, coverHeight], [1, 1.5]);
  const { width } = useWindowSize();
  const isMobile = width < breakpoints.tablet;
  const deviceOrientation = useOrientation();
  const isLandscape = deviceOrientation.type === "landscape-primary";

  const imageVariants = {
    hidden: { opacity: 0, y: 10 },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 0.6,
      },
    },
  };

  return (
    <StyledFgImage
      variants={imageVariants}
      src={`${process.env.PUBLIC_URL}/${
        // eslint-disable-next-line no-nested-ternary
        isMobile ? (isLandscape ? imageUrl : mobileImageUrl) : imageUrl
      }`}
      style={{ scale: coverImageParallax }}
      alt={imageAlt}
    />
  );
}

FgImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  mobileImageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
};

FgImage.defaultProps = {
  imageAlt: null,
};

export default FgImage;
