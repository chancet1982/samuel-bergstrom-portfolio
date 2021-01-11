/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Elements/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

export const CASE_6 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseType: CASE_TYPES.DesignOps,
  thumbnail: {
    overline: "Euro Finans",
    title: "Design system",
    imageUrl: "assets/case-6/thumbnail.png",
    coverImageUrl: "assets/case-6/cover.png",
    imageAlt: "assets/case-6/cover.png",
    text: "Practical design system for developers and designers alike.",
    bgColor: "rgba(0, 98, 155, .72)",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Euro Finans",
            title: "Design system",
            text: (
              <>
                <Paragraph large>
                  Practical design system for developers and designers alike.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/cover.png",
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            bgColor: "rgba(0, 98, 155, .72)",
            text: (
              <>
                <Paragraph huge>
                  Euro finans is one offers Sweden's leading invoicing solution.
                  They are a subsidiary of Prioritet Finans They werent geared
                  for scaling. Expanding their digital services platform was
                  impossible without making some drastic changes.
                </Paragraph>
                <Paragraph>
                  I was there as head of design, with 2 other designers giving
                  their organization a gentle nudge in the right direction.
                </Paragraph>
              </>
            ),
            myRole: ROLES.HEAD_OF_DESIGN,
            duration: "2 months",
            platforms: [PLATFORMS.DESKTOP],
            toolsAndMethods: [TOOLS_AND_METHODS.SERVICE_DESIGN],
          },
        },
      ],
    },
    {
      header: "Background",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>The problem</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Euro Finans and it's parent company were sharing an IT
                  resources. Both companies are eachothers offer the same
                  services in different geographic locations.
                </Paragraph>
                <Paragraph>
                  Euro Finans was looking into expanding its digital services.
                  By not only offering an invoicing platform but also contract
                  generation, and accounting platform. They soon realised that
                  having developers implementing the same set of components
                  accross systems isnt a scaleable strategy.
                </Paragraph>
                <Paragraph>
                  Every change and bugfix took 3 times as long. There were
                  multiple variations of each of the components and no unified
                  experience.
                </Paragraph>
                <Paragraph>
                  With one designer coming from the pring world and another
                  designer lacking in experience it was up to me to suggest a
                  way forwrd.
                </Paragraph>
              </>
            ),
          },
        },
        /* {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.THREE_IMAGES_TWO_COLUMNS,
            images: [
              {
                imageUrl: "assets/case-5/mood-1.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-5/mood-2.jpg",
                imageAlt: "Co-creating wireframes",
              },
              {
                imageUrl: "assets/case-5/mood-3.jpg",
                imageAlt: "Co-creating wireframes",
              },
            ],
          },
        }, */
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>The goal:</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  My aim in this project was to unify the look and feel of all
                  digital services. Reduce development time, and promote a more
                  efficient work process that will save the client time and
                  money.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Process",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Inventorying</>,
            text: (
              <>
                <Paragraph>
                  Most design systems start off by inventorying. Looking at the
                  different pieces of the puzzle and how they connect. In this
                  case only one system was in place. Instead we consulted their
                  head of marketing to ensure we adhere to their corporate
                  identity. We looked at their webpage and customer pages to
                  assess their needs, and get a better understanding of their
                  use of colors, illustrations, and typography.
                </Paragraph>

                <Paragraph>
                  On top of that we looking their web-analytics to decide if we
                  approach this project as a mobile-first or desktop-first.
                  Considering most of their users used stationary PCs decided to
                  focus on desktop-first design using mobile friendly
                  components.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Start with the basics</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  From there we needed to start laying the foundation of the
                  design system. The backbone of every design system is
                  typography, buttons, and links.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            flip: true,
            title: <>Typography</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  My approach to typography is mathematical and functional. I
                  decided to use a module scale. The idea behind a modular scale
                  to use a base font size, for example 16px. then use a scale to
                  create all headlines and other elements based on this base
                  size. I chose to use a relatively small modifier to accomodate
                  for high information density (1.25) and created an alternative
                  for mobile (1.125). Surrounding margins were multiples of 0.25
                  of the sizes. base line-height of 1.5 was used and was
                  decreased by 0.1 per headlines size.
                </Paragraph>
                <Paragraph>
                  This approach is much closer to how things are implemented
                  (1rem = 16px) and allowes to control the scaling using a
                  single variable (i.e. modifier). On top of that, it is a solid
                  foundation to later converting the implementing to utilize
                  fluid typography
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/typography.png",
            imageAlt: "?",
            caption: "Example of the typography for desktop",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Colors</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  The color scheme needed to be flexible enough to support 2
                  different corporate identities. For this I used shared neutral
                  pallete with primary secondary colors matching each company's
                  corporate identity.
                </Paragraph>
                <Paragraph>
                  Each color included 3 intensity levels a Concept I shamelessly
                  stolen from Google. High, Medium, Low, and for the primary
                  color an additional very light shade was added to provide a
                  broad enough color pallete.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/colors.png",
            imageAlt: "?",
            caption: "1 Color scheme, 2 companies.",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            flip: true,
            title: <>Illustrations</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  We had a wide array of different illustrations. Instead we
                  inventoried every place where an illustration was required and
                  made sure all illustrations were aligned using the same
                  graphical langiage.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/illustrations.png",
            imageAlt: "?",
            caption: "Example of the typography for desktop",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Icons</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  Icons as well were a bag of "gott och blandat" with different
                  sizes colors and formats used. We collected them into one
                  bucket and aligned their style and size.
                </Paragraph>
                <Paragraph>
                  Doing this allows to use them as SVGs. SVGs being vector based
                  graphics mean they could scale up and down to any size, take
                  any color and even support animations.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/icons.png",
            imageAlt: "?",
            caption: "1 Color scheme, 2 companies.",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            flip: true,
            title: <>Buttons, links and CTA</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  Buttons require a minimum touch area of 48px to prevent
                  missclicks. In this case, the 2 companies have a different
                  style. Euro Finans went with round and soft while Prioritet
                  Finans with Hard and Rectangular.
                </Paragraph>
                <Paragraph>
                  We created 2 sets of buttons to accomodate for the different
                  companies. Both sets included primary and secondary buttons
                  with the respective colors. On top of that we included CTA
                  variations of the buttons and links that inherit the base font
                  size each with differentiated by color.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/buttons.png",
            imageAlt: "?",
            caption: "Buttons for Euro Finans & Prioritet finans",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Components</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  Components is a broad term for misc. In this, we opted to
                  start small, only including components that are shared between
                  at least 2 systems. Based on my experience, starting with
                  components as part of the system that they belong to makes
                  sense as long as the team communicates. As soon as a similar
                  component needs to be added, it can be discussed and if agreed
                  upon the component can be transfered into the design system. A
                  guiding principle for communicating with the team is a shared
                  understanding of Atomic design as a concept. This provides a
                  shared understanding and a foundation that makes sense for
                  both designers and developers.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/components.png",
            imageAlt: "?",
            caption: "Some of the components included in the design system",
          },
        },
      ],
    },
    {
      header: "Distribution",
      elements: [
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote: "Power comes not from knowledge kept but knowledge shared.",
            cite: "Bill Gates",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Exposing the design system, from Figma to Storybook.</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  On top of the building blocks such as typography, colors,
                  grids, and some basic components. A design must provide
                  documentation regarding rules and implementation guidelines.
                </Paragraph>
                <Paragraph>
                  In order to be effective this information must be public. Its
                  value comes from the ability to resue existing work and
                  aligning behind a single design language.
                </Paragraph>
                <Paragraph />
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SIDE_BY_SIDE_IMAGES_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: "assets/case-6/zeroheight.png",
                imageAlt: "ZeroHeight",
                title: "ZeroHeight",
                text: (
                  <>
                    <Paragraph>
                      We initially explored using zero-height. It offered a
                      Figma integration and allowed to extend the pattern
                      library with documentation of colors rules and even
                      provided a connection to Storybook. We eventually decided
                      to move away as it didnt required a lot of effort compared
                      to the value it provided.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-6/storybook.png",
                imageAlt: "Storybook",
                title: "Storybook",
                text: (
                  <>
                    <Paragraph>
                      The developers were intorduced to Storybook. It was a new
                      concept for them which they adopted after realising the
                      headaches it prevents. With some tweaking storbook can
                      accomodate additional documentation, implementation
                      guidelines, and can even be synced automatically with
                      figma.
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
      header: "Summary",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Final thoughts</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Depending on when a design system is introduced it can save
                  more or less time for each team member. In design heavy
                  organizations a well-documented design system provides more
                  value than the effort it takes. But often in smaller more
                  "developer heavy" organizations, creating extensive design
                  systems isnt really valuable. What is valuable is in-fact the
                  re-use of ready made components.
                </Paragraph>
                <Paragraph>
                  For Euro Finans this design system saved countless hours and
                  helped them work more efficiently. It ensured all stakeholders
                  share a "single source of truth" and for the first time
                  included marketing, design, and it in the same workflow. For
                  me personally it saved me a lot of headaches coordinating
                  designers and aligning us as a team.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/final-toughts.jpg",
            imageAlt: "?",
            caption: "CTO and Legal advisor with NNg stickers on their laptops",
          },
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote:
              "Simplicity--the art of maximizing the amount of work not done--is essential.",
            cite: "Agile Manifesto",
          },
        },
      ],
    },
  ],
};
