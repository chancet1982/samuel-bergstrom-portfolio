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
const { desktop, mobile } = breakpoints;

const useFluidTypography = (h = 1, withMargin = true) => {
  const { size, lh, margin, inc, minHMod, maxHMod } = typography;
  const { width } = useWindowSize();

  const getMod = (res) =>
    res >= desktop
      ? maxHMod
      : res < desktop && res >= mobile
      ? minHMod + ((res - mobile) * (maxHMod - minHMod)) / (desktop - mobile)
      : minHMod;

  return `
    font-size: ${magnify(size, getMod(width), 6 - h)}rem;
    line-height: ${decrease(lh, inc, 6 - h)};
    ${
      withMargin
        ? `
    margin-top: ${
      h === 1 ? 2 * multiply(margin, 6 - h) : multiply(margin, 6 - h)
    }rem;
    margin-bottom: ${multiply(margin, 6 - h)}rem;
    `
        : ` margin-top: 0; margin-bottom: 0;
    `
    }
  `;
};

export default useFluidTypography;
