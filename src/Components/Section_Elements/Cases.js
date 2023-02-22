/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CasePreviewThumbnail from "./Cases/CaseThumbnail";
import { CASES } from "../../data/dictionaries/CASES";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";

const StyledCases = styled(motion.div)``;

function SectionCases() {
  return (
    <motion.div>
      <StyledCases>
        {CASES.filter(({ caseStatus }) => caseStatus !== CASE_STATUS.DRAFT)
          .reverse()
          .map(({ thumbnail, caseStatus, caseUrl }) => (
            <CasePreviewThumbnail
              key={caseUrl}
              data={thumbnail}
              caseUrl={caseUrl}
              status={caseStatus}
            />
          ))}
      </StyledCases>
    </motion.div>
  );
}

SectionCases.propTypes = {};

SectionCases.defaultProps = {};

export default SectionCases;
