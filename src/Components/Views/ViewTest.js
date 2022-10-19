import React from "react";
import View from "../View";
import { VIEW_TEST } from "../../data/VIEW_TEST";
import SectionsRenderer from "../SectionsRenderer";

function ViewTest() {
  const sectionsData = VIEW_TEST;

  return (
    <View>
      <SectionsRenderer sections={sectionsData} />
    </View>
  );
}

export default ViewTest;
