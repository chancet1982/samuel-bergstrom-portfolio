/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import TitleAndText from "../Shared/TitleAndText";
import ImageWithCaption from "../Shared/ImageWithCaption";
import Image from "../Shared/Image";
import { variants } from "../../animations/animations";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";

const StyledTextbox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${(limitMaxWidth) =>
    limitMaxWidth && {
      maxWidth: `${breakpoints.contentWidthLimit}px`,
    }};

  margin: 0 auto;
  ${(imageUrl) =>
    !imageUrl && {
      maxWidth: "60ch",
    }};

  ${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    }};

  > div:first-of-type {
    grid-column: 1 / span 3;

    @media (min-width: ${breakpoints.desktop}px) {
      grid-column: ${({ imageUrl, flip }) =>
        imageUrl ? (flip ? "3 / span 1" : "1 / span 2") : "1 / span 3"};
    }

    p,
    li {
      max-width: 64ch;
    }
  }

  > figure {
    max-height: ${sizes.large};
    grid-column: 1 / span 3;

    @media (min-width: ${breakpoints.desktop}px) {
      grid-column: ${({ flip }) => (flip ? "1 / span 2" : "3 / span 1")};
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledTextboxImage = styled.figure`
  grid-column: 1 / span 3;

  @media (min-width: ${breakpoints.desktop}px) {
    grid-column: ${({ flip }) => (flip ? "1 / span 2" : "3 / span 1")};
  }
  > img {
    height: auto;
  }
`;

const Textbox = ({
  title,
  h,
  text,
  bgColor,
  flip,
  imageUrl,
  imageAlt,
  caption,
  limitMaxWidth,
}) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

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

  const renderImage = () =>
    caption ? (
      <ImageWithCaption
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        caption={caption}
        disableAnimations
        inTextbox
      />
    ) : (
      <StyledTextboxImage>
        <Image
          imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
          imageAlt={imageAlt}
          inTextbox
        />
      </StyledTextboxImage>
    );

  return (
    <StyledTextbox
      ref={intersectionRef}
      initial="hidden"
      animate={inView ? "inView" : "hidden"}
      variants={variants}
      flip={flip}
      bgColor={bgColor}
      imageUrl={imageUrl}
      limitMaxWidth={limitMaxWidth}
    >
      {flip && imageUrl && renderImage()}

      <TitleAndText h={h} title={title} disableAnimations isPadded>
        {text}
      </TitleAndText>

      {!flip && imageUrl && renderImage()}
    </StyledTextbox>
  );
};

Textbox.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  bgColor: PropTypes.string,
  flip: PropTypes.bool,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  caption: PropTypes.string,
  limitMaxWidth: PropTypes.bool,
};

Textbox.defaultProps = {
  title: null,
  h: 2,
  bgColor: null,
  flip: false,
  imageUrl: null,
  imageAlt: null,
  caption: null,
  limitMaxWidth: true,
};

export default Textbox;
