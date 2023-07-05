import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Quote from "./BlockQuote/Quote";
import Cite from "./BlockQuote/Cite";
import padding from "../../theme/padding";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";
import sizes from "../../theme/sizes";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";
import breakpoints from "../../theme/breakpoints";
import shouldUseLightText from "../../utils/shouldUseLightText";

const StyledBlockWrapper = styled(motion.div)`
  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};
  position: relative;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: ${padding.insideElements.single} auto;
  }

  ${({ $isFullScreen }) =>
    $isFullScreen && {
      display: "flex",
      minHeight: "100vh",
      justifyContent: "center",
      flexDirection: "column",
    }}
`;

const StyledBlockQuote = styled(motion.blockquote)`
  padding: ${padding.insideElements.single} ${padding.outsideElements.double};
  position: relative;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: ${padding.insideElements.single} auto;
  }

  :after {
    content: "";
    position: absolute;
    top: 0;

    left: 0;

    height: 100%;
    width: 2px;
    background-color: ${({ $light }) =>
      $light ? colors.lighten.medium : colors.darken.medium};
  }
`;

function BlockQuote({ cite, quote, bgColor, bgMedia, isFullScreen }) {
  const [light, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    setLight(shouldUseLightText(bgColor) || bgMedia !== null);
  }, [setLight, bgColor, bgMedia]);

  const renderBlockQuote = () => (
    <StyledBlockWrapper
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      $isFullScreen={isFullScreen}
    >
      <StyledBlockQuote $light={light}>
        <Quote>{quote}</Quote>
        <Cite>{cite}</Cite>
      </StyledBlockQuote>
    </StyledBlockWrapper>
  );

  return bgColor || bgMedia ? (
    <BackgroundWrapper bgColor={bgColor} bgMedia={bgMedia}>
      {renderBlockQuote()}
    </BackgroundWrapper>
  ) : (
    renderBlockQuote()
  );
}

BlockQuote.propTypes = {
  cite: PropTypes.string,
  quote: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
  }),
  isFullScreen: PropTypes.bool,
};

BlockQuote.defaultProps = {
  cite: null,
  bgColor: null,
  bgMedia: null,
  isFullScreen: false,
};

export default BlockQuote;
