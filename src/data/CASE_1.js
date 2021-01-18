/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { ROLES } from "./dictionaries/ROLES";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Elements/Paragraph";
import Title from "../Components/Elements/Title";
import List from "../Components/Elements/List";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

// TODO: image gallery "red" background showing through images.
export const CASE_1 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseType: CASE_TYPES.REDESIGN,
  thumbnail: {
    overline: "Loomis",
    title: "TMS Courier App",
    imageUrl: "assets/case-1/thumbnail.png",
    imageAlt: "thumbnail",
    text: "Enabling better cash distribution",
    bgColor: "rgba(254, 38, 55, .72)",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Loomis",
            title: "TMS Courier App",
            text: (
              <>
                <Paragraph large>
                  Redesign as an oppurtunity for change.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-1/cover.png",
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            bgColor: "rgba(254, 38, 55, .72)",
            text: (
              <>
                <Paragraph huge>
                  Loomis is a world-leading integrated cash distribution
                  network. Their couriers were using Windows mobile devices for
                  monitoring their daily routes. These devices were old, slow,
                  and increasingly hard to replace in case of failure.
                </Paragraph>
                <Paragraph huge>
                  Loomis decided to move the application to a new device running
                  Android. I was tasked to migrate the UI from the existing app
                  to a new platform.
                </Paragraph>
              </>
            ),
            myRole: ROLES.LEAD,
            duration: "4 weeks",
            platforms: [PLATFORMS.MOBILE_ANDROID],
            toolsAndMethods: [
              TOOLS_AND_METHODS.INTERVIEWS,
              TOOLS_AND_METHODS.FLOW_MAPPING,
              TOOLS_AND_METHODS.MOCKUPS,
              TOOLS_AND_METHODS.PROTOTYPING,
            ],
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
                  Loomis’s mission statement is: “Managing Cash in Society”,
                  they do just that in more than 20 countries. Their couriers
                  and service technicians take daily routes where they
                  distributing, collecting, and servicing ATMs and small
                  businesses. In order to do that couriers and service
                  technicians use PDAs that are slow, and increasingly hard to
                  service and replace. The new devices chosen to replace the old
                  hardware were using a different platform, and that required a
                  redesign of the old interface.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.THREE_IMAGES_TWO_COLUMNS,
            images: [
              {
                imageUrl: "assets/case-1/mood-0.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-1/mood-2.png",
                imageAlt: "Co-creating wireframes",
              },
              {
                imageUrl: "assets/case-1/mood-3.png",
                imageAlt: "Co-creating wireframes",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>The goal:</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  The goal was creating a solution that would be “fast and
                  simple” to implement, “familiar” to the users, including all
                  functionality, and addresses some of the known issues that
                  exists with the old design.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote: "Our app looks like its made in the 90s",
            cite: "Mary, Currior, Loomis Norway",
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
            flip: true,
            title: <>Finding a way forward</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  This wasn’t an easy starting point, I needed to get my
                  bearings fast. I sat with all stakeholders and mapped the
                  functionality included in the existing app.
                </Paragraph>
                <Paragraph>
                  I then sat with the developer to define our ways of working.
                  We agreed that we will collaborate and deliver the design
                  iteratively to reduce risks. Focusing first on the known
                  areas, I could ensure that the first pieces would be ready to
                  implement after only 7 days.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-1/flow-mapping.jpg",
            imageAlt: "Flow mapping stock photography",
            caption: "Flow mapping stock photography",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "Meeting couriers and ATM service technicians",
            h: 2,
            text: (
              <>
                <Paragraph>
                  Once the existing app was mapped, and the scope defined, it
                  was time to shift the focus and uncover problems that could be
                  addressed during the redesign. For that, I conducted virtual
                  group interviews with couriers, service technicians, and
                  internal stakeholders.
                </Paragraph>
                <Title h={5}>Some of the issues found during this phase:</Title>
                <List
                  items={[
                    <>
                      All users were using the “default” password as they were
                      not aware they can change a password.
                    </>,
                    <>
                      Long customer names and long addresses were not displayed
                      properly. <br />
                    </>,
                    <>
                      Messages are used to communicate vital information about
                      customer stops but were only available before couriers
                      accepted the route.
                    </>,
                    <>
                      Couriers had problems with incorrect back-office data.
                      This often resulted in couriers trying to pick up/deliver
                      to the wrong clients.
                    </>,
                    <>
                      When reporting discrepancies, couriers used 4 error codes
                      80% of the time. Finding those was hard to do in a long
                      list of error codes.
                    </>,
                    <>
                      Customer addresses were incorrect 70% of the time.
                      Couriers were unable to inform the dispatch of these
                      errors.
                    </>,
                  ]}
                />
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: "assets/case-1/sneakpeek-1.png",
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
                imageUrl: "assets/case-1/sneakpeek-2.png",
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
                imageUrl: "assets/case-1/sneakpeek-3.png",
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
      ],
    },
    {
      header: "Design",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          h: 2,
          data: {
            title: (
              <>
                <strong>Fast</strong> to implement, <strong>simple</strong> to
                use.
              </>
            ),
            text: (
              <>
                <Paragraph>
                  All design decisions were based on the principles of “fast to
                  implement, simple to use” In order to accomplish this I set
                  out to minimize the total number of components in order to
                  minimize development time.
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
                  I only tweaked the color scheme to match Loomis’s corporate
                  identity and added making a collection of unique illustrations
                  for the project to give the design some “personality”.
                </Paragraph>
                <Paragraph>
                  I started off by creating low fidelity mockup of the entire
                  system. This went through several rounds of iteration based on
                  stakeholder and user input, then a high fidelity mockup was
                  created and converted into an interactive prototype.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.ONE_IMAGE_FULLSIZE,
            images: [
              {
                imageUrl: "assets/case-1/wip.png",
                imageAlt: "Workfloe",
              },
            ],
          },
        },
      ],
    },
    {
      header: "Feedback",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          h: 2,
          data: {
            title: (
              <>
                <strong>Open kitchen</strong> everyone is welcome.
              </>
            ),
            text: (
              <>
                <Paragraph>
                  All artifacts were available and open to all stakeholders at
                  all times. These artifacts were connected in order to mimic
                  the developed product allowing for a smoother developer
                  handover.
                </Paragraph>
                <Paragraph>
                  Validation goals were set in collaboration with the client.
                  These goals were expanded into scenarios that were later
                  covered by the prototype and covered via remote usability
                  testing. This prototype was continuously expanded to
                  incorporate all features and changes based on the feedback and
                  test results.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote: "Looks good. Clear, Clean, and modern.",
            cite: "Krister, Regional manager, Loomis Norway",
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.RESULT,
          data: {
            imageUrl: "assets/case-1/result.png",
            bgColor: "rgba(254, 38, 55, .72)",
            text: (
              <>
                <Paragraph large>
                  Initial feedback from couriers and stakeholders was very
                  positive. The app is still in development and will be released
                  soon.
                </Paragraph>
                <Title h={2}>After thoughts:</Title>
                <Paragraph large>
                  Despite time constraints and focus on speedy delivery, a lot
                  of the issues uncovered during the research phase were
                  addressed. Given more time I would have loved to revisit this
                  redesign to gather some concrete data about its impact.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
  ],
};
