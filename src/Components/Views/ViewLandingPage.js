import React from "react";
import View from "../View";
import { VIEW_LANDING_PAGE } from "../../data/VIEW_LANDING_PAGE";
import SectionsRenderer from "../SectionsRenderer";

function ViewLandingPage() {
  const sectionsData = VIEW_LANDING_PAGE;

  return (
    <View>
      <SectionsRenderer sections={sectionsData} />
    </View>
  );
}

export default ViewLandingPage;
