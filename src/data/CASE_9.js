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
import Title from "../Components/Elements/Title";
import colors from "../theme/colors";

/* there is an IMAGE_WITH_CAPTION here that is wrong. */
export const CASE_9 = {
  caseStatus: CASE_STATUS.FEATURED,
  caseType: CASE_TYPES.CONCEPT,
  caseUrl: "/cases/9",
  thumbnail: {
    overline: "Prisjakt",
    title: "e-commerce",
    imageUrl: "assets/case-9/thumbnail.png",
    imageAlt: "thumbnail",
    text: "Improving search experience",
    bgColor: "#00ADDB",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Prisjakt",
            title: "Improving search experience",
            imageUrl: "assets/case-9/cover.png",
            text: (
              <>
                <Paragraph large>
                  Or, how to make millions of without moving a PX
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
                Prisjakt is a leading price comparison site operating in 6
                different countries. Prisjakt was couldnt reach the growth they
                expected. I was asked to assist and evaluate their search
                experience and to come up with quick fixes to increase search
                success.
              </Paragraph>
            ),
            myRole: ROLES.CONSULTANT,
            duration: "4 weeks",
            platforms: [PLATFORMS.MOBILE_ANDROID, PLATFORMS.MOBILE_IOS],
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
      header: "Research",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: (
              <>Identifying strengths and weaknesses in data-collection.</>
            ),
            text: (
              <>
                <Paragraph>
                  Prisjakt has a solid data collection infrastructure. From
                  Analytics, Usage statistics, support cases that are documented
                  and tagged. This however provides an incomplete picture
                  Analytics and usage statistics provide valueable insights for
                  what users do but not to why(!) they do it. On top of that,
                  the support cases (and various forums) are inherently biased
                  as they only represent ’frustrated users’ or ’power users’. In
                  order for me to get a better picture of the problem I
                  suggested sending an open survey and promoting it on social
                  media. The survey was designed to answer 3 main questions:
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.KEY_FIGURES,
          data: {
            items: [
              { value: 1, description: "when do people compare prices" },
              { value: 2, description: "what works well" },
              { value: 3, description: "what needs to be improved" },
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
                  cross referncing it with our jobs-to-be-done indicated that
                  there are 2 jobs that are critical:
                </Paragraph>
                <List
                  items={[
                    <>
                      <Title h={5}>Find the right product:</Title>
                      <Paragraph>
                        Users must be able to find product in order to convert.
                      </Paragraph>
                    </>,
                    <>
                      <Title h={5}>Find the right shop:</Title>
                      <Paragraph>
                        Once users know what products they are interested in
                        they need to be able to find a shop that sells these
                        products.
                      </Paragraph>
                    </>,
                  ]}
                />
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            bgColor: "#00ADDB",
            title: <>Problem areas</>,
            h: 2,
            flip: true,
            text: (
              <>
                <Paragraph>
                  Looking at the survey results, I noticed that there are 2
                  leading source of complaints:
                </Paragraph>
                <List
                  items={[
                    <>
                      <Title h={5}>Bad actors</Title>
                      <Paragraph>
                        Shops that abuse the system, publishing fake prices,
                        misleading stock and delivery terms.
                      </Paragraph>
                    </>,
                    <>
                      <Title h={5}>Search</Title>
                      <Paragraph>
                        Users cant seem to find what they are looking for on
                        prisjakt.
                      </Paragraph>
                    </>,
                  ]}
                />
              </>
            ),
            imageAlt: "Survey results, search indicated in green.",
            imageUrl: "assets/case-9/survey.png",
          },
        },
        {
          template: SECTION_ELEMENTS.KEY_FIGURES,
          data: {
            items: [
              { value: "2 500+", description: "responses" },
              { value: "2256", description: "mapped insights" },
              { value: "178", description: "wanted to improve search" },
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
              <>
                <Paragraph>
                  Understanding what the problem is, is a good first step. We
                  had limited time and resources and needed find an idea that is
                  easy to implement and that had the best potential.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            listBgColor: colors.offwhite,
            listTitle: "What has the most potential? Before, during, or after?",
            items: [
              {
                imageUrl: "assets/case-9/before-search.png",
                imageAlt: "before searching",
                title: "Before searching",
                text: (
                  <>
                    <Paragraph>
                      Before search we could make the search more prominant in
                      the UI or show past searches to allow users to pick up
                      where they left off. This would be the right move, if we
                      had data to support a discoverability problem with the
                      search functionality. Looking at Amplitude it was apparent
                      that this isnt the problem. Most users on site prefer
                      searching and 78% of the users on the landing page use the
                      functionality.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-9/while-searching.png",
                imageAlt: "while searching",
                title: "During search",
                text: (
                  <>
                    <Paragraph>
                      During search we can show better suggestions and provide
                      better guidance for users. This would be appropriate if we
                      could see a long times spent before moving to the next
                      page or if users ereased their query and retyped it.
                      Looking at Amplitude it was evidant that most users
                      actually only spend a very short time focused on the
                      search field and that most end up in the search results
                      page..
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-9/search-results.png",
                imageAlt: "after searching",
                title: "After searching",
                text: (
                  <>
                    <Paragraph>
                      After searching users see the search results page. There
                      we saw a huge dropoff of about 60%. Still, at this point
                      we only know that the search results page is failing, not
                      why. So i needed to look for some qualitative data to
                      evaluate what seems to be the problem.
                    </Paragraph>
                  </>
                ),
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Adding some qualitative data to the mix</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  I decided to conduct usability tests to see how people search
                  for products online, the premis was simple. “Your partner has
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
            imageUrl: "assets/case-9/usability-test.png",
            imageAlt: "Picture from usability testing.",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Insights</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Most users started their search on Google. Most ended up
                  looking at Prisjakt only after they had a clear idea of the
                  product they want to buy. But for those that tried, it was an
                  uphill battle.
                </Paragraph>
                <Paragraph>
                  No one had trouble finding the search functionality. In
                  general only one of the participants preferred using the
                  on-site navigation.
                </Paragraph>
                <Paragraph>
                  Search suggestions were no use either. Most participants just
                  typed a query and pressed “enter” leading them to the search
                  results page.
                </Paragraph>
                <Paragraph>
                  There were obvious flaws with the search results page. Users
                  couldnt proceed to looking at product categories. Product
                  pictures were too small. Filtering the search options was
                  buggy and most participants just gave up at this point.
                </Paragraph>
                <Paragraph>
                  Of all the participants only one was able to find a present to
                  their partner using Prisjakt
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>A moment of inspiration</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  A logical place to start would be the search results page. But
                  it was not technically feasible to fix all the issues there
                  within a reasonable time. Instead we needed something to
                  proove the potential in fixing the search. All seemed lost
                  until something happened.
                </Paragraph>
                <Title h={3}>Finding a needle in a haystack</Title>
                <Paragraph>
                  I was looking through the search logs trying to identify
                  themes. I soon realised it was an unrealistic mission as we
                  are talking about over 2 million searches a month. But I
                  decided to export the data and looked through the most popular
                  searches. I noticed that 77.5% of the searches could be
                  manually mapped to existing products. Then it hit me.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote:
              "We cant fix the search results page, but what if we can bypass it?",
            cite: "Me (being sneaky)",
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_WITH_CAPTION,
          data: {
            imageUrl: "assets/case-9/flow-illustation.png",
            imageAlt: "?",
            caption: "Original plan",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Plan set in motion</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  If we could manually map popular search queries and make sure
                  users are being transported directly to their destination?
                  Kind of like Google‘s “Im feeling lucky” search. We would
                  still need to of course avoid vague keywords but the potential
                  was HUGE
                </Paragraph>
                <Paragraph>
                  Based on a small calculation I made the potential increase in
                  revenue would be massive
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.KEY_FIGURES,
          data: {
            items: [{ value: "2.8", description: "mil. kr. annually" }],
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
            title: <>Is it feasable?</>,
            h: 2,
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
                imageUrl: "assets/case-9/before.png",
                imageAlt: "Search suggestions, before",
                title: "Search suggestions, before",
                text: (
                  <>
                    <Paragraph>Search suggestions before</Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-9/after.png",
                imageAlt: "Search suggestions after",
                title: "Search suggestions after",
                text: (
                  <>
                    <Paragraph>
                      Search suggestions with the new option added.
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
                  We set up and A/B test using a 50/50 split on all searches. We
                  collected data and the experiment ran for 23 days before
                  shutting it down.
                </Paragraph>
                <Paragraph>
                  Eventually, 268 000 users were exposed to the experiment. Not
                  surprising, manually mapping outpreformed the normal search
                  behaviours and we’ve seen an increase of about 2% in general
                  conversion.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-9/ab-test.png",
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
            imageUrl: "assets/case-9/result.png",
            bgColor: "#00ADDB",
            text: (
              <>
                <Paragraph>
                  A 1% increase in conversion is worth about 2.8 mil. kr
                  annually. A potential increase of 3% secured resources to
                  shift the focus into improving the search on Prisjakt{" "}
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
