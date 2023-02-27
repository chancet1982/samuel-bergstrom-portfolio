/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";

export const VIEW_CASES = [
  {
    paddedUp: true,
    paddedDown: true,
    sectionTitle: <>Selected cases</>,
    isCentered: true,
    h: 1,
    elements: [
      {
        template: SECTION_ELEMENTS.SPACER_SMALL,
      },
      {
        template: SECTION_ELEMENTS.CASES,
        data: {
          preview: false,
        },
      },
    ],
  },
  {
    elements: [
      {
        template: SECTION_ELEMENTS.CASE_FOOTER,
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
];
