/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Elements/Paragraph";

export const VIEW_CASES = [
  {
    heaeder: "Cases",
    elements: [
      {
        template: SECTION_ELEMENTS.CASES,
        data: {
          title: (
            <>
              Some of the <mark>client cases</mark>.
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
