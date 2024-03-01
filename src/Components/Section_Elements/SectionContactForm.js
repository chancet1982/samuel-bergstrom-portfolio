import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";
import ContactForm from "../ContactForm";
import TitleAndText from "../Shared/TitleAndText";
import Paragraph from "../Shared/Paragraph";
import Image from "../Shared/Image";
import Link from "../Shared/Link";
import Title from "../Shared/Title";

const StyledSectionContactForm = styled(motion.div)`
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
`;

const StyledSocialMediaLinks = styled(motion.div)`
  display: flex;
  flex-direction: row;

  gap: ${padding.insideElements.single};

  a {
    display: block;
    width: 64px;
    height: 64px;
    padding: ${padding.insideElements.quarter} 0;
    border-radius: 50%;
    border: solid 1px #ffffff;
    box-sizing: border-box;
    cursor: pointer;
  }
`;

function SectionContactForm() {
  return (
    <StyledSectionContactForm
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <Image imageUrl={`${process.env.PUBLIC_URL}/assets/contact-form.jpg`} />
      <motion.div>
        <TitleAndText h={3} title="Let’s get in touch">
          <Paragraph xl>Found me interesting? Let’s talk</Paragraph>
        </TitleAndText>
        <ContactForm />
        <Title h={4}>Find me on social media</Title>
        <StyledSocialMediaLinks>
          <Link href="https://www.linkedin.com/in/samuel-bergstr%C3%B6m-13bb8b1b/">
            <Image
              imageUrl={`${process.env.PUBLIC_URL}/assets/social-media-links-linkedin.png`}
            />
          </Link>
          <Link href="https://adplist.org/mentors/samuel-bergstrom">
            <Image
              imageUrl={`${process.env.PUBLIC_URL}/assets/social-media-links-adplist.png`}
            />
          </Link>
          <Link href="https://medium.com/@chancet1982">
            <Image
              imageUrl={`${process.env.PUBLIC_URL}/assets/social-media-links-medium.png`}
            />
          </Link>
          <Link href="https://stackoverflow.com/users/4042508/samuel-bergstr%C3%B6m">
            <Image
              imageUrl={`${process.env.PUBLIC_URL}/assets/social-media-links-stackexchange.png`}
            />
          </Link>
        </StyledSocialMediaLinks>
      </motion.div>
    </StyledSectionContactForm>
  );
}

SectionContactForm.propTypes = {};

export default SectionContactForm;
