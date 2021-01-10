/* eslint-disable import/prefer-default-export */
import React from "react";
import Paragraph from "../Components/Elements/Paragraph";
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
          imageUrl: "assets/new-cover2.jpg",
          bgColor: "#ffffff",
        },
      },
    ],
  },
  {
    heaeder: "Cases",
    bgColor: "black",
    elements: [
      {
        template: SECTION_ELEMENTS.CASES,
        data: {
          light: true,
          title: (
            <>
              Some of the <mark>client cases</mark>.
            </>
          ),
          text: (
            <Paragraph large light>
              Just some of my work from the last couple of years.
            </Paragraph>
          ),
        },
      },
    ],
  },
];
