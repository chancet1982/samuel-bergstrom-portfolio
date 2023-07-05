/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

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
    TOOLS_AND_METHODS: {
      label: TOOLS_AND_METHODS.LABEL,
      value: [TOOLS_AND_METHODS.INTERVIEWS, TOOLS_AND_METHODS.WORKSHOPS],
    },
    CASE_YEAR: { label: "Year:", value: "2021" },
    CASE_DURATION: { label: "Duration:", value: "1 month" },
  },
};

export const CASE_11 = {
  caseStatus: CASE_STATUS.DRAFT,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Overline is usually the industry",
      title: "What did you do?",
      text: <Paragraph>Some catch phrase here</Paragraph>,
    },
    fgImage: {
      imageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail.png`,
      imageAlt: "thumbnail",
    },
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
            highlights: [
              SETTINGS.KEY_FIGURES.CASE_TYPE,
              SETTINGS.KEY_FIGURES.CASE_YEAR,
              SETTINGS.KEY_FIGURES.CASE_DURATION,
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
            text: <Paragraph xl>...</Paragraph>,
            isFullScreen: true,
            isSticky: true,
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
            text: <Paragraph xl>...</Paragraph>,
            isFullScreen: true,
            isSticky: true,
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
            text: <Paragraph xl>...</Paragraph>,
            isFullScreen: true,
            isSticky: true,
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
      paddedUp: true,
      paddedDown: true,
      elements: [
        {
          template: SECTION_ELEMENTS.ADDITIONAL_CASES,
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
