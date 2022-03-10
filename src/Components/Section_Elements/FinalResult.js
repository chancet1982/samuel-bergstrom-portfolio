/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import BackgroundWrapper from "../BackgroundWrapper";
import Result from "../Elements/Result";
import Image from "../Elements/Image";
import TitleAndText from "../Elements/TitleAndText";
import { variants } from "../../animations/animations";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";

const StyledResultCaption = styled.div`
  padding-top: ${padding.vertical.double};
  padding-right: ${padding.horizontal.quadruple};
  padding-bottom: ${padding.vertical.double};
  padding-left: ${padding.horizontal.quadruple};
  background-color: white;
  box-sizing: border-box;
`;

const StyledFinalResult = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${breakpoints.desktop - 1}px) {
    > div {
      grid-area: span 1 / span 3;
    }
  }

  @media (min-width: ${breakpoints.desktop}px) {
    > div:first-of-type {
      grid-column: 1 / span 2;
    }

    > div:last-of-type {
      grid-column: 3 / span 1;
    }
  }

  height: fit-content;
`;

// TODO: fix results display on mobile.
const FinalResult = ({ imageUrl, bgColor, title, text, results }) => {
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
    <StyledFinalResult
      ref={intersectionRef}
      initial="hidden"
      variants={variants}
      animate={inView ? "inView" : "hidden"}
    >
      <BackgroundWrapper bgColor={bgColor} isPadded={false}>
        <Image imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`} />
      </BackgroundWrapper>

      {(results.length > 0 || text) && (
        <StyledResultCaption>
          <TitleAndText h={2} title={title} sticky>
            {results.length > 0 &&
              results.map(({ value, description }) => (
                <Result
                  key={description}
                  value={value}
                  description={description}
                />
              ))}
            {text && text}
          </TitleAndText>
        </StyledResultCaption>
      )}
    </StyledFinalResult>
  );
};

FinalResult.propTypes = {
  imageUrl: PropTypes.string,
  bgColor: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  results: PropTypes.array,
};

FinalResult.defaultProps = {
  imageUrl: null,
  bgColor: null,
  title: "Results",
  text: null,
  results: [],
};

export default FinalResult;
