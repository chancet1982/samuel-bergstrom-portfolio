/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Elements/Paragraph";
import List from "../Components/Elements/List";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import Title from "../Components/Elements/Title";

/* there is an IMAGE_WITH_CAPTION here that is wrong. */
export const CASE_9 = {
  caseStatus: CASE_STATUS.COMING_SOON,
  caseType: CASE_TYPES.CONCEPT,
  caseUrl: "/cases/9",
  thumbnail: {
    overline: "Prisjakt",
    title: "e-commerce",
    imageUrl: "assets/case-9/thumbnail.png",
    imageAlt: "thumbnail",
    text: "Improving search experience",
    bgColor: "#00ADDB",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Prisjakt",
            title: "Improving search experience",
            imageUrl: "assets/case-9/cover.png",
            text: (
              <>
                <Paragraph large>
                  Or, how to make millions of without moving a PX
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
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            bgColor: "#00ADDB",
            text: (
              <Paragraph huge>
                Prisjakt is a leading price comparison site operating in 6
                different countries. Prisjakt was couldnt reach the growth they
                expected. I was asked to assist and evaluate their search
                experience and to come up with quick fixes to increase search
                success.
              </Paragraph>
            ),
            myRole: ROLES.CONSULTANT,
            duration: "4 weeks",
            platforms: [PLATFORMS.MOBILE_ANDROID, PLATFORMS.MOBILE_IOS],
            toolsAndMethods: [
              TOOLS_AND_METHODS.SURVEYS,
              TOOLS_AND_METHODS.WEB_ANALYTICS,
              TOOLS_AND_METHODS.FUNNEL_ANALYSIS,
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
            title: (
              <>Identifying strengths and weaknesses in data-collection.</>
            ),
            text: (
              <>
                <Paragraph>
                  Prisjakt has a solid data collection infrastructure. From
                  Analytics, Usage statistics, support cases that are documented
                  and tagged. This however provides an incomplete picture
                  Analytics and usage statistics provide valueable insights for
                  what users do but not to why(!) they do it. On top of that,
                  the support cases (and various forums) are inherently biased
                  as they only represent ’frustrated users’ or ’power users’. In
                  order for me to get a better picture of the problem I
                  suggested sending an open survey and promoting it on social
                  media. The survey was designed to answer 3 main questions:
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.KEY_FIGURES,
          data: {
            items: [
              { value: 1, description: "when do people compare prices" },
              { value: 2, description: "what works well" },
              { value: 3, description: "what needs to be improved" },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Sometimes jobs are more important than others</>,
            text: (
              <>
                <Paragraph large>
                  The survey was sent to 140000 people, out of which, we
                  collected more than 2500 responses. Mapping the survey and
                  cross referncing it with our jobs-to-be-done indicated that
                  there are 2 jobs that are critical:
                </Paragraph>
                <List
                  items={[
                    <Paragraph>
                      <strong>Find the right product: </strong>
                      Users must be able to find product in order to convert.
                    </Paragraph>,
                    <Paragraph>
                      <strong>Find the right shop: </strong>
                      Once users know what products they are interested in they
                      need to be able to find a shop that sells these products.
                    </Paragraph>,
                  ]}
                />
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Problem areas</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Looking at the survey results, I noticed that there are 2
                  leading source of complaints:
                </Paragraph>
                <List
                  items={[
                    <>
                      <Title h={5}>Bad actors</Title>
                      <Paragraph>
                        Shops that abuse the system, publishing fake prices,
                        misleading stock and delivery terms.
                      </Paragraph>
                    </>,
                    <>
                      <Title h={5}>Search</Title>
                      <Paragraph>
                        Users cant seem to find what they are looking for on
                        prisjakt.
                      </Paragraph>
                    </>,
                  ]}
                />
              </>
            ),
            imageUrl: "assets/case-9/survey.png",
            imageAlt: "Survey results, search indicated in green.",
          },
        },
        {
          template: SECTION_ELEMENTS.KEY_FIGURES,
          data: {
            items: [
              { value: "2 500+", description: "responses" },
              { value: "2256", description: "mapped insights" },
              { value: "178", description: "wanted to improve search" },
            ],
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
            title: (
              <>
                Focus on the <strong>goal</strong>
              </>
            ),
            text: (
              <>
                <Paragraph>
                  The premise for this project was redesigning an
                  underpreforming app. The team developing the app didnt have a
                  designer onboard, decisions were based on gut-feeling, and
                  backend developers making design decisions. The outcome as
                  expected, didnt impress.
                </Paragraph>
                <Paragraph>
                  <strong>Important note:</strong> It was not intended to test
                  if these apps are “the right way forward” but instead focused
                  on improving the app to a state where it would allow users to
                  interact with their fridges.
                </Paragraph>
                <Paragraph>
                  For this reason, we did not look into if users will actually
                  need an app but instead focused on what functionality will
                  users be looking for, what are the common use cases for such
                  an app, creating a benchmark for comparison of our redesigned
                  app.
                </Paragraph>
              </>
            ),
            bgColor: "#00ADDB",
          },
        },
      ],
    },
    {
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
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Creating a benchmark for comparison</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  It was decided that a survey would be sent to the current test
                  users and that based on its results we would use some of those
                  people for usability testing on the current app for creating a
                  benchmark for comparison.
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
                bgColor: "#00ADDB",
                imageUrl: "assets/case-9/before.png",
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
                bgColor: "#00ADDB",
                imageUrl: "assets/case-9/after.png",
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
            imageUrl: "assets/case-9/result.png",
            bgColor: "#00ADDB",
            results: [
              {
                value: "120%",
                unit: "%",
                description: "increase in overall success rate",
              },
              {
                value: "64%",
                unit: "%",
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
