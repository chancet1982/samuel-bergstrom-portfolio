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
  const { size, lh, inc, minHMod, maxHMod, ftMin, ftMax } = typography;
  const { width } = useWindowSize();

  const getMod = (res) =>
    res >= ftMax
      ? maxHMod
      : res < ftMax && res >= ftMin
      ? minHMod + ((res - ftMin) * (maxHMod - minHMod)) / (ftMax - ftMin)
      : minHMod;

  const currentFontSize = magnify(size, getMod(width), 6 - h);
  const currentLineHeight = decrease(lh, inc, 6 - h);

  return `
    font-size: ${currentFontSize}rem;
    line-height: ${currentLineHeight};
    ${
      withMargin
        ? `
    margin-top: ${currentLineHeight}em;
    margin-bottom: 0;
    `
        : ` margin-top: 0; margin-bottom: 0;
    `
    }
  `;
};

export default useFluidTypography;
