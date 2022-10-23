/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

import TitleAndText from "../Shared/TitleAndText";
import ImageWithCaption from "../Shared/ImageWithCaption";
import Image from "../Shared/Image";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";

const StyledTextbox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: ${sizes.contentWidthLimit}px;
  margin: 0 auto;

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }};

  > div:first-of-type {
    grid-column: 1 / span 2;

    @media (min-width: ${breakpoints.desktop}px) {
      ${({ $imageUrl }) =>
        $imageUrl && {
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
        }};

      grid-column: ${({ $imageUrl, $flip }) =>
        $imageUrl ? ($flip ? "2 / span 1" : "1 / span 1") : "1 / span 2"};
    }
  }

  > figure {
    max-height: ${sizes.large};
    grid-column: 1 / span 2;

    @media (min-width: ${breakpoints.desktop}px) {
      grid-column: ${({ $flip }) => ($flip ? "1 / span 1" : "2 / span 1")};
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

/* TODO: Image is not fading in when in view */
function Textbox({
  title,
  h,
  text,
  bgColor,
  flip,
  imageUrl,
  imageAlt,
  caption,
  isCentered,
}) {
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
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      $flip={flip}
      $bgColor={bgColor}
      $imageUrl={imageUrl}
    >
      {flip && imageUrl && renderImage()}

      <TitleAndText h={h} title={title} isPadded isCentered={isCentered}>
        {text}
      </TitleAndText>

      {!flip && imageUrl && renderImage()}
    </StyledTextbox>
  );
}

Textbox.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  bgColor: PropTypes.string,
  flip: PropTypes.bool,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  caption: PropTypes.string,
  isCentered: PropTypes.bool,
};

Textbox.defaultProps = {
  title: null,
  h: 2,
  bgColor: null,
  flip: false,
  imageUrl: null,
  imageAlt: null,
  caption: null,
  isCentered: false,
};

export default Textbox;
