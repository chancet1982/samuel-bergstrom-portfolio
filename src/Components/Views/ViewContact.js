import React from "react";
import View from "../View";
import { VIEW_CONTACT } from "../../data/VIEW_CONTACT";
import SectionsRenderer from "../SectionsRenderer";

// TODO: Fix overflow
const ViewContact = () => {
  const sectionsData = VIEW_CONTACT;

  return (
    <View>
      <SectionsRenderer sections={sectionsData} />
    </View>
  );
};

export default ViewContact;
