/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "./Title";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";

const StyledTitleAndText = styled(motion.div)`
  /* removing the last bit of margin*/
  > *:last-child:not(h1, h2, h3, h4, h5) {
    margin-bottom: 0;
  }

  ${({ $isPadded }) =>
    $isPadded && {
      padding: `${padding.vertical.double} ${padding.horizontal.double}`,
    }}

  ${({ $isSticky }) =>
    $isSticky && {
      position: "sticky",
      top: "6vw",
      height: "fit-content",
    }}

  ${({ $isCentered }) =>
    $isCentered && {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      maxWidth: `calc(${sizes.contentWidthLimit}px * 0.64)`,
      margin: "0 auto",
    }}
`;

function TitleAndText({
  title,
  h,
  children,
  isSticky,
  isPadded,
  isCentered,
  ...rest
}) {
  return (
    <StyledTitleAndText
      $isSticky={isSticky}
      $isPadded={isPadded}
      $isCentered={isCentered}
      {...rest}
    >
      {title && <Title h={h}>{title}</Title>}
      {children && children}
    </StyledTitleAndText>
  );
}

TitleAndText.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
  isSticky: PropTypes.bool,
  isPadded: PropTypes.bool,
  isCentered: PropTypes.bool,
};

TitleAndText.defaultProps = {
  title: null,
  children: null,
  h: 1,
  isSticky: false,
  isPadded: false,
  isCentered: false,
};

export default TitleAndText;
