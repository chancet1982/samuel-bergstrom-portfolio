/* eslint-disable import/prefer-default-export */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../Components/Shared/Button";
import Paragraph from "../Components/Shared/Paragraph";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";
import Span from "../Components/Shared/Span";
import padding from "../theme/padding";
import colors from "../theme/colors";

const StyledButtonsContainer = styled(motion.div)`
  display: flex;
  gap: ${padding.insideElements.half};
`;

export const VIEW_LANDING_PAGE = [
  {
    navBgColor: "#000000",
    elements: [
      {
        template: SECTION_ELEMENTS.SECTION_HERO,
        data: {
          withGradientBottom: true,
          bgColor: "#000000",
          caption: {
            title: (
              <>
                I design things <mark>that work</mark>
              </>
            ),
            h: 1,
            text: (
              <>
                <Paragraph xxl>
                  Helping companies create products that work for their{" "}
                  <Span xxl highContrast>
                    business and customers
                  </Span>
                  .
                </Paragraph>
                <StyledButtonsContainer>
                  <Button to="cases">My work</Button>
                  <Button to="about" secondary>
                    Get to know me
                  </Button>
                </StyledButtonsContainer>
              </>
            ),
          },
          bgMedia: {
            type: BG_MEDIA_TYPES.VIDEO,
            mediaUrl: "assets/landing-page-1.mp4",
          },
          isLight: true,
        },
      },
    ],
  },
  {
    paddedUp: true,
    paddedDown: true,
    bgColor: "#000000",
    elements: [
      {
        template: SECTION_ELEMENTS.CASES,
        data: {
          featured: true,
        },
      },
    ],
  },
  {
    bgColor: colors.white,
    elements: [
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: "Trusted by",
          h: 3,
          isCentered: true,
        },
      },
      {
        template: SECTION_ELEMENTS.SECTION_CLIENTS_MARQUEE,
      },
    ],
  },
  {
    bgColor: colors.white,
    elements: [
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: "Dont take my word for it",
          h: 3,
          text: <Paragraph>This is what others have to say about me</Paragraph>,
          isCentered: true,
        },
      },
      {
        template: SECTION_ELEMENTS.SPACER_SMALL,
      },
      {
        template: SECTION_ELEMENTS.TESTIMONIALS,
        data: {
          inLandingPage: true,
        },
      },
    ],
  },
  {
    bgColor: colors.offwhite,
    elements: [
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: <>Creating things that work requires more than design.</>,
          h: 2,
          text: (
            <>
              <Paragraph>
                My goal has always been to create products that address real
                needs, are easy to use, and create business value. This requires
                more than “just” design and unlike other designers, I have some
                additional tricks up my sleeve.
              </Paragraph>
              <Paragraph>
                I am a part designer with a knack for research and numbers, a
                part product manager specializing in product discovery and
                delivery, and a part engineer. I work across product, design,
                and technology to create things that work for businesses and
                their customers.
              </Paragraph>
              <Paragraph>
                I believe digital products must be available for as many as
                possible. I am interested (and certified) in accessibility, with
                deep knowledge of both requirements and techniques for creating
                inclusive and accessible digital experiences.
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
];
