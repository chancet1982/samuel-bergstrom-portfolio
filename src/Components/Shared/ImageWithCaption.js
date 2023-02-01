import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

import Image from "./Image";
import Span from "./Span";
import padding from "../../theme/padding";

const StyledImageWithCaption = styled(motion.figure)`
  margin: 0;
  grid-area: ${({ $gridArea }) => $gridArea};
  overflow: hidden;
`;

const StyledCaption = styled(motion.figcaption)`
  text-align: center;

  padding: ${padding.vertical.half} ${padding.horizontal.double}
    ${padding.vertical.single};

  color: ${({
    theme: {
      colors: { text },
    },
  }) => text.dark.disabled};
  font-style: italic;
`;

function ImageWithCaption({
  imageUrl,
  caption,
  bgColor,
  imageAlt,
  inGallery,
  inTextbox,
  gridArea,
}) {
  return (
    <StyledImageWithCaption $gridArea={gridArea}>
      <Image
        imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
        imageAlt={imageAlt}
        bgColor={bgColor}
        cover={!!inGallery}
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
}

ImageWithCaption.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  bgColor: PropTypes.string,
  inGallery: PropTypes.bool,
  inTextbox: PropTypes.bool,

  gridArea: PropTypes.string,
};

ImageWithCaption.defaultProps = {
  caption: null,
  bgColor: null,
  inGallery: false,
  inTextbox: false,

  gridArea: null,
};

export default ImageWithCaption;
