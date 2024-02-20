/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";

const SETTINGS = {
  BG_COLOR: "#333333",
  URL: "/cases/12",
  MEDIA_BASE_URL: "assets/case-12",
  KEY_FIGURES: {
    CASE_TYPE: {
      label: CASE_TYPES.LABEL,
      value: CASE_TYPES.CONCEPT_VISUALISATION,
    },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.LEAD },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.DESKTOP, PLATFORMS.TABLET, PLATFORMS.MOBILE],
    },
    TOOLS_AND_METHODS: {
      label: TOOLS_AND_METHODS.LABEL,
      value: [TOOLS_AND_METHODS.INTERVIEWS, TOOLS_AND_METHODS.WORKSHOPS],
    },
    CASE_YEAR: { label: "Year:", value: "2022" },
    CASE_DURATION: { label: "Duration:", value: "2 monthS" },
  },
};

export const CASE_12 = {
  caseStatus: CASE_STATUS.FEATURED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Fitness & well-being",
      title: (
        <>
          Creating healthier <br /> habits
        </>
      ),
      text: (
        <Paragraph xxl>
          Positive change through a healthier life begins early
        </Paragraph>
      ),
    },
    fgImage: {
      imageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail.png`,
      imageAlt: "thumbnail",
    },
  },
  details: [
    {
      navBgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            bgMedia: {
              type: BG_MEDIA_TYPES.IMAGE,
              mediaUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-bg.jpg`,
            },
            caption: {
              overline: "Fitness & well-being",
              title: (
                <>
                  Creating healthier <br /> habits
                </>
              ),
              text: (
                <Paragraph xxl>
                  Positive change through a healthier life begins early
                </Paragraph>
              ),
            },
            highlights: [
              SETTINGS.KEY_FIGURES.CASE_TYPE,
              SETTINGS.KEY_FIGURES.TOOLS_AND_METHODS,
              SETTINGS.KEY_FIGURES.CASE_PLATFORMS,
            ],
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      header: "Challenge",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Challenge",
            text: (
              <>
                <Paragraph>
                  Be@YourBest is a fitness and healthcare company aiming to help
                  everyone live a healthier life. They collaborate with top
                  athletes, consult on nutrition and training, sell food
                  supplements and apparel, own a clothing brand
                </Paragraph>
                <Paragraph>
                  Our client had an idea, they wanted to create an app that
                  would help adolescent children gain healthy habits. For this,
                  they proposed creating an app to help trainers select team
                  members that are likely to perform based on their routines.
                  Our client wanted to increase their chances of success and
                  validate their idea before going forward.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.FIVE_IMAGES_MIX_COLUMNS,
            isPadded: true,
            images: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-01.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-02.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-03.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-04.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-05.jpg`,
                imageAlt: "?",
              },
            ],
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      header: "Solution",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Solution",
            text: (
              <Paragraph>
                We conducted a pre-study and created a vision to secure funding
                for further development. We facilitated workshops and
                interviews, looked into statistics and general research,
                conducted market research and competitor analysis, and created
                mockups and prototypes.
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      bgColor: "#ffffff",
      elements: [
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/problem-framing.jpg`,
                imageAlt: "Workshops",
                title: "Workshops",
                text: (
                  <Paragraph>
                    During this delivery, we needed to go from a vague idea to a
                    research plan. During 2 days we conducted a Problem Framing
                    workshop, value proposition canvas, and assumption mapping
                    exercises. Leaving us with the riskiest assumptions to
                    tackle.{" "}
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/competitor-1.jpg`,
                imageAlt: "Competitors",
                title: "Competitors",
                text: (
                  <>
                    <Paragraph>
                      We then turned our attention to the market. Exploring the
                      market potential in Sweden, looking at sports clubs, and
                      youth habits. We tried to understand if “bad habits” were
                      due to a lack of knowledge, or if it was something else.
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      Some of the notable competitors we looked into: XPS,
                      Gentler streaks, LifeSum, Apple Health
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/interview.jpg`,
                imageAlt: "interviews",
                title: "Interviews",
                text: (
                  <>
                    <Paragraph>
                      Finally, we interviewed active trainers and members of
                      sports clubs. For this idea to work, it had to prove
                      valuable for trainers, and athletes.
                    </Paragraph>
                    <Paragraph>
                      We ended up interviewing 5 trainers and 5 athletes from
                      varying levels, and summarized our findings in a report.
                    </Paragraph>
                  </>
                ),
              },
            ],
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Insights",
            text: (
              <Paragraph>
                Based on our research, some assumptions were invalidated. For
                example, trainers did not care about a “winning team” instead
                they were interested in keeping members in the club for as long
                as possible. No athlete kept track of their habits, for the
                hobbyists, they were just happy to participate and for the
                aspiring athletes, good habits were second nature. It was not
                about “forgetting to eat” but more about eating and drinking the
                right things. A subject that is already in focus in most
                schools. Furthermore, as studies indicate, screens and stress
                were part of the problem, not the solution. Adding more apps to
                add more stress is unlikely to help teenagers.
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
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/preview.jpg`,
            imageAlt: "preview",
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Design",
            text: (
              <Paragraph>
                After sharing our thoughts with the client, they wanted to focus
                on the design and marketing material to attract investors. We
                started off by mapping the flows in the app, followed by
                creating high-fidelity mockups and finally a prototype.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/flows.png`,
            imageAlt: "flows",
            caption: "mapping out the flows in the app",
            limitMaxWidth: true,
            isPadded: true,
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result.png`,
            imageAlt: "problem-framing",
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      header: "Result",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Result",
            text: (
              <Paragraph>
                After presenting the Prototype and our findings, the client was
                very impressed. We over-delivered on our promise helping to
                reach a wider audience, and were extremely happy with the
                result. I am personally looking forward to following their
                journey.
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            isFullScreen: true,
            bgMedia: {
              type: BG_MEDIA_TYPES.IMAGE,
              mediaUrl: `${SETTINGS.MEDIA_BASE_URL}/quote-bg.jpg`,
            },
            quote:
              "Efter många månaders planering och brainstorming fick vi igår se prototypen av vår kommande app. Tretton37 har gjort ett kanon jobb och vi är super nöjda. Nu ska vi se till att skapa världens bästa hälso och tränings app för föreningar, undgomar och så klart alla andra som vill ta del av den.",
            cite: "Be@YourBest",
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
