/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import Highlights from "../Components/Section_Elements/Cover/Highlights";

/* TODO: This is empty example case */
const SETTINGS = {
  BG_COLOR: "#00ADDB",
  URL: "/cases/11",
  MEDIA_BASE_URL: "assets/case-11",
  KEY_FIGURES: {
    CASE_TYPE: {
      label: CASE_TYPES.LABEL,
      value: CASE_TYPES.IMPROVING_EXISTING_SERVICE,
    },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.CONSULTANT },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.DESKTOP, PLATFORMS.TABLET, PLATFORMS.MOBILE],
    },
    CASE_YEAR: { label: "Year:", value: "2021" },
    CASE_DURATION: { label: "Duration:", value: "1 month" },
  },
};

export const CASE_11 = {
  caseStatus: CASE_STATUS.DRAFT,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    overline: "Overline is usually the industry",
    title: "What did you do?",
    text: <>Some catch phrase here</>,
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
              overline: "Overline is usually the industry",
              title: "What did you do?",
              text: <Paragraph xxl>Some catch phrase here</Paragraph>,
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
            text: <Paragraph xl>...</Paragraph>,
            toolsAndMethods: [
              TOOLS_AND_METHODS.SURVEYS,
              TOOLS_AND_METHODS.WEB_ANALYTICS,
              TOOLS_AND_METHODS.FUNNEL_ANALYSIS,
              TOOLS_AND_METHODS.USABILITY_TESTING,
              TOOLS_AND_METHODS.AB_TESTING,
            ],
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
            text: <Paragraph large>...</Paragraph>,
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
