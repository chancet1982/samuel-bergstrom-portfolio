import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import { variants } from "../animations/animations";
import Quote from "./Elements/Quote";
import Cite from "./Elements/Cite";
import padding from "../theme/padding";

const StyledBlockQuote = styled(motion.blockquote)`
  /*position: sticky;
  bottom: 0;*/
  padding: ${padding.vertical.double} ${padding.horizontal.quadruple};
  min-height: ${({
    theme: {
      sizes: { medium },
    },
  }) => medium};
  text-align: center;
  min-height: 36vh;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 1140px;
  margin: 0 auto;
`;

// TODO: (later) reveal on scroll (fixed under other content?)
const BlockQuote = ({ cite, quote }) => {
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
};

BlockQuote.propTypes = {
  cite: PropTypes.string,
  quote: PropTypes.node.isRequired,
};

BlockQuote.defaultProps = {
  cite: null,
};

export default BlockQuote;
