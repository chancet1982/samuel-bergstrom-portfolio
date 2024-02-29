/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import CaseThumbnail from "./Cases/CaseThumbnailLatest";
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
    ${padding.outsideElements.double},
    ${padding.insideElements.single}
  );

  > div {
    max-width: calc(100vw - 2 * ${padding.outsideElements.double});
  }

  @media (${breakpoints.mobileLarge}px < width < ${breakpoints.desktop}px) {
    grid-template-columns: repeat(2, 1fr);
    > div {
      max-width: calc(
        (
            100vw - 1 *
              max(
                ${padding.outsideElements.double},
                ${padding.insideElements.single}
              ) - 2 * ${padding.outsideElements.double}
          ) / 2
      );
    }
  }

  @media (${breakpoints.desktop}px < width) {
    grid-template-columns: repeat(3, 1fr);

    > div {
      max-width: calc(
        (
            100vw - 2 *
              max(
                ${padding.outsideElements.double},
                ${padding.insideElements.single}
              ) - 2 * ${padding.outsideElements.double}
          ) / 3
      );
    }
  }
`;

const StyledShowMoreSection = styled(motion.div)`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /*@media (${breakpoints.mobileLarge}px < width < ${breakpoints.desktop}px) {
    grid-column: auto / span 2;
  }

  @media (${breakpoints.desktop}px < width) {
    grid-column: auto / span 3;
  }*/
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
    <StyledCases>
      {cases.map(({ thumbnail, caseStatus, caseUrl }) => (
        <ElementColorContextProvider>
          <CaseThumbnail
            key={caseUrl}
            data={thumbnail}
            caseUrl={caseUrl}
            status={caseStatus}
          />
        </ElementColorContextProvider>
      ))}

      {featured && (
        <StyledShowMoreSection>
          <Button to="/cases/">More cases</Button>
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
