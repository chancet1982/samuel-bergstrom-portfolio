import React from "react";
import View from "../View";
import SectionsRenderer from "../SectionsRenderer";
import { ABOUT_ME } from "../../data/ABOUT_ME";

const ViewAboutMe = () => {
  const sectionsData = ABOUT_ME;

  return (
    <View padded>
      <SectionsRenderer sections={sectionsData} />
    </View>
  );
};

export default ViewAboutMe;
