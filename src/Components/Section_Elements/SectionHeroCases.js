import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import SectionTitleAndText from "./SectionTitleAndText";
import SectionImage from "./SectionImage";
import colors from "../../theme/colors";
import { ElementColorContext } from "../../Context/ElementColorContext";
import Highlights from "./SectionHeroCases/Highlights";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";

function SectionHero({ bgColor, bgMedia, fgImage, caption, highlights }) {
  const { title, h, text } = caption;
  const { isParallaxOnScroll } = bgMedia || {};
  const { imageUrl, mobileImageUrl, imageAlt } = fgImage || {};

  const [, setElementBgColor] = useContext(ElementColorContext);

  useEffect(() => {
    if (bgColor) {
      setElementBgColor(bgColor);
    }
  }, [setElementBgColor, bgColor]);
  return (
    <BackgroundWrapper
      bgMedia={bgMedia}
      bgColor={bgColor}
      isScaleOnScroll={!isParallaxOnScroll}
      isParallaxOnScroll={isParallaxOnScroll}
      isInHero
      isPadded={false}
    >
      <SectionTitleAndText
        isSticky
        isCentered
        isFadingOnScroll
        isHalfScreen
        title={title}
        text={text}
        h={h}
      />
      {fgImage && (
        <SectionImage
          imageUrl={imageUrl}
          mobileImageUrl={mobileImageUrl}
          imageAlt={imageAlt}
          limitMaxWidth
        />
      )}

      <div style={{ position: "relative", zIndex: "1" }}>
        <Highlights columns={highlights} bgColor={bgColor} />
      </div>
    </BackgroundWrapper>
  );
}

SectionHero.propTypes = {
  bgColor: PropTypes.string,
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
    isParallaxOnScroll: PropTypes.bool,
    isInHero: PropTypes.bool,
  }),
  fgImage: PropTypes.shape({
    imageUrl: PropTypes.string,
    mobileImageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
  }),
  caption: PropTypes.shape({
    overline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    h: PropTypes.number,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }),
  highlights: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.string),
        ]),
        renderAsList: PropTypes.bool,
        label: PropTypes.string,
      })
    )
  ),
};

SectionHero.defaultProps = {
  bgColor: colors.offwhite,
  bgMedia: null,
  fgImage: null,
  caption: {
    overline: "defualt overline",
    title: "default title",
    h: 1,
    text: "default text",
  },
  highlights: [],
};

export default SectionHero;
