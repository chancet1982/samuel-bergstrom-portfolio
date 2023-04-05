/* eslint-disable import/prefer-default-export */
import React from "react";
import Button from "../Components/Shared/Button";
import Paragraph from "../Components/Shared/Paragraph";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";
import colors from "../theme/colors";

export const VIEW_LANDING_PAGE = [
  {
    isSticky: true,
    elements: [
      {
        template: SECTION_ELEMENTS.COVER,
        data: {
          bgColor: "black",
          caption: {
            title: (
              <>
                Samuel
                <br /> Bergström
              </>
            ),
            h: 1,
            text: (
              <>
                <Paragraph xxl>
                  Design lead, speaker, mentor, father, husband, and quite a
                  nice guy.
                </Paragraph>
                <Button to="about">Get to know me</Button>
              </>
            ),
          },
          bgMedia: {
            type: BG_MEDIA_TYPES.VIDEO,
            mediaUrl: "assets/landing-page-1.mp4",
          },
          clientsPreview: true,
          isLight: true,
        },
      },
    ],
  },
  {
    paddedUp: true,
    bgColor: "black",
    elements: [
      {
        template: SECTION_ELEMENTS.CASES_PREVIEW,
        data: {
          preview: true,
        },
      },
    ],
  },
  {
    bgColor: "black",
    elements: [
      {
        template: SECTION_ELEMENTS.IMAGE_GALLERY,
        data: {
          template: IMAGE_GALLERY_TEMPLATES.THREE_IMAGES_TWO_COLUMNS,
          isPadded: true,
          images: [
            {
              imageUrl: "assets/me-1.jpg",
              imageAlt: "?",
            },
            {
              imageUrl: "assets/me-2.jpg",
              imageAlt: "?",
            },
            {
              imageUrl: "assets/me-3.jpg",
              imageAlt: "?",
            },
          ],
        },
      },
    ],
  },
  {
    bgColor: colors.offblack,
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
