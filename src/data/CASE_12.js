/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
// import Note from "../Components/Shared/Note";
// import List from "../Components/Shared/List";
// import Span from "../Components/Shared/Span";
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";

const SETTINGS = {
  BG_COLOR: "#00ADDB",
  URL: "/cases/12",
  MEDIA_BASE_URL: "assets/case-12",
  KEY_FIGURES: {
    CASE_TYPE: {
      label: CASE_TYPES.LABEL,
      value: CASE_TYPES.CONCEPT_VISUALISATION,
    },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.LEAD },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.DESKTOP, PLATFORMS.TABLET, PLATFORMS.MOBILE],
    },
    TOOLS_AND_METHODS: {
      label: TOOLS_AND_METHODS.LABEL,
      value: [TOOLS_AND_METHODS.INTERVIEWS, TOOLS_AND_METHODS.WORKSHOPS],
    },
    CASE_YEAR: { label: "Year:", value: "2022" },
    CASE_DURATION: { label: "Duration:", value: "2 monthS" },
  },
};

export const CASE_12 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Fitness & healthcare",
      title: "Creating better habits",
      text: <Paragraph>Concept validation for healthcare app</Paragraph>,
    },
    fgImage: {
      imageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail.png`,
      imageAlt: "thumbnail",
    },
  },
  details: [
    {
      navBgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            bgMedia: {
              type: BG_MEDIA_TYPES.IMAGE,
              mediaUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-bg.jpg`,
            },
            caption: {
              overline: "Fitness & healthcare",
              title: "Creating better habbits",
              text: (
                <Paragraph xxl>Concept validation for healthcare app</Paragraph>
              ),
            },
            fgImage: {
              imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-fg.png`,
              mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-mobile.png`,
            },
            highlights: [
              SETTINGS.KEY_FIGURES.CASE_YEAR,
              SETTINGS.KEY_FIGURES.CASE_TYPE,
              SETTINGS.KEY_FIGURES.CASE_PLATFORMS,
            ],
          },
        },
      ],
    },
    {
      header: "Challenge",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Challenge",
            text: (
              <Paragraph xl>
                Our client had an idea, they wanted to create an app that would
                help adolescent children gain healthy habits. For this, they
                proposed creating an app to help trainers select team members
                that are likely to perform based on their routines. Our client
                wanted to increase their chances of success and validate their
                idea before going forward.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/challenge.jpg`,
            imageAlt: "problem-framing",
            caption: "Problem framing whiteboard",
            limitMaxWidth: true,
            isPadded: true,
          },
        },
      ],
    },
    {
      header: "Solution",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Solution",
            text: (
              <Paragraph xl>
                We conducted a pre-study and created a vision to secure funding
                for further development. We facilitated workshops and
                interviews, looked into statistics and general research,
                conducted market research and competitor analysis, and created
                mockups and prototypes.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/solution.jpg`,
            imageAlt: "problem-framing",
            caption: "Problem framing whiteboard",
            limitMaxWidth: true,
            isPadded: true,
          },
        },
      ],
    },
    {
      header: "Result",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Result",
            text: (
              <Paragraph xl>
                With our recommendations in mind, our client was able to pivot
                helping them to reach a wider audience, and were extremely happy
                with the result.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote:
              "Efter många månaders planering och brainstorming fick vi igår se prototypen av vår kommande app. Tretton37 har gjort ett kanon jobb och vi är super nöjda. Nu ska vi se till att skapa världens bästa hälso och tränings app för föreningar, undgomar och så klart alla andra som vill ta del av den.",
            cite: "Be@YourBest",
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result.jpg`,
            imageAlt: "problem-framing",
            caption: "Problem framing whiteboard",
            limitMaxWidth: true,
            isPadded: true,
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.FOOTER,
        },
      ],
    },
  ],
};
