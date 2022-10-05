import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import { variants } from "../../animations/animations";
import Quote from "./BlockQuote/Quote";
import Cite from "./BlockQuote/Cite";
import padding from "../../theme/padding";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";
import sizes from "../../theme/sizes";

const StyledBlockQuote = styled(motion.blockquote)`
  padding: ${padding.vertical.double} ${padding.horizontal.quadruple};
  max-width: ${sizes.contentWidthLimit}px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  margin-bottom: ${({ $light }) => ($light ? 0 : padding.vertical.double)};

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 6vw; /* TODO: replace magic number */
    height: 100%;
    width: 2px;
    background-color: ${({ $light }) =>
      $light ? colors.text.light.low : colors.text.dark.low};
  }
`;

// TODO: (later) reveal on scroll (fixed under other content?)
function BlockQuote({ cite, quote, bgColor, bgImageUrl }) {
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

  const [light, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    setLight !== null &&
      setLight(
        (bgColor !== null &&
          bgColor !== colors.offwhite &&
          bgColor !== colors.primaryShade) ||
          bgImageUrl !== null
      );
  }, [light, setLight, bgColor, bgImageUrl]);

  const renderBlockQuote = () => (
    <StyledBlockQuote
      ref={intersectionRef}
      initial="hidden"
      variants={variants}
      animate={inView ? "inView" : "hidden"}
      $light={light}
    >
      <Quote>{quote}</Quote>
      <Cite>{cite}</Cite>
    </StyledBlockQuote>
  );

  return bgColor || bgImageUrl ? (
    <BackgroundWrapper bgColor={bgColor} bgImageUrl={bgImageUrl}>
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
  bgImageUrl: PropTypes.string,
};

BlockQuote.defaultProps = {
  cite: null,
  bgColor: null,
  bgImageUrl: null,
};

export default BlockQuote;
