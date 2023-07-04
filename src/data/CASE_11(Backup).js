/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import Title from "../Components/Shared/Title";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import Note from "../Components/Shared/Note";
import List from "../Components/Shared/List";
import Span from "../Components/Shared/Span";
import Highlights from "../Components/Section_Elements/Cover/Highlights";

/* TODO: Add a slide about creating a design system (mostly a filler with some text above to explain why there is a missmatch) */
const SETTINGS = {
  BG_COLOR: "#FFB100",
  URL: "/cases/11",
  MEDIA_BASE_URL: "assets/case-11",
  HIGHLIGHTS: {
    CASE_TYPE: {
      label: CASE_TYPES.LABEL,
      value: CASE_TYPES.IMPROVING_EXISTING_SERVICE,
    },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.CONSULTANT },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.DESKTOP, PLATFORMS.TABLET, PLATFORMS.MOBILE],
    },
    CASE_YEAR: { label: "Year:", value: "2022" },
    CASE_DURATION: { label: "Duration:", value: "3 month" },
    TOOLS_AND_METHODS: {
      label: TOOLS_AND_METHODS.LABEL,
      value: [
        TOOLS_AND_METHODS.SURVEYS,
        TOOLS_AND_METHODS.WEB_ANALYTICS,
        TOOLS_AND_METHODS.FUNNEL_ANALYSIS,
        TOOLS_AND_METHODS.USABILITY_TESTING,
        TOOLS_AND_METHODS.AB_TESTING,
      ],
    },
  },
};

const highlights = [
  SETTINGS.HIGHLIGHTS.CASE_YEAR,
  SETTINGS.HIGHLIGHTS.CASE_TYPE,
  SETTINGS.HIGHLIGHTS.CASE_PLATFORMS,
  SETTINGS.HIGHLIGHTS.TOOLS_AND_METHODS,
];

