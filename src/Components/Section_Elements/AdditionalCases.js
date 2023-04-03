import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { CASES } from "../../data/dictionaries/CASES";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import ElementContextProvider from "../../Context/ElementColorContext";
import Paragraph from "../Shared/Paragraph";
import TitleAndText from "../Shared/TitleAndText";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";
import CaseThumbnail from "./Cases/CaseThumbnail";

const StyledAdditionalCases = styled(motion.div)`
  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    > div:first-of-type {
      max-width: ${sizes.contentWidthLimit}px;
      margin: 0 auto;
    }
  }
`;

const StyledCasesList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: ${padding.insideElements.single};
  row-gap: ${padding.insideElements.single};

  @media (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

/* TODO: fix inView animations for additional cases */

function AdditionalCases() {
  const { id } = useParams();
  const currentCaseTitle = CASES[id - 1].thumbnail.caption.title;
  const THREE_OTHER_CASES = CASES.filter(
    ({ caseStatus, thumbnail }) =>
      caseStatus !== CASE_STATUS.DRAFT &&
      caseStatus !== CASE_STATUS.COMING_SOON &&
      thumbnail &&
      thumbnail.caption &&
      thumbnail.caption.title !== currentCaseTitle
  )
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <StyledAdditionalCases>
      <TitleAndText h={2} title="Not what you were looking for?">
        <Paragraph xl>
          Perhaps one youll be interested in one of my other cases
        </Paragraph>
      </TitleAndText>

      <StyledCasesList>
        {THREE_OTHER_CASES.map(({ thumbnail, caseUrl, caseStatus }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ElementContextProvider key={index}>
            <CaseThumbnail
              data={thumbnail}
              caseUrl={caseUrl}
              key={uuid()}
              status={caseStatus}
              inAdditionalCases
            />
          </ElementContextProvider>
        ))}
      </StyledCasesList>
    </StyledAdditionalCases>
  );
}

AdditionalCases.propTypes = {};

export default AdditionalCases;
