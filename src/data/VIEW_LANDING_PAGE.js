/* eslint-disable import/prefer-default-export */
import React from "react";
import Button from "../Components/Shared/Button";
import Paragraph from "../Components/Shared/Paragraph";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";
import colors from "../theme/colors";
import Span from "../Components/Shared/Span";

export const VIEW_LANDING_PAGE = [
  {
    isSticky: true,
    navBgColor: "#000000",
    elements: [
      {
        template: SECTION_ELEMENTS.COVER,
        data: {
          bgColor: "#000000",
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
    bgColor: "#000000",
    elements: [
      {
        template: SECTION_ELEMENTS.CASES,
        data: {
          featured: true,
        },
      },
      {
        template: SECTION_ELEMENTS.SPACER_MEDIUM,
      },
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: <>Jack of all trades and master of some</>,
          h: 2,
          text: (
            <>
              <Paragraph xl>
                My goal has always been creating products that{" "}
                <Span xl highContrast>
                  address real needs
                </Span>
                , are{" "}
                <Span xl highContrast>
                  easy to use
                </Span>
                , and create{" "}
                <Span xl highContrast>
                  business value
                </Span>
                . Simply put, I thrive on the intersection of Product, Design
                and Technology.
              </Paragraph>
              <Paragraph xl>
                Part Designer with a knack for{" "}
                <Span xl highContrast>
                  research and numbers
                </Span>
                , part Product Manager specializing in{" "}
                <Span xl highContrast>
                  product discovery and delivery
                </Span>
                and part{" "}
                <Span xl highContrast>
                  Engineer
                </Span>
                . Bring good ideas to life.
              </Paragraph>
              <Paragraph xl>
                <Span xl highContrast>
                  Interested (and certified) in accessibility
                </Span>
                , I believe that digital products must be made available for as
                many as possible. I have deep knowledge of the current
                accessibility guidelines and requirements and keep up to date
                with the upcoming changes.
              </Paragraph>
            </>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.SPACER_MEDIUM,
      },
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
        template: SECTION_ELEMENTS.FOOTER,
      },
    ],
  },
];
