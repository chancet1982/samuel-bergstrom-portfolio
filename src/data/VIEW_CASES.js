/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { SPACER_SIZES } from "./dictionaries/SPACER_SIZES";

export const VIEW_CASES = [
  {
    paddedUp: true,
    paddedDown: true,
    elements: [
      {
        template: SECTION_ELEMENTS.SPACER,
        data: {
          size: SPACER_SIZES.MEDIUM,
        },
      },
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          isCentered: true,
          title: <>Selected cases</>,
          h: 1,
        },
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
