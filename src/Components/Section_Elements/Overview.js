/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TitleAndText from "../Shared/TitleAndText";
import Paragraph from "../Shared/Paragraph";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";

const StyledOverviewWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  min-height: ${({
    theme: {
      sizes: { small },
    },
  }) => small};

  padding: ${({ bgColor }) =>
    bgColor
      ? `${padding.vertical.double} ${padding.horizontal.double}`
      : `0 ${padding.horizontal.double}`};

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

const StyledOverviewText = styled.div`
  grid-column: 1 / span 3;
  position: relative;

  padding: 0 ${padding.horizontal.double};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${breakpoints.desktop}px) {
    grid-column: 1 / span 2;
    padding: ${padding.vertical.double} ${padding.horizontal.double};
  }
`;

const StyledOverviewItems = styled.div`
  grid-column: 1 / span 3;

  padding: 0 ${padding.horizontal.double};
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.mobileLarge}px) and (max-width: ${breakpoints.desktop -
    1}px) {
    > div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      > p {
        align-self: center;
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: ${breakpoints.desktop}px) {
    grid-column: 3 / span 1;
    padding: ${padding.vertical.double} ${padding.horizontal.double};
  }
`;

const Overview = ({ text, toolsAndMethods, bgColor }) => {
  return (
    <StyledOverviewWrapper>
      <StyledOverviewText bgColor={bgColor}>
        {text && <TitleAndText>{text}</TitleAndText>}
      </StyledOverviewText>
      <StyledOverviewItems bgColor={bgColor}>
        {toolsAndMethods.length ? (
          <TitleAndText title="Tools & Methods:" h={5}>
            <Paragraph small>{toolsAndMethods.join(", ")}</Paragraph>
          </TitleAndText>
        ) : null}
      </StyledOverviewItems>
    </StyledOverviewWrapper>
  );
};

Overview.propTypes = {
  text: PropTypes.node,

  toolsAndMethods: PropTypes.array,
  bgColor: PropTypes.string,
};

Overview.defaultProps = {
  text: null,
  toolsAndMethods: [],
  bgColor: null,
};

export default Overview;

/* TODO: Move Role Duration Platforms somewhere else   */
/* {myRole && (
  <TitleAndText title="My role:" h={5}>
    <Paragraph small>{myRole}</Paragraph>
  </TitleAndText>
)}
{duration && (
  <TitleAndText title="Duration:" h={5}>
    <Paragraph small>{duration}</Paragraph>
  </TitleAndText>
)}
{platforms.length ? (
  <TitleAndText title="Platforms:" h={5}>
    <Paragraph small>{platforms.join(", ")}</Paragraph>
  </TitleAndText>
) : null} */
