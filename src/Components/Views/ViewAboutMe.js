import React from "react";
import View from "../View";
import SectionsRenderer from "../SectionsRenderer";
import { VIEW_ABOUT_ME } from "../../data/VIEW_ABOUT_ME";

//TODO: Add timeline
//TODO: Add a link to linkedIn, Medium, Stackoverflow whatever

const ViewAboutMe = () => {
  const sectionsData = VIEW_ABOUT_ME;

  return (
    <View padded>
      <SectionsRenderer sections={sectionsData} />
    </View>
  );
};

export default ViewAboutMe;
