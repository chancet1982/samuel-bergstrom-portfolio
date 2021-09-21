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
import TitleAndText from "../Components/TitleAndText";
import Title from "../Components/Elements/Title";

/* there is an IMAGE_WITH_CAPTION here that is wrong. */
export const CASE_10 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseType: CASE_TYPES.CONCEPT,
  caseUrl: "/cases/10",
  thumbnail: {
    overline: "Price Comparison Service",
    title: "Increasing traffic to paying customers",
    text: <>Small change, big impact</>,
    imageUrl: "assets/case-10/thumbnail.png",
    imageAlt: "thumbnail",
    bgColor: "#00ADDB",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Price Comparison Service",
            title: "Increasing traffic to paying customers",
            imageUrl: "assets/case-10/cover.png",
            text: (
              <>
                <Paragraph large>
                  How a small change made a big impact
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
                My client was a leading price comparison site operating in 6
                different countries. They were a leader in their field, but
                circumstances changed and their revenue stagnated. I was asked
                to assist them to increase traffic to paying customers and help
                encourage potential customers to sign-up. One small change
                created a huge impact.
              </Paragraph>
            ),
            myRole: ROLES.CONSULTANT,
            duration: "2 months",
            platforms: [PLATFORMS.DESKTOP, PLATFORMS.TABLET, PLATFORMS.MOBILE],
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
            title: <>Revenue model:</>,
            text: (
              <>
                <Paragraph>
                  My client relies on 2 streams of revenue: Advertising, and
                  Click-outs. A click-out is defined as “Whenever a user clicked
                  to any of our customers’ offers”. After helping them with the
                  search I was asked to find ways to help users find the right
                  shop.
                </Paragraph>
                <Paragraph>
                  It aims to present a complete picture of the market to help
                  users find the cheapest price possible. In order to do that
                  they collect data from both customers and non-customer sites.
                </Paragraph>
              </>
            ),
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
                  We already knew at this point that some shops are “taking
                  advantage of the system”: posting fake prices, or not keeping
                  their stock status up-to-date.
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
            title: <>Kicking-off with internal interviews</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  At this point, I needed to collect as much information as
                  possible. I interviewed more than 20 people in 6 different
                  departments to help learn how we onboard new clients, manage
                  our client relationships, what are their pain points and areas
                  where we can improve.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            bgColor: "#00ADDB",
            title: <>Insights:</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  From the interviews, we learned a lot. There were a lot of
                  issues that needed to be addressed. 3 different problem areas
                  were identified:
                </Paragraph>
                <List
                  items={[
                    <>
                      <TitleAndText title="Onboarding new customers" h={5}>
                        <Paragraph>
                          Treating all markets equally, in some markets the
                          client is a “well-established brand” but not always.
                          On top of that, local industry-standard payment
                          options are not available.
                        </Paragraph>
                        <Paragraph>
                          Additionally, my client offered no cost-caps, no
                          cherry-picking products, and no flexibility in
                          data-ingestion.
                        </Paragraph>
                      </TitleAndText>
                    </>,
                    <>
                      <TitleAndText title="Customer relationship" h={5}>
                        <Paragraph>
                          Customers are punished for non-compliance, no
                          proactive communication exists, no follow-up on the
                          impact, and even for happy customers there is no “next
                          level”.
                        </Paragraph>
                      </TitleAndText>
                    </>,
                    <>
                      <TitleAndText
                        title="Insufficient incentives to becoming a customer."
                        h={5}
                      >
                        <Paragraph>
                          Non-paying customers are getting too much for free.
                          Sole focus on price means that non-paying customers
                          can be not only competitive but destructive (for
                          example by putting fake prices on products they don’t
                          actually have) with no repercussions.
                        </Paragraph>
                      </TitleAndText>
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
      header: "Ideation",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Looking for ideas</>,
            h: 2,
            imageUrl: "assets/case-10/ideation.png",
            imageAlt: "",
            caption: "Digital whiteboard from one of the workshops",
            text: (
              <>
                <Paragraph>
                  We continued interviewing internal stakeholders and looked
                  through the survey results to identify potential solutions.
                </Paragraph>

                <Paragraph>
                  We conducted ideation workshops with different stakeholder
                  grouped and combined all the suggestions into a list with a
                  little over 60 improvement suggestions.
                </Paragraph>
              </>
            ),
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
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote:
              "Det verkar finnas en del “fejkaktörer” som ofta hamnar överst i listan och som sen inte har produkten. Det gör att man ofta inte chansar med företag som inte är kända sen innan.",
            cite: "User, Survey reponse",
          },
        },
      ],
    },
    {
      header: "More research",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Back to the library</>,
            text: (
              <>
                <Paragraph>
                  When a user finds a shop it uses the service to search among
                  different shops to find the cheapest price for a given item.
                  This forces paying customers to compete with all shops. But it
                  is never so simple, during interviews, I asked: “So how do you
                  choose where to buy an item?” In most cases, users responded
                  with “price” but digging deeper revealed a more complex set of
                  criteria users use to evaluate a potential purchase.
                </Paragraph>
                <Paragraph>
                  I was looking at 17 competitor sites. Some in direct
                  competition and others that have similar challenges. On top of
                  that, I was reading a lot of research about this topic, from
                  from scholarly literature to white papers and research
                  dossiers from big and respected companies.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>User interviews</>,
            text: (
              <>
                <Paragraph>
                  I conducted 10 interviews asking them how they choose online
                  shops to buy from. One of the participants summarized it
                  really well:
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote:
              "I want to find a trustworthy shop that sells a product for a reasonable price",
            cite: "User, during interview",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            bgColor: "#00ADDB",
            title: <>Insights:</>,
            text: (
              <>
                <Paragraph>
                  So selecting where to buy products isn’t just about price.
                </Paragraph>
                <Paragraph>
                  Of course, price plays a part in it, but also about trust (Do
                  I know them? Did I buy there before? Was it a bad or good
                  experience? Did I hear about them? Perhaps a friend bought
                  from them?), delivery (When should I expect delivery? Is it in
                  stock?), and payment options (I don’t like to share my credit
                  card online, do they use Swish or Klarna?).
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>One small step in the right direction</>,
            text: (
              <>
                <Paragraph>
                  Based on the insights, an idea started to materialize.
                </Paragraph>
                <Paragraph>
                  To start with I suggested reducing the amount of information
                  that is visible for free. limiting the information to only the
                  product name, store name, and its ratings. Stock status and
                  all other information from non-paying customers should be
                  removed. This should increase the attractiveness of becoming a
                  paying customer.
                </Paragraph>
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
                imageUrl: "assets/case-10/before.png",
                imageAlt: "Prices list, before",
                title: "Prices list, before",
                text: (
                  <>
                    <Paragraph>
                      Price-list before changes: A mixture of paying and
                      non-paying customers. Sorting is based on price only.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-10/after.png",
                imageAlt: "Prices list, after",
                title: "Prices list, after",
                text: (
                  <>
                    <Paragraph>
                      Price-list after: Recommended sorting in-place, non-paying
                      shops grouped at the bottoms. Note: users that prefer the
                      old sorting can still choose to do so.
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
                <Paragraph>
                  In total 1,129,261 sessions were collected and the split list
                  had a 69% chance to be better compared to the benchmark.
                  Modeled improvment of -2% to 4% increase in conversions.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-10/ab-test.png",
            imageAlt: "AB test in action",
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.RESULT,
          data: {
            imageUrl: "assets/case-10/result.png",
            bgColor: "#00ADDB",
            results: [{ value: 5.7, description: "mil. increse in revenue" }],
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
