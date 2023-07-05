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
  URL: "/cases/13",
  MEDIA_BASE_URL: "assets/case-13",
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

export const CASE_13 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Restaurant supplier",
      title: "Restaurant branch, reimagined",
      text: <>Creating a vision for the future of restaurant suppliers</>,
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
            bgColor: SETTINGS.BG_COLOR,
            caption: {
              overline: "Restaurant supplier",
              title: "Restaurant branch, reimagined",
              text: (
                <Paragraph xxl>
                  Creating a vision for the future of restaurant suppliers
                </Paragraph>
              ),
            },
            fgImage: {
              imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-desktop.png`,
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
      paddedUp: true,
      paddedDown: true,
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            text: (
              <Paragraph xl>
                To expand their business, the client has the idea of an
                application focused on health that could help people –
                especially teenagers from age 12 to 18 – to live healthier. They
                came to us for help in evaluating the idea and by the end of the
                project, tried to validate it with the form of a prototype (that
                they could also use as sales material) before moving forward
                with the project.
              </Paragraph>
            ),
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
          template: SECTION_ELEMENTS.FOOTER,
        },
      ],
    },
  ],
};
