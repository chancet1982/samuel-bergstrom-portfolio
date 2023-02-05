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
import List from "../Components/Shared/List";
import Span from "../Components/Shared/Span";
import { SPACER_SIZES } from "./dictionaries/SPACER_SIZES";

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
                Prisjakt started off by catering to computer enthusiasts and was
                one of the first price comparison sites in the Nordics. It is
                still the leading price comparison service but in recent years
                Prisjak’t growth stagnated. Prisjakt’s main revenue originates
                from click-outs where different categories have different CPC.
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
      paddedUp: true,
      header: "Background",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Price comparison, catch 22</>,
            text: (
              <>
                <Paragraph large>
                  <strong>
                    Price comparison sites face a multi layered problem.{" "}
                  </strong>
                  From one side, they need to include as many prices and find
                  the cheapest prices to be relevant. While from the other, only
                  stores that have an agreement with them generate revenue.
                </Paragraph>
                <Paragraph>
                  Price comparison sites need quality data in order to preform,
                  while they can only control the data quality when agreements
                  are signed. In emerging markets, it is hard to motivate
                  signing an agreement, unless you can prove you redirect
                  valuable traffic, and you can’t redirect valuable traffic
                  without good data.
                </Paragraph>
                <Paragraph>
                  On top of that, we knew that some shops are “taking advantage
                  of the system” but without an agreement there was little my
                  client could do in order to ensure data quality.
                </Paragraph>
                <Paragraph>
                  How could we drive more traffic to paying customers without
                  being biased? What do we do if the cheapest price comes from
                  stores that dont generate revenue?
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/problem.png`,
            limitMaxWidth: true,
            imageAlt:
              "Problem: Almost non of the visible store links will generate revenue.",
            caption:
              "Problem: Almost non of the visible store links will generate revenue.",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>A BIG ask</>,
            h: 4,
            text: (
              <>
                <Paragraph large>
                  This project set out with 3 main goals in mind:
                </Paragraph>
                <List
                  items={[
                    <Span>
                      1. <strong>Increase revenues</strong> by shifting traffic
                      to paying customers
                    </Span>,
                    <Span>
                      2. Encourage potential customers to{" "}
                      <strong>sign agreements</strong>
                    </Span>,
                    <Span>
                      3. Increase <strong>data quality</strong>
                    </Span>,
                  ]}
                />
              </>
            ),
          },
        },
      ],
    },
    {
      paddedUp: true,
      header: "Research",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Internal interviews</>,
            text: (
              <Paragraph>
                In order to succeed, I needed to understand the problem. I spent
                a week interviewing more than 20 stakeholders from 6 different
                departments in order to learn how we onboard new clients, manage
                client relationships, and explore oppurtuinities.
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
          template: SECTION_ELEMENTS.INSIGHTS,
          data: {
            title: <>3 areas for improvement</>,
            items: [
              {
                title: "Motiviating potential customers",
                text: (
                  <>
                    <strong>
                      Non-paying customers are getting too much for free.
                    </strong>{" "}
                    Sole focus on price means that non-paying customers can be
                    not only competitive but destructive (for example by putting
                    fake prices on products they don’t actually have) with no
                    repercussions.
                  </>
                ),
              },
              {
                title: "Onboarding new customers",
                text: (
                  <>
                    <strong>
                      Treating all markets as one is not a good approach.
                    </strong>{" "}
                    In some markets the client is a “well-established brand” but
                    not always. On top of that, local industry-standard payment
                    options are not available. Additionally, my client offered
                    no cost-caps, no cherry-picking products, and no flexibility
                    in data-ingestion.
                  </>
                ),
              },
              {
                title: "Customer relationship",
                text: (
                  <>
                    <strong>
                      Customers are punished for non-compliance without warning.
                    </strong>{" "}
                    No one is checking up on the clients, or measures our
                    impact. Even for happy customers there is no “next level”.
                  </>
                ),
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
            text: (
              <>
                <Title h={4}>Looking internally</Title>
                <Paragraph>
                  We talked to all stakeholders and consucted ideation workshops
                  with each group. When the dust settled we had a list with a
                  little over 60 improvement suggestions.
                </Paragraph>

                <Title h={4}>Looking at our competitors</Title>
                <Paragraph>
                  I was looking at 17 competitor sites. Some in direct
                  competition and others that have similar challenges. Most
                  competitors simply only show their affeliates. For my client
                  however, “market completeness” was more important than data
                  quality.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/ideation.png`,
            limitMaxWidth: true,
            imageAlt: "Digital whiteboard from one of the workshops",
            caption: "Digital whiteboard from one of the workshops",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Prioritizing</>,
            h: 4,
            text: (
              <>
                <Paragraph>
                  For prioritizing ideas, I created 3 spreadsheets for
                  evaluating business value, user value, and technical
                  feasibility. I evaluated potential user value based on the
                  survey results and interviews that I conducted. A business
                  representative evaluated their business potential, and a
                  senior developer estimated their technical feasibility. Each
                  idea was first discussed and then evaluated individually while
                  the results of the evaluation aggregated to a combined score.
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
      paddedUp: true,
      header: "Design",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Initial idea: show only affeliated shops</>,
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
          template: SECTION_ELEMENTS.SPACER,
          data: {
            size: SPACER_SIZES.MEDIUM,
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Second idea: grouped display for all shops</>,
            text: (
              <>
                <Paragraph>
                  If we needed to show all shops regardless of affeliation, we
                  could at least do it in a better way.
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
                <Title h={4}>Making sense of it</Title>
                <Paragraph>
                  In order to keep transparency, I suggested we use a grouping
                  mechanism where we show all the offers where information is
                  missing. <br /> <strong>This has 2 benefits:</strong>
                  This on one hand In simple terms: Non-paying shops were now
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
                    A mixture of paying and non-paying customers. Sorting is
                    based on price only.
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/after.png`,
                imageAlt: "Prices list, after",
                title: "After",
                text: (
                  <Paragraph>
                    Recommended sorting in-place, non-paying shops grouped at
                    the bottoms. Users can still sort by price only if they
                    prefer.
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
      header: "Validation",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>AB testing and result</>,
            text: (
              <Paragraph>
                We set up an A/B test using a 50/50 split on select categories.
                We collected data for a total of 55 days during summer. In total
                1,129,261 sessions were collected and the split list had a 69%
                chance to be better compared to the benchmark. Modeled
                improvment of -2% to 4% increase in conversions.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/ab-test.png`,
            imageAlt: "AB test in action",
            caption: "AB test in action",
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
