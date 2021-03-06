import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import Image from "./Elements/Image";
import { variants } from "../animations/animations";
import Span from "./Elements/Span";

const StyledImageWithCaption = styled(motion.figure)`
  margin: 0;
  grid-area: ${({ gridArea }) => gridArea};
  overflow: hidden;
`;

const StyledCaption = styled(motion.figcaption)`
  text-align: center;
  padding: 1vw 4vw 0;
  color: ${({
    theme: {
      colors: { text },
    },
  }) => text.dark.disabled};
  font-style: italic;
`;

const ImageWithCaption = ({
  imageUrl,
  caption,
  bgColor,
  imageAlt,
  inGallery,
  inTextbox,
  disableAnimations,
  padded,
  gridArea,
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

  return (
    <StyledImageWithCaption
      ref={intersectionRef}
      inGallery={inGallery}
      gridArea={gridArea}
      initial="hidden"
      variants={variants}
      animate={disableAnimations || inView ? "inView" : "hidden"}
      padded={padded}
    >
      <Image
        imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
        imageAlt={imageAlt}
        bgColor={bgColor}
        cover={!!inGallery}
        inGallery={inGallery}
        withCaption={!!caption}
        inTextbox={inTextbox}
      />
      {caption && (
        <StyledCaption>
          <Span small>{caption}</Span>
        </StyledCaption>
      )}
    </StyledImageWithCaption>
  );
};

ImageWithCaption.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  bgColor: PropTypes.string,
  inGallery: PropTypes.bool,
  inTextbox: PropTypes.bool,
  disableAnimations: PropTypes.bool,
  padded: PropTypes.bool,
  gridArea: PropTypes.string,
};

ImageWithCaption.defaultProps = {
  caption: null,
  bgColor: null,
  inGallery: false,
  inTextbox: false,
  disableAnimations: false,
  padded: false,
  gridArea: null,
};

export default ImageWithCaption;
