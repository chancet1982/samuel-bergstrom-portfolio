/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useWindowSize } from "react-use";
import breakpoints from "../../theme/breakpoints";
import typography from "../../theme/typography";

const magnify = (val, inc, times) => val * (1 + inc) ** Math.abs(times);

/* Not sure how this will work */
const decrease = (val, dec, times) => val - dec * times;
const { desktop, mobile } = breakpoints;

const getMod = (res, minMod, maxMod) =>
  res >= desktop
    ? maxMod
    : res < desktop && res >= mobile
    ? minMod + ((res - mobile) * (maxMod - minMod)) / (desktop - mobile)
    : minMod;

const styleValue = (h, size, lh, margin, inc, mod) => `
  font-size: ${magnify(size, mod, 6 - h)}rem;
  line-height: ${decrease(lh, inc, 6 - h)};
`;

// 1 - Same size as H1, 2 -H2, ETC...
const { size, lh, margin, inc, minMod, maxMod } = typography;

const StyledValue = styled.span`
  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.high : colors.text.dark.high};

  font-weight: 500;

  ${({ h, width }) =>
    styleValue(h, size, lh, margin, inc, getMod(width, minMod, maxMod))}
`;

const Value = ({ light, h, children }) => {
  const { width } = useWindowSize();
  return (
    <StyledValue light={light} h={h} width={width}>
      {children}
    </StyledValue>
  );
};

Value.propTypes = {
  h: PropTypes.number,
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
};

Value.defaultProps = {
  h: 1,
  light: false,
};

export default Value;
