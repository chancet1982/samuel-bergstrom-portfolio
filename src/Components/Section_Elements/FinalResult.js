/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import Result from "./FinalResult/Result";
import Image from "../Shared/Image";
import TitleAndText from "../Shared/TitleAndText";
import { variants } from "../../animations/animations";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";

const StyledFinalResultContent = styled(motion.div)`
  max-width: ${breakpoints.contentWidthLimit}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${breakpoints.desktop - 1}px) {
    > div {
      grid-area: span 1 / span 3;
    }
  }

  @media (min-width: ${breakpoints.desktop}px) {
    > img {
      grid-column: 1 / span 2;
    }

    > div {
      grid-column: 3 / span 1;
    }
  }

  height: fit-content;
`;

const StyledFinalResult = styled(motion.div)``;

const StyledResultCaption = styled(motion.div)`
  padding: ${padding.vertical.quadruple} ${padding.horizontal.double};
  box-sizing: border-box;
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

  return (
    <StyledFinalResult
      ref={intersectionRef}
      initial="hidden"
      variants={variants}
      animate={inView ? "inView" : "hidden"}
    >
      <BackgroundWrapper bgColor={bgColor} isPadded={false}>
        <StyledFinalResultContent>
          <Image imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`} />
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
        </StyledFinalResultContent>
      </BackgroundWrapper>
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
