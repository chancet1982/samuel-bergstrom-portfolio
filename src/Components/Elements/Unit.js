/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useWindowSize } from "react-use";
import breakpoints from "../../theme/breakpoints";
import typography from "../../theme/typography";
import { ElementColorContext } from "../../Context/ElementColorContext";
import { SectionColorContext } from "../../Context/SectionColorContext";
import { ViewColorContext } from "../../Context/ViewColorContext";

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

const styleUnit = (h, size, lh, inc, mod) => `
  font-size: ${magnify(size, mod, 6 - h)}rem;
  line-height: ${decrease(lh, inc, 6 - h)};
`;

// 1 - Same size as H1, 2 -H2, ETC...
const { size, lh, inc, minMod, maxMod } = typography;

const StyledUnit = styled.span`
  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.disabled : colors.text.dark.disabled};

  font-weight: 300;

  ${({ h, width }) =>
    styleUnit(h, size, lh, inc, getMod(width, minMod, maxMod))}
`;

const Unit = ({ h, children }) => {
  const [hasViewBgColor] = useContext(ViewColorContext);
  const [hasSectionBgColor] = useContext(SectionColorContext);
  const context = useContext(ElementColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const hasElementBgColor = !context ? false : context[0];
  const light = hasViewBgColor || hasSectionBgColor || hasElementBgColor;
  const { width } = useWindowSize();

  return (
    <StyledUnit light={light} h={h} width={width}>
      {children}
    </StyledUnit>
  );
};

Unit.propTypes = {
  h: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Unit.defaultProps = {
  h: 3,
};

export default Unit;
