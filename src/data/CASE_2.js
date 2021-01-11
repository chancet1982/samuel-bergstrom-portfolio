/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { ROLES } from "./dictionaries/ROLES";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Elements/Paragraph";
import List from "../Components/Elements/List";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

export const CASE_2 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseType: CASE_TYPES.REDESIGN,
  thumbnail: {
    overline: "Diaverum",
    title: "d. Care",
    imageUrl: "assets/case-2/thumbnail.png",
    imageAlt: "thumbnail",
    text: <>Empowering renal patients</>,
    bgColor: "rgba(233, 183, 114, .72)",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Diaverum",
            title: "d. Care",
            imageUrl: "assets/case-2/cover.png",
            text: (
              <>
                <Paragraph large>
                  Empowering renal patients and improving health.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            bgColor: "rgba(233, 183, 114, .72)",
            text: (
              <Paragraph huge>
                Our client is one of the largest private renal care providers in
                the world. They treat more than 40 000 patients, operate over
                400 clinics in 20 countries. Renal patients need to constantly
                keep an eye on their intake, reporting it back as part of their
                treatment, previous attempt at creating an app have failed to
                gain tracktion, now this initiative got a second chance to
                improve patients lives.
              </Paragraph>
            ),
            myRole: ROLES.LEAD,
            duration: "3 months",
            platforms: [
              PLATFORMS.MOBILE_IOS,
              PLATFORMS.MOBILE_ANDROID,
              PLATFORMS.TABLET_IOS,
            ],
            toolsAndMethods: [
              TOOLS_AND_METHODS.COMPETITOR_ANALYSIS,
              TOOLS_AND_METHODS.FLOW_MAPPING,
              TOOLS_AND_METHODS.INTERVIEWS,
              TOOLS_AND_METHODS.SURVEYS,
              TOOLS_AND_METHODS.MOCKUPS,
              TOOLS_AND_METHODS.PROTOTYPING,
              TOOLS_AND_METHODS.USABILITY_TESTING,
            ],
          },
        },
      ],
    },
    {
      header: "Background",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>The problem</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Proving care for a chronic condition is a never ending battle.
                  You cant treat patients in the clinics alone. In order to
                  provide optimal treatment for over 40 000 renal patients
                  worldwide you need to track their intake and values even at
                  home. This is a laborious task, reporting back daily puts a
                  burden both on patients and staff.
                </Paragraph>
                <Paragraph>
                  In its previous life, d. care started off as an initiative to
                  empower patients but it never really took off. Reporting
                  figures were low, rating on App store, and Google lay store
                  negative and generally it didnt really preformed as expected.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.FOUR_IMAGES_TWO_COLUMNS,
            images: [
              {
                imageUrl: "assets/case-2/mood-1.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-2/mood-4.jpg",
                imageAlt: "Co-creating wireframes",
              },
              {
                imageUrl: "assets/case-2/mood-2.jpg",
                imageAlt: "Co-creating wireframes",
              },
              {
                imageUrl: "assets/case-2/mood-3.jpg",
                imageAlt: "Co-creating wireframes",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>The goal:</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  The goal in this case we simple, "make a better app". From an
                  internal point of view a better app would mean more patient
                  are reporting their vitals. From an external perspective,
                  would that be a better app? or will it be considered a chore?
                  Dialysis treatment already requires that patients will spend
                  12-18 hours in clinics weekly. How could we provide enough
                  value for patients to encourage daily use?
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Process",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>First understand the problem, then solve it.</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Before everything, we needed to understand why the current app
                  failed and a clear understand of our goal. We sat down with a
                  group of internal stakeholders, then interviewed different
                  groups internally to provide their perspectives. Then we
                  needed to look outwards...
                </Paragraph>
                <Paragraph>
                  There is plenty of research and insights regarding designing
                  for the elderlies and accessible design. We read through a lot
                  of material hoping that by removing friction users would take
                  a more active role in their wellbeing. experience we could get
                  them to take a more active role in their treatment. On top of
                  that A survey was sent to multiple countries in order to
                  understand what is important for patients.
                </Paragraph>
                <Paragraph>
                  Renal patients are a very specific group. We needed to
                  understand their condition, treatment, abilities, motivations,
                  ambitions. We conducted Surveys and collected results from
                  different clinics accross the globe to ensure we are limiting
                  our sampling bias.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            flip: true,
            title: <>Planning the road ahead</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  With the survey results, we could prioritize features based on
                  our protopersona. We sat with all stakeholders and mapped the
                  functionality, the capacity of the team, prioritized, and
                  created a road-map that would balance user and business goals.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-2/design.jpg",
            imageAlt: "Kickoff meeting, dot-voting on features",
            caption: "Kickoff meeting, dot-voting on features",
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: "assets/case-2/sneakpeek-1.png",
                imageAlt: "TODO: REPLACE ME",
                title: "Reducing friction in self-reporting.",
                text: (
                  <>
                    <Paragraph>
                      Self-reporting wasnt directly visible for users. It
                      required users to look through the app in order to find
                      it.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution:</strong> We opted for much simpler
                      feedback mechnism and adding reminders for reporting
                      vitals.
                    </Paragraph>

                    <Paragraph>
                      <strong>Note:</strong> The reporting mechanism could have
                      been even simpler, monitoring a "change" in wellbeing
                      (from good to bad or vice versa) instead of a linear value
                      would have provided a simpler reporting system but wouldnt
                      fullfil the medical requirements.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-2/sneakpeek-2.png",
                imageAlt: "TODO: REPLACE ME",
                title: "Finding dialysis clinics abroad",
                text: (
                  <>
                    <Paragraph>
                      Based on our surveys, one of the most sought-after
                      features for dialysis patients is finding and being able
                      to book clinics on vacations.{" "}
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution:</strong> We added a feature to look for
                      a clinic, and even reserve treatment for existing
                      patients.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-2/sneakpeek-3.png",
                imageAlt: "TODO: REPLACE ME",
                title: "Health tips, not values",
                text: (
                  <>
                    <Paragraph>
                      Patients weren't interested or could interprate obscure
                      medical values and terms and have a limited number of
                      values that they care about and understand.
                      <strong>Solution: </strong> We kept only a select few
                      values that are known to be important for renal patients.
                      We used additional values to produce health tips and
                      reccomendations. Users got a recomendation for what they
                      should do in order to improve their wellbeing instead of
                      showing a number that they couldnt interprate.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-2/sneakpeek-4.png",
                imageAlt: "TODO: REPLACE ME",
                title: "Medication reminders",
                text: (
                  <>
                    <Paragraph>
                      Renal patients need a lot of medication. Mental abilities
                      degenerate with age making intake of medicine challanging,
                      people simply put, forget it.
                      <strong>Solution:</strong> We decided to add a feature
                      that will be connected to the clinics. Patients will be
                      automatically reminded to take their perscribed medicine,
                      they can even report back their intake to the clinical
                      staff opening the door for even better treatment.
                    </Paragraph>
                  </>
                ),
              },
            ],
          },
        },
      ],
    },
    {
      header: "Design",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Inclusive design for iOS and Android</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  We needed to support multiple platforms and devices. We didnt
                  want to create separate Android and iOS version so instead we
                  made an app that was neither.
                </Paragraph>
                <Paragraph>
                  It was meant to be purely Diaverum, playful and colorful
                  without reducing its accessability.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            flip: true,
            title: <>A sidenote about accessability:</>,
            h: 3,
            text: (
              <>
                <List
                  items={[
                    <>
                      It is always important to have accessability in mind,
                      specially when designing for elderlies. We made sure All
                      colors are WCAG 2.0 AA compatible. "Heavier" font weights
                      were used and font sizes were tested to ensure legability.
                    </>,
                    <>
                      In order to address cognitive impairments, we simplified
                      the navigation structure and made it as shallow as
                      possible.
                    </>,
                    <>
                      We utilized micro interactions in order to to reduce
                      confusion when things just vanish or appear on the screen,
                      these were subtle animations to avoid seazures.
                    </>,
                    <>
                      Loss of sensation around the fingertips and loss of motor
                      control is quite common in renal care. This makes
                      scrolling specially challanging. In order to mitigate that
                      we layed out the content to minimize the need for
                      scrolling. We made sure that we provided at least 9mm
                      target area for all links and buttons to avoid
                      miss-clicks.
                    </>,
                  ]}
                />
              </>
            ),
            imageUrl: "assets/case-2/accessibility.jpg",
            imageAlt: "?",
            caption: "?",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>So now what?</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  We had an untested design proposal that accounts for
                  accessability and needs to be validated.
                </Paragraph>
                <Paragraph>
                  But how do you test an app for clinics that operate globally?
                  where can you find old patients that will be willing to test
                  out a new application for improving their wellbeing?
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Validation",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>2 hours, and 500 SEK later…</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Like most things in Sweden the answer was there all along.
                  <strong>Fika</strong>
                </Paragraph>
                <Paragraph>
                  If you need treatment, you go to a hospital. If you need a
                  break, you go to the cafeteria. So with 500SEK in our pocket
                  we did some guerilla testing offering fika for 5 minutes of
                  people's time. Looking to find if all our hard work paid off.
                </Paragraph>
                <Paragraph>
                  The feedback was amazing. Patients couldnt wait getting their
                  hands on the app and since then the app was rolled out to 16
                  different countries, and the number of daily active users have
                  increated exponentially.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-2/validation.jpg",
            imageAlt:
              "Guerilla usability testing in Skånes universitetssjukhus Malmö cafeteria",
            caption:
              "Guerilla usability testing in Skånes universitetssjukhus Malmö cafeteria",
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.RESULT,
          data: {
            imageUrl: "assets/case-2/result.png",
            bgColor: "rgba(233, 183, 114, .72)",
            results: [
              /* {
                value: "+500",
                unit: "%",
                description: "Daily self-reporting",
              },
              {
                value: "+300",
                unit: "%",
                description: "Active users",
              }, */
              {
                value: "+14",
                description: "New countries",
              },
              {
                value: "+25 000",
                description: "New active users",
              },
              {
                value: "+7800",
                description: "Daily self-reports recieved *",
              },
            ],
          },
        },
      ],
    },
  ],
};
