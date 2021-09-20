import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import CaseThumbnail from "./CaseThumbnail";
import { CASES } from "../data/dictionaries/CASES";
import { CASE_STATUS } from "../data/dictionaries/CASE_STATUS";
import ElementContextProvider from "../Context/ElementColorContext";
import Paragraph from "./Elements/Paragraph";
import padding from "../theme/padding";
import breakpoints from "../theme/breakpoints";
import TitleAndText from "./TitleAndText";

const StyledAdditionalCases = styled(motion.div)`
  padding: ${padding.vertical.quadruple} ${padding.horizontal.double};
`;

const StyledCasesList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 0.25rem;
  row-gap: 0.25rem;

  @media (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AdditionalCases = () => {
  const { id } = useParams();
  const currentCaseTitle = CASES[id].thumbnail.title;

  const cases = CASES.filter(
    ({ caseStatus, thumbnail: { title } }) =>
      caseStatus !== CASE_STATUS.DRAFT &&
      caseStatus !== CASE_STATUS.COMING_SOON &&
      title !== currentCaseTitle
  )
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <StyledAdditionalCases>
      <TitleAndText h={2} title="Not what you were looking for?" isPadded>
        <Paragraph>
          Perhaps one youll be interested in one of my other cases
        </Paragraph>
      </TitleAndText>

      <StyledCasesList>
        {cases.map(({ thumbnail, caseUrl, caseStatus }, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <ElementContextProvider key={index}>
              <CaseThumbnail
                data={thumbnail}
                caseUrl={caseUrl}
                key={uuid()}
                status={caseStatus}
              />
            </ElementContextProvider>
          );
        })}
      </StyledCasesList>
    </StyledAdditionalCases>
  );
};

AdditionalCases.propTypes = {};

export default AdditionalCases;
