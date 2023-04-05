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

const StyledImageWithTitleAndText = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  max-width: ${sizes.contentWidthLimit}px;
  margin: 0 auto;
  grid-template-areas: "a b";
  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
  grid-gap: ${padding.outsideElements.double};
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

  @media (max-width: ${breakpoints.mobileLarge - 1}px) {
    top: 50%;
    margin-top: -50%;
  }

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

  @media (max-width: ${breakpoints.mobileLarge - 1}px) {
    min-height: 80vh;
  }

  @media (min-width: ${breakpoints.mobileLarge}px) {
    height: 80vh;
  }
`;

function ImageWithTitleAndText({ imageUrl, title, text, flip }) {
  return (
    <StyledImageWithTitleAndText
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {flip ? (
        <>
          <StyledImage $imageUrl={imageUrl} $flip />
          <StyledTitleAndText style={{ gridArea: "b" }} variants={textVariants}>
            <Title h={3}>{title}</Title>
            {text}
          </StyledTitleAndText>
        </>
      ) : (
        <>
          <StyledTitleAndText variants={textVariants}>
            <Title h={3}>{title}</Title>
            {text}
          </StyledTitleAndText>
          <StyledImage $imageUrl={imageUrl} />
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
};

ImageWithTitleAndText.defaultProps = {
  flip: false,
};

export default ImageWithTitleAndText;
