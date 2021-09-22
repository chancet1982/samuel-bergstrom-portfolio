/* eslint-disable import/prefer-default-export */
import React from "react";
import Paragraph from "../Components/Elements/Paragraph";
import ReadMoreLink from "../Components/Elements/ReadMoreLink";
import colors from "../theme/colors";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";

export const VIEW_LANDING_PAGE = [
  {
    elements: [
      {
        template: SECTION_ELEMENTS.LANDING_PAGE_COVER,
        data: {
          title: (
            <>
              <mark>Not</mark> your typical designer
            </>
          ),
          text: (
            <>
              <Paragraph huge>
                I help companies build the <strong>right things</strong> to
                solve the <strong>right problems</strong>
              </Paragraph>
            </>
          ),
          bgImageUrl: "assets/cover-bg.svg",
          imageUrl: "assets/cover-fg.png",
        },
      },
    ],
  },
  {
    header: "About Me",
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: (
            <>
              Meet <mark>Sam</mark>
            </>
          ),
          h: 1,
          text: (
            <>
              <Paragraph huge>
                A digital product designer, engineer, Speaker, Mentor,
                Accessibility enthusiast, father, husband, and quite a nice guy.
              </Paragraph>
              <ReadMoreLink to="about">Get to know me</ReadMoreLink>
            </>
          ),
        },
      },
    ],
  },
  {
    bgColor: colors.offwhite,
    isPadded: true,
    elements: [
      {
        template: SECTION_ELEMENTS.CLIENTS,
        data: {
          preview: true,
        },
      },
    ],
  },
  {
    header: "Cases",
    elements: [
      {
        template: SECTION_ELEMENTS.CASES,
        data: {
          preview: true,
          title: (
            <>
              Some of <mark>my work</mark>
            </>
          ),
          text: (
            <Paragraph large>
              Just some of my work from the last couple of years.
            </Paragraph>
          ),
        },
      },
    ],
  },
  {
    elements: [
      {
        template: SECTION_ELEMENTS.CASE_FOOTER,
      },
      {
        template: SECTION_ELEMENTS.FOOTER,
      },
    ],
  },
];
