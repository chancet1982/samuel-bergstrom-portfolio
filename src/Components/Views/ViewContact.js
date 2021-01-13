import React from "react";
import View from "../View";
import FullScreenCenteredFlexContainer from "../FullScreenCenteredFlexContainer";
import Paragraph from "../Elements/Paragraph";
import Title from "../Elements/Title";
import ContactForm from "../ContactForm";
import List from "../Elements/List";

// TODO: Fix overflow
const ViewContact = () => {
  return (
    <View>
      <FullScreenCenteredFlexContainer>
        <Title h={4}>Get in touch</Title>
        <Paragraph>You can always reach out to me using</Paragraph>
        <List
          plain
          items={[
            <>
              <Title h={5}>Email:</Title>
              <Paragraph>chancet1982@gmail.com</Paragraph>
            </>,
            <>
              <Title h={5}>Phone:</Title>
              <Paragraph>072 545 1337</Paragraph>
            </>,
            <>
              <Title h={5}>Or the form below:</Title>
              <ContactForm />
            </>,
          ]}
        />
      </FullScreenCenteredFlexContainer>
    </View>
  );
};

export default ViewContact;
