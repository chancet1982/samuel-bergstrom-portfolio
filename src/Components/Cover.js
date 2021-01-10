import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import PropTypes from "prop-types";
import { useIntersection } from "react-use";
import TitleAndText from "./TitleAndText";
import Overline from "./Overline";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import Image from "./Elements/Image";

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
  /*${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    }};*/
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

  padding-top: ${padding.vertical.double};

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
  padding-right: ${padding.horizontal.double};
  background-color: white;
`;

const CoverTransition = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
`;

const StyledBlindEffect = styled(motion.div)`
  background-color: ${({
    theme: {
      colors: { light },
    },
  }) => light};
`;

const Cover = ({ overline, title, text, imageUrl, bgColor }) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  const { scrollYProgress } = useViewportScroll();
  const yRange = [0, 0.1];
  const scaleRange = [1, 1.2];
  const scaleImage = useTransform(scrollYProgress, yRange, scaleRange);
  const smoothScaleImage = useSpring(scaleImage, {
    stiffness: 400,
    damping: 90,
  });

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

  const blindVariants = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: ["-100%", "0%", "0%", "101%"],
      transition: {
        duration: 2,
        times: [0, 0.1, 0.9, 1],
        easing: "anticipate",
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
      ref={intersectionRef}
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
          style={{ scale: smoothScaleImage }}
        />
      </StyledCoverImage>

      <CoverTransition>
        <StyledBlindEffect variants={blindVariants} />
        <StyledBlindEffect variants={blindVariants} />
        <StyledBlindEffect variants={blindVariants} />
      </CoverTransition>
    </StyledCover>
  );
};

Cover.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  imageUrl: PropTypes.string,
  bgColor: PropTypes.string,
  overline: PropTypes.string,
};

Cover.defaultProps = {
  overline: null,
  title: null,
  text: null,
  imageUrl: null,
  bgColor: null,
};

export default Cover;
