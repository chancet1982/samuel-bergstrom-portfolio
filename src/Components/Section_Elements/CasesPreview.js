/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import PropTypes from "prop-types";
import CasePreviewThumbnail from "./CasesPreview/CasePreviewThumbnail";
import { CASES } from "../../data/dictionaries/CASES";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import Button from "../Shared/Button";

const StyledPageLink = styled(motion.div)`
  text-align: center;
`;

function CasesPreview() {
  return (
    <>
        {CASES.filter(({ caseStatus }) =>
          caseStatus === CASE_STATUS.FEATURED
        )
          .reverse()
          .map(({ thumbnail, caseStatus, caseUrl }) => (
            <CasePreviewThumbnail
              key={caseUrl}
              data={thumbnail}
              caseUrl={caseUrl}
              status={caseStatus}
            />
          ))}

        <StyledPageLink>
          <Button secondary to="cases">
            See all cases
          </Button>
        </StyledPageLink>
    </>
  );
}

export default CasesPreview;
