import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TitleAndText from "../Shared/TitleAndText";
import Paragraph from "../Shared/Paragraph";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import Button from "../Shared/Button";
import colors from "../../theme/colors";
import Link from "../Shared/Link";
import sizes from "../../theme/sizes";
import { CursorContext } from "../../Context/CursorContext";

const StyledCaseFooter = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: ${padding.vertical.double} ${padding.horizontal.double};

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }

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

const StyledLinksMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};

  a {
    display: block;
    width: 100%;
    padding: ${padding.vertical.quarter} 0;
    box-sizing: border-box;
  }
`;

function CaseFooter() {
  const [, setCursorText, , setCursorVariant] = useContext(CursorContext);

  function caseFooterButtonMouseEnter() {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function caseFooterButtonMouseLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <StyledCaseFooter
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <TitleAndText h={3} title="Let's get in touch" isPadded>
        <Paragraph>Found me interesting? Let’s talk</Paragraph>

        <Button
          to="/contact"
          onMouseEnter={() => caseFooterButtonMouseEnter()}
          onMouseLeave={() => caseFooterButtonMouseLeave()}
        >
          Get in touch
        </Button>
      </TitleAndText>
      <StyledLinksMenu>
        <Link href="https://www.linkedin.com/in/samuel-bergstr%C3%B6m-13bb8b1b/">
          LinkedIn
        </Link>
        <Link href="https://stackoverflow.com/users/4042508/samuel-bergstr%C3%B6m">
          StackOverflow
        </Link>
        <Link href="https://www.facebook.com/samuel.maayan">Facebook</Link>
        <Link href="https://medium.com/@chancet1982">Medium</Link>
      </StyledLinksMenu>
    </StyledCaseFooter>
  );
}

CaseFooter.propTypes = {};

export default CaseFooter;
