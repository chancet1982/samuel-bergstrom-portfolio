import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize, useOrientation } from "react-use";
import TitleAndText from "../Shared/TitleAndText";
import Overline from "../Shared/Overline";
import Blinds from "../ScreenTransitions/Blinds";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";

const StyledCover = styled(motion.div)`
  height: ${({
    theme: {
      sizes: { large },
    },
  }) => large};
  position: relative;
  display: flex;
  overflow: hidden;

  :before {
    content: "";
    clip-path: circle(32vw at 72% 20%);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: circle(40vw at 72% 20%);

    @media (min-width: ${breakpoints.desktop}px) {
      clip-path: circle(32vw at 72% 20%);
    }

    ${({ bgColor }) =>
      bgColor && {
        backgroundColor: bgColor,
      }};
  }
`;

const StyledCoverImage = styled(motion.img)`
  position: absolute;
  top: 0;
  right: 0;
  height: 92vh;

  @media (max-width: ${breakpoints.tablet}px) and (orientation: landscape) {
    height: 54vw;
  }
`;

const StyledCaption = styled(motion.div)`
  padding-top: ${padding.vertical.double};
  height: 100%;
  max-width: ${breakpoints.contentWidthLimit}px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};

  @media (min-width: ${breakpoints.tablet}px) {
    padding-left: ${padding.horizontal.double};
    padding-right: ${padding.horizontal.double};
  }

  z-index: 1;
  width: 100%;
  padding-top: 0;

  h1 {
    max-width: 8ch;
    margin-top: 2.25rem;

    @media (min-width: ${breakpoints.tablet}px) {
      max-width: 15ch;
    }
  }

  p {
    margin-bottom: 0;

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
`;

// TODO: parallax effect on the cover in the landing page  needs some fine-tuning
const Cover = ({
  overline,
  title,
  text,
  imageUrl,
  mobileImageUrl,
  bgColor,
}) => {
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

  const { width } = useWindowSize();
  const isMobile = width < breakpoints.tablet;
  const deviceOrientation = useOrientation();
  const isLandscape = deviceOrientation.type === "landscape-primary";

  return (
    <StyledCover
      variants={coverVariants}
      initial="hidden"
      animate="animate"
      bgColor={bgColor}
    >
      <StyledCoverImage
        variants={imageVariants}
        src={`${process.env.PUBLIC_URL}/${
          // eslint-disable-next-line no-nested-ternary
          isMobile ? (isLandscape ? imageUrl : mobileImageUrl) : imageUrl
        }`}
        alt="Just a picture of me looking inteligent"
      />

      <StyledCaption variants={captionVariants}>
        {overline && <Overline disableAnimations>{overline}</Overline>}
        <TitleAndText h={1} title={title} disableAnimations>
          {text}
        </TitleAndText>
      </StyledCaption>

      <Blinds />
    </StyledCover>
  );
};

Cover.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  imageUrl: PropTypes.string,
  mobileImageUrl: PropTypes.string,
  bgColor: PropTypes.string,
  overline: PropTypes.string,
};

Cover.defaultProps = {
  overline: null,
  title: null,
  text: null,
  imageUrl: null,
  mobileImageUrl: null,
  bgColor: null,
};

export default Cover;
