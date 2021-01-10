import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import Image from "./Elements/Image";
import { variants } from "../animations/animations";
import padding from "../theme/padding";

/* TODO: investigate if we could remove this */

const StyledImageWithCaption = styled(motion.figure)`
  /*${({ inGallery, columns, height }) =>
    !inGallery && {
      gridColumn: columns,
      height,
      paddingTop: padding.vertical.double,
      paddingBottom: padding.vertical.double,
    }}*/

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
  /* size: { columns, height }, */
  gridArea,
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
    <StyledImageWithCaption
      ref={intersectionRef}
      inGallery={inGallery}
      /* columns={!gridArea && columns} */
      gridArea={gridArea}
      initial="hidden"
      variants={variants}
      animate={disableAnimations || inView ? "inView" : "hidden"}
      padded={padded}
      /* height={!gridArea && height} */
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
      {caption && <StyledCaption>{caption}</StyledCaption>}
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
