/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import TitleAndText from "./TitleAndText";
import ImageWithCaption from "./ImageWithCaption";
import { IMAGE_WITH_CAPTION_SIZES } from "../../data/dictionaries/IMAGE_WITH_CAPTION_SIZES";
import padding from "../../theme/padding";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";

const StyledImageWithTitleAndText = styled(motion.div)`
  display: flex;

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor || colors.offwhite,
    }}

  flex-direction: ${({ $horizontal, $flip }) =>
    $horizontal
      ? $flip
        ? "row-reverse"
        : "row"
      : $flip
      ? "column-reverse"
      : "column"};
  align-items: center;

  > div {
    padding-left: ${padding.horizontal.double};
    padding-right: ${padding.horizontal.double};
  }
`;

function ImageWithTitleAndText({
  imageUrl,
  imageAlt,
  caption,
  title,
  text,
  bgColor,
  horizontal,
  flip,
}) {
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    setLight(
      bgColor !== null &&
        bgColor !== colors.offwhite &&
        bgColor !== colors.primaryShade
    );
  }, [setLight, bgColor]);

  return (
    <StyledImageWithTitleAndText
      $horizontal={horizontal}
      $flip={flip}
      $bgColor={bgColor}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <ImageWithCaption
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        caption={caption}
        ignoreSize
        size={IMAGE_WITH_CAPTION_SIZES.MEDIUM_DOUBLE}
      />
      <TitleAndText h={3} title={title} isPadded>
        {text}
      </TitleAndText>
    </StyledImageWithTitleAndText>
  );
}

ImageWithTitleAndText.propTypes = {
  bgColor: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  horizontal: PropTypes.bool,
  flip: PropTypes.bool,
};

ImageWithTitleAndText.defaultProps = {
  caption: null,
  bgColor: null,
  horizontal: false,
  flip: false,
};

export default ImageWithTitleAndText;
