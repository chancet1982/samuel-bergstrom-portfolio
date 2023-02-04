import React from "react";
import { useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import TitleAndText from "../../Shared/TitleAndText";
import Overline from "../../Shared/Overline";

function Caption({ overline, title, text, h }) {
  const { height } = useWindowSize();
  const coverHeight = (height / 100) * 92;
  const { scrollY } = useScroll();
  const effectRange = [0, coverHeight * 0.4];

  const captionLineHeight = useTransform(scrollY, effectRange, [1, 1.2]);
  const captionOpacity = useTransform(scrollY, effectRange, [1, 0]);

  return (
    <>
      {overline && (
        <Overline
          style={{
            opacity: captionOpacity,
          }}
        >
          {overline}
        </Overline>
      )}
      <TitleAndText
        h={h}
        title={title}
        style={{
          opacity: captionOpacity,
          lineHeight: captionLineHeight,
        }}
      >
        {text}
      </TitleAndText>
    </>
  );
}

Caption.propTypes = {
  overline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
};

Caption.defaultProps = {
  overline: null,
  title: null,
  text: null,
  h: 1,
};

export default Caption;
