/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import useBgColor from "../../utils/useBgColor";
import colors from "../../theme/colors";
import useFluidTypography from "../../utils/useHeadlinesFluidTypography";
import typography from "../../theme/typography";
import { textVariants } from "../../animations/animations";

const headlineFont = `
font-weight: 600;
font-family: ${typography.headlineFont};
`;

export const StyledH1 = styled(motion.h1)`
  max-width: 16ch;
  color: ${({ $light }) =>
    $light ? colors.text.light.high : colors.text.dark.high};
  ${({ $fluidType }) => $fluidType};
  ${headlineFont}
`;

export const StyledH2 = styled(motion.h2)`
  max-width: 40ch;
  color: ${({ $light }) =>
    $light ? colors.text.light.high : colors.text.dark.high};
  ${({ $fluidType }) => $fluidType};
  ${headlineFont}
`;

export const StyledH3 = styled(motion.h3)`
  max-width: 40ch;
  color: ${({ $light }) =>
    $light ? colors.text.light.high : colors.text.dark.high};
  ${({ $fluidType }) => $fluidType};
  ${headlineFont}
`;

export const StyledH4 = styled(motion.h4)`
  max-width: 48ch;
  color: ${({ $light }) =>
    $light ? colors.text.light.high : colors.text.dark.high};
  ${({ $fluidType }) => $fluidType};
  ${headlineFont}
`;

export const StyledH5 = styled(motion.h5)`
  max-width: 48ch;
  color: ${({ $light }) =>
    $light ? colors.text.light.high : colors.text.dark.high};
  ${({ $fluidType }) => $fluidType};
  ${headlineFont}
`;

/* TODO: Headlines dont seem to support withMargins. It should be flipped and hasMargins */
const Title = (props) => {
  const { h, children, withMargin } = props;
  const light = useBgColor();

  const fluidType = useFluidTypography(h, withMargin);

  const renderTitle = () => {
    switch (h) {
      case 0:
        return (
          <StyledH1
            $light={light}
            h={0}
            $fluidType={fluidType}
            variants={textVariants}
            {...props}
          >
            {children}
          </StyledH1>
        );
      case 1:
        return (
          <StyledH1
            $light={light}
            h={h}
            $fluidType={fluidType}
            variants={textVariants}
            {...props}
          >
            {children}
          </StyledH1>
        );
      case 2:
        return (
          <StyledH2
            $light={light}
            h={h}
            $fluidType={fluidType}
            variants={textVariants}
            {...props}
          >
            {children}
          </StyledH2>
        );
      case 3:
        return (
          <StyledH3
            $light={light}
            h={h}
            $fluidType={fluidType}
            variants={textVariants}
            {...props}
          >
            {children}
          </StyledH3>
        );
      case 4:
        return (
          <StyledH4
            $light={light}
            h={h}
            $fluidType={fluidType}
            variants={textVariants}
            {...props}
          >
            {children}
          </StyledH4>
        );
      case 5:
        return (
          <StyledH5
            $light={light}
            h={h}
            $fluidType={fluidType}
            variants={textVariants}
            {...props}
          >
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
  withMargin: PropTypes.bool,
};

Title.defaultProps = {
  h: 1,
  withMargin: true,
};

export default Title;
