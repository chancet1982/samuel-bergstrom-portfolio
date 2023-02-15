import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Paragraph from "../Shared/Paragraph";
import Span from "../Shared/Span";
import TitleAndText from "../Shared/TitleAndText";
import ContactForm from "../ContactForm";
import List from "../Shared/List";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";

const StyledContactDetails = styled(motion.div)`
  padding: ${padding.vertical.double} ${padding.horizontal.quadruple}; /* TODO: This is a hack, hopefully we'll get rid of it some day */
  max-width: ${sizes.contentWidthLimit}px;
  margin: 0 auto;
  box-sizing: border-box;
`;

function ContactDetails() {
  return (
    <StyledContactDetails
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <TitleAndText title="Get in touch">
        <Paragraph>You can always reach out to me using</Paragraph>
      </TitleAndText>
      <List
        items={[
          <TitleAndText title="Email:" h={5}>
            <Span>chancet1982@gmail.com</Span>
          </TitleAndText>,
          <TitleAndText title="Phone:" h={5}>
            <Span>072 545 1337</Span>
          </TitleAndText>,
          <TitleAndText title="Or the form below:" h={5}>
            <ContactForm />
          </TitleAndText>,
        ]}
      />
    </StyledContactDetails>
  );
}

export default ContactDetails;
