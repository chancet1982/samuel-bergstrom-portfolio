import React from "react";
import View from "../View";
import SectionClientsMarquee from "../Section_Elements/SectionClientsMarquee";
// import { VIEW_TEST } from "../../data/VIEW_TEST";
// import SectionsRenderer from "../SectionsRenderer";
// import Signup from "../Signup";
// eslint-disable-next-line import/no-named-as-default
// import LandingPageHero from "../Section_Elements/UNUSED_SectionHeroLandingPage";
// import Paragraph from "../Shared/Paragraph";
import Section from "../Section/Section";

function ViewTest() {
  // const sectionsData = VIEW_TEST;
  /* const caption = {
    overline: "WHATEVER",
    title: "Some title to show im good",
    text: <Paragraph>Some generic text without any meaning</Paragraph>,
  }; */

  /* const bgColor = "#000000"; */

  /* const bgMedia = {
    type: BG_MEDIA_TYPES.IMAGE,
    mediaUrl: "assets/cover-bg.png",
  }; */

  /* const fgImage = {
    imageUrl: "assets/cover-fg.png",
  }; */

  return (
    <View>
      <Section>
        <SectionClientsMarquee />
      </Section>
      {/* <SectionsRenderer sections={sectionsData} /> */}
    </View>
  );
}

export default ViewTest;
