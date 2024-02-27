/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CaseThumbnail from "./Cases/CaseThumbnailInCases";
import { CASES } from "../../data/dictionaries/CASES";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import ElementColorContextProvider from "../../Context/ElementColorContext";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";

const StyledCases = styled(motion.div)`
  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};
  position: relative;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: ${padding.insideElements.single} auto;
  }
`;

function SectionCases() {
  return (
    <motion.div>
      <StyledCases>
        {CASES.filter(({ caseStatus }) => caseStatus !== CASE_STATUS.DRAFT)
          .reverse()
          .map(({ thumbnail, caseStatus, caseUrl }) => (
            <ElementColorContextProvider>
              <CaseThumbnail
                key={caseUrl}
                data={thumbnail}
                caseUrl={caseUrl}
                status={caseStatus}
              />
            </ElementColorContextProvider>
          ))}
      </StyledCases>
    </motion.div>
  );
}

SectionCases.propTypes = {};

SectionCases.defaultProps = {};

export default SectionCases;
