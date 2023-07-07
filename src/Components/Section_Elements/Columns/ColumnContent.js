/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import TitleAndText from "../../Shared/TitleAndText";
import ImageWithCaption from "../../Shared/ImageWithCaption";
import { IMAGE_WITH_CAPTION_SIZES } from "../../../data/dictionaries/IMAGE_WITH_CAPTION_SIZES";
import { ElementColorContext } from "../../../Context/ElementColorContext";

const StyledColumnContent = styled(motion.div)`
  display: flex;

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
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

function ColumnContent({
  imageUrl,
  imageAlt,
  caption,
  overline,
  title,
  h,
  text,
  bgColor,
  horizontal,
  flip,
  isCentered,
}) {
  const [, setElementBgColor] = useContext(ElementColorContext);

  useEffect(() => {
    if (bgColor) {
      setElementBgColor(bgColor);
    }
  }, [setElementBgColor, bgColor]);

  return (
    <StyledColumnContent
      $horizontal={horizontal}
      $flip={flip}
      $bgColor={bgColor}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {imageUrl && (
        <ImageWithCaption
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          caption={caption}
          ignoreSize
          size={IMAGE_WITH_CAPTION_SIZES.MEDIUM_DOUBLE}
        />
      )}
      {title || text ? (
        <TitleAndText
          overline={overline}
          title={title}
          h={h}
          isCentered={isCentered}
        >
          {text}
        </TitleAndText>
      ) : null}
    </StyledColumnContent>
  );
}

ColumnContent.propTypes = {
  bgColor: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  caption: PropTypes.string,
  overline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  horizontal: PropTypes.bool,
  flip: PropTypes.bool,
  isCentered: PropTypes.bool,
};

ColumnContent.defaultProps = {
  h: 4,
  caption: null,
  bgColor: null,
  horizontal: false,
  flip: false,
  overline: null,
  title: null,
  text: null,
  imageAlt: null,
  imageUrl: null,
  isCentered: false,
};

export default ColumnContent;
