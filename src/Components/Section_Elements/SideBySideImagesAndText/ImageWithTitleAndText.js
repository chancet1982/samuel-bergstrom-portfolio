/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import TitleAndText from "../../Shared/TitleAndText";
import ImageWithCaption from "../../Shared/ImageWithCaption";
import { IMAGE_WITH_CAPTION_SIZES } from "../../../data/dictionaries/IMAGE_WITH_CAPTION_SIZES";
import { ElementColorContext } from "../../../Context/ElementColorContext";
import colors from "../../../theme/colors";
import shouldUseLightText from "../../../utils/shouldUseLightText";

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
`;

function ImageWithTitleAndText({
  imageUrl,
  imageAlt,
  caption,
  title,
  h,
  text,
  bgColor,
  horizontal,
  flip,
}) {
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    setLight(shouldUseLightText(bgColor));
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
      <TitleAndText h={h} title={title} isCentered>
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
  h: PropTypes.number,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  horizontal: PropTypes.bool,
  flip: PropTypes.bool,
};

ImageWithTitleAndText.defaultProps = {
  h: 4,
  caption: null,
  bgColor: null,
  horizontal: false,
  flip: false,
};

export default ImageWithTitleAndText;
