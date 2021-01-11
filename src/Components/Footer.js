import React from "react";
import styled from "styled-components";
import padding from "../theme/padding";
import Span from "./Elements/Span";

const StyledFooter = styled.footer`
  padding: ${padding.vertical.double} ${padding.horizontal.quadruple};
  background-color: ${({ theme: { colors } }) => colors.offwhite};
  position: relative;

  p {
    color: ${({
      theme: {
        colors: { text },
      },
    }) => text.dark.disabled};
    margin: 0;
  }
`;

const SectionFooter = () => {
  return (
    <StyledFooter>
      <Span small>2020, Making stuff happen</Span>
    </StyledFooter>
  );
};

export default SectionFooter;
