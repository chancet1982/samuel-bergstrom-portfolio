/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

/* TODO: This is a non-finished project. Finish it or remove. */
export const CASE_8 = {
  caseStatus: CASE_STATUS.DRAFT,
  caseType: CASE_TYPES.CONCEPT,
  caseUrl: "/cases/8",
  thumbnail: {
    overline: "Mitsubishi Electric",
    title: "e-commerce concept",
    imageUrl: "assets/case-8/thumbnail.png",
    imageAlt: "thumbnail",
    text: "Exploring direct sales B2C & B2B",
    bgColor: "rgba(99, 182, 187, .72)",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Mitsubishi Electric",
            title: "e-commerce concept",
            imageUrl: "assets/case-8/cover.png",
            text: <Paragraph large>Exploring direct sales B2C & B2B</Paragraph>,
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
                Mitsubishi Electric is its subsidiary of Mitsubishi Global.
                Mitsubishi Electric is responsible for the production,
                distribution and sales of electronic devices. From home
                appliances to components for space shuttles. As part of their
                strategy Mitsubishi wanted to expand their sales and sell
                directly to consumers. They wanted to explore how they can do
                that without harming their relationships with current mitsubishi
                distributers. I was asked to create a some concepts for creating
                a B2B and B2C ecommerce platforms.
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
            imageUrl: "assets/case-8/result.png",
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
