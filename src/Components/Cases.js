/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import CaseThumbnail from "./CaseThumbnail";
import { CASES } from "../data/dictionaries/CASES";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import { CASE_STATUS } from "../data/dictionaries/CASE_STATUS";
import ElementColorContextProvider from "../Context/ElementColorContext";
import TitleAndText from "./TitleAndText";
import ReadMoreLink from "./ReadMoreLink";

const StyledCases = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: ${padding.vertical.single};
  row-gap: ${padding.vertical.single};
  padding-bottom: ${padding.vertical.quadruple};
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledCenteredText = styled.div`
  padding-top: ${padding.vertical.quadruple};
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};

  @media (min-width: ${breakpoints.desktop}px) {
    background-color: transparent;
    width: 60%;
    justify-content: flex-start;
    text-align: center;
    padding-top: 12rem;
    margin: 0 auto;

    p {
      max-width: inherit;
    }
  }
`;
const SectionCases = ({ title, text, preview }) => {
  return (
    <>
      <StyledCenteredText>
        <TitleAndText h={2} title={title}>
          {text}
        </TitleAndText>
      </StyledCenteredText>
      <StyledCases>
        {CASES.reverse()
          .filter(({ caseStatus }) =>
            preview
              ? caseStatus === CASE_STATUS.FEATURED
              : caseStatus !== CASE_STATUS.DRAFT
          )
          .map(({ thumbnail, caseStatus, caseUrl }) => {
            return (
              <ElementColorContextProvider>
                <CaseThumbnail
                  data={thumbnail}
                  caseUrl={caseUrl}
                  key={uuid()}
                  status={caseStatus}
                />
              </ElementColorContextProvider>
            );
          })}
      </StyledCases>
      {preview && <ReadMoreLink to="cases">See all cases</ReadMoreLink>}
    </>
  );
};

SectionCases.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  preview: PropTypes.bool,
};

SectionCases.defaultProps = {
  title: null,
  text: null,
  preview: false,
};

export default SectionCases;
