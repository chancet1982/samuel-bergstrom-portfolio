/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  /* useSpring, */
} from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import TitleAndText from "../Shared/TitleAndText";
import Overline from "../Shared/Overline";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";
import Image from "../Shared/Image";
import { CLIENTS } from "../../data/dictionaries/CLIENTS";
import { useScrollDirection } from "../../utils/useScrollDirection";

const StyledCover = styled(motion.div)`
  height: ${({
    theme: {
      sizes: { large },
    },
  }) => large};
  position: relative;
  display: flex;
  overflow: hidden;
  background-image: url("/assets/coverBg.jpg");
  background-size: cover;
`;

const StyledCoverImage = styled(motion.img)`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 104vw;
  left: 40vw;
  display: none;

  @media (min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.mobileLarge -
    1}px) {
    height: 128vw;
    left: 32vw;
  }

  @media (min-width: ${breakpoints.mobileLarge}px) and (max-width: ${breakpoints.tablet -
    1}px) {
    height: 104vw;
    max-height: 900px;
    left: 32vw;
  }

  @media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop -
    1}px) {
    height: 88vw;
    max-height: 900px;
    left: 40vw;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    height: 64vw;
    max-height: 1024px;
    left: 48vw;
  }
`;

const StyledCaption = styled(motion.div)`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  padding-top: ${padding.vertical.double};
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  z-index: 1;
  width: 100%;
  /*background: linear-gradient(
    72deg,
    rgba(244, 244, 244, 1) 0%,
    rgba(244, 244, 244, 0) 100%
  );*/

  h1 {
    max-width: 15ch;
    font-weight: 900;
    color: ${colors.text.light.high};
  }

  p {
    color: ${colors.text.light.medium};

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

  @media (min-width: ${breakpoints.mobileLarge}px) {
    justify-content: center;
    padding-top: 0;
  }
`;

const StyledCoverBottom = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    0deg,
    rgba(244, 244, 244, 1) 0%,
    rgba(244, 244, 244, 0.3) 50%,
    rgba(244, 244, 244, 0) 100%
  );
  z-index: 1;
`;

const StyledClientsPreview = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: max-content;
  object-fit: fill;
  object-position: 50% 50%;

  > div {
    width: 150px;
  }
`;

function LandingPageCover({
  overline,
  title,
  text,

  imageUrl,
  bgColor,
}) {
  const { scrollY } = useScroll();
  const { width, height } = useWindowSize();
  const coverHeight = (height / 100) * 92;
  const imageOffset = (height / 100) * 56; // -56vh
  const [, setLight] = useContext(ElementColorContext);

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

  const isDesktop = width >= breakpoints.desktop;

  const scrollDirection = useScrollDirection();

  const renderClientsPreview = CLIENTS.map((item) => (
    <Image
      key={item.imageUrl}
      grayscale
      imageUrl={`${process.env.PUBLIC_URL}/${item.imageUrl}`}
      imageAlt={item.imageAlt}
    />
  ));

  const x = useMotionValue(200);

  useEffect(() => {
    const mouseMove = (e) => {
      x.set(e.clientX);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  /* TODO: Replace 5296 with clientPreviewWidth using useMeasure? https://github.com/streamich/react-use/blob/master/docs/useMeasure.md */
  const clientPreviewParallax = useTransform(
    x,
    [0, width],
    [0, -(5296 - width)]
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
        delay: 1.7,
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
        delay: 2,
        duration: 0.6,
      },
    },
  };

  const coverBottomVariants = {
    hidden: { opacity: 0, y: "100%", transition: { duration: 0.6 } },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  /* TODO: Make clients overflow and be scrollable, make scrolling related to mouse position */
  return (
    <StyledCover
      bgColor={bgColor}
      variants={coverVariants}
      initial="hidden"
      animate="animate"
    >
      <StyledCoverImage
        variants={imageVariants}
        src={`${process.env.PUBLIC_URL}/${imageUrl}`}
        alt="Just a picture of me looking inteligent"
        style={{ y: imageParallax }}
      />

      <StyledCaption variants={captionVariants} style={{ y: captionParallax }}>
        {overline && <Overline disableAnimations>{overline}</Overline>}
        <TitleAndText h={0} title={title} disableAnimations>
          {text}
        </TitleAndText>
      </StyledCaption>
      <StyledCoverBottom
        variants={coverBottomVariants}
        initial="animate"
        animate={scrollDirection === "down" && isDesktop ? "hidden" : "animate"}
      >
        <StyledClientsPreview style={{ x: clientPreviewParallax }}>
          {renderClientsPreview}
        </StyledClientsPreview>
      </StyledCoverBottom>
    </StyledCover>
  );
}

LandingPageCover.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  imageUrl: PropTypes.string,

  bgColor: PropTypes.string,
  overline: PropTypes.string,
};

LandingPageCover.defaultProps = {
  overline: null,
  title: null,
  text: null,
  imageUrl: null,

  bgColor: null,
};

export default LandingPageCover;
