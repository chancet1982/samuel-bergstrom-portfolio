/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useIntersection } from "react-use";
import TitleAndText from "./TitleAndText";
import ImageWithCaption from "./ImageWithCaption";
import { IMAGE_WITH_CAPTION_SIZES } from "../data/dictionaries/IMAGE_WITH_CAPTION_SIZES";
import { variants } from "../animations/animations";
import padding from "../theme/padding";
import { motion } from "framer-motion";

const StyledImageWithTitleAndText = styled(motion.div)`
  display: flex;

  flex-direction: ${({ horizontal, flip }) =>
    horizontal
      ? flip
        ? "row-reverse"
        : "row"
      : flip
      ? "column-reverse"
      : "column"};
  align-items: center;

  > div {
    padding-left: ${padding.horizontal.double};
    padding-right: ${padding.horizontal.double};
  }
`;

const ImageWithTitleAndText = ({
  imageUrl,
  imageAlt,
  caption,
  title,
  text,
  bgColor,
  horizontal,
  flip,
}) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  return (
    <StyledImageWithTitleAndText
      ref={intersectionRef}
      initial="hidden"
      variants={variants}
      animate={inView ? "inView" : "hidden"}
      horizontal={horizontal}
      flip={flip}
    >
      <ImageWithCaption
        bgColor={bgColor}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        caption={caption}
        ignoreSize
        size={IMAGE_WITH_CAPTION_SIZES.MEDIUM_DOUBLE}
        disableAnimations
      />
      <TitleAndText h={3} title={title} padded disableAnimations>
        {text}
      </TitleAndText>
    </StyledImageWithTitleAndText>
  );
};

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
