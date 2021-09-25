/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React from "react";
import { useWindowSize } from "react-use";
import breakpoints from "../theme/breakpoints";
import typography from "../theme/typography";

const magnify = (val, inc, times) => val * (1 + inc) ** Math.abs(times);

const multiply = (val, times) => val * times;

/* Not sure how this will work */
const decrease = (val, dec, times) => val - dec * times;
const { ftMax, ftMin } = breakpoints;

const useFluidTypography = (pSize = 2, withMargin = true) => {
  const { size, lh, margin, inc, minBMod, maxBMod } = typography;
  const { width } = useWindowSize();

  const getMod = (res) =>
    res >= ftMax
      ? maxBMod
      : res < ftMax && res >= ftMin
      ? minBMod + ((res - ftMin) * (maxBMod - minBMod)) / (ftMax - ftMin)
      : minBMod;

  return `
    font-size: ${pSize === 1 ? 1 : magnify(size, getMod(width), pSize - 2)}rem;
    line-height: ${decrease(lh, inc, pSize - 2)};
    ${
      !!withMargin &&
      `
    margin-top: ${multiply(margin, pSize)}rem;
    margin-bottom: ${multiply(margin, pSize * 3)}rem;
    `
    }}
  `;
};

export default useFluidTypography;
