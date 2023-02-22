/* eslint-disable react/no-array-index-key */
import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
// import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import CasePreviewThumbnail from "./CasesPreview/CasePreviewThumbnail";
import { CASES } from "../../data/dictionaries/CASES";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import ElementContextProvider from "../../Context/ElementColorContext";

const StyledCasesPreview = styled(motion.div)`
  background-color: black;
`;

const StyledCamera = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: sticky;
  top: 0;
`;

const StyledFrame = styled(motion.div)`
  display: flex;
  height: 100%;
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

  // const smoothHorizontalScroll = useSpring(horizontalScroll);
  return (
    <StyledCasesPreview style={{ height: `${cases.length * 100}vw` }} ref={ref}>
      <StyledCamera>
        <StyledFrame style={{ x: horizontalScroll }}>
          {cases.map(({ thumbnail, caseStatus, caseUrl }) => (
            <ElementContextProvider key={caseUrl}>
              <CasePreviewThumbnail
                data={thumbnail}
                caseUrl={caseUrl}
                status={caseStatus}
              />
            </ElementContextProvider>
          ))}
        </StyledFrame>
      </StyledCamera>
    </StyledCasesPreview>
  );
}

export default CasesPreview;
