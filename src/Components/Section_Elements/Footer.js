import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TitleAndText from "../Shared/TitleAndText";
import Paragraph from "../Shared/Paragraph";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import Button from "../Shared/Button";
import Link from "../Shared/Link";
import sizes from "../../theme/sizes";
import { CursorContext } from "../../Context/CursorContext";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import colors from "../../theme/colors";
import Span from "../Shared/Span";

const StyledCaseFooter = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
  grid-gap: max(
    ${padding.outsideElements.double},
    ${padding.insideElements.single}
  );
  padding-bottom: ${padding.insideElements.double};
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }

  button {
    margin-top: 3rem;
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
    }
  }
`;

const StyledFooter = styled(motion.footer)`
  padding: ${padding.outsideElements.double}
    ${padding.outsideElements.quadruple};
  margin: 0;
  text-align: center;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

const StyledLinksMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    display: block;
    width: 100%;
    padding: ${padding.insideElements.quarter} 0;
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

  /*  TODO: Make the footer sticky like the one from tretton37 */
  return (
    <BackgroundWrapper bgColor={colors.lighten.low}>
      <StyledCaseFooter
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <TitleAndText h={3} title="Let's get in touch">
          <Paragraph xl>Found me interesting? Let’s talk</Paragraph>

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
          <Link href="https://adplist.org/mentors/samuel-bergstrom">
            ADPlist
          </Link>
          <Link href="https://medium.com/@chancet1982">Medium</Link>
          <Link href="https://stackoverflow.com/users/4042508/samuel-bergstr%C3%B6m">
            StackOverflow
          </Link>
          <Link href="https://www.facebook.com/samuel.maayan">Facebook</Link>
        </StyledLinksMenu>
      </StyledCaseFooter>
      <StyledFooter
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <Span small>2024, Samuel Bergström</Span>
      </StyledFooter>
    </BackgroundWrapper>
  );
}

CaseFooter.propTypes = {};

export default CaseFooter;
