import React from "react";
import View from "../View";
import SectionsRenderer from "../SectionsRenderer";
import { VIEW_ABOUT_ME } from "../../data/VIEW_ABOUT_ME";

function ViewAboutMe() {
  const sectionsData = VIEW_ABOUT_ME;

  return (
    <View isPadded>
      <SectionsRenderer sections={sectionsData} />
    </View>
  );
}

export default ViewAboutMe;
