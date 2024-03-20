/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import CaseThumbnail from "./Cases/CaseThumbnail";
import { CASES } from "../../data/dictionaries/CASES";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import ElementColorContextProvider from "../../Context/ElementColorContext";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import Button from "../Shared/Button";

const StyledCases = styled(motion.div)`
  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: max(
    ${padding.outsideElements.single},
    ${padding.insideElements.single}
  );

  @media (${breakpoints.mobileLarge}px < width < ${breakpoints.desktop}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${breakpoints.desktop}px < width) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledShowMoreSection = styled(motion.div)`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 100% !important;
`;

function SectionCases({ featured }) {
  const { width } = useWindowSize();
  const isDesktop = width >= breakpoints.desktop;

  const cases = featured
    ? CASES.filter(({ caseStatus }) => caseStatus === CASE_STATUS.FEATURED)
        .reverse()
        .slice(0, isDesktop ? 3 : 2)
    : CASES.filter(
        ({ caseStatus }) => caseStatus !== CASE_STATUS.DRAFT
      ).reverse();

  return (
    <StyledCases $featured={featured}>
      {cases.map(({ thumbnail, caseStatus, caseUrl }) => (
        <ElementColorContextProvider key={caseUrl}>
          <CaseThumbnail
            key={caseUrl}
            data={thumbnail}
            caseUrl={caseUrl}
            status={caseStatus}
            featured={featured}
          />
        </ElementColorContextProvider>
      ))}

      {featured && (
        <StyledShowMoreSection>
          <Button secondary to="/cases/">
            See more cases
          </Button>
        </StyledShowMoreSection>
      )}
    </StyledCases>
  );
}

SectionCases.propTypes = {
  featured: PropTypes.bool,
};

SectionCases.defaultProps = {
  featured: false,
};

export default SectionCases;
