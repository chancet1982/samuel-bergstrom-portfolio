/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Shared/Paragraph";
import { SPACER_SIZES } from "./dictionaries/SPACER_SIZES";

export const VIEW_CASES = [
  {
    paddedUp: true,
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
          text: (
            <Paragraph large>
              Just some of my work from the last couple of years.
            </Paragraph>
          ),
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
