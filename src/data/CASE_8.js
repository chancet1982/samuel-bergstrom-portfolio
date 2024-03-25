/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import colors from "../theme/colors";

const SETTINGS = {
  BG_COLOR: colors.offwhite,
  URL: "/cases/8",
  MEDIA_BASE_URL: "assets/case-8",
  KEY_FIGURES: {
    CASE_TYPE: { label: CASE_TYPES.LABEL, value: CASE_TYPES.DESIGN_OPS },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.CONSULTANT },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.MOBILE_ANDROID],
    },
    TOOLS_AND_METHODS: {
      label: TOOLS_AND_METHODS.LABEL,
      renderAsList: true,
      value: [
        TOOLS_AND_METHODS.USABILITY_TESTING,
        TOOLS_AND_METHODS.WORKSHOPS,
        TOOLS_AND_METHODS.MOCKUPS,
        TOOLS_AND_METHODS.PROTOTYPING,
      ],
    },
    CASE_YEAR: { label: "Year:", value: "2022" },
    CASE_DURATION: { label: "Duration:", value: "4 months" },
  },
};

export const CASE_8 = {
  caseStatus: CASE_STATUS.DRAFT,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Price Comparison Service",
      title: "Design system",
      text: (
        <Paragraph>Launching a design system after failed attempts</Paragraph>
      ),
    },
    /* fgImage: {
      imageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail.png`,
      imageAlt: "thumbnail",
    }, */
  },
  details: [
    {
      navBgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_HERO_CASES,
          data: {
            bgColor: SETTINGS.BG_COLOR,
            caption: {
              overline: "Price Comparison Service",
              title: <>Design system</>,
              h: 1,
              text: (
                <Paragraph xxl>
                  Launching a design system after failed attempts
                </Paragraph>
              ),
            },
            fgImage: {
              imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-desktop.png`,
              mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-mobile.png`,
              imageAlt: "hero image",
            },
            highlights: [
              [
                SETTINGS.KEY_FIGURES.CASE_TYPE,
                SETTINGS.KEY_FIGURES.CASE_PLATFORMS,
                SETTINGS.KEY_FIGURES.CASE_YEAR,
              ],
              [SETTINGS.KEY_FIGURES.TOOLS_AND_METHODS],
            ],
          },
        },
      ],
    },
    {
      paddedUp: true,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            text: (
              <Paragraph xl>
                Prisjakt started by catering to computer enthusiasts and was one
                of the first price comparison sites in the Nordics. It is still
                the leading price comparison service, but Prisjakt’s growth has
                stagnated recently. Prisjakt’s main revenue originates from
                click-outs, where different categories have different CPCs.
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Design (in scale) is hard</>,
            h: 2,
            text: (
              <Paragraph>
                Prisjakt’s B2C site has millions of pages. Some are dynamically
                created. Others are static static. On top of that, Prisjakt
                offers native apps for both Android and iOS. At the time, four
                design teams were working on the consumer-facing app, and
                creating a consistent experience was increasingly challenging.
                To make things worse, the old version of the site “classic” had
                to be maintained in parallel, doubling the efforts required for
                every fix. Auditing the site on CSS stats and comparing it to
                our competitors made it clear we had a lot of potential for
                improvement.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/growing-pain.png`,
            imageAlt: "Workflow",
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>We can’t create a design system</>,
            h: 2,
            text: (
              <Paragraph>
                Design systems are typically used in such cases. Sadly, the team
                has already tried (and failed) to launch several design systems.
                Each aims to be complete but not actively maintained or widely
                used. The design team lost the management’s trust, and we
                couldn’t “allocate resources” to create a design system.
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>We can, we should, we just did it in secret</>,
            text: (
              <Paragraph>
                In this case, the answer was to create a more simplistic design
                system. One that saves time for both developers and designers
                increases consistency and familiarity for users, and saves money
                for the company.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/solution.jpg`,
            imageAlt: "problem-framing",
            caption: "Problem framing whiteboard",
            limitMaxWidth: true,
            isPadded: true,
          },
        },
      ],
    },
    {
      sectionTitle: <>This is how</>,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Transitioning to Figma</>,
            h: 3,
            text: (
              <Paragraph>
                Before joining, the design teams’ tools consisted of Sketch,
                Zeplin, and InVision. Sketch, of course, has its limitations and
                does not support real-time collaboration. This meant sending
                files back and forth, waiting for comments, and wasting time.
                While waiting for a license, I proposed using Figma (which I
                already had access to) as a pilot. I suggested I recreate the
                screens I needed in Figma using components.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Migrating existing teams</>,
            h: 3,
            text: (
              <Paragraph>
                Once some screens and components are in place, I’ll get the rest
                of the team access and training to evaluate it. Transitioning to
                Figma would, in theory, be cheaper and better for everyone. So,
                I got a green light. After a short introduction and after
                creating some of the basic screens and components, other teams
                started using Figma and the component library that it offers.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Developing some simple components</>,
            h: 3,
            text: (
              <Paragraph>
                What sets me apart from other designers is that I can code. I
                often discuss the pros and cons of different design decisions
                with developers. Find walk-arounds, navigate my way around IDE
                APIs, and even create some simple components for a design
                system. In this case, I had some lying around from other
                projects that I could copy-paste-modify to create the code
                implementations for Icons and Badges. I contributed some
                components to the now-growing components library and helped the
                team solve some of the challenges with others.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Documentation and natural expansion</>,
            h: 3,
            text: <Paragraph>...</Paragraph>,
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Killing our darlings</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  One of the things that killed the design system before was its
                  complexity. Every design change required additional overhead
                  and complexity. Developers hesitated to contribute to the
                  design system. Without management support, there was no
                  mandate to force anyone to do so.
                </Paragraph>
                <Paragraph>
                  I joined the “Design system forum,” where I pitched the idea
                  of ditching design tokens and the connection with Sketch.
                  Considering how seldom basic colors and spacings change,
                  having these in a JSON file made sense, and reducing the added
                  complexity of maintaining already outdated tokens made sense.
                </Paragraph>
                <Paragraph>
                  Additionally, the tokens provided little to no value as it
                  became clear that the app teams were not using them. So, it
                  was time to kill our darlings.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Result",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Result",
            text: <Paragraph xl>...</Paragraph>,
            isFullScreen: true,
            isSticky: true,
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result.jpg`,
            imageAlt: "problem-framing",
            caption: "Problem framing whiteboard",
            limitMaxWidth: true,
            isPadded: true,
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      elements: [
        {
          template: SECTION_ELEMENTS.ADDITIONAL_CASES,
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
  ],
};
