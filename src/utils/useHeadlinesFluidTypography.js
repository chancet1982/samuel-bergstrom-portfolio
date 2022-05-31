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

const useFluidTypography = (h = 1, withMargin = true) => {
  const { size, lh, inc, minHMod, maxHMod } = typography;
  const { width } = useWindowSize();

  const getMod = (res) =>
    res >= ftMax
      ? maxHMod
      : res < ftMax && res >= ftMin
      ? minHMod + ((res - ftMin) * (maxHMod - minHMod)) / (ftMax - ftMin)
      : minHMod;

  const currentMod = getMod(width);
  return `
    font-size: ${magnify(size, currentMod, 6 - h)}rem;
    line-height: ${decrease(lh, inc, 6 - h)};
    ${
      withMargin
        ? `
    margin-top: ${
      h === 1 ? 2 * multiply(currentMod, 6 - h) : multiply(currentMod, 6 - h)
    }rem;
    margin-bottom: ${multiply(currentMod, 6 - h)}rem;
    `
        : ` margin-top: 0; margin-bottom: 0;
    `
    }
  `;
};

export default useFluidTypography;
