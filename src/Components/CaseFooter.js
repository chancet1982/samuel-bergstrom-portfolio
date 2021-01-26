import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TitleAndText from "./TitleAndText";
import Paragraph from "./Elements/Paragraph";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import Span from "./Elements/Span";
import Button from "./Elements/Button";

const StyledCaseFooter = styled(motion.div)`
  padding: ${padding.vertical.double} ${padding.horizontal.double};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    }};

  > div::first-of-type {
    grid-column: 1 / span 3;

    @media (min-width: ${breakpoints.desktop}px) {
      grid-column: 1 / span 2;
    }
  }

  > div::last-of-type {
    grid-column: 1 / span 3;

    @media (min-width: ${breakpoints.desktop}px) {
      grid-column: 2 / span 1;
    }
  }
`;

const StyledLinksMenu = styled.div``;

const StyledLink = styled.a``;

// TODO: style the caseFooter to look nice.
const CaseFooter = () => {
  return (
    <StyledCaseFooter>
      <TitleAndText h={4} title="Let's get in touch" padded>
        <Paragraph small>Found me interesting? Let’s talk</Paragraph>
        <Button>Get in touch</Button>
      </TitleAndText>

      <StyledLinksMenu>
        <StyledLink
          href="https://www.linkedin.com/in/samuel-bergstr%C3%B6m-13bb8b1b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Span large>LinkedIn</Span>
        </StyledLink>

        <StyledLink
          href="https://stackoverflow.com/users/4042508/samuel-bergstr%C3%B6m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Span large>StackOverflow</Span>
        </StyledLink>

        <StyledLink
          href="https://www.facebook.com/samuel.maayan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Span large>Facebook</Span>
        </StyledLink>

        <StyledLink
          href="https://medium.com/@chancet1982"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Span large>Medium</Span>
        </StyledLink>
      </StyledLinksMenu>
    </StyledCaseFooter>
  );
};

CaseFooter.propTypes = {};

export default CaseFooter;
