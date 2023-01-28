/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import Title from "../Components/Shared/Title";
import Image from "../Components/Shared/ImageWithCaption";
import Note from "../Components/Shared/Note";

const SETTINGS = {
  BG_COLOR: "#00ADDB",
  URL: "/cases/10",
  MEDIA_BASE_URL: "assets/case-10",
  KEY_FIGURES: {
    CASE_TYPE: {
      label: CASE_TYPES.LABEL,
      value: CASE_TYPES.IMPROVING_EXISTING_SERVICE,
    },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.CONSULTANT },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.DESKTOP, PLATFORMS.TABLET, PLATFORMS.MOBILE],
    },
    CASE_YEAR: { label: "Year:", value: "2021" },
    CASE_DURATION: { label: "Duration:", value: "2 months" },
  },
};

export const CASE_10 = {
  caseStatus: CASE_STATUS.FEATURED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    overline: "Price Comparison Service",
    title: "Increasing traffic to paying customers",
    text: <>Small change, big impact</>,
    imageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail.png`,
    imageAlt: "thumbnail",
    bgColor: SETTINGS.BG_COLOR,
  },
  details: [
    {
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            bgColor: SETTINGS.BG_COLOR,
            caption: {
              overline: "Price Comparison Service",
              title: "Increasing revenue",
              text: (
                <Paragraph xxl>
                  Increasing traffic <br /> to paying customers
                </Paragraph>
              ),
            },
            fgImage: {
              imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-desktop.png`,
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
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            text: (
              <Paragraph xl>
                Prisjakt started off by catering to computer enthusiasts and was
                one of the first price comparison sites in the Nordics. It is
                still the leading price comparison service but in recent years
                Prisjak’t growth stagnated. Prisjakt’s conversion is based
                mostly on click-outs where different the price per click is
                based on the product category.
              </Paragraph>
            ),
            toolsAndMethods: [
              TOOLS_AND_METHODS.WORKSHOPS,
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
            title: <>The problem</>,
            text: (
              <>
                <Paragraph>
                  Price comparison sites have a double challenges. On one hand
                  they need to compare as many prices as possible to provide the
                  lowest price possible for their users. This means comparing as
                  many prices as possible. This is even more important in new
                  markets where agreements are not yet signed. On the other
                  hand, only stores that have an agreement with them generate
                  revenue.
                </Paragraph>
                <Paragraph>
                  How could we drive more traffic to paying customers without
                  sacrifising neutrality? What do we do if the cheapest price
                  comes from stores that dont generate revenue?
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/problem.png`,
            imageAlt: "?",
            limitMaxWidth: true,
            caption:
              "Problem: Almost non of the visible store links will generate revenue.",
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
                  The goal of this was to increase traffic to paying customers
                  and encourage potential customers to sign-up.
                </Paragraph>
                <Paragraph>
                  On top of that, we already knew that some shops are “taking
                  advantage of the system” but without an agreement there was
                  little my client could do in order to ensure data quality.
                </Paragraph>
              </>
            ),
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
            title: <>Internal interviews</>,
            h: 2,
            text: (
              <Paragraph>
                At this point, I needed to collect as much information as
                possible. I interviewed more than 20 people in 6 different
                departments to help learn how we onboard new clients, manage our
                client relationships, what are their pain points and areas where
                we can improve.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.INSIGHTS,
          data: {
            bgColor: SETTINGS.BG_COLOR,
            title: <>Insights:</>,
            h: 2,
            text: (
              <>
                {" "}
                <Paragraph>
                  From the interviews, we learned a lot. There were a lot of
                  issues that needed to be addressed. 3 different problem areas
                  were identified:
                </Paragraph>
              </>
            ),
            items: [
              {
                title: "Onboarding new customers",
                text: "Treating all markets equally, in some markets the client is a “well-established brand” but not always. On top of that, local industry-standard payment options are not available. Additionally, my client offered no cost-caps, no cherry-picking products, and no flexibility in data-ingestion.",
              },
              {
                title: "Customer relationship",
                text: "Customers are punished for non-compliance, no proactive communication exists, no follow-up on the impact, and even for happy customers there is no “next level”.",
              },
              {
                title: "Insufficient incentives to becoming a customer.",
                text: "Non-paying customers are getting too much for free. Sole focus on price means that non-paying customers can be not only competitive but destructive (for example by putting fake prices on products they don’t actually have) with no repercussions.",
              },
            ],
          },
        },
      ],
    },
    {
      header: "Ideation",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Looking for ideas</>,
            h: 2,
            text: (
              <>
                <Title h={4}>More interviews</Title>
                <Paragraph>
                  I continued interviewing internal stakeholders and looked
                  through the survey results to identify potential solutions. We
                  conducted ideation workshops with different stakeholder
                  grouped and combined all the suggestions into a list with a
                  little over 60 improvement suggestions.
                </Paragraph>

                <Title h={4}>Competitor analysis</Title>
                <Paragraph>
                  I was looking at 17 competitor sites. Some in direct
                  competition and others that have similar challenges. Most
                  competitors simply only show their affeliates which is the
                  easiest approach.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/ideation.png`,
            imageAlt: "Digital whiteboard from one of the workshops",
            limitMaxWidth: true,
            caption: "Digital whiteboard from one of the workshops",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Prioritizing</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  At this point, we needed to evaluate the ideas based on their
                  business value, user value, and technical feasibility. I
                  created a shared Google Spreadsheet with 3 separate sheets (in
                  order to minimize bias). I evaluated potential user value
                  based on the survey results and interviews that I conducted. A
                  business representative evaluated their business potential,
                  and a senior developer estimated their technical feasibility.
                  Each idea was first discussed and then evaluated individually
                  while the results of the evaluation aggregated to a combined
                  score.
                </Paragraph>

                <Paragraph>
                  We ended up with a shortlist of potential ideas and I created
                  a roadmap for the transition.
                </Paragraph>
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
            title: <>Initial idea: only show shops we have an agreement with</>,
            text: (
              <>
                <Paragraph>
                  Its very simple. Hotels.com, booking.com and others are not
                  showing all hotels. It is common practice that comparison
                  sites will only compare prices from sites/stores that they are
                  affeliated with. In such a case, other stores can be hidden
                  behind a link that will either show or hide prices from
                  non-affeliated stores.
                </Paragraph>
                <Image
                  imageUrl={`${SETTINGS.MEDIA_BASE_URL}/initial-idea.png`}
                  imageAlt="example of how the site could look with with such a solution"
                  caption="example of how the site could look with with such a solution"
                />
                <Note>
                  <Paragraph>
                    Due to the risk of losing market position and neutrality, it
                    was decided against this solution. Since then, it seems like
                    my client went more towards this solution but initially it
                    was not possible.
                  </Paragraph>
                </Note>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Baby steps in the right direction</>,
            text: (
              <>
                <Paragraph>
                  Based on the insights, we had some small changes we could do
                  in order to test our hypothesis.
                </Paragraph>
                <Title h={4}>Reducing free information</Title>
                <Paragraph>
                  To start with I suggested reducing the amount of information
                  that is visible for free. limiting the information to only the
                  product name, store name, and its ratings. Stock status and
                  all other information from non-paying customers should be
                  removed.
                </Paragraph>
                <Paragraph>
                  On top of that, greying out the link to shops without an
                  agreement, would make those less attractive to click on &
                  would align better with users expectations (i.e. a disabled
                  link)
                </Paragraph>
                <Image
                  imageUrl={`${SETTINGS.MEDIA_BASE_URL}/offer-change.png`}
                />
                <Paragraph>
                  The idea was to increase the benefits shops get for signing an
                  agreement. Making it more attractive to become a paying
                  customer.
                </Paragraph>

                <Title h={4}>Change the default sorting</Title>
                <Paragraph>
                  On top of that, I suggested we should a recommended sorting on
                  top of the existing sorting which is based on price. Most
                  users accept default sorting and will not change it unless
                  they are unable to find what they are looking for. This will
                  allow us to weigh in different factors and offer a better
                  recommendation for our users.
                </Paragraph>
                <Paragraph>
                  The algorithm should only consider products that are in stock,
                  and rank the offer based on how cheap they are compared to the
                  current lowest price and how good are the reviews. This should
                  prevent any non-paying shop to be at the top of the list while
                  showing more relevant offers for users.
                </Paragraph>
                <Image
                  imageUrl={`${SETTINGS.MEDIA_BASE_URL}/sorting-change.png`}
                />
                <Paragraph>
                  In order to keep transparency, I suggested we use a grouping
                  mechanism where we show all the offers where information is
                  missing. In simple terms: Non-paying shops were now
                  second-class citizens.
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
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/before.png`,
                imageAlt: "Prices list, before",
                title: "Before",
                text: (
                  <Paragraph>
                    Price-list before changes: A mixture of paying and
                    non-paying customers. Sorting is based on price only.
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/after.png`,
                imageAlt: "Prices list, after",
                title: "After",
                text: (
                  <Paragraph>
                    Price-list after: Recommended sorting in-place, non-paying
                    shops grouped at the bottoms. Note: users that prefer the
                    old sorting can still choose to do so.
                  </Paragraph>
                ),
              },
            ],
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
            title: <>AB testing and result</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  We set up an A/B test using a 50/50 split on select
                  categories. We collected data and the experiment was left to
                  run for a total of 55 days during summer.
                </Paragraph>
                <Image
                  imageUrl={`${SETTINGS.MEDIA_BASE_URL}/ab-test.png`}
                  imageAlt="AB test in action"
                />
                <Paragraph>
                  In total 1,129,261 sessions were collected and the split list
                  had a 69% chance to be better compared to the benchmark.
                  Modeled improvment of -2% to 4% increase in conversions.
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
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result.png`,
            bgColor: SETTINGS.BG_COLOR,
            results: [{ value: "5.7", description: "mil. increse in revenue" }],
            text: (
              <>
                <Paragraph large>
                  On top of the direct impact, this change should expected to{" "}
                  <strong>help onboard new customers</strong>. This is
                  especially true when expanding to new-markets and opens the
                  door for exploring new service offerings.
                </Paragraph>
                <Title h={3}>After thoughts: </Title>
                <Paragraph>
                  As I see this, it is only a first step in a much larger
                  journey. It is a great example of a minor tweak that really
                  hits the nail on the head.
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
