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
import Icon from "../Shared/Icons";
import { ICON_PATHS } from "../../data/dictionaries/ICON_PATHS";

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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    padding: ${padding.insideElements.quarter} ${padding.insideElements.half}
      ${padding.insideElements.half} ${padding.insideElements.half};
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
            <Icon path={ICON_PATHS.LINKEDIN} color="#ffffff" size={40} />
          </Link>
          <Link href="https://adplist.org/mentors/samuel-bergstrom">
            <Icon path={ICON_PATHS.ADPLIST} color="#ffffff" size={40} />
          </Link>
          <Link href="https://medium.com/@chancet1982">
            <Icon path={ICON_PATHS.MEDIUM} color="#ffffff" size={40} />
          </Link>
          <Link href="https://stackoverflow.com/users/4042508/samuel-bergstr%C3%B6m">
            <Icon path={ICON_PATHS.STACK_EXCHANGE} color="#ffffff" size={40} />
          </Link>
        </StyledSocialMediaLinks>
      </motion.div>
    </StyledSectionContactForm>
  );
}

SectionContactForm.propTypes = {};

export default SectionContactForm;
