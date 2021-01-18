import React from "react";
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import TitleAndText from "./TitleAndText";
import Overline from "./Overline";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import Image from "./Elements/Image";
import Blinds from "./Blinds";

const StyledCover = styled(motion.div)`
  height: ${({
    theme: {
      sizes: { large },
    },
  }) => large};
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
`;

const StyledCoverImage = styled(motion.div)`
  grid-column: 2 / span 2;
  overflow: hidden;
  @media (max-width: ${breakpoints.desktop}px) {
    grid-column: 1 / span 3;
  }

  ${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    }};

  ${({ imageUrl }) =>
    imageUrl && {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
`;

const StyledCaption = styled(motion.div)`
  grid-column: 1 / span 3;
  height: 100%;
  padding-top: ${padding.vertical.quadruple};
  padding-bottom: ${padding.vertical.double};

  @media (min-width: ${breakpoints.desktop}px) {
    grid-column: 1 / span 1;
    padding-top: 0;
  }

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  background-color: white;
`;

// TODO: parallax effect on the cover in the landing page  needs some fine-tuning
const Cover = ({
  overline,
  title,
  text,
  imageUrl,
  bgColor,
  parallax,
  sticky,
}) => {
  const { scrollY } = useViewportScroll();
  const { height } = useWindowSize();

  const coverHeight = (height / 100) * 92;
  const scrollYrange = [0, coverHeight];

  /* scale image on scroll */
  const scale = 1.6; // Magic number
  const scaleImageRange = [1, scale];
  const scaleImage = useTransform(scrollY, scrollYrange, scaleImageRange);

  /* move image on scroll */
  const proximity = 2; // 1 - normal scroll speed, 2 - faster scrolling, < 1 further away objects
  const yImageRange = sticky ? [0, coverHeight] : [0, -coverHeight * proximity];
  const parallaxImage = useTransform(scrollY, scrollYrange, yImageRange);

  const imageEffect = parallax ? parallaxImage : scaleImage;
  /* const imageEffect = useSpring(parallax ? parallaxImage : scaleImage, {
    stiffness: 400,
    damping: 10,
  }); */

  const coverVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const captionVariants = {
    hidden: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.3,
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.6,
        duration: 0.6,
      },
    },
  };

  return (
    <StyledCover
      bgColor={bgColor}
      variants={coverVariants}
      initial="hidden"
      animate="animate"
    >
      <StyledCaption variants={captionVariants}>
        <Overline disableAnimations>{overline}</Overline>
        <TitleAndText h={1} title={title} disableAnimations>
          {text}
        </TitleAndText>
      </StyledCaption>

      <StyledCoverImage bgColor={bgColor} variants={imageVariants}>
        <Image
          imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
          style={parallax ? { y: imageEffect } : { scale: imageEffect }}
        />
      </StyledCoverImage>

      <Blinds />
    </StyledCover>
  );
};

Cover.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  imageUrl: PropTypes.string,
  bgColor: PropTypes.string,
  overline: PropTypes.string,
  parallax: PropTypes.bool,
  sticky: PropTypes.bool, // requires parallax to be enabled but will make the object "resist" the scrolling
};

Cover.defaultProps = {
  overline: null,
  title: null,
  text: null,
  imageUrl: null,
  bgColor: null,
  parallax: false,
  sticky: false,
};

export default Cover;
