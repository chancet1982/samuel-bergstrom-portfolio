/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";
import Note from "../Components/Shared/Note";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";

const SETTINGS = {
  BG_COLOR: "#abc0ce",
  URL: "/cases/13",
  MEDIA_BASE_URL: "assets/case-13",
  KEY_FIGURES: {
    CASE_TYPE: {
      label: CASE_TYPES.LABEL,
      value: [CASE_TYPES.PRODUCT_DISCOVERY],
    },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.MOBILE_ANDROID, PLATFORMS.MOBILE_IOS],
    },
    TOOLS_AND_METHODS: {
      label: TOOLS_AND_METHODS.LABEL,
      renderAsList: true,
      value: [
        TOOLS_AND_METHODS.COMPETITOR_ANALYSIS,
        TOOLS_AND_METHODS.FIELD_STUDIES,
        TOOLS_AND_METHODS.INTERVIEWS,
        TOOLS_AND_METHODS.WORKSHOPS,
        TOOLS_AND_METHODS.SURVEYS,
      ],
    },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.LEAD },
    CASE_YEAR: { label: "Year:", value: "2023" },
    CASE_DURATION: { label: "Duration:", value: "2 months" },
  },
};

export const CASE_13 = {
  caseStatus: CASE_STATUS.FEATURED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Restaurant wholesales",
      title: <>Wholesales, reimagined</>,
      text: (
        <Paragraph xxl>Creating a vision for restaurant wholesalers</Paragraph>
      ),
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
          template: SECTION_ELEMENTS.SECTION_HERO,
          data: {
            bgColor: SETTINGS.BG_COLOR,
            caption: {
              overline: "Restaurant wholesales",
              title: <>Wholesales, reimagined</>,
              h: 1,
              text: (
                <Paragraph xxl>A different take on resturant supply</Paragraph>
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
      paddedDown: true,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            text: (
              <Paragraph xl>
                Svensk Cater is one of the leading restaurant wholesalers in the
                Nordics. They have 16 offices and would go above and beyond to
                help their customers. However, low digital sales figures
                constrict their growth.
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      heaeder: "Challenge",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Challenge</>,
            text: (
              <Paragraph>
                We were asked to help them optimize their customer experience,
                Increase sales via digital channels, Reduce administration, and
                increase customer loyalty. The idea was to find areas that are
                worth investing in and where “digitalization” would not only be
                “trendy” but also valuable.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.FIVE_IMAGES_MIX_COLUMNS,
            isPadded: true,
            images: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-01.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-02.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-03.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-04.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-05.jpg`,
                imageAlt: "?",
              },
            ],
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      heaeder: "Solution",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Solution</>,
            text: (
              <>
                <Paragraph>
                  We started off approaching this as a pre-study, during which
                  we interviewed internal stakeholders. Investigated how they
                  are performing in the digital arena compared to the
                  competition and looked at their tech and infrastructure. We
                  sent out surveys internal and conducted external interviews
                  with restaurants.{" "}
                </Paragraph>
                <Paragraph>
                  The main idea was to try and identify areas where they can
                  with minimal investment both prove the value of digitalization
                  but also increase their own revenue.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      paddedUp: true,
      heaeder: "Research",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Surveys</>,
            text: (
              <Paragraph>
                We sent out 3 surveys to learn more about 3 areas and recruit
                stakeholders for future interviews.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/surveys.png`,
            imageAlt: "result",
            limitMaxWidth: true,
          },
        },
        {
          template: SECTION_ELEMENTS.KEY_FIGURES,
          data: {
            items: [
              {
                value: "67",
                label: "Respondents from Sales",
              },
              { value: "30", label: "Respondents from Logistics" },
              {
                value: "17",
                label: "Respondents from Delivery",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            isFullScreen: true,
            bgMedia: {
              type: BG_MEDIA_TYPES.IMAGE,
              mediaUrl: `${SETTINGS.MEDIA_BASE_URL}/quote-bg.jpg`,
            },
            quote:
              "Jag väljer den leverantör jag litar på. Om jag inte får mina varor, vad ska jag säga till mina kunder?",
            cite: "Owner, Swedish Express, Lund",
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      bgColor: "#ffffff",
      header: "insights",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Insights</>,
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/survey.jpeg`,
                imageAlt: "Employees & Customers",
                title: "Employees & Customers",
                text: (
                  <>
                    <Paragraph>
                      Svensk Cater had some room for improvement. Their online
                      store had very high bounce rates and no analytics.
                      Products were hard to find, Stock status was only
                      indicatory only, which means that when ordering online, no
                      order was sent for several hours leading to partial
                      deliveries and customer frustration.
                    </Paragraph>
                    <Paragraph>
                      This, in turn, led to growing customer frustration, and
                      increased workload for logistics, drivers, and customer
                      support. Simply put, customers would prefer calling
                      salespeople instead of using the webshop on their own.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/competitor-1.jpg`,
                imageAlt: "Competitors",
                title: "Competitors",
                text: (
                  <>
                    <Paragraph>
                      Looking at the competition, the gaps were even more clear.
                      Competitors such as Menigo and Matin & Servera were
                      investing heavily in digitalization and already shifted
                      most of their sales to digital channels. Each offered its
                      set of tools for inventorying, cost calculations,
                      advertising, and apps.
                    </Paragraph>
                    <Paragraph>
                      Interestingly enough though, none integrated all these
                      services into a cohesive experience. So a restaurant would
                      inventory in one app, then order online using the webshop
                      or an app, and then use a different app would follow up on
                      the deliveries.
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
      header: "Design",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Design</>,
            text: (
              <Paragraph>
                When tasked with using this knowledge to create a vision for
                Svensk Cater, it was obvious. We needed to show what would be
                possible in order to justify an investment, digital isn‘t cheap
                and it‘s never “finished”.
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
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/customer-journey.jpg`,
            imageAlt: "customer-journey",
            limitMaxWidth: true,
          },
        },
        /* {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/flows.jpg`,
            imageAlt: "flows",
            limitMaxWidth: true,
          },
        }, */
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            text: (
              <Note>
                <Paragraph>
                  I believe the best way forward for them would have been to
                  improve their online shopping experience. There were some
                  simple fixes that had a potentially huge impact on their
                  business but we needed to walk before we could run and needed
                  to gain the client’s trust before we can partner up.
                </Paragraph>
              </Note>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_LARGE,
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-1.jpg`,
                imageAlt: "Recipes, not ingredients",
                title: "Recipes, not ingredients",
                text: (
                  <>
                    <Paragraph>
                      In one of my early discussions with their marketing team,
                      they mentioned that they are producing catalogs to send to
                      their clients. In these, they inform of sales and offers
                      and inspire with different recipes.
                    </Paragraph>
                    <Paragraph>
                      This led me to think, why can’t I order directly from the
                      catalog? We should offer a vision where everything is
                      integrated. Recipes are being sent and stored digitally.
                      Already in place with cost calculators, and a possibility
                      for ordering.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-2.jpg`,
                imageAlt: "Integrated calculators",
                title: "Integrated calculators",
                text: (
                  <Paragraph>
                    Instead of having complex calculators, where users need to
                    input their ingredients to get a cost projection. It makes
                    more sense to integrate those into the client’s own recipes
                    (or ones provided by svensk cater) and work with portions.
                    So each serving has a cost based on its ingredients. Making
                    them must simpler to use and much more relevant.
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-3.jpg`,
                imageAlt: "Order tracking & invoice handling.",
                title: "Order tracking & invoice handling.",
                text: (
                  <Paragraph>
                    Follow your orders from purchase to delivery and beyond.
                    Helping customers understand where their delivery is would
                    reduce uncertainty and in turn calls to customer support.
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
      heaeder: "Result",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            text: (
              <Paragraph xl>
                The proposed vision was presented to the board, where it was
                accepted. Following this, the funding for future digitalization
                initiatives was secured and development started.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result.png`,
            imageAlt: "result",
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
