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
import breakpoints from "../../theme/breakpoints";

const StyledBlockQuote = styled(motion.blockquote)`
  padding: ${padding.vertical.double} ${padding.horizontal.quadruple};
  max-width: ${breakpoints.contentWidthLimit}px;
  margin: 0 auto;
  position: relative;
  border-left: solid 0.25rem
    ${({ light }) => (light ? colors.text.light.low : colors.text.dark.low)};
  margin-left: ${padding.horizontal.quadruple};
  margin-bottom: ${padding.vertical.double};

  :after {
    content: open-quote;
    position: absolute;
    top: 50%;
    left: -0.46em;
    color: ${({ light }) =>
      light ? colors.text.light.low : colors.text.dark.low};
    font-style: normal;
    line-height: 1.3em;
    text-align: center;
    width: 2.4rem;
    height: 2.4rem;
    margin-top: -0.5em;
    font-size: 3rem;
    background: white;
    font-family: "IBM Plex Sans";
  }
`;

// TODO: (later) reveal on scroll (fixed under other content?)
const BlockQuote = ({ cite, quote, bgColor, bgImageUrl, limitMaxWidth }) => {
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
      light={light}
    >
      <Quote>{quote}</Quote>
      <Cite>{cite}</Cite>
    </StyledBlockQuote>
  );

  return bgColor || bgImageUrl ? (
    <BackgroundWrapper
      bgColor={bgColor}
      bgImageUrl={bgImageUrl}
      limitMaxWidth={limitMaxWidth}
    >
      {renderBlockQuote()}
    </BackgroundWrapper>
  ) : (
    renderBlockQuote()
  );
};

BlockQuote.propTypes = {
  cite: PropTypes.string,
  quote: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  bgImageUrl: PropTypes.string,
  limitMaxWidth: PropTypes.bool,
};

BlockQuote.defaultProps = {
  cite: null,
  bgColor: null,
  bgImageUrl: null,
  limitMaxWidth: false,
};

export default BlockQuote;
