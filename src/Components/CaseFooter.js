import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TitleAndText from "./TitleAndText";
import Paragraph from "./Elements/Paragraph";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import Button from "./Elements/Button";
import colors from "../theme/colors";
import Link from "./Elements/Link";

const StyledCaseFooter = styled(motion.div)`
  padding: ${padding.vertical.double} ${padding.horizontal.double};
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    }};

  > div:first-of-type {
    grid-column: 1 / span 3;

    @media (min-width: ${breakpoints.tablet}px) {
      grid-column: 1 / span 2;
    }
  }

  > div:last-of-type {
    grid-column: 1 / span 3;

    @media (min-width: ${breakpoints.tablet}px) {
      grid-column: 3 / span 1;
      border-left: solid 4px ${colors.offwhite};
    }
  }
`;

const StyledLinksMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    display: block;
    width: 100%;
    padding: ${padding.vertical.quarter} ${padding.horizontal.double};
    box-sizing: border-box;
  }
`;

const CaseFooter = () => {
  return (
    <StyledCaseFooter>
      <TitleAndText h={4} title="Let's get in touch" isPadded>
        <Paragraph small>Found me interesting? Let’s talk</Paragraph>
        <Button to="/contact">Get in touch</Button>
      </TitleAndText>
      <StyledLinksMenu>
        <Link
          large
          href="https://www.linkedin.com/in/samuel-bergstr%C3%B6m-13bb8b1b/"
        >
          LinkedIn
        </Link>
        <Link
          large
          href="https://stackoverflow.com/users/4042508/samuel-bergstr%C3%B6m"
        >
          StackOverflow
        </Link>
        <Link large href="https://www.facebook.com/samuel.maayan">
          Facebook
        </Link>
        <Link large href="https://medium.com/@chancet1982">
          Medium
        </Link>
      </StyledLinksMenu>
    </StyledCaseFooter>
  );
};

CaseFooter.propTypes = {};

export default CaseFooter;
