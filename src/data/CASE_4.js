/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Elements/Paragraph";
import List from "../Components/Elements/List";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

/* there is an IMAGE_WITH_CAPTION here that is wrong. */
export const CASE_4 = {
  caseStatus: CASE_STATUS.COMING_SOON,
  caseType: CASE_TYPES.REDESIGN,
  caseUrl: "/cases/4",
  thumbnail: {
    overline: "NoWaste",
    title: "e-drop",
    imageUrl: "assets/case-4/thumbnail.png",
    imageAlt: "thumbnail",
    text: "Delivery, unattended",
    bgColor: "rgba(99, 182, 187, .72)",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "NoWaste",
            title: "e-drop",
            imageUrl: "assets/case-4/cover.png",
            text: (
              <>
                <Paragraph large>Delivery, unattended</Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            bgColor: "rgba(99, 182, 187, .72)",
            text: (
              <Paragraph huge>
                NoWaste is a leading Global Logistics and transport company.
                Their subsidiary e-drop was trying to solve some of the issues
                with food deliveries. In Sweden, most supermarkets provide home
                delivery services, but these services require that people will
                be at home at a certain time. This is a challenge as most people
                are home around the same time which means that deliveries are
                limited to those hours.
              </Paragraph>
            ),
            myRole: ROLES.LEAD,
            duration: "4 weeks",
            platforms: [PLATFORMS.MOBILE_ANDROID, PLATFORMS.MOBILE_IOS],
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
              <>
                <Paragraph>
                  It is never a good experience sitting at home waiting for a
                  delivery. This is especially true when comes to delivering
                  fresh goods. Left unattended, milk can go sour, and fresh
                  vegetable shelf life is drastically reduced. NoWaste is set to
                  solve this problem by creating a refrigerated outdoor delivery
                  box unlocked using an app. The existing was not received harsh
                  criticism by all test users and needed to be redesigned.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.FOUR_IMAGES_TWO_COLUMNS,
            images: [
              {
                imageUrl: "assets/case-4/mood-1.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-4/mood-2.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-4/mood-3.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-4/mood-4.png",
                imageAlt: "?",
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
                <Paragraph>
                  <strong>Important note:</strong> It was not intended to test
                  if these apps are “the right way forward”, I personally
                  believe that an unobtrusive lock/unlock functionality (using
                  proximity for example) would have been better for end-users.
                  But as contracts were signed and promise made, the focus was
                  on improving commonly used functionality and visual appeal.
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
                <Paragraph>
                  We decided to send a feedback questionnaire to test users and
                  An open survey to users that match the products’ target
                  audience. We were hoping to get a better understanding of the
                  extent of the problems, desirable features, and even use for
                  of the responders to a future usability test.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Mapping out user-flows and identifying red routes</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  While we were waiting for the survey results, I sat with the
                  Product Owner and Tech lead to map out the current flows in
                  the application. Afterward, based on feedback from test users
                  and responses to our open survey we were able to map the user
                  flows in the current app and identify the most commonly used
                  flows.
                </Paragraph>
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
        {
          template: SECTION_ELEMENTS.SIDE_BY_SIDE_IMAGES_AND_TEXT,
          data: {
            items: [
              {
                bgColor: "rgba(9, 93, 132, .28)",
                imageUrl: "assets/case-4/before.png",
                imageAlt: "Flows before redesign",
                title: "Flows before redesign",
                text: (
                  <>
                    <Paragraph>
                      Something about how annoying it was to use before.
                    </Paragraph>
                  </>
                ),
              },
              {
                bgColor: "rgba(9, 93, 132, .28)",
                imageUrl: "assets/case-4/after.png",
                imageAlt: "Flows before redesign",
                title: "Flows before redesign",
                text: (
                  <>
                    <Paragraph>
                      Something about how wonderful it could have been
                    </Paragraph>
                  </>
                ),
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Noteworthy findings and impact:</>,
            h: 5,
            text: (
              <>
                <List
                  items={[
                    <>
                      Login was cumbersome and required users to create an
                      account by using a username then securing the account with
                      a password only after which users needed to link their
                      account with their phone and subscription code.
                      <br />
                      <strong>Adjustment - </strong>login was simplified and the
                      concept was reduced to “connect a mobile device to one or
                      more subscriptions”.
                    </>,
                    <>
                      Another confusing concept was “key sharing”. Users could
                      allow temporary access by “sharing” their access keys with
                      other devices. None of our test users were able to
                      understand the concept and non-expressed interest in
                      sharing keys “temporarily”
                      <br />
                      <strong>Adjustment - </strong>The idea of shared access
                      was simplified to its core. I.E. connecting multiple
                      devices to the same delivery unit. Based on our testing
                      this was a lot easier for people to understand and use
                    </>,
                    <>
                      Security settings were too granular and were hard to
                      understand. We saw that users that match their target
                      audience were prioritizing convenience over security and
                      were content with 2 settings, open for all or secured
                      delivery.
                      <br />
                      <strong>Adjustment - </strong>We considered using
                      proximity as a means of unlocking the delivery unit so it
                      is secure if the owner is away but open when the owner is
                      nearby. This was too costly to implement in an existing
                      hardware device but the security settings were simplified
                      to “open until delivered” and “open for all”
                    </>,
                    <>
                      {" "}
                      The cooling schedule was a feature in which users could
                      control their device’s cooling schedule in order to save
                      electricity. During testing, it became apparent that it
                      was overly complex and was too flexible.
                      <br />
                      <strong>Adjustment - </strong>Instead of providing full
                      flexibility it was decided that by default cooling will
                      only be active during the workdays daytime. The
                      “always-on” option was kept but not as default while the
                      cooling schedule itself was simplified. Users selected a
                      start, end, and in which days the cooling should be on.
                    </>,
                    <>
                      {" "}
                      The idea was that the same app used privately could also
                      be used for opening multiple lockers in a corporate
                      environment. This caused a cluttered and messy Landing
                      screen UI.
                      <br />
                      <strong>Adjustment - </strong>Based on the common case
                      (one user one delivery unit) we decided to move the locker
                      view (where you control and adjust the locker) as the main
                      view, swipe to the left to change the active locker, and
                      to the right to add a locker.
                    </>,
                    <>
                      {" "}
                      Some users complained about not knowing if their locker is
                      on or not and if it was ready to receive a delivery and
                      that when a delivery is made it is hard to find the
                      lock/unlock button.
                      <br />
                      <strong>Adjustment - </strong>The locker status and the
                      temp was added to the main locker view. The most commonly
                      used button “lock/unlock” was placed predominantly on that
                      screen as well.
                    </>,
                  ]}
                />
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Design",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Mapping, Slimming, and optimizing</>,
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
      ],
    },
    {
      header: "Validation",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Past vs Present</>,
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
      elements: [
        {
          template: SECTION_ELEMENTS.RESULT,
          data: {
            imageUrl: "assets/case-4/result.png",
            bgColor: "rgba(99, 182, 187, .72)",
            results: [
              {
                value: "120%",
                description: "increase in overall success rate",
              },
              {
                value: "64%",
                description: "decrease in time to completian",
              },
            ],
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.ADDITIONAL_CASES,
        },
        {
          template: SECTION_ELEMENTS.CASE_FOOTER,
        },
        {
          template: SECTION_ELEMENTS.FOOTER,
        },
      ],
    },
  ],
};
