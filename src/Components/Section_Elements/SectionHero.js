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
import Highlights from "./Cover/Highlights";
import padding from "../../theme/padding";

/*
TODO: 
1. Create a similar component to KeyFigures to be used in the new cover instead of keyfigures, perhaps make sure it doesnt animate.
4. Section image should be added support for mobileImageUrls
*/

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
        h={h}
      />
      <SectionImage
        imageUrl={imageUrl}
        mobileImageUrl={mobileImageUrl}
        imageAlt={imageAlt}
        limitMaxWidth
      />
      <Highlights items={highlights} bgColor={bgColor} />
      <SectionTitleAndText text={text} bgColor={bgColor} />
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
