/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import CasePreviewThumbnail from "./CasesPreview/CasePreviewThumbnail";
import { CASES } from "../../data/dictionaries/CASES";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";
import padding from "../../theme/padding";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import Button from "../Shared/Button";

const StyledPageLink = styled(motion.div)`
  text-align: center;
`;

const StyledCases = styled(motion.div)`
  /*display: grid;
  grid-template-columns: repeat(1, 1fr);*/
  /*row-gap: ${padding.insideElements.quadruple};*/
  /*padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};*/
  padding-bottom: ${({ $preview }) =>
    $preview ? padding.outsideElements.quadruple : 0};

  /*@media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }*/
`;

function SectionCases({ preview }) {
  return (
    <motion.div>
      <StyledCases $preview={preview}>
        {CASES.filter(({ caseStatus }) =>
          preview
            ? caseStatus === CASE_STATUS.FEATURED
            : caseStatus !== CASE_STATUS.DRAFT
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
      </StyledCases>
      {preview && (
        <StyledPageLink>
          <Button secondary to="cases">
            See all cases
          </Button>
        </StyledPageLink>
      )}
    </motion.div>
  );
}

SectionCases.propTypes = {
  preview: PropTypes.bool,
};

SectionCases.defaultProps = {
  preview: false,
};

export default SectionCases;
