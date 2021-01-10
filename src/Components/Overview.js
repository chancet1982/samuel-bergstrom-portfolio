/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TitleAndText from "./TitleAndText";
import Paragraph from "./Elements/Paragraph";
import padding from "../theme/padding";
import breakpoints from "../theme/breakpoints";

const StyledOverviewWrapper = styled.div`
  min-height: ${({
    theme: {
      sizes: { small },
    },
  }) => small};
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /*position:sticky;
  bottom: 0;*/
`;

const StyledOverviewText = styled.div`
  grid-column: 1 / span 2;

  background-color: ${({
    theme: {
      colors: { light },
    },
  }) => light};

  padding-top: ${padding.vertical.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  padding-bottom: ${padding.vertical.quadruple};
  padding-left: ${padding.horizontal.quadruple};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}px) {
    grid-column: 1 / span 3;
  }
`;

const StyledOverview = styled.div`
  grid-column: 3 / span 1;
  padding-top: ${padding.vertical.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  padding-bottom: ${padding.vertical.quadruple};
  padding-left: ${padding.horizontal.quadruple};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}px) {
    grid-column: 1 / span 3;
  }
`;

const StyledFirstDecorativeColumn = styled.div`
  grid-column: 1 / span 2;
  color: white;
  height: ${padding.vertical.double};

  @media (max-width: ${breakpoints.desktop}px) {
    display: none;
  }
`;

const StyledSecondDecorativeColumn = styled.div`
  grid-column: 3 / span 1;
  height: ${padding.vertical.double};

  ${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    }};

  @media (max-width: ${breakpoints.desktop}px) {
    display: none;
  }
`;

const Overview = ({
  text,
  myRole,
  duration,
  platforms,
  toolsAndMethods,
  light,
  bgColor,
}) => {
  return (
    <StyledOverviewWrapper>
      <StyledOverviewText bgColor={bgColor}>
        {text && <TitleAndText light={light}>{text}</TitleAndText>}
      </StyledOverviewText>
      <StyledOverview>
        {myRole && (
          <TitleAndText title="My role:" h={5} light={light}>
            <Paragraph small light={light}>
              {myRole}
            </Paragraph>
          </TitleAndText>
        )}
        {duration && (
          <TitleAndText title="Duration:" h={5} light={light}>
            <Paragraph small light={light}>
              {duration}
            </Paragraph>
          </TitleAndText>
        )}
        {platforms.length ? (
          <TitleAndText title="Platforms:" h={5} light={light}>
            <Paragraph small light={light}>
              {platforms.join(", ")}
            </Paragraph>
          </TitleAndText>
        ) : null}
        {toolsAndMethods.length ? (
          <TitleAndText title="Tools & Methods:" h={5} light={light}>
            <Paragraph small light={light}>
              {toolsAndMethods.join(", ")}
            </Paragraph>
          </TitleAndText>
        ) : null}
      </StyledOverview>
      <StyledFirstDecorativeColumn />
      <StyledSecondDecorativeColumn bgColor={bgColor} />
    </StyledOverviewWrapper>
  );
};

Overview.propTypes = {
  text: PropTypes.node,
  myRole: PropTypes.string,
  duration: PropTypes.string,
  platforms: PropTypes.array,
  toolsAndMethods: PropTypes.array,
  light: PropTypes.bool,
  bgColor: PropTypes.string,
};

Overview.defaultProps = {
  text: null,
  myRole: null,
  duration: null,
  platforms: [],
  toolsAndMethods: [],
  light: false,
  bgColor: null,
};

export default Overview;
