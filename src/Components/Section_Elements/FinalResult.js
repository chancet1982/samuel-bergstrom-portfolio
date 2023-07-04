/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize, useOrientation } from "react-use";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import Result from "./FinalResult/Result";
import Image from "../Shared/Image";
import TitleAndText from "../Shared/TitleAndText";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";
import { ElementColorContext } from "../../Context/ElementColorContext";
import shouldUseLightText from "../../utils/shouldUseLightText";

const StyledFinalResultContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: max(
    ${padding.outsideElements.double},
    ${padding.insideElements.single}
  );

  @media (max-width: ${breakpoints.desktop - 1}px) {
    > div,
    > img {
      grid-area: span 1 / span 3;
    }
  }

  > img {
    padding-top: ${padding.insideElements.double};
    position: sticky;
    top: -32vh;
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
  padding: ${padding.outsideElements.double};
  padding-bottom: ${padding.outsideElements.quadruple};
  z-index: 1;

  box-sizing: border-box;
  @media (max-width: ${breakpoints.desktop - 1}px) {
    ${({ $bgColor }) =>
      $bgColor && {
        background: $bgColor,
      }}
  }
`;

function FinalResult({
  imageUrl,
  mobileImageUrl,
  bgColor,
  title,
  text,
  results,
}) {
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    setLight(shouldUseLightText(bgColor));
  }, [setLight, bgColor]);

  const { width } = useWindowSize();
  const isMobile = width < breakpoints.tablet;
  const deviceOrientation = useOrientation();
  const isLandscape = deviceOrientation.type === "landscape-primary";
  return (
    <StyledFinalResult
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <BackgroundWrapper bgColor={bgColor} isPadded={false}>
        <StyledFinalResultContent>
          <Image
            imageUrl={`${process.env.PUBLIC_URL}/${
              // eslint-disable-next-line no-nested-ternary
              isMobile ? (isLandscape ? imageUrl : mobileImageUrl) : imageUrl
            }`}
          />
          {(results.length > 0 || text) && (
            <StyledResultCaption $bgColor={bgColor}>
              <TitleAndText h={2} title={title} isSticky>
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
}

FinalResult.propTypes = {
  imageUrl: PropTypes.string,
  mobileImageUrl: PropTypes.string,
  bgColor: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array,
};

FinalResult.defaultProps = {
  imageUrl: null,
  mobileImageUrl: null,
  bgColor: null,
  title: "Results",
  text: null,
  results: [],
};

export default FinalResult;
