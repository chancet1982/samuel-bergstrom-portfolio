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
import colors from "../theme/colors";

const SETTINGS = {
  BG_COLOR: colors.offwhite,
  URL: "/cases/6",
  MEDIA_BASE_URL: "assets/case-6",
  KEY_FIGURES: {
    CASE_TYPE: { label: CASE_TYPES.LABEL, value: CASE_TYPES.DESIGN_OPS },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.UI_UX },
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
    CASE_YEAR: { label: "Year:", value: "2020" },
    CASE_DURATION: { label: "Duration:", value: "4 months" },
  },
};

export const CASE_6 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Euro Finans",
      title: <>Design system</>,
      text: (
        <>
          Creating a multi-brand design system to expedite development and
          improve consistency
        </>
      ),
    },
    fgImage: {
      imageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail-desktop.png`,
      mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail-mobile.png`,
      imageAlt: "thumbnail",
    },
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
              overline: "Euro Finans",
              title: <>Design system</>,
              h: 1,
              text: (
                <Paragraph xl>
                  Creating a multi-brand design system to expedite development
                  and improve consistency
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
              <Paragraph large>
                EuroFinans is one of Sweden’s leading invoicing solutions
                providers. They are a subsidiary of Prioritet Finans. While both
                companies openly compete, offering the same services in
                different geographic locations. Their IT resources are shared
                across both companies.
              </Paragraph>
            ),
          },
        },
        { template: SECTION_ELEMENTS.SPACER_SMALL },
      ],
    },
    {
      header: "Background",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Growing pains</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  My client wanted to expand and started offering a “complete
                  solution” for small and medium-sized organizations. From an
                  invoicing service to a contract management and accounting
                  platform. This meant that the developers, previously working
                  on one product, were now responsible for 4 products. Adding to
                  the complexity, every platform had to support the corporate
                  identity of the two companies.
                </Paragraph>
                <Paragraph>
                  The platforms were lacking consistency. The codebase was
                  growing increasingly complex. Every fix needed to be
                  implemented in at least three places, making it easy to
                  overlook and leading to more bugs being introduced for every
                  bug fixed.
                </Paragraph>
              </>
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
            title: <>Our aim: help developers spend more time developing.</>,
            h: 2,
            text: (
              <Paragraph>
                In this project, I aimed to create consistency. When developing
                products, consistency creates familiarity (which improves the
                experience), but more importantly, It reduces development time.
                Considering that in this client, there was a 5 to 1 developer-to
                designer-ratio, the design system was more of a platform for
                them to work more efficiently than anything else.
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      paddedDown: true,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>(Almost) a blank slate</>,
            text: (
              <Paragraph>
                Most design systems begin with inventorying existing products.
                In this case, we only had one product “in production” and others
                in the early development stages. We had the buy-in we needed and
                didn’t need to “waste time.” The only important consideration we
                had was not to slow down the developers. Another unusual thing
                was focusing on desktop experience and designing for
                desktop-first. This made sense since most traffic came from PCs
                anyhow.
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      bgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Create a solid foundation</>,
            h: 2,
            text: (
              <Paragraph>
                Before creating any components, I typically make the typographIc
                scale and collect all the icons and colors to create a
                theme.Before creating any components, I typically make the
                typographIc scale and collect all the icons and colors to create
                a theme. It just makes life easier. In this case, a modular
                scale for medium information density was used and all existing
                icons and illustrations were collected.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            plainImage: true,
            stickyText: true,
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/typography.jpg`,
                imageAlt: "Typography",
                title: "Typography",
                text: (
                  <>
                    <Paragraph>
                      For this design system, I decided to use a modular scale
                      based on a base size of 16px and 4px increments as it
                      accommodates well for high-information density. Using this
                      the headlines were then 16, 20, 24, 32, and 40px in size.
                      Line heights were adjusted as well based on the font size
                      and were smaller as text size grew while keeping to the
                      4px grid.
                    </Paragraph>
                    <Paragraph>
                      On mobile, the increments were reduced to 2px increments,
                      and line heights and margins were adjusted accordingly to
                      use the viewport efficiently.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/colors.jpg`,
                imageAlt: "Color scheme",
                title: "Color scheme",
                text: (
                  <>
                    <Paragraph>
                      In this case, Euro Finans already had 2 brand colors that
                      were extensively used. Prioritet Finans however, only used
                      one. I extended the color scheme to include an accent
                      color and created a theme for each of the brands.
                    </Paragraph>
                    <Paragraph>
                      Both brands shared their neutral and supporting colors and
                      included support for both dark and light text with 3
                      emphasis levels. On top of that, 2 colors (primary and
                      secondary) were used across all applications and services.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/icons-and-illustrations.jpg`,
                imageAlt: "icons and illustrations",
                title: "Icons and illustrations",
                text: (
                  <Paragraph>
                    Another designer was focused on creating all illustrations
                    and aligned them to share a style across all the products. I
                    then inventoried and collected all the icons that were used
                    or were known as needed. I made sure that these were all the
                    same size and were monochromatic (so that we could control
                    their colors using CSS) then it was only a question of
                    making sure they all had the same line-thickness and corner
                    radius and we were ready to go.
                  </Paragraph>
                ),
              },
            ],
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      sectionTitle: <>My approach to creating practical design systems</>,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Treat the design system as a product</>,
            h: 3,
            text: (
              <Paragraph>
                A design system is a product that helps companies create
                products & services faster and more efficiently. It is never
                “done” and must relieve more pain than it causes. Treat the
                developers and designers as the users and focus on reducing
                their pain.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/DSAP.png`,
            imageAlt: "design system as a service",
            limitMaxWidth: true,
            imageCaption: "Using trello",
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Iterate and expand based on value.</>,
            h: 3,
            text: (
              <Paragraph>
                Create a process so everyone can contribute. In most cases, I
                usually go with 5 steps: backlog, design, code, review, and
                documentation.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/process.jpg`,
            imageAlt: "process",
          },
        },
      ],
    },
    {
      bgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>(The most) Reusable components come first.</>,
            h: 3,
            text: (
              <Paragraph>
                Once in place, create fundamental components such as buttons and
                form elements. More complex components are inherently less
                reusable and are placed in a backlog for future consideration.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            plainImage: true,
            stickyText: true,
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/atoms.jpg`,
                imageAlt: "Basic components",
                title: "Basic components",
                text: (
                  <>
                    <Paragraph>
                      In my experience, no design system should cover all
                      components. There are diminishing returns. In most cases,
                      the most basic components are the most important ones.
                      Because of that, I tend to create icon components, Text
                      components, Buttons, and basic form elements first.
                    </Paragraph>
                    <Paragraph>
                      I typically use “atomic design” (not religiously but more
                      because it is a great way to both have a shared
                      understanding of how component composition works) and
                      focus most efforts on the atoms and molecules. In most
                      cases for a smaller organization, you never need to go
                      beyond that.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/molecules.jpg`,
                imageAlt: "molecules",
                title: "Molecules",
                text: (
                  <>
                    <Paragraph>
                      Molecules are typically more complex components that are
                      made of several atoms. For example, a dropdown is an atom.
                      In most cases though, a dropdown would have a menu that
                      opens up, with different options, and it would have a
                      label. And may include some validation. Other examples may
                      include tables, tabs, and navigation bars.
                    </Paragraph>
                    <Paragraph>
                      The one exception I have is that I typically avoid
                      creating container components (such as cards, panels, etc)
                      as design components in Figma as support is lacking in my
                      eyes. They are of course designed and implemented as code
                      components.
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
      paddedUp: true,
      paddedDown: true,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Design components for multiple brands.</>,
            h: 2,
            text: (
              <Paragraph>
                For EuroFinans, implementing a theme was relatively simple. All
                products shared a tech stack, making it a breeze and allowing
                the same code base to be shared to support both brands. In Figma
                of course, this is relatively easy, but it is only one side of
                the story.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/multi-brand.png`,
            imageAlt: "multi-brand",
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Implemented with (mostly) developers in mind.</>,
            h: 2,
            text: (
              <Paragraph>
                Design components in Figma are one thing. Some designers believe
                you’re done once things are in Figma and a handover takes place.
                I don’t. In this case, we created an external repository and
                documented the code components using Storybook. We decided that
                our single source of truth would be code components.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            flip: true,
            title: <>Final thoughts</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  It is hard to evaluate the impact of this case. There was
                  simply nothing to compare this to. But sometimes, the best
                  indication of “doing things right” is the uneventful launch of
                  products and the lack of fires to extinguish.
                </Paragraph>
                <Paragraph>
                  I personally believe that a good design system is one that is
                  being used. A design system that developers choose to maintain
                  and expand is often a good indicator of a design system
                  creating value.
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
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            isFullScreen: true,
            bgMedia: {
              type: BG_MEDIA_TYPES.IMAGE,
              mediaUrl: `${SETTINGS.MEDIA_BASE_URL}/quote-bg.jpg`,
            },
            quote:
              "We never did things this way before. It is great! We are saving time and making progress, which is exactly what Euro Finans needed.",
            cite: "Martin Ljungquist, CTO Euro Finans",
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
