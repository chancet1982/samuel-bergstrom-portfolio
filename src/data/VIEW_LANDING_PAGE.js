/* eslint-disable import/prefer-default-export */
import React from "react";
import Button from "../Components/Shared/Button";
import Paragraph from "../Components/Shared/Paragraph";
import { COVER_MEDIA_TYPES } from "./dictionaries/COVER_MEDIA_TYPES";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import ClientPreview from "../Components/Section_Elements/Cover/ClientsPreview";

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
        template: SECTION_ELEMENTS.LANDING_PAGE_COVER,
        data: {
          caption: {
            title: (
              <>
                Samuel
                <br /> Bergström
              </>
            ),
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
            type: COVER_MEDIA_TYPES.IMAGE,
            mediaUrl: "assets/cover-bg.jpg",
          },
          footer: <ClientPreview />,
        },
      },
    ],
  },
  {
    elements: [
      {
        template: SECTION_ELEMENTS.CASES,
        data: {
          preview: true,
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
