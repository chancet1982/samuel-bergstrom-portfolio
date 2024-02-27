/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "../../../theme/colors";
import padding from "../../../theme/padding";
import sizes from "../../../theme/sizes";
import breakpoints from "../../../theme/breakpoints";

const StyledBackground = styled(motion.div)`
  height: 100%;
  width: 100%;

  ${({ $bgColor }) =>
    $bgColor && {
      background: $bgColor || colors.offwhite,
    }}

  ${({ $isPadded }) =>
    $isPadded && {
      paddingTop: padding.outsideElements.double,
      paddingBottom: padding.outsideElements.double,
    }}

  @media (min-width: ${breakpoints.desktop}px) {
    ${({ $limitMaxWidth }) =>
      $limitMaxWidth && {
        maxWidth: `${sizes.contentWidthLimit}px`,
        margin: "0 auto",
      }}
  }
`;

function BackgroundColor({
  bgColor,
  limitMaxWidth,
  children,
  isPadded,
  ...rest
}) {
  return (
    <StyledBackground
      $bgColor={bgColor}
      $limitMaxWidth={limitMaxWidth}
      $isPadded={isPadded}
      {...rest}
    >
      {children}
    </StyledBackground>
  );
}

BackgroundColor.propTypes = {
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  limitMaxWidth: PropTypes.bool,
  isPadded: PropTypes.bool,
};

BackgroundColor.defaultProps = {
  limitMaxWidth: false,
  isPadded: true,
};

export default BackgroundColor;