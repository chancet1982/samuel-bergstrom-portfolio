/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { imageVariants } from "../../animations/animations";

const StyledImage = styled(motion.img)`
  width: 100%;
  max-width: 100%;
  height: ${({ $withCaption, $inTextbox }) =>
    !$inTextbox ? ($withCaption ? "calc(100% - 50px)" : "100%") : null};
  object-fit: ${({ $cover }) => ($cover ? "cover" : "contain")};

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }}

  ${({ $grayscale }) =>
    $grayscale && {
      filter: "grayscale(100%)",
      cursor: "pointer",
      transition: "all 300ms ease",
    }} :hover {
    ${({ $grayscale }) =>
      $grayscale && {
        filter: "grayscale(0%)",
      }}
  }
`;

function Image({
  imageUrl,
  imageAlt,
  grayscale,
  style,
  cover,
  withCaption,
  bgColor,
  inTextbox,
}) {
  return (
    <StyledImage
      rel="prefetch"
      $grayscale={grayscale}
      src={imageUrl}
      alt={imageAlt}
      style={style}
      $cover={cover}
      $withCaption={withCaption}
      $bgColor={bgColor}
      $inTextbox={inTextbox}
      variants={imageVariants}
    />
  );
}

Image.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  grayscale: PropTypes.bool,
  cover: PropTypes.bool,
  withCaption: PropTypes.bool,
  bgColor: PropTypes.string,
  inTextbox: PropTypes.bool,
};

Image.defaultProps = {
  style: null,
  imageAlt: "Default imageAlt",
  grayscale: false,
  cover: true,
  withCaption: false,
  bgColor: null,
  inTextbox: false,
};

export default Image;
