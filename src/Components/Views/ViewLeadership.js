import React from "react";
import View from "../View";
import SectionsRenderer from "../SectionsRenderer";
import { VIEW_LEADERSHIP } from "../../data/VIEW_LEADERSHIP";

function ViewLeadership() {
  const sectionsData = VIEW_LEADERSHIP;

  return (
    <View>
      <SectionsRenderer sections={sectionsData} />
    </View>
  );
}

export default ViewLeadership;
