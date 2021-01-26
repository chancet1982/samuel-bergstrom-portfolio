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

const multiply = (val, times) => val * times;

/* Not sure how this will work */
const decrease = (val, dec, times) => val - dec * times;
const { desktop, mobile } = breakpoints;

const getMod = (res, minMod, maxMod) =>
  res >= desktop
    ? maxMod
    : res < desktop && res >= mobile
    ? minMod + ((res - mobile) * (maxMod - minMod)) / (desktop - mobile)
    : minMod;

const styleTitle = (h, size, lh, margin, inc, mod) => `
  font-size: ${magnify(size, mod, 6 - h)}rem;
  margin-top: ${
    h === 1 ? 2 * multiply(margin, 6 - h) : multiply(margin, 6 - h)
  }rem;
  margin-bottom: ${multiply(margin, 6 - h)}rem;
  line-height: ${decrease(lh, inc, 6 - h)};
  font-weight: 600;
  font-family: 'Lora', serif;
`;

const { size, lh, margin, inc, minMod, maxMod } = typography;

export const StyledH1 = styled.h1`
  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.high : colors.text.dark.high};

  ${({ h, width }) =>
    styleTitle(h, size, lh, margin, inc, getMod(width, minMod, maxMod))}
`;

export const StyledH2 = styled.h2`
  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.high : colors.text.dark.high};

  ${({ h, width }) =>
    styleTitle(h, size, lh, margin, inc, getMod(width, minMod, maxMod))}
`;

export const StyledH3 = styled.h3`
  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.high : colors.text.dark.high};

  ${({ h, width }) =>
    styleTitle(h, size, lh, margin, inc, getMod(width, minMod, maxMod))}
`;

export const StyledH4 = styled.h4`
  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.high : colors.text.dark.high};

  ${({ h, width }) =>
    styleTitle(h, size, lh, margin, inc, getMod(width, minMod, maxMod))}
`;

export const StyledH5 = styled.h5`
  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.high : colors.text.dark.high};

  ${({ h, width }) =>
    styleTitle(h, size, lh, margin, inc, getMod(width, minMod, maxMod))}
`;

const Title = ({ h, children, padding }) => {
  const { width } = useWindowSize();

  const viewContext = useContext(ViewColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const hasViewBgColor = !viewContext ? false : viewContext[0];

  const sectionContext = useContext(SectionColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const hasSectionBgColor = !sectionContext ? false : sectionContext[0];

  const elementContext = useContext(ElementColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const hasElementBgColor = !elementContext ? false : elementContext[0];

  const light = hasViewBgColor || hasSectionBgColor || hasElementBgColor;

  const renderTitle = () => {
    switch (h) {
      case 1:
        return (
          <StyledH1 light={light} h={h} padding={padding} width={width}>
            {children}
          </StyledH1>
        );
      case 2:
        return (
          <StyledH2 light={light} h={h} padding={padding} width={width}>
            {children}
          </StyledH2>
        );
      case 3:
        return (
          <StyledH3 light={light} h={h} padding={padding} width={width}>
            {children}
          </StyledH3>
        );
      case 4:
        return (
          <StyledH4 light={light} h={h} padding={padding} width={width}>
            {children}
          </StyledH4>
        );
      case 5:
        return (
          <StyledH5 light={light} h={h} padding={padding} width={width}>
            {children}
          </StyledH5>
        );
      default:
        return null;
    }
  };

  return renderTitle();
};

Title.propTypes = {
  h: PropTypes.number,
  children: PropTypes.node.isRequired,
  padding: PropTypes.bool,
};

Title.defaultProps = {
  h: 1,
  padding: false,
};

export default Title;
