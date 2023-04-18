/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import Note from "../Components/Shared/Note";
import Title from "../Components/Shared/Title";

const SETTINGS = {
  BG_COLOR: "#546368",
  URL: "/cases/4",
  MEDIA_BASE_URL: "assets/case-4",
  KEY_FIGURES: {
    CASE_TYPE: { label: CASE_TYPES.LABEL, value: CASE_TYPES.REDESIGN },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.UX },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.MOBILE_ANDROID, PLATFORMS.MOBILE_IOS],
    },
    CASE_YEAR: { label: "Year:", value: "2019" },
    CASE_DURATION: { label: "Duration:", value: "3 months" },
  },
};

export const CASE_4 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Logistics",
      title: "Delivery, unattended",
      text: <Paragraph xxl>Home delivery box gets a companion app</Paragraph>,
    },
    fgImage: {
      imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-desktop.png`,
      mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-mobile.png`,
    },
  },
  details: [
    {
      navBgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            bgColor: SETTINGS.BG_COLOR,
            caption: {
              overline: "Logistics",
              title: "Delivery, unattended",
              text: (
                <Paragraph xxl>
                  Home delivery box gets a companion app
                </Paragraph>
              ),
            },
            fgImage: {
              imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-desktop.png`,
              mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-mobile.png`,
            },
            highlights: [
              SETTINGS.KEY_FIGURES.CASE_YEAR,
              SETTINGS.KEY_FIGURES.CASE_TYPE,
              SETTINGS.KEY_FIGURES.CASE_PLATFORMS,
            ],
          },
        },
      ],
    },
    {
      paddedUp: true,
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            text: (
              <Paragraph xl>
                NoWaste is a leading Global Logistics and transport company.
                Their subsidiary e-drop was trying to solve some of the issues
                with food deliveries. In Sweden, most supermarkets provide home
                delivery services, but these services require that people will
                be at home at a certain time. This is a challenge as most people
                are home around the same time which means that deliveries are
                limited to those hours.
              </Paragraph>
            ),
            toolsAndMethods: [
              TOOLS_AND_METHODS.SURVEYS,
              TOOLS_AND_METHODS.COMPETITOR_ANALYSIS,
              TOOLS_AND_METHODS.FLOW_MAPPING,
              TOOLS_AND_METHODS.PROTOTYPING,
              TOOLS_AND_METHODS.USABILITY_TESTING,
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
            title: <>Deliveries, never a good time.</>,
            text: (
              <Paragraph>
                It is never a good experience sitting at home waiting for a
                delivery. This is especially true when comes to delivering fresh
                goods. Left unattended, milk can go sour, and fresh vegetable
                shelf life is drastically reduced. NoWaste is set to solve this
                problem by creating a refrigerated outdoor delivery box unlocked
                using an app. The existing app was not well received and needed
                to be redesigned.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.FOUR_IMAGES_TWO_COLUMNS,
            isPadded: true,
            images: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-1.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-2.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-3.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-4.png`,
                imageAlt: "?",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>The goal:</>,
            h: 4,
            text: (
              <>
                <Paragraph>
                  In order to solve this problem, NoWaste created a smart
                  outdoor delivery unit intended to keep deliveries fresh and
                  secure. To unlock these units, users were instructed to use an
                  app. No designer was involved in creating the existing app and
                  the initial team responsible for it left mid-delivery. All in
                  all, it was a mess that needed some love and care.
                </Paragraph>
                <Paragraph>
                  The premise for this project was redesigning an
                  underperforming app. The team developing the app didn’t have a
                  designer on board, decisions were based on gut-feeling, and
                  backend developers making design decisions. The outcome as
                  expected didn’t impress.
                </Paragraph>
                <Note>
                  <Paragraph>
                    It was not intended to test if these apps are “the right way
                    forward”, I personally believe that an unobtrusive
                    lock/unlock functionality (using proximity for example)
                    would have been better for end-users. But as contracts were
                    signed and promise made, the focus was on improving commonly
                    used functionality and visual appeal.
                  </Paragraph>
                </Note>
              </>
            ),
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      header: "Process",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Gathering feedback and recruiting users.</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  We needed to understand why the current app is failing. In
                  order to do that we needed to get a better understanding of
                  the target group, how often do they encounter issues with
                  their food deliveries, what is important for them and how do
                  they experience the current app.
                </Paragraph>
                <Title h={4}>Survey, anyone?</Title>
                <Paragraph>
                  We decided to send a feedback questionnaire to test users and
                  An open survey to users that match the products’ target
                  audience. We were hoping to get a better understanding of the
                  extent of the problems, desirable features, and even use for
                  of the responders to a future usability test.
                </Paragraph>
                <Note>
                  <Paragraph>
                    Sadly, short after sending the survey we realised that the
                    test group actually consisted of a handful users that got a
                    locker for free. Far from what we needed. Despite that the
                    input we got from them affirmed what we already suspected.
                  </Paragraph>
                </Note>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            limitMaxWidth: true,
            isPadded: true,
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/flows.png`,
            imageAlt:
              "Flow map of old app, a lot of complex flows for red routes",
            caption:
              "Flow map of old app, a lot of complex flows for red routes",
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Creating an index for comparison</>,
            h: 2,
            text: (
              <>
                <Title h={4}>
                  Mapping out user-flows and identifying red routes
                </Title>
                <Paragraph>
                  While we were waiting for the survey results, I sat with the
                  Product Owner and Tech lead to map out the current flows in
                  the application. Afterward, based on feedback from test users
                  and responses to our open survey we were able to map the user
                  flows in the current app and identify the most commonly used
                  flows.
                </Paragraph>
                <Title h={4}>
                  Usability test, round 1, establishing a benchmark
                </Title>
                <Paragraph>
                  Based on that I could create scenarios to cover key
                  functionality and conducted usability testing to serve as a
                  benchmark. After conducting an inIt was evident that some key
                  features were not easily discoverable and often included
                  obscure naming and overly complex interfaces.
                </Paragraph>
              </>
            ),
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
            title: <>Insights:</>,
            h: 2,
            items: [
              {
                title: "Onboarding is cumbersome",
                text: "Login was cumbersome and required users to create an account by using a username then securing the account with a password only after which users needed to link their account with their phone and subscription code.",
              },
              {
                title: "Key Sharing is confusing",
                text: "Another confusing concept was “key sharing”. Users could allow temporary access by “sharing” their access keys with other devices. None of our test users were able to understand the concept and non-expressed interest in sharing keys “temporarily”",
              },
              {
                title: "Security",
                text: "Security settings were far too granular and confusing. We saw that users prioritize convenience over security and were content with 2 settings, Open for All or Secured Delivery.",
              },
              {
                title: "Cooling schedule",
                text: "The cooling schedule was a feature in which users could control their device’s cooling schedule in order to save electricity. During testing, it became apparent that it was overly granular and hard to use. ",
              },
              {
                title: "Unlocking the locker lockers",
                text: "The idea was that the same app used privately could also be used for opening multiple lockers in a corporate environment. This caused a cluttered and messy Landing screen UI.",
              },
              {
                title: "Is it working?",
                text: "Some users complained about not knowing if their locker is on or not and if it was ready to receive a delivery and that when a delivery is made it is hard to find the lock/unlock button. ",
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
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>When a bloated app goes on a diet</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  We started off by mapping out the current app. Doing this gave
                  us a good understanding of how it works. With that in mind and
                  the findings from the research, we knew what needed to be
                  changed so where we approached the redesign we prioritized
                  most commonly used or valuable features first while down
                  removing some seldom-used functionality.
                </Paragraph>
                <Paragraph>
                  We then created some high fidelity mockups which were
                  ongoingly presented to the stakeholders and to the dev team.
                  In collaboration with the dev team, we looked into the
                  feasibility of the different design solutions and came up with
                  a good balance of everyone’s needs.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.COLUMNS,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/before.png`,
                imageAlt: "Unlocking the locker before redesign",
                title: "Before",
                text: (
                  <Paragraph>
                    Before, lockers were not listed in the home screen. In order
                    to unlock a locker (the most common use for the app) users
                    had to go to the lockers page. select a locker. generate a
                    barcode and then scan the barcode to unlock the locker. this
                    meant that only the users themselves could use the locker
                    and that the device could not be unlocked remotely (for
                    example if a user was not home but wanted a deliver to take
                    place)
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/after.png`,
                imageAlt: "Unlocking the locker before after",
                title: "After",
                text: (
                  <Paragraph>
                    Considering that the most common scenraio is that a user
                    will only have one locker it made sense to by default show
                    the last used locker on the landing screen and Exposing the
                    unlock function already there. On top of that it made sense
                    to remove the need for barcode production and scanning and
                    simply unlock on command from a trusted device. This in turn
                    allows to accept deliveries even when users were away or
                    accept deliveries by other trusted individuals.
                  </Paragraph>
                ),
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-1.png`,
                imageAlt: "Unlocking the locker",
                title: "Unlocking the locker",
                text: (
                  <>
                    <Paragraph>
                      Unlocking the locker was not intuitive forcing users to
                      first select a locker, then genarate a barcode then
                      physically scan the barcode to unlock the locker. screen
                      UI.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution: </strong>Based on the common case (one
                      user one delivery unit) we decided to surface the locker
                      view as the main view. Locker status was surfced and
                      Unlock button was added to the screen. The barcode
                      functionality was scrapped by allowing remote unlock.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-2.png`,
                imageAlt: "Cooling schedule",
                title: "Cooling schedule",
                text: (
                  <>
                    <Paragraph>
                      Cooling schedule was overly complex and hard to use.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution: </strong>Like most schedules, it is easy
                      for users to expect things based on previous experiences.
                      One common schedule most users use is an alarm clock which
                      inspired the design. On top of that, we chose to implement
                      more sensible defaults. Most deliveries happen during the
                      day and temp rise. Hence lockers could by default be set
                      to only cool during workdays, daytime. The “always-on”
                      option was kept but not as default while the cooling
                      schedule itself was simplified. Users selected a start,
                      end, and in which days the cooling should be on.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-3.png`,
                imageAlt: "Is it working?",
                title: "Is it working?",
                text: (
                  <>
                    <Paragraph>
                      The locker itself didn’t have any physical status
                      indicators and users complained about not knowing if their
                      locker is on or not.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution: </strong>The locker status and the temp
                      was added to the main locker view. The most commonly used
                      button “lock/unlock” was placed predominantly on that
                      screen as well.
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
      header: "Validation",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Current and redesigned app go head-to-head.</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Initially, we identified all key functionality in
                  collaboration with the product owner and users. Knowing this
                  we were able to create test goals and ran an initial usability
                  test using the app for creating a benchmark and identifying
                  problem areas.
                </Paragraph>
                <Paragraph>
                  We later were able to prioritize our efforts based on their
                  value (how often, how bad) based on how important a certain
                  feature. Once we had a design in place we created a prototype
                  by stitching together all the different views and linked them
                  together. We then recruited some participants and re-ran the
                  same exact usability tests we did before the redesign in order
                  to measure the impact of our changes.
                </Paragraph>
              </>
            ),
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
            results: [
              {
                value: "+120%",
                description: "Conversion Rate",
              },
              {
                value: "-64%",
                description: "Time On Task",
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
          template: SECTION_ELEMENTS.ADDITIONAL_CASES,
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.CASE_FOOTER,
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
