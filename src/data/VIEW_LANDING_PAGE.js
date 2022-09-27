/* eslint-disable import/prefer-default-export */
import React from "react";
import Link from "../Components/Shared/Link";
import Paragraph from "../Components/Shared/Paragraph";
import colors from "../theme/colors";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";

export const VIEW_LANDING_PAGE = [
  {
    elements: [
      {
        template: SECTION_ELEMENTS.VIDEO,
        data: {
          source: "assets/mood-1.mp4",
        },
      },
      {
        template: SECTION_ELEMENTS.LANDING_PAGE_COVER,
        data: {
          bgColor: colors.primaryShade,
          title: (
            <>
              Shaping <mark>results</mark>
            </>
          ),
          text: (
            <>
              <Paragraph huge>
                Creating <strong>business value</strong> using design.
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
    isPadded: true,
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
                Design lead, digital strategist, engineer, speaker, mentor,
                accessibility nerd, father, husband, and quite a nice guy.{" "}
                <br />
                <Link huge to="about">
                  Get to know me
                </Link>
              </Paragraph>
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
    isPadded: true,
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
