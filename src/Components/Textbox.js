import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import TitleAndText from "./TitleAndText";
import ImageWithCaption from "./ImageWithCaption";
import Image from "./Elements/Image";
import { variants } from "../animations/animations";
import sizes from "../theme/sizes";
import breakpoints from "../theme/breakpoints";
import { ElementColorContext } from "../Context/ElementColorContext";
import colors from "../theme/colors";

const StyledTextbox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    }};

  > div:first-of-type {
    grid-column: 1 / span 3;

    @media (min-width: ${breakpoints.desktop}px) {
      grid-column: ${({ flip }) => (flip ? "3 / span 1" : "1 / span 2")};
    }

    p,
    li {
      max-width: 80ch;
    }
  }

  > figure {
    max-height: ${sizes.large};
    grid-column: 1 / span 3;

    @media (min-width: ${breakpoints.desktop}px) {
      grid-column: ${({ flip }) => (flip ? "1 / span 2" : "3 / span 1")};
    }
  }
`;

const StyledTextboxImage = styled.div`
  grid-column: 1 / span 3;

  @media (min-width: ${breakpoints.desktop}px) {
    grid-column: ${({ flip }) => (flip ? "1 / span 2" : "3 / span 1")};
  }
  > img {
    height: auto;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
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
}) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  const context = useContext(ElementColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const setLight = !context ? () => null : context[1];

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    setLight !== null &&
      setLight(bgColor !== null && bgColor !== colors.offwhite);
  }, [setLight, bgColor]);

  return (
    <StyledTextbox
      ref={intersectionRef}
      initial="hidden"
      animate={inView ? "inView" : "hidden"}
      variants={variants}
      flip={flip}
      bgColor={bgColor}
    >
      {flip && imageUrl && (
        <ImageWithCaption
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          caption={caption}
          disableAnimations
          inTextbox
        />
      )}

      <TitleAndText h={h} title={title} disableAnimations padded>
        {text}
      </TitleAndText>

      {!flip &&
        imageUrl &&
        (caption ? (
          <ImageWithCaption
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            caption={caption}
            disableAnimations
            inTextbox
          />
        ) : (
          <StyledTextboxImage>
            <Image imageUrl={imageUrl} imageAlt={imageAlt} />
          </StyledTextboxImage>
        ))}
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
};

Textbox.defaultProps = {
  title: null,
  h: 2,
  bgColor: null,
  flip: false,
  imageUrl: null,
  imageAlt: null,
  caption: null,
};

export default Textbox;
