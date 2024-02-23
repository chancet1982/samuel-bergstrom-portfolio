import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TitleAndText from "../Shared/TitleAndText";
import Paragraph from "../Shared/Paragraph";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import Link from "../Shared/Link";
import sizes from "../../theme/sizes";
import Span from "../Shared/Span";
import ContactForm from "../ContactForm";
import List from "../Shared/List";

const StyledCaseFooter = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

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
    grid-column: 1 / span 2;

    @media (min-width: ${breakpoints.tablet}px) {
      grid-column: 1 / span 1;
    }
  }

  > div:last-of-type {
    grid-column: 1 / span 2;

    @media (min-width: ${breakpoints.tablet}px) {
      grid-column: 2 / span 1;
    }
  }
`;

const StyledFooter = styled(motion.footer)`
  padding: ${padding.outsideElements.double} ${padding.outsideElements.double};
  margin: 0;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

const StyledContactForm = styled(motion.div)`
  /*display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;*/
`;

function CaseFooter() {
  /*  TODO: Make the footer sticky like the one from tretton37 */
  return (
    <>
      <StyledCaseFooter
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <TitleAndText h={3} title="Let's get in touch">
          <Paragraph xl>
            Found me interesting? Find me on social media or send me a message
          </Paragraph>
          <List
            items={[
              <Link href="https://www.linkedin.com/in/samuel-bergstr%C3%B6m-13bb8b1b/">
                LinkedIn
              </Link>,
              <Link href="https://adplist.org/mentors/samuel-bergstrom">
                ADPlist
              </Link>,
              <Link href="https://medium.com/@chancet1982">Medium</Link>,
              <Link href="https://stackoverflow.com/users/4042508/samuel-bergstr%C3%B6m">
                StackOverflow
              </Link>,
              <Link href="https://www.facebook.com/samuel.maayan">
                Facebook
              </Link>,
            ]}
          />
        </TitleAndText>
        <StyledContactForm>
          <ContactForm />
        </StyledContactForm>
      </StyledCaseFooter>
      <StyledFooter
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <Span small>© 2024, Samuel Bergström. All rights reserved. </Span>
      </StyledFooter>
    </>
  );
}

CaseFooter.propTypes = {};

export default CaseFooter;
