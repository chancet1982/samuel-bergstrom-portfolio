import React from "react";
import View from "../View";
import { VIEW_CASES } from "../../data/VIEW_CASES";
import SectionsRenderer from "../SectionsRenderer";

function ViewCases() {
  const sectionsData = VIEW_CASES;

  return (
    <View>
      <SectionsRenderer sections={sectionsData} />
    </View>
  );
}

export default ViewCases;
