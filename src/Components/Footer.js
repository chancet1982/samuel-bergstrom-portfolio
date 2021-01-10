import React from "react";
import styled from "styled-components";
import padding from "../theme/padding";
import Paragraph from "./Elements/Paragraph";

const StyledFooter = styled.footer`
  padding: ${padding.vertical.double} ${padding.horizontal.double};
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.light};
  display: sticky;
  bottom: 0;

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
      <Paragraph small>2020, Making stuff happen</Paragraph>
    </StyledFooter>
  );
};

export default SectionFooter;
