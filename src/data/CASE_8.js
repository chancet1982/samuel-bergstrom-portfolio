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
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";

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
  caseStatus: CASE_STATUS.FEATURED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Price Comparison Service",
      title: "Design system",
      text: <>Launching a design system after failed attempts</>,
    },
    fgImage: {
      imageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail-desktop.png`,
      mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail-mobile.png`,
      imageAlt: "thumbnail",
    },
  },
  details: [
    {
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_HERO_CASES,
          data: {
            bgColor: colors.white,
            caption: {
              overline: "Price Comparison Service",
              title: <>Design system</>,
              h: 1,
              text: (
                <Paragraph xl>
                  Launching a design system after failed attempts
                </Paragraph>
              ),
            },
            bgMedia: {
              type: BG_MEDIA_TYPES.IMAGE,
              mediaUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-bg.jpg`,
              isParallaxOnScroll: true,
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
              <Paragraph large>
                Prisjakt started by catering to computer enthusiasts and was one
                of the first price comparison sites in the Nordics. It is still
                the leading price comparison service, but Prisjakt’s growth has
                stagnated recently. Prisjakt’s main revenue originates from
                click-outs, where different categories have different CPCs.
              </Paragraph>
            ),
          },
        },
        { template: SECTION_ELEMENTS.SPACER_SMALL },
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
                created. Others are static. On top of that, Prisjakt offers
                native apps for both Android and iOS. At the time, four design
                teams were working on the consumer-facing app, and creating a
                consistent experience was increasingly challenging. To make
                things worse, the old version of the site “classic” had to be
                maintained in parallel, doubling the efforts required for every
                fix. Auditing the site on CSS stats and comparing it to our
                competitors made it clear we had a lot of potential for
                improvement.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.SIX_IMAGES_THREE_COLUMNS,
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
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-06.jpg`,
                imageAlt: "?",
              },
            ],
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
            title: <>Can we?</>,
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
      ],
    },
    {
      sectionTitle: <>The process</>,
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
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            limitMaxWidth: true,
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/recreating-base-screens.jpg`,
            imageAlt: "Recreating base screens in Figma",
            caption: "Recreating base screens in Figma",
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Migrating existing teams</>,
            h: 3,
            text: (
              <Paragraph>
                Once some screens and components were in place, I added the rest
                of the team to a temporary license. Transitioning to Figma
                would, in theory, be cheaper and better for everyone, so I got
                the green light. After a short introduction and after creating
                some of the basic screens and components, other teams started
                using Figma and the component library that it offers. The
                product was so big that we had to transition gradually to using
                reusable components.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/typography.jpg`,
                imageAlt: "Cleaning up the typography",
                title: "Cleaning up the typography",
                text: (
                  <>
                    <Paragraph>
                      I ran CSS STATS and compared it to our competitors. We
                      were using 15 different text sizes and more than 50
                      different colors. Some text sizes were so small or so
                      large that they were practically unreadable.
                    </Paragraph>
                    <Paragraph>
                      All designers met, and we agreed to try to use a limited
                      set of sizes based on a modular scale. (1.25 for desktop
                      and 1.125 for mobile). To ensure the new scale worked, we
                      updated all existing base screens to use the new scale.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/colors.jpg`,
                imageAlt: "Color scheme",
                title: "Colors, colors everywhere!",
                text: (
                  <Paragraph>
                    Prisjakt is known to be colorful. Perhaps a bit too
                    colorful, using more than 60 unique colors. When everything
                    demands attention, it can easily be overwhelming (just think
                    of sales season when showing all “offers” from all shops).
                    Instead, we used a “limited” color scheme of 29 colors and
                    narrowed it down even more to use mostly shades of grey and
                    a light blue as “action” color.
                  </Paragraph>
                ),
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Developing some simple components</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  What sets me apart from other designers is that I can code. I
                  often discuss the pros and cons of different design decisions
                  with developers. Find walk-arounds, navigate my way around IDE
                  APIs, and even create some simple components for a design
                  system.
                </Paragraph>
                <Paragraph>
                  In this case, I had some lying around from other projects that
                  I could copy-paste-modify to create the code implementations
                  for Icons and Badges. I contributed some components to the
                  now-growing components library and helped the team solve some
                  of the challenges with others.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            isPadded: true,
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/icons.jpg`,
            imageAlt: "Icons in figma and in JS",
            caption: "Icons in figma and in JS",
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Components in focus</>,
            h: 2,
            text: (
              <Paragraph>
                While transitioning to reusable components, we took the chance
                to rethink some widely used components. I just want to highlight
                2 of these components here:
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/product-card.jpg`,
                imageAlt: "Product card",
                title: "Product card",
                text: (
                  <>
                    <Paragraph>
                      The product is widely used on Prisjakt to link to product
                      pages and specific offers and deals. It fills many roles,
                      including selecting and comparing products, linking to
                      external pages, and creating price notifications. In
                      addition, it needed to support both the normal card layout
                      and a wider list layout (which is used in category and
                      search results pages).
                    </Paragraph>
                    <Paragraph>
                      We aimed to make the card more distinct, with a clearer
                      hit area and better readability. We created many
                      iterations and eventually compromised on the following
                      design.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/offer-item.jpg`,
                imageAlt: "Offer item",
                title: "Offer item optimization",
                text: (
                  <>
                    <Paragraph>
                      The offer item is a key component on Prisjakt. It displays
                      information about the shop (ratings, payment, delivery
                      options) and the specific offer (price, stock,
                      conditions), which means cramming a lot of information in
                      a very small space. This is even more challenging on
                      mobile or when new pieces of information need to be added
                      (“member prices,” “shipping information,” etc.)
                    </Paragraph>
                    <Paragraph>
                      We started by moving away from the table layout. Then,
                      through a series of experiments, optimized the delivery
                      text, store information, and CTA)
                    </Paragraph>
                  </>
                ),
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
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
                  and complexity, and developers hesitated to contribute to it.
                  Without management support, there was no mandate to force
                  anyone to do so.
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
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Its never about the documentation",
            text: (
              <>
                <Paragraph>
                  The real benefit of using design systems is threefold. It
                  creates a sense of consistency and familiarity for users. It
                  saves time for developers and designers, and it saves money
                  for the organization.
                </Paragraph>
                <Paragraph>
                  Here it was no different. We could see a gradual increase in
                  user satisfaction. We saw developers both using and
                  contributing to the design system. This meant more time could
                  be spent on making Prisjakt better for its users and customers
                  and less time creating “yet another button”
                </Paragraph>
              </>
            ),
            isFullScreen: true,
            isSticky: true,
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result.jpg`,
            imageAlt: "some of the components in the system",
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
