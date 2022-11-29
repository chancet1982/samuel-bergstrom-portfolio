/* eslint-disable import/prefer-default-export */
import React from "react";
import Button from "../Components/Shared/Button";
import Paragraph from "../Components/Shared/Paragraph";
// import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";

export const VIEW_LANDING_PAGE = [
  {
    elements: [
      /* {
        template: SECTION_ELEMENTS.VIDEO,
        data: {
          source: "assets/mood-1.mp4",
        },
      }, */
      {
        template: SECTION_ELEMENTS.COVER,
        data: {
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
          bgColor: "black",
          fgImage: {
            imageUrl: "assets/cover-fg.jpg",
          },
        },
      },
    ],
  },
  {
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          isCentered: true,
          title: (
            <>
              Selected <mark>work</mark>
            </>
          ),
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
          preview: true,
        },
      },
    ],
  },
  {
    elements: [
      {
        template: SECTION_ELEMENTS.IMAGE_GALLERY,
        data: {
          template: IMAGE_GALLERY_TEMPLATES.THREE_IMAGES_TWO_COLUMNS,
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
