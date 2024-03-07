import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { useWindowSize } from "react-use";
import { CASES } from "../../data/dictionaries/CASES";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import ElementContextProvider from "../../Context/ElementColorContext";
import Paragraph from "../Shared/Paragraph";
import TitleAndText from "../Shared/TitleAndText";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";
import CaseThumbnail from "./Cases/CaseThumbnail";
import { SPACER_SIZES } from "../../data/dictionaries/SPACER_SIZES";
import Spacer from "./Spacer";

const StyledAdditionalCases = styled(motion.div)`
  > div {
    box-sizing: border-box;
  }

  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};

  @media (min-width: ${breakpoints.desktop}px) {
    > div:first-of-type {
      max-width: ${sizes.contentWidthLimit}px;
      margin: 0 auto;
    }
  }
`;

const StyledCasesList = styled(motion.div)`
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: max(
    ${padding.outsideElements.single},
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
                ${padding.outsideElements.single},
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
                ${padding.outsideElements.single},
                ${padding.insideElements.single}
              ) - 2 * ${padding.outsideElements.double}
          ) / 3
      );
    }
  }
`;

/* TODO: fix inView animations for additional cases */

function AdditionalCases() {
  const { id } = useParams();

  const currentCaseUrl = `/cases/${id}`;

  const { width } = useWindowSize();
  const isDesktop = width >= breakpoints.desktop;

  const ADDITIONAL_CASES = CASES.filter(
    ({ caseStatus, caseUrl }) =>
      caseStatus !== CASE_STATUS.DRAFT &&
      caseStatus !== CASE_STATUS.COMING_SOON &&
      caseUrl !== currentCaseUrl
  )
    .sort(() => Math.random() - Math.random())
    .slice(0, isDesktop ? 3 : 2);

  return (
    <StyledAdditionalCases>
      <TitleAndText h={2} title="Not what you were looking for?">
        <Paragraph xl>
          Perhaps one youll be interested in one of my other cases
        </Paragraph>
      </TitleAndText>
      <Spacer size={SPACER_SIZES.SMALL} />
      <StyledCasesList>
        {ADDITIONAL_CASES.map(({ thumbnail = {}, caseUrl, caseStatus }) => (
          <ElementContextProvider key={caseUrl}>
            <CaseThumbnail
              data={thumbnail}
              caseUrl={caseUrl}
              key={uuid()}
              status={caseStatus}
            />
          </ElementContextProvider>
        ))}
      </StyledCasesList>
    </StyledAdditionalCases>
  );
}

AdditionalCases.propTypes = {};

export default AdditionalCases;
