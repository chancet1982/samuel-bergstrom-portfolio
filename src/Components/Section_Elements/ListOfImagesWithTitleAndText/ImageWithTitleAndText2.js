/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "../../Shared/Title";
import padding from "../../../theme/padding";
import breakpoints from "../../../theme/breakpoints";
import { textVariants } from "../../../animations/animations";
import sizes from "../../../theme/sizes";
import Image from "../../Shared/Image";

const StyledImageWithTitleAndText = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: ${sizes.contentWidthLimit}px;
  margin: 0 auto;
  grid-template-areas: "a b";
  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
  grid-gap: max(
    ${padding.outsideElements.single},
    ${padding.insideElements.single}
  );
  box-sizing: border-box;

  @media (max-width: ${breakpoints.mobileLarge - 1}px) {
    position: relative;
  }
`;

const StyledImage = styled(motion.div)`
  height: 80vh;
  background-repeat: no-repeat;
  background-size: auto 100%;
  width: 50%;
  position: absolute;
  max-width: calc(100% - (240px + 2 * 4vmin));

  ${({ $imageUrl }) =>
    $imageUrl && {
      backgroundImage: `url(/${$imageUrl})`,
    }}

  background-position: ${({ $flip }) => ($flip ? "right" : "left")};
  left: ${({ $flip }) => ($flip ? "0" : "auto")};
  right: ${({ $flip }) => ($flip ? "auto" : "0")};
`;

const StyledTitleAndText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  grid-area: ${({ $flip }) => ($flip ? "b" : "a")};
  margin-right: ${({ $flip }) => ($flip ? 0 : padding.outsideElements.double)};
  margin-left: ${({ $flip }) => ($flip ? padding.outsideElements.double : 0)};
  min-width: 240px;

  @media (width < ${breakpoints.mobileLarge}px) {
    min-height: 80vh;
  }

  @media (width >= ${breakpoints.mobileLarge}px) {
    height: 80vh;
  }

  ${({ $stickyText }) =>
    $stickyText && {
      display: "block",
      position: "sticky",
      top: padding.insideElements.double,
      paddingTop: padding.insideElements.double,
      paddingBottom: padding.insideElements.double,
      height: "fit-content !important",
      minHeight: "auto",
    }}
`;

function ImageWithTitleAndText({
  imageUrl,
  title,
  text,
  flip,
  plainImage,
  stickyText,
}) {
  return (
    <StyledImageWithTitleAndText
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {flip ? (
        <>
          {plainImage ? (
            <Image imageUrl={`/${imageUrl}`} />
          ) : (
            <StyledImage $imageUrl={imageUrl} $flip />
          )}

          <StyledTitleAndText
            $flip={flip}
            variants={textVariants}
            $stickyText={stickyText}
          >
            <Title h={3}>{title}</Title>
            {text}
          </StyledTitleAndText>
        </>
      ) : (
        <>
          <StyledTitleAndText
            $flip={flip}
            variants={textVariants}
            $stickyText={stickyText}
          >
            <Title h={3}>{title}</Title>
            {text}
          </StyledTitleAndText>
          {plainImage ? (
            <Image imageUrl={`/${imageUrl}`} />
          ) : (
            <StyledImage $imageUrl={imageUrl} />
          )}
        </>
      )}
    </StyledImageWithTitleAndText>
  );
}

ImageWithTitleAndText.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  flip: PropTypes.bool,
  plainImage: PropTypes.bool,
  stickyText: PropTypes.bool,
};

ImageWithTitleAndText.defaultProps = {
  flip: false,
  plainImage: false,
  stickyText: false,
};

export default ImageWithTitleAndText;
