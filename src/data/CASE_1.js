/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import { ROLES } from "./dictionaries/ROLES";
import Paragraph from "../Components/Shared/Paragraph";
import Title from "../Components/Shared/Title";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import colors from "../theme/colors";
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";

const SETTINGS = {
  BG_COLOR: colors.offwhite,
  URL: "/cases/1",
  MEDIA_BASE_URL: "assets/case-1",
  KEY_FIGURES: {
    CASE_TYPE: { label: CASE_TYPES.LABEL, value: CASE_TYPES.REDESIGN },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.UX },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.MOBILE_ANDROID],
    },
    TOOLS_AND_METHODS: {
      label: TOOLS_AND_METHODS.LABEL,
      renderAsList: true,
      value: [
        TOOLS_AND_METHODS.INTERVIEWS,
        TOOLS_AND_METHODS.FLOW_MAPPING,
        TOOLS_AND_METHODS.MOCKUPS,
        TOOLS_AND_METHODS.PROTOTYPING,
      ],
    },
    CASE_YEAR: { label: "Year:", value: "2020" },
    CASE_DURATION: { label: "Duration:", value: "4 weeks" },
  },
};

export const CASE_1 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: colors.offblack,
    bgMedia: {
      type: BG_MEDIA_TYPES.IMAGE,
      mediaUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-bg.jpg`,
    },
    caption: {
      overline: "Cash Distribution",
      title: <>Courier App redesign</>,
      text: <>Redesign as an oppurtunity for change.</>,
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
              overline: "Cash Distribution",
              title: "Courier App redesign",
              h: 1,
              text: (
                <Paragraph xl>Redesign as an oppurtunity for change.</Paragraph>
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
              <>
                <Paragraph large>
                  A world-leading integrated cash distribution network had a
                  problem. Their couriers were using Windows mobile devices for
                  monitoring their daily routes. These devices were old, slow,
                  and increasingly hard to replace in case of failure.
                </Paragraph>
                <Paragraph large>
                  They decided to move the application to a new device running
                  Android. I was tasked to migrate the UI from the existing app
                  to a new platform.
                </Paragraph>
              </>
            ),
          },
        },
        { template: SECTION_ELEMENTS.SPACER_SMALL },
      ],
    },
    {
      paddedDown: true,
      header: "Background",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Using aging hardware gets too expensive</>,
            h: 2,
            text: (
              <Paragraph>
                My client’s mission statement is: “Managing Cash in Society”,
                they do just that in more than 20 countries. Their couriers and
                service technicians take daily routes where they distributing,
                collecting, and servicing ATMs and small businesses. In order to
                do that couriers and service technicians use PDAs that are slow,
                and increasingly hard to service and replace. The new devices
                chosen to replace the old hardware were using a different
                platform, and that required a redesign of the old interface.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>New devices require new interfaces</>,
            h: 4,
            text: (
              <Paragraph>
                The goal was creating a solution that would be “fast and simple”
                to implement, “familiar” to the users, including all
                functionality, and addresses some of the known issues that
                exists with the old design.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.THREE_IMAGES_TWO_COLUMNS,
            isPadded: true,
            images: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-0.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-2.png`,
                imageAlt: "Co-creating wireframes",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-3.png`,
                imageAlt: "Co-creating wireframes",
              },
            ],
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      header: "Research",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            flip: true,
            title: <>Finding a way forward</>,
            h: 2,
            text: (
              <Paragraph>
                I sat with all stakeholders and mapped the functionality
                included in the existing app. I then sat with the developers to
                define our ways of working. We agreed that we will collaborate
                and deliver the design iteratively to reduce risks. Focusing
                first on the known areas, I could ensure that the first pieces
                would be ready to implement after only 7 days.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Meeting couriers and ATM service technicians",
            h: 4,
            text: (
              <Paragraph>
                Once the existing app was mapped, and the scope defined, it was
                time to shift the focus and uncover problems that could be
                addressed during the redesign. For that, I conducted virtual
                group interviews with couriers, service technicians, and
                internal stakeholders.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote:
              "Our app looks like its made in the 90s, its really annoying to work with",
            cite: "Mary, Currior, Norway",
          },
        },
      ],
    },
    {
      bgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.INSIGHTS,
          data: {
            title: "Insights",
            h: 2,
            items: [
              {
                title: "Security Concerns",
                text: " All users were using the “default” password as they were not aware they can change a password. ",
              },
              {
                title: "Long Customer Names",
                text: "Long customer names and long addresses were not displayed properly. ",
              },
              {
                title: "Route Messages",
                text: "Messages are used to communicate vital information about customer stops but were only available before couriers accepted the route.",
              },
              {
                title: "Bad data",
                text: "Couriers had problems with incorrect back-office data. This often resulted in couriers trying to pick up/deliver to the wrong clients.",
              },
              {
                title: "Discrepancies",
                text: "When reporting discrepancies, couriers used 4 error codes 80% of the time. Finding those was hard to do in a long list of error codes.",
              },
              {
                title: "Incorrect Addresses",
                text: "Customer addresses were incorrect 70% of the time. Couriers were unable to inform the dispatch of these errors.",
              },
            ],
          },
        },
      ],
    },
    {
      paddedUp: true,
      header: "Design",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Simple is key",
            h: 2,
            text: (
              <>
                <Paragraph>
                  Sometimes, you dont need to reinvent the wheel. In this case
                  designing based on an established base was the right thing to
                  do. In collaboration with the developers we chose to use
                  Material Design to expedite the development.
                </Paragraph>
                <Paragraph>
                  I created a custom theme, shared it with the developers and
                  worked my way up to a high fidelity prototype, making handover
                  a breeze.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-1.jpg`,
                imageAlt: "Easy access to common discrepancies",
                title: "Easy access to common discrepancies",
                text: (
                  <>
                    <Paragraph>
                      During our interviews, couriers stated that reporting a
                      discrepancy takes a long time. There are simply too many
                      discrepancies in the system. Digging deeper into the data,
                      couriers used 4 error codes for 80% of the time.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution:</strong> The discrepancy list was split
                      into 2: “common” and “seldom used” when reporting a
                      discrepancy the common list will be shown with a link to
                      “other” showing the full list of error codes.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-2.jpg`,
                imageAlt: "Making route messages prominent",
                title: "Making route messages prominent",
                text: (
                  <>
                    <Paragraph>
                      Messages are used to communicate vital information but are
                      only available before accepting a route.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution:</strong> It was decided to lift messages
                      into their own link accessible at all times as a
                      notification center. On top of that, messages will pop-up
                      before couriers accept the route and if a client has any
                      messages related to them the couriers will see that when
                      they arrive at the location.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-3.jpg`,
                imageAlt: "Adding support for long customer names",
                title: "Adding support for long customer names",
                text: (
                  <>
                    <Paragraph>
                      Long customer names and long addresses were not displayed
                      properly.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution:</strong> After finding the maximum
                      length of both names and addresses it was decided that we
                      should allow them to wrap into several lines instead of
                      limiting them to one line.
                    </Paragraph>
                  </>
                ),
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          h: 2,
          data: {
            title: <>Fast to implement, simple to use.</>,
            text: (
              <>
                <Paragraph>
                  One of the guiding principles for this this project was “fast
                  to implement, simple to use” this in turn affected a lot of
                  the design decisions for this project.
                </Paragraph>
                <Paragraph>
                  At this point both the tech-stack and platform were known
                  (Android, Xamarin forms) we decided to use ready-made
                  component libraries in order to minimize implementation time.
                  After evaluating different alternatives, we decided to go with
                  Material Design as it fit the platform and had an
                  off-the-shelf implementation for Xamarin.
                </Paragraph>
                <Paragraph>
                  I only tweaked the color scheme to match the corporate
                  identity and added making a collection of unique illustrations
                  for the project to give the design some “personality”. During
                  the design I put extra emphasis on reusability and sharing
                  components and patterns accross screens.
                </Paragraph>
                <Paragraph>
                  I started off by creating low fidelity wireframe. This went
                  through several rounds of iteration based on stakeholder and
                  user input, then a high fidelity mockup was created and
                  converted into an interactive prototype that was tested and
                  tweaked based on user input.
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
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/wip.jpg`,
            imageAlt: "Workflow",
            caption: "Some phases from my work in this project",
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      header: "Validation",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          h: 2,
          data: {
            title: <>Open kitchen, everyone is welcome.</>,
            text: (
              <Paragraph>
                Validation goals were set in collaboration with the client.
                These goals were expanded into scenarios that were later covered
                by the prototype and covered via remote usability testing. This
                prototype was continuously expanded to incorporate all features
                and changes based on the feedback and test results.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote: "Looks good. Clear, Clean, and modern.",
            cite: "Krister, Regional manager, Norway",
          },
        },
      ],
    },
    {
      navBgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.RESULT,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result-desktop.png`,
            mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/result-mobile.png`,
            bgColor: SETTINGS.BG_COLOR,
            text: (
              <>
                <Paragraph large>
                  Initial feedback from couriers and stakeholders was very
                  positive. The app is still in development and will be released
                  soon.
                </Paragraph>
                <Title h={4}>After thoughts:</Title>
                <Paragraph>
                  Despite time constraints and focus on speedy delivery, a lot
                  of the issues uncovered and addressed. Given more time I would
                  have loved to revisit this redesign to gather some concrete
                  data about its impact.
                </Paragraph>
              </>
            ),
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
