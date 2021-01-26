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
const multiply = (val, times) => val * times;
const decrease = (val, dec, times) => val - dec * times;
const { desktop, mobile } = breakpoints;

const getMod = (res, minMod, maxMod) =>
  // eslint-disable-next-line no-nested-ternary
  res >= desktop
    ? maxMod
    : res < desktop && res >= mobile
    ? minMod + ((res - mobile) * (maxMod - minMod)) / (desktop - mobile)
    : minMod;

const styleQuote = (h, size, lh, margin, inc, mod) => `
  font-size: ${magnify(size, mod, 6 - h)}rem;
  margin-top: ${multiply(margin, 6 - h)}rem;
  margin-bottom: ${multiply(margin, 6 - h)}rem;
  line-height: ${decrease(lh, inc, 6 - h)};
`;

const { size, lh, margin, inc, minMod, maxMod } = typography;

const StyledQuote = styled.q`
  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.high : colors.text.dark.high};

  ${({ h, width }) =>
    styleQuote(h, size, lh, margin, inc, getMod(width, minMod, maxMod))}

  position: relative;
  font-style: italic;
  font-weight: 500;

  :before,
  :after {
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
    position: absolute;
    font-size: 4rem;
  }

  :before {
    content: open-quote;
    margin-left: -0.6em;
    margin-top: -0.4em;
  }

  :after {
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
    content: close-quote;
    bottom: 0;
    right: 0;
    margin-right: -0.6em;
    margin-bottom: -0.8em;
  }
`;

const Quote = ({ h, children }) => {
  const [hasViewBgColor] = useContext(ViewColorContext);
  const [hasSectionBgColor] = useContext(SectionColorContext);
  const context = useContext(ElementColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const hasElementBgColor = !context ? false : context[0];

  const light = hasViewBgColor || hasSectionBgColor || hasElementBgColor;

  const { width } = useWindowSize();
  return (
    <StyledQuote light={light} h={h} width={width}>
      {children}
    </StyledQuote>
  );
};

Quote.propTypes = {
  h: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Quote.defaultProps = {
  h: 2,
};

export default Quote;
