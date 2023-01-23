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
// import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";

/* TODO: First attempt expectations vs reality... (implement as side by side content) */
/* TODO: "Problem" image test to see if its better as part of the first text box. */
/* TODO: Clean up the steps in the preview (based on the the other content) */
/* TODO: Add a slide about creating a design system (mostly a filler with some text above to explain why there is a missmatch) */
/* TODO: add missing results */
/* TODO: Add missing thumbnail */
/* TODO: This is a non-finished project. Finish it or remove. */
const SETTINGS = {
  BG_COLOR: "#FF3366",
  URL: "/cases/11",
  MEDIA_BASE_URL: "assets/case-11",
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
    CASE_YEAR: { label: "Year:", value: "2022" },
    CASE_DURATION: { label: "Duration:", value: "3 month" },
  },
};

export const CASE_11 = {
  caseStatus: CASE_STATUS.FEATURED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    overline: "Price Comparison Service",
    title: "Selling non-new products",
    text: <>Helping stores sell demo, refurbished, and used products</>,
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
              title: "Selling non-new products",
              text: (
                <Paragraph xxl>
                  Helping stores sell demo, refurbished, and used products
                </Paragraph>
              ),
            },
            fgImage: {
              imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-desktop.png`,
              mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-mobile.png`,
            },
            highlights: [
              SETTINGS.KEY_FIGURES.CASE_TYPE,
              SETTINGS.KEY_FIGURES.CASE_YEAR,
              SETTINGS.KEY_FIGURES.CASE_DURATION,
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
            title: <>The problem</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Today one of the leading categories is mobile phones.
                  Smartphones over the years have grown in both popularity and
                  cost and today the price of a new smartphone is higher than
                  ever with flagship smartphones costing upwards of 10 000sek.
                </Paragraph>
                <Paragraph>
                  Shops on the other hand have had an issue with selling demo,
                  refurbished, and used phones. In the Nordics, every purchase
                  is eligible by law to be returned for a full refund within 14
                  days. This means that shops have a lot of products that are
                  returned, hardly used but cannot be sold as “new”. Smartphones
                  are one of these categories where a lot of demo products can
                  be found.
                </Paragraph>
                <Paragraph>
                  Shops have good margins on these products and want to promote
                  and attract customers to buy them. Prisjakt on the other hand
                  wanted to capitalize on this without misleading the consumers.
                  Historically though, these products were included as part of
                  the regular product list with small icons to indicate that the
                  product is “not new”. These icons were not generally
                  understood or even noticed by users leading to frustration for
                  both users (that accidentally ended up on a used product) and
                  stores (that got traffic that never converted).
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/before.png`,
            imageAlt: "?",
            limitMaxWidth: true,
            caption: "Which one of the CDON offers is a used product?",
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
                  My goal was to lead more traffic to used and demo products,
                  increase clarity, and align users expectations. Reducing
                  missclicks means we increate the quality of traffic (more
                  likely to actually make a purchase) and redirect more valuable
                  traffic to the stores.
                </Paragraph>
                <Paragraph>
                  On top of that, refurbished products often have higer margins
                  which means that click price on those products can be higher
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Research",
      bgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Research</>,
            h: 2,
            text: (
              <>
                <Title h={4}>
                  Looking at user feedback and quarterly survey responses.
                </Title>
                <Paragraph>
                  Looking at user feedback it was an obvious pain point for the
                  users. The layout led to numerous users misclicking “demo”
                  products believing these were new. Leading complaints on the
                  site was that “used and demo products are sold as new” and
                  that the price history does not reflect the actual product
                  price as it is contaminated with “demo” and “refurbished”
                  products.
                </Paragraph>
                <Paragraph>
                  During the quarterly survey, a large share of the complaints
                  were related to “non-new” products and how they are displayed.
                </Paragraph>
                <Title h={4}>Qualitative research</Title>
                <Paragraph>
                  On top of that, as part of ongoing usability testings, we
                  asked participants to point out demo products. Not a single
                  participant managed to point these out.
                </Paragraph>
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
            title: <>Ideation and competitor analysis</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  At this point, it was obvious that we had a problem worth
                  solving. But it was not a unique problem. More or less every
                  marketplace and competitor was trying to do the same. I looked
                  at and evaluated how used products were sold by 17 leading
                  competitors in Europe.
                </Paragraph>
                <Title h={4}>Figuring out alternatives</Title>
                <Paragraph>
                  These ideas were then summarized and evaluated based on
                  feasibility, usability, and business potential. Feasibility
                  with the engineers on our team, business with the responsible
                  PM, and usability was evaluated based on best practices
                  (Published by Baymard Institute)
                </Paragraph>
                <Title h={4}>Addressing concerns</Title>
                <Paragraph>
                  There were some internal concerns in the organization. Namely,
                  how this aligns with the company’s values and how it might
                  impact their sustainability initiatives. As this was aligned
                  with both it was not a problem.
                </Paragraph>
                <Paragraph>
                  In fact, the solution encouraged the consumption of
                  refurbished products and reduced waste. It was basically a PR
                  win.
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
            title: <>Design</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  The new design needed to improve clarity for users (what
                  products am I looking at now?), and encourage users to buy
                  used products, all without adding to the clutter and risk
                  harming conversion rates.
                </Paragraph>

                <Title h={4}>Steps towards the right solution.</Title>
                <Paragraph>
                  The solution was actually rather simple. Firstly it was
                  obvious that we couldn’t mix new and used products in the same
                  bucket. So instead all non-new products were removed from the
                  general offers list.
                </Paragraph>
                <Paragraph>
                  As prices across the site reflected new products. We decided
                  to do the same even though non-new products existed and were
                  perhaps the cheapest. On top of that, the price history was
                  limited to account for new products only.
                </Paragraph>

                <Title h={4}>Introduce product condition as variant.</Title>
                <Paragraph>
                  Access to non-new products was then introduced as product
                  variants. Product variants traditionally refer to different
                  colors, and sizes, of things that are essentially the same.
                  Variants however can have different prices. Think iPhone with
                  64gb vs 256gb version. They are both iPhones but one costs
                  much more.
                </Paragraph>
                <Paragraph>
                  Variants are typically included as part of the product page
                  header and in this case, we wanted to encourage users to pick
                  “used” over “new”. We decided to include the cheapest offer
                  text (“From XXkr”) as part of the variant selection in order
                  to facilitate that.
                </Paragraph>
                <Paragraph>
                  new/used variants were only shown if a product had “used”
                  offers and were always the last variant on the list (in order
                  to allow for the general variants to co-exist)
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-1.png`,
                imageAlt:
                  "Step 1: First attempt at product condition as variant",
                title: "Step 1: First attempt at product condition as variant",
                text: (
                  <>
                    <Paragraph>
                      The solution was actually rather simple. Firstly it was
                      obvious that we couldn’t mix new and used products in the
                      same bucket. So instead all non-new products were removed
                      from the general offers list.
                    </Paragraph>
                    <Paragraph>
                      As prices across the site reflected new products. We
                      decided to do the same even though non-new products
                      existed and were perhaps the cheapest. On top of that, the
                      price history was limited to account for new products
                      only.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-2.png`,
                imageAlt: "Step 2: Reality check, constraints and concerns",
                title: "Step 2: Reality check, constraints and concerns",
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
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-3.png`,
                imageAlt: "Step 3: Adressing some concerns",
                title: "Step 3: Adressing some concerns",
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
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-4.png`,
                imageAlt: "Step 4: Exposing product condition as variant",
                title: "Step 4: Exposing product condition as variant",
                h: 4,
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
      header: "Testing",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Testing</>,
            h: 2,
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
            imageAlt: "?",
            limitMaxWidth: true,
            caption: "Conversion rate changes as measured in Optimizely",
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.RESULT,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result-desktop.png`,
            mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/result-mobile.png`,
            bgColor: SETTINGS.BG_COLOR,
            text: (
              <>
                <Paragraph large>
                  The new design showed a general conversion improvement of 2.8%
                  in relevant categories. Relevant categories were defined as
                  categories where we had “used”, “demo”, and “refurbished”
                  products.
                </Paragraph>
                <Paragraph>
                  On top of that, the new design led to an 8X increase in the
                  number of clicks on used products.
                </Paragraph>

                <Paragraph>
                  Last but not least, the perceived usefulness and usability
                  scores (UUP Score) for the page increased by 6.5%
                </Paragraph>
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
