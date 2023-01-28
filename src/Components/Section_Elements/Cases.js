/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import CaseThumbnail from "./Cases/CaseThumbnail";
import { CASES } from "../../data/dictionaries/CASES";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";
import padding from "../../theme/padding";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import Button from "../Shared/Button";

const StyledPageLink = styled(motion.div)`
  text-align: center;
  padding-bottom: ${padding.vertical.double};
`;

const StyledCases = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: ${padding.vertical.eighth};
  row-gap: ${padding.vertical.quadruple};
  padding: 0 ${padding.horizontal.double};
  padding-bottom: ${({ $preview }) =>
    $preview ? padding.vertical.single : padding.vertical.quadruple};

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

/* Animation in cases is still fucked up. see if there is anything that can be fixed. */
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
            <CaseThumbnail
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
