/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import TitleAndText from "../Components/Shared/TitleAndText";
import List from "../Components/Shared/List";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import Title from "../Components/Shared/Title";

/* TODO: This is a non-finished project. Finish it or remove. */
const SETTINGS = {
  BG_COLOR: "#FF3366",
  URL: "/cases/12",
  MEDIA_BASE_URL: "assets/case-12",
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
    CASE_DURATION: { label: "Duration:", value: "12 months" },
  },
};

export const CASE_9 = {
  caseStatus: CASE_STATUS.DRAFT,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    overline: "Price Comparison Service",
    title: "North star metrics",
    text: <>Predicting future success using product sentiment</>,
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
              title: (
                <>
                  Invisible
                  <br /> redesign
                </>
              ),
              text: (
                <Paragraph xxl>
                  Creating a shortcut between users and products
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
            title: "Finding a needle in a stack of needles",
            text: (
              <>
                <Paragraph>
                  All price comparison sites have one declared purpose: Finding
                  a product I want, from a shop I trust, for the cheapest price
                  possible. The search functionality plays a crusial role in
                  finding products. This is even more true when trying to look
                  through millions of products. As users are more search
                  inclined the larger the product catalogue gets.
                </Paragraph>
                <Paragraph>
                  Search was problematic. The search suggestions did not reflect
                  the search results, search results page had many broken
                  features, and the search accuracy was low. This led to many
                  users abandoning the site and potential revenues lost.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "A proof of concept",
            text: (
              <Paragraph>
                Search is complex. and the manually tweaking the parameters was
                not having an impact. Buying off-the-shelf solutions for such
                large catalogue is expensive and dependent on data quality. So
                improving search success is no simple feat. I was asked to
                assist and evaluate their search experience and evaluate
                potential ROI for investing in the online search.
              </Paragraph>
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
            title: (
              <>Identifying strengths and weaknesses in data collection.</>
            ),
            text: (
              <Paragraph>
                My client already had a solid data collection infrastructure.
                From Analytics, Usage statistics, support cases that are
                documented and tagged. This however provides an incomplete
                picture Analytics and usage statistics provide valuable insights
                for what users do but not to why(!) they do it. On top of that,
                the support cases (and various forums) are inherently biased as
                they only represent ’frustrated users’ or ’power users’. In
                order for me to get a better picture of the problem, I suggested
                sending an open survey and promoting it on social media. The
                survey was designed to answer 3 main questions:
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.KEY_FIGURES,
          data: {
            items: [
              { value: "1", label: "When do people compare prices?" },
              { value: "2", label: "What works well?" },
              { value: "3", label: "What needs to be improved?" },
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
                  cross-referencing it with our jobs-to-be-done indicated that
                  there are 2 jobs that are critical:
                </Paragraph>
                <List
                  items={[
                    <TitleAndText title="Find the right product:" h={5}>
                      <Paragraph>
                        Users must be able to find products in order to convert.
                      </Paragraph>
                    </TitleAndText>,
                    <TitleAndText title="Find the right shop:" h={5}>
                      <Paragraph>
                        Once users know what products they are interested in
                        they need to be able to find a shop that sells these
                        products.
                      </Paragraph>
                    </TitleAndText>,
                  ]}
                />
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            bgColor: SETTINGS.BG_COLOR,
            title: <>Problem areas</>,
            flip: true,
            text: (
              <>
                <Paragraph>
                  Looking at the survey results, I noticed that there are 2
                  leading sources of complaints:
                </Paragraph>
                <List
                  items={[
                    <TitleAndText title="Bad actors" h={5}>
                      <Paragraph>
                        Shops that abuse the system, publishing fake prices,
                        misleading stock, and delivery terms.
                      </Paragraph>
                    </TitleAndText>,
                    <TitleAndText title="search" h={5}>
                      <Paragraph>
                        Users can’t seem to find what they are looking for on
                        the service.
                      </Paragraph>
                    </TitleAndText>,
                  ]}
                />
              </>
            ),
            imageAlt: "Survey results, search indicated in green.",
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/survey.png`,
          },
        },
        {
          template: SECTION_ELEMENTS.KEY_FIGURES,
          data: {
            items: [
              { value: "2 500+", label: "Responses" },
              { value: "2256", label: "Mapped insights" },
              { value: "178", label: "Wanted to improve search" },
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
            title: <>How can we improve search?</>,
            text: (
              <Paragraph>
                Understanding what the problem is, is a good first step. We had
                limited time and resources and needed to find an idea that is
                easy to implement and that had the best potential.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            isCentered: true,
            listTitle: "What has the most potential? Before, during, or after?",
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/before-search.png`,
                imageAlt: "before searching",
                title: "Before searching",
                text: (
                  <Paragraph>
                    We could make the search more prominent in the UI or show
                    past searches to allow users to pick up where they left off.
                    This would be the right move if we had data to support a
                    discoverability problem with the search functionality.
                    Looking at Amplitude it was apparent that this isn’t the
                    problem. Most users on-site prefer searching and 78% of the
                    users on the landing page use the functionality.
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/while-searching.png`,
                imageAlt: "while searching",
                title: "During search",
                text: (
                  <Paragraph>
                    We could show better suggestions and provide better guidance
                    for users. This would be appropriate if we could see a long
                    time spent before moving to the next page or if users erased
                    their query and retyped it. Looking at Amplitude it was
                    evident that most users actually only spend a very short
                    time focused on the search field. Most users dont even click
                    on any of the suggestionss and most searches end on the
                    search results page.
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/search-results.png`,
                imageAlt: "after searching",
                title: "After searching",
                text: (
                  <Paragraph>
                    After searching users see the search results page. There we
                    saw a xl dropoff of about 60%. Still, at this point, we only
                    know that the search results page is failing, not why. So I
                    needed to look for some qualitative data to evaluate what
                    seems to be the problem.
                  </Paragraph>
                ),
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Adding some qualitative data to the mix</>,
            text: (
              <>
                <Paragraph>
                  I decided to conduct usability tests to see how people search
                  for products online, the premise was simple. “Your partner has
                  a birthday and you want to buy him something up to 1500kr, can
                  you choose something he likes (where you have limited
                  knowledge) and show me how you would do that?”
                </Paragraph>

                <Paragraph>
                  We recruited 9 participants and conducted the testing
                  remotely.
                </Paragraph>
              </>
            ),
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/usability-test.png`,
            imageAlt: "Picture from usability testing.",
          },
        },
        {
          template: SECTION_ELEMENTS.INSIGHTS,
          data: {
            bgColor: SETTINGS.BG_COLOR,
            title: <>Insights</>,
            items: [
              {
                title: "Every search starts with Google",
                text: "Most users started their search on Google. Most ended up looking at on my client’s site only after they had a clear idea of the product they want to buy. But for those that tried, it was an uphill battle.",
              },
              {
                title: "Search over on-site navigation",
                text: "No one had trouble finding the search functionality. In general, only one of the participants preferred using on-site navigation.",
              },
              {
                title: "Search suggestions add little value",
                text: "Search suggestions were of no use either. Most participants just typed a query and pressed “enter” leading them to the search results page.",
              },
              {
                title: "Search results page needs an overhaul",
                text: "There were obvious flaws with the search results page. Users couldn’t proceed to look at product categories. Product pictures were too small. Filtering the search options was buggy and most participants just gave up at this point.",
              },
              {
                title: "Not many users succeed",
                text: " Of all the participants only one was able to find a present for their partner using my client’s site",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>A moment of inspiration</>,
            text: (
              <>
                <Paragraph>
                  A logical place to start would be the search results page. But
                  it was not technically feasible to fix all the issues there
                  within a reasonable time. Instead, we needed something to
                  prove the potential in fixing the search. All seemed lost
                  until something happened.
                </Paragraph>
                <Title h={3}>Finding a needle in a haystack</Title>
                <Paragraph>
                  I was looking through the search logs trying to identify
                  themes. I soon realized it was an unrealistic mission as we
                  are talking about over 2 million searches a month. But I
                  decided to export the data and looked through the most popular
                  searches. I noticed that 77.5% of the searches could be
                  manually mapped to existing products. Then it hit me:
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            bgMedia: {
              mediaUrl: `${SETTINGS.MEDIA_BASE_URL}/quote-bg.jpg`,
            },
            quote:
              "We cant fix the search results page, but what if we can bypass it?",
            cite: "Me (being sneaky)",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Plan set in motion</>,
            text: (
              <>
                <Paragraph>
                  If we could manually map popular search queries and make sure
                  users are being transported directly to their destination?
                  Kind of like Google’s “I’m feeling lucky” search. We would
                  still need to of course avoid vague keywords but the potential
                  was xl
                </Paragraph>
                <Paragraph>
                  Based on a small calculation I made the potential increase in
                  revenue would be massive,{" "}
                  <strong>2.8 million kr annually</strong>
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
            title: <>Is it feasible?</>,
            text: (
              <>
                <Paragraph>
                  Sharing this with the team. Everyone was excited. It was
                  simple, elegant, and would show if nothing more what potential
                  revenue we have for improving the search (which in turn means
                  resources)
                </Paragraph>
                <Paragraph>
                  It only required a small change, namely adding an option in
                  the search suggestions. Clicking that option would lead users
                  to the “best match” we have. As most users press “ENTER” this
                  should in theory worked fine.
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
                imageAlt: "Search suggestions, before",
                title: "Search suggestions, before",
                text: (
                  <Paragraph>
                    Pressing “ENTER” would lead users to the search results
                    page.
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/after.png`,
                imageAlt: "Search suggestions after",
                title: "Search suggestions after",
                text: (
                  <Paragraph>
                    Search suggestions with the new option added. Pressing
                    “ENTER” (on specific popular keywords) would lead users
                    directly to the product page.
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
            text: (
              <>
                <Paragraph>
                  We set up an A/B test using a 50/50 split on all searches. We
                  collected data and the experiment ran for 23 days before
                  shutting it down.
                </Paragraph>
                <Paragraph>
                  Eventually, 268 000 users were exposed to the experiment. Not
                  surprising, manually mapping outperformed the normal search
                  behaviors and we’ve seen an increase of between 1% to 3% in
                  general conversion.
                </Paragraph>
              </>
            ),
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/ab-test.png`,
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
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result.png`,
            bgColor: SETTINGS.BG_COLOR,
            text: (
              <>
                <Paragraph large>
                  A 1% increase in conversion is worth about 2.8 mil. kr
                  annually. A potential increase of 1% to 3% secured resources
                  to shift the focus into improving the search on the service.
                </Paragraph>
                <Title h={3}>After thoughts: </Title>
                <Paragraph>
                  This wasn’t about creating a sustainable/maintainable
                  solution. It was about showing the potential of a good search
                  on the bottom line. As such it worked perfectly but it is not
                  a good solution, if not maintained it can become stale and
                  eventually harm conversions.
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
