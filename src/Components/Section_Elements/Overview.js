/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TitleAndText from "../Shared/TitleAndText";
import Paragraph from "../Shared/Paragraph";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";
import colors from "../../theme/colors";

const StyledOverviewWrapper = styled.div`
  min-height: ${({
    theme: {
      sizes: { small },
    },
  }) => small};
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding-top: ${padding.vertical.double};
  padding-bottom: ${padding.vertical.double};

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${breakpoints.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

const StyledOverviewText = styled.div`
  grid-column: 1 / span 3;
  position: relative;

  :before {
    content: "";
    clip-path: circle(20% at 8% 40%);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: ${colors.offwhite};
  }

  padding: 0 ${padding.horizontal.quadruple};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${breakpoints.desktop}px) {
    grid-column: 1 / span 2;
    padding: ${padding.vertical.double} ${padding.horizontal.double};
  }
`;

const StyledOverview = styled.div`
  grid-column: 1 / span 3;
  :after {
    content: "";
    clip-path: circle(4% at 74vw 72%);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: ${colors.offwhite};
  }

  padding: 0 ${padding.horizontal.quadruple};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${breakpoints.desktop}px) {
    grid-column: 3 / span 1;
    padding: ${padding.vertical.double} ${padding.horizontal.double};
  }
`;

const Overview = ({
  text,
  myRole,
  duration,
  platforms,
  toolsAndMethods,
  bgColor,
}) => {
  return (
    <StyledOverviewWrapper>
      <StyledOverviewText bgColor={bgColor}>
        {text && <TitleAndText>{text}</TitleAndText>}
      </StyledOverviewText>
      <StyledOverview bgColor={bgColor}>
        {myRole && (
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
        ) : null}
        {toolsAndMethods.length ? (
          <TitleAndText title="Tools & Methods:" h={5}>
            <Paragraph small>{toolsAndMethods.join(", ")}</Paragraph>
          </TitleAndText>
        ) : null}
      </StyledOverview>
    </StyledOverviewWrapper>
  );
};

Overview.propTypes = {
  text: PropTypes.node,
  myRole: PropTypes.string,
  duration: PropTypes.string,
  platforms: PropTypes.array,
  toolsAndMethods: PropTypes.array,
  bgColor: PropTypes.string,
};

Overview.defaultProps = {
  text: null,
  myRole: null,
  duration: null,
  platforms: [],
  toolsAndMethods: [],
  bgColor: null,
};

export default Overview;
