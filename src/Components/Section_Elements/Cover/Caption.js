import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import TitleAndText from "../../Shared/TitleAndText";
import Overline from "../../Shared/Overline";
import breakpoints from "../../../theme/breakpoints";
import padding from "../../../theme/padding";
import colors from "../../../theme/colors";

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
  background: linear-gradient(
    72deg,
    rgba(244, 244, 244, 0.8) 0%,
    rgba(244, 244, 244, 0) 100%
  );

  h1 {
    max-width: 15ch;
    font-weight: 900;
    /*color: ${colors.text.light.high};*/
  }

  p {
    /*color: ${colors.text.light.medium};*/

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

/* TODO: Implement better support for light texts and background in case the caption background is vibrant */
function Caption({ overline, title, text }) {
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

  const { height } = useWindowSize();

  const { scrollY } = useScroll();
  const coverHeight = (height / 100) * 92;

  const captionParallax = useTransform(
    scrollY,
    [0, coverHeight],
    [0, -coverHeight]
  );
  return (
    <StyledCaption variants={captionVariants}>
      {overline && <Overline disableAnimations>{overline}</Overline>}
      <TitleAndText
        h={0}
        title={title}
        disableAnimations
        style={{ y: captionParallax }}
      >
        {text}
      </TitleAndText>
    </StyledCaption>
  );
}

Caption.propTypes = {
  overline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Caption.defaultProps = {
  overline: null,
  title: null,
  text: null,
};

export default Caption;