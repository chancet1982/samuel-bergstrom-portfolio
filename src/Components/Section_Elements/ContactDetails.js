import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Paragraph from "../Elements/Paragraph";
import Span from "../Elements/Span";
import TitleAndText from "../Elements/TitleAndText";
import ContactForm from "../ContactForm";
import List from "../Elements/List";
import padding from "../../theme/padding";

const StyledContactDetails = styled(motion.div)`
  padding: ${padding.vertical.double} ${padding.horizontal.double};
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ContactDetails = () => {
  return (
    <StyledContactDetails>
      <TitleAndText title="Get in touch">
        <Paragraph>You can always reach out to me using</Paragraph>
      </TitleAndText>
      <List
        items={[
          <>
            <TitleAndText title="Email:" h={5}>
              <Span>chancet1982@gmail.com</Span>
            </TitleAndText>
          </>,
          <>
            <TitleAndText title="Phone:" h={5}>
              <Span>072 545 1337</Span>
            </TitleAndText>
          </>,
          <>
            <TitleAndText title="Or the form below:" h={5}>
              <ContactForm />
            </TitleAndText>
          </>,
        ]}
      />
    </StyledContactDetails>
  );
};

export default ContactDetails;
