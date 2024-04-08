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
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";
import colors from "../theme/colors";

const SETTINGS = {
  BG_COLOR: colors.offwhite,
  URL: "/cases/9",
  MEDIA_BASE_URL: "assets/case-9",
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
        TOOLS_AND_METHODS.SURVEYS,
        TOOLS_AND_METHODS.WEB_ANALYTICS,
        TOOLS_AND_METHODS.FUNNEL_ANALYSIS,
        TOOLS_AND_METHODS.USABILITY_TESTING,
        TOOLS_AND_METHODS.AB_TESTING,
      ],
    },
    CASE_YEAR: { label: "Year:", value: "2021" },
    CASE_DURATION: { label: "Duration:", value: "1 month" },
  },
};

export const CASE_9 = {
  caseStatus: CASE_STATUS.FEATURED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Price Comparison Service",
      title: <>Invisible redesign</>,
      text: <>Making the case for investing in search</>,
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
              title: <>Invisible redesign</>,
              h: 1,
              text: (
                <Paragraph xl>
                  Making the case for investing in search
                </Paragraph>
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
              <Paragraph xl>
                Prisjakt started off by catering to computer enthusiasts and was
                one of the first price comparison sites in the Nordics. It is
                still the leading price comparison service but in recent years
                Prisjakt’s growth stagnated. Prisjakt’s main revenue originates
                from click-outs where different categories have different CPC.
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      header: "Background",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Searching +2 Mil. products is hard",
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
                <Title h={4}>Search is broken</Title>
                <Paragraph>
                  Testing the search myself, I was shocked. Search suggestions
                  did not reflect the search results. Search results page had
                  many broken features and the overall search accuracy was low.
                  It wasn’t just my poor search skills. Users were complaining
                  on forums, support, in surveys, and in usability tests
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/problem.png`,
            imageAlt: "Some recordings from the usability testing",
            caption: "Some recordings from the usability testing",
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "A better search is a HUGE invetment",
            h: 4,
            text: (
              <Paragraph>
                Search is complex. Manually tweaking search parameters was slow
                and ineffective. Buying off-the-shelf solutions for such large
                catalogue is expensive and dependent on data quality. So
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
      paddedUp: true,
      header: "Research",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Reviewing what we know</>,
            text: (
              <>
                <Paragraph>
                  Wokring on a popular B2C product has its perks. User input is
                  not hard to come by. I started off by looking at all the
                  different sources to understand how people search, where we
                  fail and what can be done differently. Looking at online
                  forums, support tickets, and survey results confirmed that
                  search isnt working
                </Paragraph>
                <Title h={4}>Seeing is believing</Title>
                <Paragraph>
                  I decided to conduct usability tests to see how people search
                  for products online, the premise was simple. “Your partner has
                  a birthday and you want to buy him something up to 1500kr, can
                  you choose something he likes (where you have limited
                  knowledge) and show me how you would do that?”. We recruited 9
                  participants and conducted the testing remotely.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      marginUp: true,
      marginDown: true,
      bgColor: SETTINGS.BG_COLOR,
      sectionTitle: <>Insights</>,
      isCentered: true,
      elements: [
        {
          template: SECTION_ELEMENTS.INSIGHTS,
          data: {
            bgColor: SETTINGS.BG_COLOR,
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
      ],
    },
    {
      header: "Ideation",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Considering our options</>,
            text: (
              <Paragraph>
                Searching in itself is a process. Finding the searchbox,
                focusing on it, typing, correcting typos while typing, reviewing
                suggestions, and if nothing else worked digging deeper in a list
                of results trying to narrow down on the result that is nearest
                to what you were looking for. So where do we start?
              </Paragraph>
            ),
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
      ],
    },
    {
      paddedUp: true,
      header: "Design",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>A moment of inspiration</>,
            text: (
              <Paragraph>
                A logical place to start would be the search results page. But
                it was not technically feasible to fix all the issues there
                within a reasonable time. Instead, we needed something to prove
                the potential in fixing the search. All seemed lost until
                something happened.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Eureka!",
            h: 4,
            text: (
              <Paragraph>
                I was looking through the search logs trying to identify themes.
                I soon realized it was an unrealistic mission as we are talking
                about over 2 million searches a month. But I decided to export
                the data and looked through the most popular searches. Then it
                hit me:
              </Paragraph>
            ),
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
              "77.5% of the searches could be manually mapped to existing products!",
            cite: "Me (being sneaky)",
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Plan set in motion</>,
            h: 4,
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
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Is it feasible?</>,
            h: 4,
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
          template: SECTION_ELEMENTS.COLUMNS,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/before.png`,
                imageAlt: "Before",
                title: "Before",
                isCentered: true,
                text: (
                  <Paragraph>
                    Pressing “ENTER” would lead users to the search results
                    page.
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/after.png`,
                imageAlt: "After",
                title: "After",
                isCentered: true,
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
      paddedUp: true,
      paddedDown: true,
      header: "Validation",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
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
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/ab-test.png`,
            limitMaxWidth: true,
            imageAlt: "AB Testing result",
            caption: "AB Testing result",
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
            text: (
              <>
                <Paragraph large>
                  A 1% increase in conversion is worth about 2.8 mil. kr
                  annually. A potential increase of 1% to 3% secured resources
                  to shift the focus into improving the search on the service.
                </Paragraph>
                <Title h={4}>After thoughts: </Title>
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
          template: SECTION_ELEMENTS.FOOTER,
        },
      ],
    },
  ],
};
