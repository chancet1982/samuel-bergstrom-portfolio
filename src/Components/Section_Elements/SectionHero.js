import React, { useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import SectionTitleAndText from "./SectionTitleAndText";
import SectionImage from "./SectionImage";
import colors from "../../theme/colors";
import { ElementColorContext } from "../../Context/ElementColorContext";
import Highlights from "./SectionHero/Highlights";

function SectionHero({ bgColor, fgImage, caption, highlights }) {
  const { title, h, text } = caption;
  const { imageUrl, mobileImageUrl, imageAlt } = fgImage;

  const ref = useRef(null);

  const [, setElementBgColor] = useContext(ElementColorContext);

  useEffect(() => {
    if (bgColor) {
      setElementBgColor(bgColor);
    }
  }, [setElementBgColor, bgColor]);

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
        limitMaxWidth
      />
      <BackgroundWrapper
        bgColor={bgColor}
        style={{ position: "relative", zIndex: "1" }}
      >
        <Highlights columns={highlights} bgColor={bgColor} />
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
