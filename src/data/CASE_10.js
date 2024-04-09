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
import Note from "../Components/Shared/Note";
import List from "../Components/Shared/List";
import colors from "../theme/colors";
import ImageWithCaption from "../Components/Shared/ImageWithCaption";
import TitleAndText from "../Components/Shared/TitleAndText";

const SETTINGS = {
  BG_COLOR: colors.offwhite,
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
    TOOLS_AND_METHODS: {
      label: TOOLS_AND_METHODS.LABEL,
      renderAsList: true,
      value: [
        TOOLS_AND_METHODS.WORKSHOPS,
        TOOLS_AND_METHODS.SURVEYS,
        TOOLS_AND_METHODS.COMPETITOR_ANALYSIS,
        TOOLS_AND_METHODS.FLOW_MAPPING,
        TOOLS_AND_METHODS.PROTOTYPING,
        TOOLS_AND_METHODS.USABILITY_TESTING,
      ],
    },
    CASE_YEAR: { label: "Year:", value: "2021" },
    CASE_DURATION: { label: "Duration:", value: "2 months" },
  },
};

export const CASE_10 = {
  caseStatus: CASE_STATUS.FEATURED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Price Comparison Service",
      title: <>Increasing revenue</>,
      text: <>Increasing traffic to paying customers</>,
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
              overline: "Price Comparison Service",
              title: "Increasing revenue",
              h: 1,
              text: (
                <Paragraph xl>Increasing traffic to paying customers</Paragraph>
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
                Prisjakt started off by catering to computer enthusiasts and was
                one of the first price comparison sites in the Nordics. It is
                still the leading price comparison service but in recent years
                Prisjakt’s growth stagnated. Prisjakt’s main revenue originates
                from click-outs where different categories have different CPC.
              </Paragraph>
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
            title: <>Price comparison, catch 22</>,
            text: (
              <Paragraph large>
                <strong>
                  Price comparison sites face a multi layered problem.{" "}
                </strong>
                From one side, they need to include as many prices and find the
                cheapest prices to be relevant. While from the other, only
                stores that have an agreement with them generate revenue.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>A double edged sward</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  <strong>
                    Price comparison sites need quality data in order to
                    preform, while they can only control the data quality when
                    agreements are signed.
                  </strong>{" "}
                  In emerging markets, it is hard to motivate signing an
                  agreement, unless you can prove you redirect valuable traffic,
                  and you can’t redirect valuable traffic without good data.
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
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>This project set out with 3 main goals in mind:</>,
            h: 4,
            text: (
              <List
                items={[
                  <Paragraph large>
                    <strong>1. Increase revenues </strong>
                    <br /> by shifting traffic to paying clients
                  </Paragraph>,
                  <Paragraph large>
                    <strong>2. Onboard new clients</strong>
                    <br /> by increasing motivation to become a paying client
                  </Paragraph>,
                  <Paragraph large>
                    <strong>3. Improve data quality</strong>
                    <br /> by enforcing requirements on data reporting
                  </Paragraph>,
                ]}
              />
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
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
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
      marginUp: true,
      marginDown: true,
      bgColor: SETTINGS.BG_COLOR,
      sectionTitle: <>3 areas for improvement</>,
      isCentered: true,
      elements: [
        {
          template: SECTION_ELEMENTS.INSIGHTS,
          data: {
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
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Looking for ideas</>,
            text: (
              <>
                <Title h={4}>Looking internally</Title>
                <Paragraph>
                  We talked to all stakeholders and conducted ideation workshops
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
          template: SECTION_ELEMENTS.SPACER_SMALL,
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
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
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
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Initial idea: hide unaffeliated shops</>,
            text: (
              <Paragraph>
                Its very simple. Hotels.com, booking.com and others are not
                showing all hotels. It is common practice that comparison sites
                will only compare prices from sites/stores that they are
                affeliated with. In such a case, other stores can be hidden
                behind a link that will either show or hide prices from
                non-affeliated stores.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/initial-idea.png`,
            limitMaxWidth: true,
            imageAlt:
              "example of how the site could look with with such a solution",
            caption:
              "example of how the site could look with with such a solution",
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            text: (
              <Note>
                <Paragraph>
                  Due to the risk of losing market position and neutrality, it
                  was decided against this solution. Since then, it seems like
                  my client went more towards this solution but initially it was
                  not possible.
                </Paragraph>
              </Note>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Second idea: Change the rules</>,
            text: (
              <Paragraph>
                We needed to show all shops, but we could make them less
                prominant. We needed to make them less attractive, drive traffic
                to affeliated shops, and increase overall data quality.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Step 1: Reducing free information</>,
            h: 4,
            text: (
              <Paragraph>
                To start with, I suggested reducing the amount of information
                that is visible for free. Removing stock status and all
                non-essential information for unaffeliated shops. On top of
                that, unaffeliated shops should be displayed as disabled links.
                This would better align expectations, and reduce their
                prominance. The idea was to increase the benefits shops get for
                signing an agreement. Making it more attractive to become a
                paying customer.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/offer-change.png`,
            limitMaxWidth: true,
            imageAlt: "?",
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Step 2: Change the default sorting</>,
            h: 4,
            text: (
              <Paragraph>
                With that in place, I suggested we swap the default sorting to
                consider price, stock status, and user reviews. Most users
                accept default sorting and will not change it unless they are
                unable to find what they are looking for. This provided a better
                recommendation for our users and prevented unaffeliated shops
                from being on top
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sorting-change.png`,
            limitMaxWidth: true,
            imageAlt: "?",
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Step 3: Grouping based on data completeness</>,
            h: 4,
            text: (
              <Paragraph>
                Finally, I suggested we group the results based on data
                completeness which presented 2 main benefits:
                <br />
                1. Unaffeliated shops by default couldn’t be in the first group
                because their stock status was missing.
                <br />
                2. Shops with incomplete data would be pushed to the second
                encouraging them to complement missing data.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_COLUMNS,
          data: {
            items: [
              <>
                <ImageWithCaption
                  imageUrl={`${SETTINGS.MEDIA_BASE_URL}/before.png`}
                  imageAlt="Prices list, before"
                />
                <TitleAndText title="Before" h={4} isCentered>
                  <Paragraph>
                    A mixture of paying and non-paying customers. Sorting is
                    based on price only.
                  </Paragraph>
                </TitleAndText>
              </>,
              <>
                <ImageWithCaption
                  imageUrl={`${SETTINGS.MEDIA_BASE_URL}/after.png`}
                  imageAlt="Prices list, after"
                />
                <TitleAndText title="After" h={4} isCentered>
                  <Paragraph>
                    Recommended sorting in-place, non-paying shops grouped at
                    the bottoms. Users can still sort by price only if they
                    prefer.
                  </Paragraph>
                </TitleAndText>
              </>,
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
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
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
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            limitMaxWidth: true,
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/ab-test.png`,
            imageAlt: "AB test in action",
            caption: "AB test in action",
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
            bgColor: SETTINGS.BG_COLOR,
            results: [{ value: "5.7", description: "mil. increse in revenue" }],
            text: (
              <>
                <Paragraph large>
                  On top of the direct impact, this change is expected to{" "}
                  <strong>help onboard new customers</strong>. This is
                  especially true when expanding to new-markets and opens the
                  door for exploring new service offerings.
                </Paragraph>
                <Title h={4}>After thoughts: </Title>
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
          template: SECTION_ELEMENTS.FOOTER,
        },
      ],
    },
  ],
};
