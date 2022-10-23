/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import TitleAndText from "../Shared/TitleAndText";
import ImageWithCaption from "../Shared/ImageWithCaption";
import Image from "../Shared/Image";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";

const StyledTextbox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: ${sizes.contentWidthLimit}px;
  margin: 0 auto;

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
    max-height: ${sizes.xl};
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

const StyledTextboxImage = styled.figure``;

function Textbox({
  title,
  h,
  text,
  bgColor,
  bgMedia,
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
        (bgColor !== null &&
          bgColor !== colors.offwhite &&
          bgColor !== colors.primaryShade) ||
          bgMedia !== null
      );
  }, [setLight, bgColor, bgMedia]);

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

  const renderTextbox = () => (
    <StyledTextbox
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      $flip={flip}
      $imageUrl={imageUrl}
    >
      {flip && imageUrl && renderImage()}

      <TitleAndText h={h} title={title} isPadded isCentered={isCentered}>
        {text}
      </TitleAndText>

      {!flip && imageUrl && renderImage()}
    </StyledTextbox>
  );

  return bgColor || bgMedia ? (
    <BackgroundWrapper bgColor={bgColor} bgMedia={bgMedia}>
      {renderTextbox()}
    </BackgroundWrapper>
  ) : (
    renderTextbox()
  );
}

Textbox.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  bgColor: PropTypes.string,
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
  }),
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
  bgMedia: null,
  flip: false,
  imageUrl: null,
  imageAlt: null,
  caption: null,
  isCentered: false,
};

export default Textbox;
