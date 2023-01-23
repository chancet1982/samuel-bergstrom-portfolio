/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "./Title";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";

const StyledTitleAndText = styled(motion.div)`
  ${({ $isPadded }) =>
    $isPadded && {
      padding: `${padding.vertical.double} ${padding.horizontal.double}`,
    }}
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

const StyledImageWithTitleAndText = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  max-width: 1280px;
  margin: 0 auto;
  grid-template-areas: "a b";
  padding: 0 ${padding.horizontal.double};
  position: relative;
`;

const StyledImage = styled(motion.div)`
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
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

/* TODO: StyledTitleAndText doesnt get props (for whatever reason) */
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
          <StyledTitleAndText $isPadded style={{ gridArea: "b" }}>
            <Title h={3}>{title}</Title>
            {text}
          </StyledTitleAndText>
        </>
      ) : (
        <>
          <StyledTitleAndText $isPadded>
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
