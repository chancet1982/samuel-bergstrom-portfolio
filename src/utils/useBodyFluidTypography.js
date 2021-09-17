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

const useFluidTypography = (pSize = 2, withMargin = true) => {
  const { size, lh, margin, inc, minBMod, maxBMod } = typography;
  const { width } = useWindowSize();

  const getMod = (res) =>
    res >= desktop
      ? maxBMod
      : res < desktop && res >= mobile
      ? minBMod + ((res - mobile) * (maxBMod - minBMod)) / (desktop - mobile)
      : minBMod;

  return `
    font-size: ${size === 1 ? 0.8 : magnify(size, getMod(width), pSize - 2)}rem;
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
