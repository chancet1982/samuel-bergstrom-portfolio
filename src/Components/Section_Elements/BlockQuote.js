import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import { variants } from "../../animations/animations";
import Quote from "../Elements/Quote";
import Cite from "../Elements/Cite";
import padding from "../../theme/padding";
import BackgroundWrapper from "../BackgroundWrapper";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";
import breakpoints from "../../theme/breakpoints";

const StyledBlockQuote = styled(motion.blockquote)`
  padding: ${padding.vertical.double} ${padding.horizontal.quadruple};
  text-align: center;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: calc(${breakpoints.contentWidthLimit}px * 0.72);
  margin: 0 auto;
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

  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (setLight !== null &&
      setLight(
        bgColor !== null &&
          bgColor !== colors.offwhite &&
          bgColor !== colors.primaryShade
      )) ||
      bgImageUrl !== null;
  }, [setLight, bgColor, bgImageUrl]);

  const renderBlockQuote = () => (
    <StyledBlockQuote
      ref={intersectionRef}
      initial="hidden"
      variants={variants}
      animate={inView ? "inView" : "hidden"}
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
