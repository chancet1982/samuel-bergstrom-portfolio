/* eslint-disable react/no-array-index-key */
import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
// import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import CaseThumbnail from "./Cases/CaseThumbnail";
import { CASES } from "../../data/dictionaries/CASES";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import breakpoints from "../../theme/breakpoints";
import ElementColorContextProvider from "../../Context/ElementColorContext";

const StyledCasesPreview = styled(motion.div)`
  background-color: black;
`;

const StyledCamera = styled(motion.div)`
  @media (min-width: ${breakpoints.desktop}px) {
    width: 100vw;
    height: 100vh;
    position: sticky;
    top: 0;
  }
`;

const StyledFrame = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: fit-content;

  @media (min-width: ${breakpoints.desktop}px) {
    height: 100%;
    flex-direction: row;
  }
`;

function CasesPreview() {
  const cases = CASES.filter(
    ({ caseStatus }) => caseStatus === CASE_STATUS.FEATURED
  ).reverse();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const viewport = useWindowSize();
  const viewportWidth = viewport.width;

  const horizontalScroll = useTransform(
    scrollYProgress,
    [0.72 / cases.length, 1],
    [0, -((cases.length - 1) * viewportWidth)]
  );

  const { width } = useWindowSize();
  const isMobile = width < breakpoints.desktop;

  return (
    <StyledCasesPreview
      style={{ height: !isMobile ? `${cases.length * 100}vw` : "auto" }}
      ref={ref}
    >
      <StyledCamera>
        <StyledFrame style={{ x: !isMobile ? horizontalScroll : "inherit" }}>
          {cases.map(({ thumbnail, caseStatus, caseUrl }) => (
            <ElementColorContextProvider>
              <CaseThumbnail
                data={thumbnail}
                caseUrl={caseUrl}
                status={caseStatus}
                key={caseUrl}
              />
            </ElementColorContextProvider>
          ))}
        </StyledFrame>
      </StyledCamera>
    </StyledCasesPreview>
  );
}

export default CasesPreview;
