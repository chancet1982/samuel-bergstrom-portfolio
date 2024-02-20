/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import SectionTitleAndText from "./SectionTitleAndText";
import SectionImage from "./SectionImage";
import colors from "../../theme/colors";
import breakpoints from "../../theme/breakpoints";
import { ElementColorContext } from "../../Context/ElementColorContext";
import Highlights from "./SectionHero/Highlights";
import Spacer from "./Spacer";
import padding from "../../theme/padding";
import { SPACER_SIZES } from "../../data/dictionaries/SPACER_SIZES";

function SectionHero({ bgColor, fgImage, caption, highlights }) {
  const { overline, title, h, text } = caption;
  const { imageUrl, mobileImageUrl, imageAlt } = fgImage;

  const ref = useRef(null);

  const [, setElementBgColor] = useContext(ElementColorContext);

  useEffect(() => {
    if (bgColor) {
      setElementBgColor(bgColor);
    }
  }, [setElementBgColor, bgColor]);

  const { width } = useWindowSize();
  const isTabletOrDesktop = width >= breakpoints.mobileLarge;

  return (
    <BackgroundWrapper bgColor={bgColor} ref={ref}>
      <SectionTitleAndText
        isSticky
        isCentered
        isFadingOnScroll
        isHalfScreen
        title={title}
        text={text}
        h={h}
      />
      <SectionImage
        imageUrl={imageUrl}
        mobileImageUrl={mobileImageUrl}
        imageAlt={imageAlt}
        isSticky
        limitMaxWidth
      />
      <BackgroundWrapper
        bgColor={bgColor}
        style={{ position: "relative", zIndex: "1" }}
      >
        <Spacer size={SPACER_SIZES.MEDIUM} />
        <Highlights items={highlights} bgColor={bgColor} />
        <Spacer size={SPACER_SIZES.MEDIUM} />
      </BackgroundWrapper>
    </BackgroundWrapper>
  );
}

SectionHero.propTypes = {
  bgColor: PropTypes.string,
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
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      renderAsList: PropTypes.bool,
      label: PropTypes.string,
    })
  ),
};

SectionHero.defaultProps = {
  bgColor: colors.offwhite,
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
