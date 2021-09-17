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
// TODO consider moving to section renderer
const SectionFooter = () => {
  return (
    <StyledFooter>
      <Span small>2021, Samuel Bergström</Span>
    </StyledFooter>
  );
};

export default SectionFooter;
