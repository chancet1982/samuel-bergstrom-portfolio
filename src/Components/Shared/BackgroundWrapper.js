/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";
import BackgroundVideo from "./BackgroundWrapper/BackgroundVideo";
import BackgroundColor from "./BackgroundWrapper/BackgroundColor";
import BackgroundImage from "./BackgroundWrapper/BackgroundImage";
import BackgroundImageWithScrollParallax from "./BackgroundWrapper/BackgroundImageWithScrollParallax";
import BackgroundImageWithScrollScale from "./BackgroundWrapper/BackgroundImageWithScrollScale";

function BackgroundWrapper({
  bgColor,
  bgMedia,
  limitMaxWidth,
  children,
  isPadded,
  isParallaxOnScroll,
  isScaleOnScroll,
  isInHero,
  ...rest
}) {
  const mediaUrl = bgMedia ? bgMedia.mediaUrl : null;
  /* TODO: return the right wrapper as well based on these conditions */
  /* TODO: test if Video is working */
  const figureOutWhatTypeOfWrapperIsNeeded = () => {
    if (bgMedia) {
      if (bgMedia.type === BG_MEDIA_TYPES.VIDEO && mediaUrl) {
        return (
          <BackgroundVideo
            bgMedia={bgMedia}
            limitMaxWidth={limitMaxWidth}
            isPadded={isPadded}
            {...rest}
          >
            {children}
          </BackgroundVideo>
        );
      }
      if (mediaUrl && isParallaxOnScroll) {
        return (
          <BackgroundImageWithScrollParallax
            bgMedia={bgMedia}
            limitMaxWidth={limitMaxWidth}
            isPadded={isPadded}
            isInHero={isInHero}
            {...rest}
          >
            {children}
          </BackgroundImageWithScrollParallax>
        );
      }
      if (mediaUrl && isScaleOnScroll) {
        return (
          <BackgroundImageWithScrollScale
            bgMedia={bgMedia}
            limitMaxWidth={limitMaxWidth}
            isPadded={isPadded}
            isInHero={isInHero}
            {...rest}
          >
            {children}
          </BackgroundImageWithScrollScale>
        );
      }
      return (
        <BackgroundImage
          bgMedia={bgMedia}
          limitMaxWidth={limitMaxWidth}
          isPadded={isPadded}
          {...rest}
        >
          {children}
        </BackgroundImage>
      );
    }
    if (bgColor && bgColor !== undefined) {
      return (
        <BackgroundColor
          bgColor={bgColor}
          limitMaxWidth={limitMaxWidth}
          isPadded={isPadded}
          {...rest}
        >
          {children}
        </BackgroundColor>
      );
    }
    return { children };
  };

  return figureOutWhatTypeOfWrapperIsNeeded();
}

BackgroundWrapper.propTypes = {
  bgColor: PropTypes.string,
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  limitMaxWidth: PropTypes.bool,
  isPadded: PropTypes.bool,
  isParallaxOnScroll: PropTypes.bool,
  isScaleOnScroll: PropTypes.bool,
  isInHero: PropTypes.bool,
};

BackgroundWrapper.defaultProps = {
  bgColor: null,
  bgMedia: null,
  limitMaxWidth: false,
  isPadded: true,
  isParallaxOnScroll: false,
  isScaleOnScroll: false,
  isInHero: false,
};

export default BackgroundWrapper;
