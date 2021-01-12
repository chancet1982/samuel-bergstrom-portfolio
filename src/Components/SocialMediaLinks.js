import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import padding from "../theme/padding";
import Span from "./Elements/Span";
import Title from "./Elements/Title";
import breakpoints from "../theme/breakpoints";

const StyledSocialMediaLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: ${breakpoints.mobile_lg}px) and (max-width: ${breakpoints.tablet -
    1}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledTitle = styled.div`
  grid-area: span 1 / span 1;

  @media (min-width: ${breakpoints.mobile_lg}px) and (max-width: ${breakpoints.tablet -
    1}px) {
    grid-area: span 1 / span 2;
  }

  @media (min-width: ${breakpoints.tablet}px) {
    grid-area: span 1 / span 4;
  }

  padding: ${padding.vertical.half} ${padding.horizontal.quadruple};
`;

const StyledLink = styled.a`
  display: block;
  background-color: ${({ bgColor }) => bgColor};
  padding: 4rem;
  text-align: center;
  cursor: pointer;
  text-decoration: none;

  > span {
    color: ${colors.text.light.high};
    font-weight: 600;
  }

  &:hover {
    background-color: ${({ bgColorHover }) => bgColorHover};
  }
`;

const SocialMediaLinks = (props) => {
  return (
    <StyledSocialMediaLinks>
      <StyledTitle>
        <Title h={2}>
          Find me on <mark>social media</mark>:
        </Title>
      </StyledTitle>

      <StyledLink
        href="https://www.linkedin.com/in/samuel-bergstr%C3%B6m-13bb8b1b/"
        target="_blank"
        rel="noopener noreferrer"
        bgColor="#0C66C2"
        bgColorHover="Blue"
      >
        <Span large light>
          LinkedIn
        </Span>
      </StyledLink>

      <StyledLink
        href="https://stackoverflow.com/users/4042508/samuel-bergstr%C3%B6m"
        target="_blank"
        rel="noopener noreferrer"
        bgColor="#F48024"
        bgColorHover="Orange"
      >
        <Span large light>
          StackOverflow
        </Span>
      </StyledLink>

      <StyledLink
        href="https://www.facebook.com/samuel.maayan"
        target="_blank"
        rel="noopener noreferrer"
        bgColor="#1777F2"
        bgColorHover="Teal"
      >
        <Span large light>
          Facebook
        </Span>
      </StyledLink>

      <StyledLink
        href="https://medium.com/@chancet1982"
        target="_blank"
        rel="noopener noreferrer"
        bgColor="#000000"
        bgColorHover="Black"
      >
        <Span large light>
          Medium
        </Span>
      </StyledLink>
    </StyledSocialMediaLinks>
  );
};

SocialMediaLinks.propTypes = {};

export default SocialMediaLinks;
