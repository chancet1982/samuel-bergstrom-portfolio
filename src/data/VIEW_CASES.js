/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Shared/Paragraph";
import colors from "../theme/colors";

export const VIEW_CASES = [
  {
    bgColor: colors.white,
    isCentered: true,
    paddedDown: true,
    elements: [
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: <>Some of My work</>,
          h: 1,
          text: <Paragraph xxl>Curated selection of client cases</Paragraph>,
          isHalfScreen: true,
          isCentered: true,
          isFadingOnScroll: true,
          isSticky: true,
        },
      },
      {
        template: SECTION_ELEMENTS.SPACER_SMALL,
      },
      {
        template: SECTION_ELEMENTS.CASES,
        data: {
          preview: false,
        },
      },
      {
        template: SECTION_ELEMENTS.SPACER_MEDIUM,
      },
    ],
  },
];
