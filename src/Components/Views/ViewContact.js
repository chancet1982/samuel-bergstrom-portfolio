import React from "react";
import View from "../View";
import FullScreenCenteredFlexContainer from "../FullScreenCenteredFlexContainer";
import Paragraph from "../Elements/Paragraph";
import Title from "../Elements/Title";
import ContactForm from "../ContactForm";
import colors from "../../theme/colors";

const ViewContact = () => {
  return (
    <View>
      <FullScreenCenteredFlexContainer bgColor={colors.primary}>
        <Title h={4}>Get in touch</Title>
        <Paragraph>Here will be a contact form</Paragraph>
        <ContactForm></ContactForm>
      </FullScreenCenteredFlexContainer>
    </View>
  );
};

export default ViewContact;
