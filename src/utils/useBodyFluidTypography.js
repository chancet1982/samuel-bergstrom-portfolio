/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React from "react";
import { useWindowSize } from "react-use";
import typography from "../theme/typography";

const magnify = (val, inc, times) => val * (1 + inc) ** Math.abs(times);

const multiply = (val, times) => val * times;

/* Not sure how this will work */
const decrease = (val, dec, times) => val - dec * times;

const useFluidTypography = (pSize = 2, withMargin = true) => {
  const { minSize, maxSize, lh, inc, minBMod, maxBMod, ftMax, ftMin } =
    typography;
  const { width } = useWindowSize();

  const getSize = (res) =>
    res >= ftMax
      ? maxSize
      : res < ftMax && res >= ftMin
      ? minSize + ((res - ftMin) * (maxSize - minSize)) / (ftMax - ftMin)
      : minSize;

  const getMod = (res) =>
    res >= ftMax
      ? maxBMod
      : res < ftMax && res >= ftMin
      ? minBMod + ((res - ftMin) * (maxBMod - minBMod)) / (ftMax - ftMin)
      : minBMod;

  const currentFontSize =
    pSize === 1 ? 1 : magnify(getSize(width), getMod(width), pSize - 2);
  const currentLineHeight = decrease(lh, inc, pSize - 2);
  const currentMargin = currentLineHeight * 0.5;

  return `
    font-size: ${currentFontSize}rem;
    line-height: ${currentLineHeight};
    ${
      !!withMargin &&
      `
    margin-top: ${currentMargin}em;
    margin-bottom: ${currentMargin}em;
    `
    }}
  `;
};

export default useFluidTypography;
