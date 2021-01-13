/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import CaseThumbnail from "./CaseThumbnail";
import CASES from "../data/dictionaries/CASES";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import Textbox from "./Textbox";
import { CASE_STATUS } from "../data/dictionaries/CASE_STATUS";

const StyledCases = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 0.25rem;
  row-gap: 0.25rem;

  padding-top: ${padding.vertical.quadruple};
  padding-bottom: ${padding.vertical.quadruple};

  @media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop -
    1}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  > div {
    &:nth-child(1) {
      padding-left: ${padding.horizontal.double};
    }

    &:nth-child(2) {
      @media (min-width: ${breakpoints.desktop}px) {
        grid-area: span 1 / span 2;
      }
    }

    /*&:nth-child(4n - 3) {
      @media (min-width: ${breakpoints.desktop}px) {
        grid-area: span 1 / span 2;
      }
    }

    &:nth-child(4n - 2) {
      @media (min-width: ${breakpoints.desktop}px) {
        grid-area: span 1 / span 2;
      }
    }*/
  }
`;

const SectionCases = ({ title, text, light }) => {
  return (
    <StyledCases>
      <Textbox light={light} title={title} text={text} />
      {CASES.filter(({ caseStatus }) => caseStatus !== CASE_STATUS.DRAFT).map(
        ({ thumbnail, caseStatus }, index) => {
          return (
            <CaseThumbnail
              data={thumbnail}
              caseKey={index}
              key={uuid()}
              status={caseStatus}
            />
          );
        }
      )}
    </StyledCases>
  );
};

SectionCases.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  light: PropTypes.bool,
};

SectionCases.defaultProps = {
  title: null,
  light: false,
};

export default SectionCases;
