/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useBgColor from "../../utils/useBgColor";
import colors from "../../theme/colors";
import useFluidTypography from "../../utils/useHeadlinesFluidTypography";
import typography from "../../theme/typography";

const headlineFont = `
font-weight: 600;
font-family: ${typography.headlineFont};
`;

export const StyledH1 = styled.h1`
  color: ${({ light }) =>
    light ? colors.text.light.high : colors.text.dark.high};
  ${({ fluidType }) => fluidType};
  ${headlineFont}
`;

export const StyledH2 = styled.h2`
  color: ${({ light }) =>
    light ? colors.text.light.high : colors.text.dark.high};
  ${({ fluidType }) => fluidType};
  ${headlineFont}
`;

export const StyledH3 = styled.h3`
  color: ${({ light }) =>
    light ? colors.text.light.high : colors.text.dark.high};
  ${({ fluidType }) => fluidType};
  ${headlineFont}
`;

export const StyledH4 = styled.h4`
  color: ${({ light }) =>
    light ? colors.text.light.high : colors.text.dark.high};
  ${({ fluidType }) => fluidType};
  ${headlineFont}
`;

export const StyledH5 = styled.h5`
  color: ${({ light }) =>
    light ? colors.text.light.high : colors.text.dark.high};
  ${({ fluidType }) => fluidType};
  ${headlineFont}
`;

const Title = ({ h, children, padding }) => {
  const light = useBgColor();

  const fluidType = useFluidTypography(h);

  const renderTitle = () => {
    switch (h) {
      case 1:
        return (
          <StyledH1 light={light} h={h} padding={padding} fluidType={fluidType}>
            {children}
          </StyledH1>
        );
      case 2:
        return (
          <StyledH2 light={light} h={h} padding={padding} fluidType={fluidType}>
            {children}
          </StyledH2>
        );
      case 3:
        return (
          <StyledH3 light={light} h={h} padding={padding} fluidType={fluidType}>
            {children}
          </StyledH3>
        );
      case 4:
        return (
          <StyledH4 light={light} h={h} padding={padding} fluidType={fluidType}>
            {children}
          </StyledH4>
        );
      case 5:
        return (
          <StyledH5 light={light} h={h} padding={padding} fluidType={fluidType}>
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
