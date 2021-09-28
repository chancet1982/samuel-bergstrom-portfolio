import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import {
  motion,
  useViewportScroll,
  useTransform,
  /* useSpring, */
} from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import TitleAndText from "../Elements/TitleAndText";
import Overline from "../Elements/Overline";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import Image from "../Elements/Image";
import Blinds from "../ScreenTransition/Blinds";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";

const StyledCover = styled(motion.div)`
  height: ${({
    theme: {
      sizes: { large },
    },
  }) => large};
  position: relative;
  display: flex;
  overflow: hidden;

  ${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    }};
`;

const StyledCoverImage = styled(motion.div)`
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ imageUrl }) =>
    imageUrl && {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "",
      backgroundPosition: "center",
    }}
`;

const StyledFgImage = styled(motion.img)`
  position: absolute;
  right: 0;
  bottom: -10%;
  height: 80%;
  left: 20%;

  @media (min-width: ${breakpoints.mobileLarge}px) {
    left: 50%;
  }
`;

const StyledCaption = styled(motion.div)`
  height: 100%;
  max-width: ${breakpoints.contentWidthLimit}px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding-top: ${padding.vertical.double};
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  z-index: 1;
  width: 100%;

  h1 {
    max-width: 15ch;
  }

  p {
    @media (max-width: ${breakpoints.mobileLarge - 1}px) {
      max-width: 15ch;
    }

    @media (min-width: ${breakpoints.mobileLarge}px) and (max-width: ${breakpoints.tablet -
      1}px) {
      max-width: 20ch;
    }

    @media (min-width: ${breakpoints.tablet}px) {
      max-width: 30ch;
    }
  }

  @media (min-width: ${breakpoints.tablet}px) {
    justify-content: center;
    padding-top: 0;
    padding-left: ${padding.horizontal.double};
    padding-right: ${padding.horizontal.double};
  }
`;

const LandingPageCover = ({
  overline,
  title,
  text,
  bgImageUrl,
  imageUrl,
  bgColor,
}) => {
  const { scrollY } = useViewportScroll();
  const { height } = useWindowSize();
  const coverHeight = (height / 100) * 92;
  const imageOffset = (height / 100) * 20; // -20vh
  const [, setLight] = useContext(ElementColorContext);
  const { width } = useWindowSize();
  const isMobile = width < breakpoints.desktop;
  const amountOfBlinds = isMobile ? 1 : 3;
  const delayPerBlind = 0.2;

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    setLight !== null &&
      setLight(
        bgColor !== null &&
          bgColor !== colors.offwhite &&
          bgColor !== colors.primaryShade
      );
  }, [setLight, bgColor]);

  const imageParallax = useTransform(
    scrollY,
    [0, coverHeight],
    [0, -imageOffset]
  );

  const captionParallax = useTransform(
    scrollY,
    [0, coverHeight],
    [0, -coverHeight]
  );

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
        delay: 1.7 + amountOfBlinds * delayPerBlind,
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
        delay: 2 + amountOfBlinds * delayPerBlind,
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
      <StyledCoverImage variants={imageVariants}>
        <Image imageUrl={`${process.env.PUBLIC_URL}/${bgImageUrl}`} />
        <StyledFgImage
          variants={imageVariants}
          src={`${process.env.PUBLIC_URL}/${imageUrl}`}
          alt="Just a picture of me looking inteligent"
          style={{ y: imageParallax }}
        />
      </StyledCoverImage>

      <StyledCaption variants={captionVariants} style={{ y: captionParallax }}>
        {overline && <Overline disableAnimations>{overline}</Overline>}
        <TitleAndText h={1} title={title} disableAnimations>
          {text}
        </TitleAndText>
      </StyledCaption>

      <Blinds amountOfBlinds={amountOfBlinds} />
    </StyledCover>
  );
};

LandingPageCover.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  imageUrl: PropTypes.string,
  bgImageUrl: PropTypes.string,
  bgColor: PropTypes.string,
  overline: PropTypes.string,
};

LandingPageCover.defaultProps = {
  overline: null,
  title: null,
  text: null,
  imageUrl: null,
  bgImageUrl: null,
  bgColor: null,
};

export default LandingPageCover;
