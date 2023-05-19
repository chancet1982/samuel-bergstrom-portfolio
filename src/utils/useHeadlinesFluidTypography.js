/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React from "react";
import { useWindowSize } from "react-use";
import typography from "../theme/typography";

const magnify = (val, inc, times) => val * (1 + inc) ** Math.abs(times);

const multiply = (val, times) => val * times;

/* Not sure how this will work */
const decrease = (val, dec, times) => val - dec * times;

const useFluidTypography = (h = 1, withMargin = true) => {
  const { minSize, maxSize, lh, inc, minHMod, maxHMod, ftMin, ftMax } =
    typography;
  const { width } = useWindowSize();

  const getSize = () =>
    width >= ftMax
      ? maxSize
      : width < ftMax && width >= ftMin
      ? minSize + ((width - ftMin) * (maxSize - minSize)) / (ftMax - ftMin)
      : minSize;

  const getMod = () =>
    width >= ftMax
      ? maxHMod
      : width < ftMax && width >= ftMin
      ? minHMod + ((width - ftMin) * (maxHMod - minHMod)) / (ftMax - ftMin)
      : minHMod;

  const currentFontSize = magnify(getSize(), getMod(), 6 - h);
  const currentLineHeight = decrease(lh, inc, 6 - h);
  const currentMarginTop = currentLineHeight * 0.75;

  return `
    font-size: ${currentFontSize}rem;
    line-height: ${currentLineHeight};
    ${
      withMargin
        ? `
    margin-top: ${currentMarginTop}em;
    margin-bottom: ${currentMarginTop / 2}em;
    `
        : ` margin-top: 0; margin-bottom: 0;
    `
    }
  `;
};

export default useFluidTypography;
