import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import TitleAndText from "./TitleAndText";
import ImageWithCaption from "./ImageWithCaption";
import { variants } from "../animations/animations";
import sizes from "../theme/sizes";
import breakpoints from "../theme/breakpoints";

const StyledTextbox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  > div {
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

const Textbox = ({
  title,
  h,
  text,
  light,
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

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  return (
    <StyledTextbox
      ref={intersectionRef}
      initial="hidden"
      animate={inView ? "inView" : "hidden"}
      variants={variants}
      flip={flip}
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

      <TitleAndText h={h} title={title} light={light} disableAnimations padded>
        {text}
      </TitleAndText>

      {!flip && imageUrl && (
        <ImageWithCaption
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          caption={caption}
          disableAnimations
          inTextbox
        />
      )}
    </StyledTextbox>
  );
};

Textbox.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  light: PropTypes.bool,
  flip: PropTypes.bool,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  caption: PropTypes.string,
};

Textbox.defaultProps = {
  title: null,
  h: 2,
  light: false,
  flip: false,
  imageUrl: null,
  imageAlt: null,
  caption: null,
};

export default Textbox;
