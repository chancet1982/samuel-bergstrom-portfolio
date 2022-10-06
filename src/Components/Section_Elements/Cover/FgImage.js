import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";

const StyledFgImage = styled(motion.img)``;

function FgImage({ imageUrl, imageAlt }) {
  const { scrollY } = useScroll();
  const { height } = useWindowSize();
  const coverHeight = (height / 100) * 92;

  const coverImageParallax = useTransform(scrollY, [0, coverHeight], [1, 1.5]);

  const imageVariants = {
    hidden: { opacity: 0, y: 10 },
    animate: {
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
      src={`${process.env.PUBLIC_URL}/${imageUrl}`}
      style={{ scale: coverImageParallax }}
      alt={imageAlt}
    />
  );
}

FgImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
};

FgImage.defaultProps = {
  imageAlt: null,
};

export default FgImage;