export const CASE_11 = {
  caseStatus: CASE_STATUS.FEATURED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Price Comparison Service",
      title: (
        <>
          Non-new <br /> products.
        </>
      ),
      text: (
        <Paragraph xxl>
          Helping stores sell demo, <br /> refurbished, and used products
        </Paragraph>
      ),
    },
    fgImage: {
      imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-desktop.png`,
      mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-mobile.png`,
    },
  },
  details: [
    {
      navBgColor: SETTINGS.BG_COLOR,
      bgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            overline: "Price Comparison Service",
            title: <>Selling Non-new products.</>,
            h: 1,
            isSticky: true,
            isFullScreen: true,
            isCentered: true,
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-desktop.png`,
            isPadded: true,
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            bgColor: SETTINGS.BG_COLOR,
            text: (
              <>
                <Paragraph xxl>
                  Helping stores sell demo, refurbished, and used products
                </Paragraph>
                <Highlights items={highlights} />
              </>
            ),
            isFullScreen: true,
          },
        },

        /* {
          template: SECTION_ELEMENTS.COVER,
          data: {
            caption: {
              overline: "Price Comparison Service",
              title: (
                <>
                  Non-new <br /> products.
                </>
              ),
              text: (
                <Paragraph xxl>
                  Helping stores sell demo, <br /> refurbished, and used
                  products
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
        }, */
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
                Prisjakt’s growth stagnated. Prisjakt’s main revenue originates
                from click-outs where different categories have different CPC.
              </Paragraph>
            ),
            toolsAndMethods: [
              TOOLS_AND_METHODS.SURVEYS,
              TOOLS_AND_METHODS.WEB_ANALYTICS,
              TOOLS_AND_METHODS.FUNNEL_ANALYSIS,
              TOOLS_AND_METHODS.USABILITY_TESTING,
              TOOLS_AND_METHODS.AB_TESTING,
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
            title: <>Selling used products is big business</>,
            text: (
              <>
                <Paragraph>
                  One of the leading categories on the site is mobile phones.
                  Mobile phones, particularly smartphones, have become
                  increasingly popular and expensive, with flagship models now
                  costing upwards of 10,000 SEK. Due to the EU laws, customers
                  can return purchased items for a full refund within 14 days
                  leaving shops with many returned products that cannot be sold
                  as new, including smartphones.
                </Paragraph>
                <Paragraph>
                  Shops have good margins on these products and want to promote
                  and attract customers to buy them. Prisjakt on the other hand
                  wanted to capitalize on this without misleading the consumers.
                  Historically though, these products were included as part of
                  the regular product list with small icons to indicate that the
                  product is “not new”.
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
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/initial-used-product.png`,
            limitMaxWidth: true,
            isPadded: true,
            imageAlt:
              "A picture of the tiny icon that indicated used products in the product page",
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Not the optimal solution</>,
            h: 3,
            text: (
              <Paragraph>
                Using icons that are <strong>easy to miss</strong>. and{" "}
                <strong>hard to understand</strong> meant some users clicked
                them accidently. On top of that, treating all different product
                conditions as one{" "}
                <strong>contaminated the price history</strong> and triggered{" "}
                <strong>false price alerts</strong>. This was frustrating for
                users who did not intend to buy used products and clicked them
                by mistake, as well as for stores that paid for traffic that was
                unlikely to convert.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/problem.png`,
            limitMaxWidth: true,
            imageAlt: "Which one of the CDON offers is a used product?",
            caption: "Which one of the CDON offers is a used product?",
            isPadded: true,
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Driving traffic to non-new products.</>,
            h: 3,
            text: (
              <Paragraph>
                My goal was to lead more traffic to refurbished, used and demo
                products. These products often have higer margins and are
                typically found in popular categories so they can have a very
                high CPC. In order to charge more, we needed to ensure quality
                traffic. I.E. traffic that is likely to purchase.{" "}
                <strong>
                  Users needed to choose non-new products, not arrive to demo
                  products by chance.
                </strong>
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      marginUp: true,
      marginDown: true,
      sectionTitle: "Research",
      isCentered: true,
      bgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "In-app feedback",
            isCentered: true,
            h: 4,
            text: (
              <Paragraph>
                Looking at user feedback it was an obvious pain point for the
                users. The layout led to numerous users misclicking “demo”
                products believing these were new. Leading complaints on the
                site was that “used and demo products are sold as new” and that
                the price history does not reflect the actual product price as
                it is contaminated with “demo” and “refurbished” products. In
                fact, during the quarterly survey, one of the most common
                complaints were related to“non-new” products.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/bad-reviews.png`,
            imageAlt: "Some of the online reviews",
            limitMaxWidth: true,
            isPadded: true,
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "Qualitative research",
            isCentered: true,
            h: 4,
            text: (
              <Paragraph large>
                We asked participants to point out demo products in our
                usability tests.
                <br />
                <strong>
                  Not a single participant managed to point these out.
                </strong>
              </Paragraph>
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
            title: <>Heuristics and competitors</>,
            text: (
              <Paragraph>
                At this point, we had a problem worth solving just not how to
                solve it. Best practices from both NNg and Baymard pointed at
                implementing product condition as variant. Our competitors
                either implemented it as variant or focused on new products
                only. Looking at marketplaces, all 3 leading marketplaces in
                Europe implemented product condition as variant. However, due to
                technical debt, product variants were not feasable.
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
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/spreadsheets.png`,
            limitMaxWidth: true,
            imageAlt: "?",
            isPadded: true,
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
            title: <>Design</>,
            text: (
              <>
                <Paragraph>
                  The new design needed to improve clarity for users (what
                  products am I looking at now?), and encourage users to buy
                  used products, all without adding to the clutter and risk
                  harming conversion rates.
                </Paragraph>

                <Title h={4}>Step 1: Splitting the lists</Title>
                <Paragraph>
                  It was obvous that we couldn’t mix new and used products in
                  the same bucket. All non-new products were moved to a
                  dedicated list.
                </Paragraph>
                <Title h={4}>Step 2: Aligning prices</Title>
                <Paragraph>
                  It was important to ensure that the price shown across the
                  site is consistent. We decided to use the cheapest “new”
                  product price throughout the site even if cheaper “used“
                  products existed. On top of that, the price history was
                  limited to account for new products only.
                </Paragraph>
                <Title h={4}>
                  Step 3: Introducing product condition as variant
                </Title>
                <Paragraph>
                  Now that we had 2 lists, we needed a way to switch between
                  them. Following Amazon’s example, we decided to introduce the
                  switcher in the same way we handled variants. Variants are
                  typically included as part of the product page header. We
                  added the product condition switcher above existing variants
                  and made it visible only when used offers existed. We wanted
                  to nudge users towards used products so we included the
                  cheapest offer price (“From XXkr”) as part of the switcher.
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
                imageAlt: "Expectation",
                title: "Expectation",
                isCentered: true,
                text: (
                  <Paragraph>
                    Product variants typically are placed as part of the product
                    header. So our initial idea was to add the product condition
                    to the header.
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/after.png`,
                imageAlt: "Reality",
                title: "Reality",
                isCentered: true,
                text: (
                  <Paragraph>
                    Due to technical constraints (at that time, the product page
                    was in fact 4 separate pages), we had to temporarly place
                    the product condition switcher under the tabs which is not
                    optimal.
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
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-4.png`,
                imageAlt: "Exposing the variant selector as intended",
                title: "Exposing the variant selector as intended",
                h: 4,
                text: (
                  <>
                    <Paragraph>
                      After moving to a long page layout, the 4 pages were now 1
                      page. This allowed us to move the variant selector to
                      where it was originally intended.
                    </Paragraph>
                    <Paragraph>
                      In order to address concerns that pushing the offerlist
                      down will harm convertions. We aimed to minimize the shift
                      by moving the ratings, rank and some of the buttons. Once
                      in place we could start testing if it had the desired
                      affect.
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
      header: "Testing",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Testing</>,
            text: (
              <>
                <Paragraph>
                  In order to test the new design, we started off by conducting
                  a usability test to ensure we addressed the usability issues.
                  All participants were able to find non-new products and the
                  feedback was very positive.
                </Paragraph>
                <Paragraph>
                  Once implemented, we conducted an A/B test to test the impact
                  before releasing this change. The test was limited to the
                  “Smartphones” category and ran for 2 weeks. Data was collected
                  from about 250 000 sessions after which we could conclude that
                  the new design was far better than the benchmark.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/testing.png`,
            limitMaxWidth: true,
            isPadded: true,
            imageAlt: "?",
            caption: "Conversion rate changes as measured in Optimizely",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            text: (
              <Note>
                <Paragraph>
                  <strong>A/B test tooling is often missleading.</strong> It
                  accounts for all sessions and often would results in a watered
                  down result. In order get a real result you need to use other
                  tools (In this case Amplitude) so that we could limit the
                  scope to only account for sessions that clicked out after
                  watching the product page in mobile phone category, where used
                  products existed.
                </Paragraph>
              </Note>
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
                value: "+2.8%",
                description: "Conversion increase *",
              },
              {
                value: "8X",
                description: "Clickouts on non-new products",
              },
              {
                value: "+6.3%",
                description: "increase in UUP Score **",
              },
            ],
            text: (
              <>
                <List
                  items={[
                    <Span small>* in relevant categories.</Span>,
                    <Span small>
                      ** perceived usefulness and usability scores
                    </Span>,
                  ]}
                />
                <Title h={3}>Reflections</Title>
                <Paragraph>
                  This was one of those rare times when doing the right thing
                  for users, businesses, and the environment actually happened.
                  We achieved our goal, generated extra revenue for Prisjakt,
                  and made some headlines “Prisjakt now makes it easier to find
                  and buy used products” was my favorite
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
