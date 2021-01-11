/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import Paragraph from "../Components/Elements/Paragraph";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import Title from "../Components/Elements/Title";
import List from "../Components/Elements/List";
import TitleAndText from "../Components/TitleAndText";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

export const CASE_7 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseType: CASE_TYPES.CONCEPT,
  thumbnail: {
    overline: "Fitness24Seven",
    title: "e-Commerce",
    imageUrl: "assets/case-7/thumbnail.png",
    coverImageUrl: "assets/case-7/cover.png",
    imageAlt: "assets/case-7/cover.png",
    text: "Exploring potential service and product offering",
    bgColor: "rgba(0, 42, 78, .24)",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Fitness24Seven",
            title: "e-Commerce pre-study",
            text: (
              <>
                <Paragraph large>
                  Exploring potential service and product offering
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-7/cover.png",
            bgColor: "rgba(0, 42, 78, .24)",
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            bgColor: "rgba(0, 42, 78, .24)",
            text: (
              <>
                <Paragraph huge>
                  Fitness24Seven operates more than 250 gyms in 7 different
                  countries, I was tasked to help them conduct a pre-study
                  focusing on increasing digital conversions and increasing
                  online sales.
                </Paragraph>
              </>
            ),
            myRole: ROLES.UI_UX,
            duration: "1 months",
            toolsAndMethods: [
              TOOLS_AND_METHODS.FIELD_STUDIES,
              TOOLS_AND_METHODS.SURVEYS,
              TOOLS_AND_METHODS.INTERVIEWS,
              TOOLS_AND_METHODS.WEB_ANALYTICS,
              TOOLS_AND_METHODS.COMPETITOR_ANALYSIS,
              TOOLS_AND_METHODS.PROTOTYPING,
              TOOLS_AND_METHODS.USABILITY_TESTING,
              TOOLS_AND_METHODS.SERVICE_DESIGN,
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
                  Fitness24Seven operates houndreds of gyms in Sweden and
                  globally. During the covid-19 oandemic they have been seeing
                  shrinking membership numbers and experienced an increasing
                  challange signing new members.
                </Paragraph>
                <Paragraph>
                  As a response to that, Fitness24Seven decided to conduct a
                  pre-study for replacing their existing eCom platform.
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
                imageUrl: "assets/case-7/mood-1.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-7/mood-2.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-7/mood-3.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-7/mood-4.jpg",
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
                  eCom is a wide area, and the pre-study was timeboxed to 4
                  weeks. The only way of reaching any result was narrowing down
                  the scope and defining a goal for the pre-study. In
                  collaboration with the client we have agreed that the goal and
                  scope of the pre-study should include increasing online
                  conversions and exploring additional revenue streams.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Planning",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Original plan:</>,
            text: (
              <>
                <Paragraph>
                  With the goal defined it was still unclear if the focus should
                  be on increasing conversions or rather exploring additional
                  revenue streams.
                </Paragraph>
                <Paragraph>
                  The desired output for this pre-study would be a
                  recommendation for possible improvements to the current UX, a
                  recommendations for an eCommerece platform. This is a lot of
                  ground to cover, we needed to make every day count.
                </Paragraph>
                <List
                  items={[
                    <>
                      <strong>Week 1:</strong> Aligning stakeholder expectations
                      and current user needs.
                    </>,
                    <>
                      <strong>Week 2:</strong> UX Research, in parallel to a
                      technical evaluation of different ecom systems.
                    </>,
                    <>
                      <strong>Week 3:</strong> Present the findings internally,
                      prioritize and set focus area.
                    </>,
                    <>
                      <strong>Week 4:</strong> Write a report.
                    </>,
                  ]}
                />
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_WITH_CAPTION,
          data: {
            imageUrl: "assets/case-7/original-plan.png",
            imageAlt: "?",
            caption: "Original plan",
          },
        },
      ],
    },
    {
      header: "Research",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Aligning expectations, and gathering current pains</>,
            h: 2,
            text: (
              <>
                <Title h={3}>Internal stackholder workhsop</Title>
                <Paragraph>
                  Our kickoff meeting was focused on aligning stakeholder
                  expectations. The red thread from these discussions was
                  generating more revenue.
                </Paragraph>
                <Title h={3}>Meeting the onboarding customer service</Title>
                <Paragraph>
                  It's worrying when a company has an entire team dedicated for
                  helping signing new members. On the other hand it really
                  provides a good overview of the most frequently encountered
                  issues people encounter. We decided to hold a meeting with
                  them to try and uncover the current user pains.
                </Paragraph>
                <Title h={3}>Insights:</Title>
                <TitleAndText
                  title="Many users fail to sign-up digitally."
                  h={5}
                >
                  A lot of users failed to find or were confused by the
                  information they needed during sign-up
                </TitleAndText>

                <TitleAndText
                  title="20% of support calls, originate from users who cannot
                  sign-in to My Pages."
                  h={5}
                >
                  Despite recieving a mail with login information for "my pages"
                  users couldnt log-in
                </TitleAndText>

                <TitleAndText
                  title="Not all offers and Campeigns were available online"
                  h={5}
                >
                  Some offers or services were only available when signing up
                  physically
                </TitleAndText>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Deep-dive into web analytics</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Sensing that we uncovered some magor issues with the
                  onboarding I decided to look into their web-analytics. The
                  signup had a success rate of 16% and general conversion rate
                  was under 0.5%.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Looking at competitors</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  With that in mind I decided to signup myself for the service.
                  I was rather shocked, prices didnt match, information was
                  confusing, some buttons were hardly discoverable, everything
                  we've heard from customer support was true! To make sure it
                  wasent "just me" I asked some of my collegues to try to sign
                  up themselves, the results were the same.
                </Paragraph>
                <Paragraph>
                  <strong>Note:</strong> Given more time I would have loved to
                  conduct a better evaluation of the onboarding using a
                  usability test/PURE evaluation in order uncover problems. This
                  was not possible and was not required as it was already known
                  that there are issues with the current onboarding.
                </Paragraph>
                <Paragraph>
                  I compared the onboarding experience to thier competitors and
                  it was evident that there is room for improvement.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Surverys, Interviews, And field studies</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  This was a very hectic data gathering. our surveys recieved
                  more than 160 responses and interviewed more than 30 people.
                  We visited 3 Gyms all in a period of several days.
                </Paragraph>
                <Paragraph>
                  Now all of that raw data had to be analysed and presented back
                  to the stakeholders so they could prioritize our efforts. XXX
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Creating a better alternative</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Based on the input gathered and common best practices I
                  created an alternative onboarding. The new onboarding was
                  tested and tweaked using the REIT method in order to save
                  time.
                </Paragraph>
                <Paragraph>
                  <strong>Note:</strong> The new onboarding still included
                  "up-selling" which is known to reduce conversions. In a
                  perfect world this would have been taken out but instead it
                  was simply limited to additional services that are logical to
                  offer during signup.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Restart",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Shifting the focus to eCommerece</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  At this point, the focus was shifted to covering potential
                  eCommerece platform
                </Paragraph>
                <Paragraph>
                  I was asked to investigate how desireable would a
                  Fitness24Seven webshop would be. In order to do that I sent
                  out a 2 surveys and pushed it on social media. The first
                  survey focused on the current onboarding and expectations
                  members have. The second survey was more "general" survey
                  looking into eCommerece, explored different product offerings,
                  and desireability.
                </Paragraph>
                <Paragraph>
                  On top of the surveys, I conducted several field studies where
                  I interviewed members and staff, and even conducted phone
                  interviews with several more members to complement the
                  coantitative findings with qualitative data.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Setting a vision for the future</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Based on the data collected it was decided that the focus
                  would be on improving the onboarding.
                </Paragraph>
                <Paragraph>
                  At this point we already had an improved prototype for
                  onboarding, instead the Client asked if I could help visualize
                  how we could create a 100% digital experience. At the moment
                  users who sign-up for gym membership online, cannot complete
                  their registration. Several things require physical precense.
                  In order to complete the registration users need to go to a
                  gym with some sort of ID and sign the membership agreement,
                  then they need to have their picture taken finally, they need
                  to provide a fingerprint.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Identification & signing membership agreement</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Identification at least in Sweden can be done using BankId,
                  which also offers digitally signing legally binding
                  agreements.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Taking member's pictures.</>,
            h: 2,
            text: (
              <>
                <Paragraph>XXX</Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Physical access control at the gyms</>,
            h: 2,
            text: (
              <>
                <Paragraph>XXX</Paragraph>
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
            imageUrl: "assets/case-7/result.png",
            bgColor: "rgba(9, 93, 132, .72)",
            results: [
              {
                value: "1.6+",
                unit: "mil.",
                description: "treatment station hours freed *",
              },
              {
                value: "3.3+",
                unit: "mil.",
                description: "staff & patients hours saved *",
              },
            ],
            text: (
              <Paragraph small>
                * Estimate based on current number of patients and calculated
                per anum.
              </Paragraph>
            ),
          },
        },
      ],
    },
  ],
};
