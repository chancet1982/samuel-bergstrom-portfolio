/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { ROLES } from "./dictionaries/ROLES";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import List from "../Components/Shared/List";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import Highlights from "../Components/Section_Elements/Cover/Highlights";

const SETTINGS = {
  BG_COLOR: "#FF8D48",
  URL: "/cases/2",
  MEDIA_BASE_URL: "assets/case-2",
  KEY_FIGURES: {
    CASE_TYPE: { label: CASE_TYPES.LABEL, value: CASE_TYPES.PRODUCT_DESIGN },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.LEAD },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [
        PLATFORMS.MOBILE_IOS,
        PLATFORMS.MOBILE_ANDROID,
        PLATFORMS.TABLET_IOS,
      ],
    },
    CASE_YEAR: { label: "Year:", value: "2019" },
    CASE_DURATION: { label: "Duration:", value: "3 months" },
  },
};

export const CASE_2 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    overline: "Renal Care",
    title: "Patient Companion App",
    text: <>Redesigning a companion app for renal care patients.</>,
    imageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail.png`,
    imageAlt: "thumbnail",
    bgColor: SETTINGS.BG_COLOR,
  },
  details: [
    {
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            bgColor: SETTINGS.BG_COLOR,
            caption: {
              overline: "Renal Care",
              title: "Companion App",
              text: (
                <Paragraph xxl>
                  Empowering patients & improving treatment.
                </Paragraph>
              ),
            },
            fgImage: {
              imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-desktop.png`,
              mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-mobile.png`,
            },
            footer: (
              <Highlights
                flip
                items={[
                  SETTINGS.KEY_FIGURES.CASE_TYPE,
                  SETTINGS.KEY_FIGURES.CASE_YEAR,
                  SETTINGS.KEY_FIGURES.CASE_DURATION,
                  SETTINGS.KEY_FIGURES.CASE_PLATFORMS,
                ]}
              />
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
            text: (
              <Paragraph xl>
                My client is one of the largest private renal care providers in
                the world. They treat more than 40 000 patients, operate over
                400 clinics in 20 countries. Renal patients need to constantly
                keep an eye on their intake, reporting it back as part of their
                treatment, previous attempt at creating an app have failed to
                gain traction, now this initiative got a second chance to
                improve patients lives.
              </Paragraph>
            ),
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
                  Proving care for a chronic condition is a never-ending battle.
                  You cant treat patients in the clinics alone. In order to
                  provide optimal treatment for over 40 000 renal patients
                  worldwide, you need to track their intake and values even at
                  home. This is a laborious task, reporting back daily puts a
                  burden both on patients and staff.
                </Paragraph>
                <Paragraph>
                  The app was originally designed as an initiative to empower
                  patients but it never really took off. Reporting figures were
                  low, rating on App Store and Google lay store negative, and
                  generally, it didn’t really perform as expected.
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
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-1.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-4.jpg`,
                imageAlt: "Co-creating wireframes",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-2.jpg`,
                imageAlt: "Co-creating wireframes",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-3.jpg`,
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
              <Paragraph>
                The goal, in this case, was simply, “make a better app”. From an
                internal point of view, a better app would mean that more
                patients are reporting their vitals. But would users agree?
                Dialysis patients already spend 12-18 hours weekly in clinics.
                How could we provide enough value for patients to encourage
                daily use?
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      header: "Research",
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
                  failed and a clear understanding of our goal. We sat down with
                  a group of internal stakeholders, then interviewed different
                  groups internally to provide their perspectives. Then we
                  needed to look outwards...
                </Paragraph>
                <Paragraph>
                  We gathered general insights and best practices regarding
                  designing for the elderly and accessible design from NNg’s
                  research report on the matter, hoping to avoid common pitfalls
                  and known design issues.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.KEY_FIGURES,
          data: {
            items: [
              {
                value: "102",
                label: "Survey responses",
              },
              { value: "5", label: "clinics" },
              {
                value: "3",
                label: "countries",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Survey and Interviews </>,
            text: (
              <>
                <Paragraph>
                  We later looked more specifically at Renal patients. We
                  conducted Surveys aimed to align the expectations and define
                  the essential features for our users. The survey was sent to 5
                  clinics in 3 different countries, 102 responses were
                  collected.
                </Paragraph>
                <Paragraph>
                  On top of the survey we conducted interviews with renal
                  patients to better understand what challanges they were
                  facing.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.INSIGHTS,
          data: {
            title: <>Insights</>,
            bgColor: SETTINGS.BG_COLOR,
            h: 2,
            isTwoColumnsOnDesktop: true,
            text: (
              <Paragraph>
                Based on the surveys and interviews we could conclude that:
              </Paragraph>
            ),
            items: [
              {
                title:
                  "Most patients were interested in wellbeing and health tips.",
                text: "72% would like to get health tips and ways to improve their wellbeing (13/18)",
              },
              {
                title: "Patients wanted to keep informed",
                text: "52% would like to follow up on their treatments",
              },
              {
                title: "Patients want to follow up on lab results",
                text: "Patients were mostly interested in lab results (blood, levels)",
              },
              {
                title:
                  "Patients were interested in finding and booking treatment via app.",
                text: " 64% of patients would want to be able to find and book a clinic via app.",
              },
              {
                title:
                  "Patients were not interested in medications, Reminders and intake",
                text: "Most patients only care about side-affectss, very few wanted to learn about the medication itself. 66% of patients were not interested in medication reminders nor did they want to report medication intake.",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Sharing back the insights.</>,
            text: (
              <Paragraph>
                The insights were shared with the internal stakeholders and
                helped define priorities for the app. Some feaures presented
                high value for the business hence were included even if their
                user value was limited.
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      header: "Ideation & prioritization",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Planning the road ahead</>,
            h: 2,
            text: (
              <Paragraph>
                With some initial data in place, we could prioritize features
                based on our proto persona (dialysis patient). We sat with all
                stakeholders and mapped the functionality, the capacity of the
                team, prioritized, and created a road-map that would balance
                user needs and business goals.
              </Paragraph>
            ),
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/design.jpg`,
            imageAlt: "Kickoff meeting, dot-voting on features",
            caption: "Kickoff meeting, dot-voting on features",
          },
        },
      ],
    },
    {
      header: "Design",
      elements: [
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-1.png`,
                imageAlt: "Reducing friction in self-reporting.",
                title: "Reducing friction in self-reporting.",
                text: (
                  <>
                    <Paragraph>
                      In the old-design, self-reporting wasn’t directly visible
                      for users. It required users to look through the app in
                      order to find it.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution:</strong> We opted for a much simpler
                      feedback mechanism and the abitility of reporting outside
                      the app using notification actions.
                    </Paragraph>

                    <Paragraph>
                      <strong>Note:</strong> The reporting mechanism could have
                      been even simpler, monitoring a “change” in wellbeing
                      (from good to bad or vice versa) instead of a linear value
                      would have provided a simpler reporting system but
                      wouldn’t fulfill the medical requirements.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-2.png`,
                imageAlt: "Finding dialysis clinics abroad",
                title: "Finding dialysis clinics abroad",
                text: (
                  <>
                    <Paragraph>
                      Based on our surveys, one of the most sought-after
                      features for dialysis patients is finding and being able
                      to book clinics on vacations.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution:</strong> We added a feature to find book
                      treatments in clinics abroad for existing patients.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-3.png`,
                imageAlt: "Health tips, not values",
                title: "Health tips, not values",
                text: (
                  <>
                    <Paragraph>
                      My client aims to encourage its patients to take an active
                      role in their treatment. In order to do that, they added
                      test results and medical values in the old app. Based on
                      our research we learned that patients weren’t interested
                      and couldn’t decipher obscure medical values and terms.
                      Moreover, most patients had a limited number of values
                      that they cared about and understood.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution:</strong> We kept only a select few
                      values that are known to be important for renal patients.
                      We used additional values to produce health tips and
                      recommendations. Users got a recommendation for what they
                      should do in order to improve their wellbeing instead of
                      showing a number that they couldn’t interpret.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-4.png`,
                imageAlt: "Medication reminders",
                title: "Medication reminders",
                text: (
                  <>
                    <Paragraph>
                      Renal patients need a lot of medication daily. Mental
                      abilities degenerate with age, and with an average age of
                      50 (and older in some clinics), people simply put, seem to
                      forget. Some used special pillboxes, other invented their
                      own systems to remind them. But without an exception,
                      every patient admitted to forgetting their medication from
                      time to time.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution:</strong> We decided to add automatic
                      reminds for prescribed medication. Dismissing the
                      notification (by clicking “taken”) would alert the
                      clinical staff allowing for better monitoring of general
                      medication intake.
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
                  We needed to support multiple platforms and devices. We didn’t
                  want to create separate Android and iOS versions so instead,
                  we made an app that was neither.
                </Paragraph>
                <Paragraph>
                  It was meant to be supportive, playful, and colorful without
                  reducing its accessibility.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            flip: true,
            title: <>Accessibility in design:</>,
            h: 3,
            text: (
              <List
                plain
                items={[
                  <Paragraph>
                    Loss of sensation around the fingertips and loss of motor
                    control is quite common in renal care. This makes scrolling
                    especially challenging. In order to mitigate that we laid
                    out the content to minimize the need for scrolling. We made
                    sure that we provided at least a 9mm target area for all
                    links and buttons to avoid miss-clicks.
                  </Paragraph>,
                  <Paragraph>
                    We made sure all colors are WCAG 2.0 AA compatible.
                    “Heavier” font weights were used and font sizes were tested
                    to ensure legibility and a shallow nagivation was used in
                    order to reduce the need for recollection.
                  </Paragraph>,
                ]}
              />
            ),
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/accessibility.jpg`,
            imageAlt: "Just some decoration",
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
                  At this point, we had an untested, accessible, pretty, design
                  but will it be usable?
                </Paragraph>
                <Paragraph>
                  How do you test an app for clinics that operate globally?
                  Recruiting highly specific users for usability testing could
                  be very challenging. Where can you find old patients that will
                  be willing to test out a new application for improving their
                  wellbeing?
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
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/validation.jpg`,
            imageAlt:
              "Guerilla usability testing in Skånes universitetssjukhus Malmö cafeteria",
            caption:
              "Guerilla usability testing in Skånes universitetssjukhus Malmö cafeteria",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>2 hours, and 500 SEK later…</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Like most things in Sweden, the answer was there all along.{" "}
                  <strong>Fika</strong>
                </Paragraph>
                <Paragraph>
                  If you need treatment, you go to a hospital. If you need a
                  break, you go to the cafeteria. So with 500SEK in our pocket,
                  we did some guerilla testing offering fika for 5 minutes of
                  people’s time. Looking to find if all our hard work paid off.
                </Paragraph>
                <Paragraph>
                  The feedback was amazing. Patients couldn’t wait to get their
                  hands on the app and since then the app was rolled out to 16
                  different countries. Since then, the number of daily active
                  users medication intake reportings, and daily values reporting
                  has increased exponentially. App Store reviews and Google play
                  reviews are now far more positive as well.
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
          template: SECTION_ELEMENTS.RESULT,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result-desktop.png`,
            mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/result-mobile.png`,
            bgColor: SETTINGS.BG_COLOR,
            results: [
              {
                value: "+16",
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
    {
      elements: [
        {
          template: SECTION_ELEMENTS.ADDITIONAL_CASES,
        },
        {
          template: SECTION_ELEMENTS.CASE_FOOTER,
        },
        {
          template: SECTION_ELEMENTS.FOOTER,
        },
      ],
    },
  ],
};
