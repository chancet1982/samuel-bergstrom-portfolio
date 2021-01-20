/* eslint-disable import/prefer-default-export */
import React from "react";
import Paragraph from "../Components/Elements/Paragraph";
import colors from "../theme/colors";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";

export const VIEW_LANDING_PAGE = [
  {
    isSticky: true,
    elements: [
      {
        template: SECTION_ELEMENTS.COVER,
        data: {
          overline: "Samuel Bergström",
          title: (
            <>
              A <mark>non-typical</mark> designer
            </>
          ),
          imageUrl: "assets/cover.svg",
          bgColor: "#ffffff",
        },
      },
    ],
  },
  {
    heaeder: "Cases",
    bgColor: colors.black,
    elements: [
      {
        template: SECTION_ELEMENTS.CASES,
        data: {
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
];
