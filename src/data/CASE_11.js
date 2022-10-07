/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

export const CASE_11 = {
  caseStatus: CASE_STATUS.DRAFT,
  caseType: CASE_TYPES.CONCEPT,
  caseUrl: "/cases/11",
  thumbnail: {
    overline: "Prisjakt",
    title: "e-commerce",
    imageUrl: "assets/case-11/thumbnail.png",
    imageAlt: "thumbnail",
    text: "Improving search experience",
    bgColor: "rgba(99, 182, 187, .72)",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Prisjakt",
            title: "e-commerce",
            imageUrl: "assets/case-11/cover.png",
            text: <Paragraph large>Improving search experience</Paragraph>,
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            bgColor: "rgba(99, 182, 187, .72)",
            text: (
              <Paragraph xl>
                NoWaste is a leading Global Logistics and transport company.
                Their subsidiary e-drop was trying to solve some of the issues
                with food deliveries. In Sweden, most supermarkets provide home
                delivery services, but these services require that people will
                be at home at a certain time. This is a challenge as most people
                are home around the same time which means that deliveries are
                limited to those hours.
              </Paragraph>
            ),
            myRole: ROLES.LEAD,
            duration: "4 weeks",
            platforms: [PLATFORMS.MOBILE_ANDROID, PLATFORMS.MOBILE_IOS],
            toolsAndMethods: [
              TOOLS_AND_METHODS.SURVEYS,
              TOOLS_AND_METHODS.COMPETITOR_ANALYSIS,
              TOOLS_AND_METHODS.FLOW_MAPPING,
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
            title: <>...</>,
            text: <Paragraph>...</Paragraph>,
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.RESULT,
          data: {
            imageUrl: "assets/case-11/result.png",
            bgColor: "rgba(99, 182, 187, .72)",
            results: [
              {
                value: "120%",
                description: "increase in overall success rate",
              },
              {
                value: "64%",
                description: "decrease in time to completian",
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
