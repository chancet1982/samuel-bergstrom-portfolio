/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import CaseThumbnail2 from "../Shared/CaseThumbnail2";
import { CASES } from "../../data/dictionaries/CASES";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import ElementColorContextProvider from "../../Context/ElementColorContext";
import CenteredTitleAndText from "../Shared/CenteredTitleAndText";
import Button from "../Shared/Button";

const StyledPageLink = styled.div`
  text-align: center;
  padding-bottom: ${padding.vertical.double};
`;

const StyledCases = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: ${padding.vertical.eighth};
  row-gap: ${padding.vertical.eighth};
  padding-bottom: ${({ preview }) =>
    preview ? padding.vertical.single : padding.vertical.quadruple};

  /*@media (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: repeat(1, 1fr);
  }*/
`;

const SectionCases = ({ title, text, preview, h }) => {
  return (
    <>
      <CenteredTitleAndText title={title} text={text} h={h} isPadded />
      <StyledCases preview={preview}>
        {CASES.filter(({ caseStatus }) =>
          preview
            ? caseStatus === CASE_STATUS.FEATURED
            : caseStatus !== CASE_STATUS.DRAFT
        ).map(({ thumbnail, caseStatus, caseUrl }) => {
          return (
            <ElementColorContextProvider key={uuid()}>
              <CaseThumbnail2
                data={thumbnail}
                caseUrl={caseUrl}
                status={caseStatus}
              />
            </ElementColorContextProvider>
          );
        })}
      </StyledCases>
      {preview && (
        <StyledPageLink>
          <Button secondary to="cases">
            See all cases
          </Button>
        </StyledPageLink>
      )}
    </>
  );
};

SectionCases.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  preview: PropTypes.bool,
  h: PropTypes.number,
};

SectionCases.defaultProps = {
  title: null,
  text: null,
  preview: false,
  h: 2,
};

export default SectionCases;
