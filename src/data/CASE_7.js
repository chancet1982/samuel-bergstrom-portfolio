/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import Paragraph from "../Components/Elements/Paragraph";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import Title from "../Components/Elements/Title";
import List from "../Components/Elements/List";
import TitleAndText from "../Components/TitleAndText";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

export const CASE_7 = {
  caseStatus: CASE_STATUS.FEATURED,
  caseType: CASE_TYPES.CONCEPT,
  caseUrl: "/cases/7",
  thumbnail: {
    overline: "Global fitness chain",
    title: "e-Commerce Prestudy & concept",
    imageUrl: "assets/case-7/thumbnail.png",
    coverImageUrl: "assets/case-7/cover.png",
    imageAlt: "assets/case-7/cover.png",
    text: "Exploring potential service and product offering",
    bgColor: "#2362CA",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Global fitness chain",
            title: "e-Commerce pre-study",
            text: (
              <>
                <Paragraph large>
                  Exploring potential service and product offering
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-7/cover.png",
            bgColor: "rgba(0, 42, 78, .24)",
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            bgColor: "rgba(0, 42, 78, .24)",
            text: (
              <>
                <Paragraph huge>
                  My client operates more than 250 gyms in 7 different
                  countries. I was tasked to help them conduct a pre-study
                  focusing on increasing sign-ups and cross-sales potential
                  online.
                </Paragraph>
              </>
            ),
            myRole: ROLES.UI_UX,
            duration: "1 month",
            toolsAndMethods: [
              TOOLS_AND_METHODS.FIELD_STUDIES,
              TOOLS_AND_METHODS.SURVEYS,
              TOOLS_AND_METHODS.INTERVIEWS,
              TOOLS_AND_METHODS.WEB_ANALYTICS,
              TOOLS_AND_METHODS.COMPETITOR_ANALYSIS,
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
            h: 2,
            text: (
              <>
                <Paragraph>
                  A global fitness chain had trouble signing new members online.
                  As a response to that, they decided to conduct a pre-study
                  aimed at uncovering the issues with their current onboarding.
                  On top of that, the client wanted to explore the potential of
                  an affiliated eCommerce platform in order to increase their
                  revenue.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.FOUR_IMAGES_TWO_COLUMNS,
            images: [
              {
                imageUrl: "assets/case-7/mood-1.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-7/mood-2.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-7/mood-3.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-7/mood-4.jpg",
                imageAlt: "?",
              },
            ],
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
                  Initially, the goal for this pre-study was defined as “how can
                  we onboard more members and sell more online?” These are 2
                  topics that proved important for the client.
                </Paragraph>
                <Paragraph>
                  They had trouble signing new members online and following
                  COVID19 saw a risk of losing their market position. Secondly,
                  due to the pandemic, gyms were closed and the cash flow
                  dwindled. For that reason, they wanted to explore opening an
                  affiliated webshop that would sell sports equipment online.
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
            title: <>Aligning expectations.</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  In order to kick off the process, I facilitated a workshop
                  aimed at aligning the stakeholders regarding their
                  expectations from the initiative. On top of that, I wanted to
                  understand what are the challenges they currently face with
                  their services online.
                </Paragraph>
                <Title h={3}>
                  Kicking it off by making sure we are all on the same page.
                </Title>
                <Paragraph>
                  We started the project by facilitating a workshop for all
                  stakeholders. During this workshop, we tried to gather
                  insights and align everyone’s expectations. The red thread
                  throughout these discussions was “generating more revenue”.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: (
              <>
                Meeting the onboarding support team and looking into the web
                analytics
              </>
            ),
            text: (
              <Paragraph>
                It’s rather unusual that a gym chain would have an entire team
                dedicated to helping signing new members online. It indicates
                that a lot of people have trouble signing up for memberships
                online. So much so that a team is in place to support them. On
                the other hand, this team already knew all the common pitfalls
                and issues users frequently encountered. We decided to hold a
                meeting with them to try and uncover the current user pains.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            bgColor: "#2161C9",
            title: <>Insights:</>,
            text: (
              <>
                <List
                  items={[
                    <>
                      <TitleAndText
                        title="Online conversions were shockingly low"
                        h={5}
                      >
                        <Paragraph>
                          The signup had a success rate of 16% and the general
                          conversion rate was under 0.5%.
                        </Paragraph>
                      </TitleAndText>
                    </>,
                    <>
                      <TitleAndText
                        title="Users are arent getting the information they need"
                        h={5}
                      >
                        <Paragraph>
                          A lot of users failed to find or were confused by the
                          information they needed during sign-up.
                        </Paragraph>
                      </TitleAndText>
                    </>,
                    <>
                      <TitleAndText
                        title="20% of support calls originate from users who cannot sign in to My Pages."
                        h={5}
                      >
                        <Paragraph>
                          “My pages” is where gym-goers book their training,
                          find gyms, follow up on their membership so being able
                          to log in is very important. Despite receiving a mail
                          with login information for “My pages” users couldn’t
                          log-in.
                        </Paragraph>
                      </TitleAndText>
                    </>,
                    <>
                      <TitleAndText
                        title="Not all offers and Campaigns were available online"
                        h={5}
                      >
                        <Paragraph>
                          Some offers are not available online. For example, its
                          not possible to select a prepaid membership online and
                          directed users to visit a gym in person so that they
                          could do that.
                        </Paragraph>
                      </TitleAndText>
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
            title: <>Testing the current onboarding flow</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  With everything I heard so far, I asked to test the signup
                  myself. I was rather shocked, prices didn’t match, information
                  was confusing, some buttons were hardly discoverable,
                  everything we’ve heard from customer support was true! To make
                  sure it wasn’t “just me,” I asked some of my colleagues to try
                  to sign up themselves, the results were the same. It was easy
                  to see why the onboarding failed:
                </Paragraph>
                <List
                  items={[
                    <Paragraph>
                      One of the first things users need to do during sign-up is
                      entering their personal number. It is a big ask when no
                      reasoning is provided.
                    </Paragraph>,
                    <Paragraph>
                      After paying, users assume that they can go train but that
                      isn’t the case, the registration must be completed in
                      person. That isn’t clearly indicated online but instead in
                      a confirmation mail.
                    </Paragraph>,
                    <Paragraph>
                      When users attempt to log in to their pages the first time
                      they believe that they need to create an account but an
                      account already gets created when they sign-up. Instead,
                      users need to reset their password in order to log in to
                      the system the first time.
                    </Paragraph>,
                  ]}
                />
                <Paragraph>
                  <strong>Note:</strong> Given more time I would have loved to
                  conduct a more structured evaluation of the onboarding
                  usability. Due to time and budget constraints, this was not
                  possible
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.ONE_IMAGE_FULLSIZE,
            images: [
              {
                imageUrl: "assets/case-7/onboarding-before.png",
                imageAlt: "Workflow",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Looking at competitors</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  I compared the onboarding experience to some of the
                  competitors. It was easy, my wife just signed up for a new
                  gym. All I needed to do was to observe. Prices were clear,
                  plans well explained, no gotchas or nasty surprises. just a
                  smooth experience overall.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "Conducting a survey, gym membership preferences",
            h: 2,
            text: (
              <>
                <Paragraph>
                  We needed to understand what was important for potential gym
                  members. Do they prefer to signup online or at the gym? How do
                  people choose gyms? What services might be relevant for them?
                  etc. Part of the survey was dedicated to exploring the
                  potential of cross-sales while onboarding. I created a survey
                  and promoted it on social media.
                </Paragraph>
                <Title h={3}>Noteworthy Insights:</Title>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.KEY_FIGURES,
          data: {
            items: [
              {
                value: "51.2%",
                description: "Prefer signing up to gyms online.",
              },
              { value: "44%", description: "Interested in group training" },
              {
                value: "31.6%",
                description: "Would consider a personal tainer.",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.THREE_IMAGES_TWO_COLUMNS,
            images: [
              {
                imageUrl: "assets/case-7/gym-visit-1.png",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-7/gym-visit-2.png",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-7/gym-visit-3.png",
                imageAlt: "?",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Visiting gyms and conducting interviews.</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  With help of a colleague, we interviewed more than 30 gym
                  members. We visited 3 Gyms all in a period of several days and
                  spoke to both staff and trainers to uncover the challenges
                  they have. We then shared our findings with the team and
                  prioritized our efforts.
                </Paragraph>
                <Paragraph>
                  It was clear that some of the issues weren’t solvable without
                  additional costs. For example, the type of access control used
                  in the gyms ended up dictating the signup process. You cannot
                  signup unless you physically pick up a magnetic card. You
                  cannot be a member without signing a contract. Interested or
                  not, the project promised cross-sales, hence it will include
                  them. This was discouraging...
                </Paragraph>
                <Paragraph>
                  <strong>Note:</strong> This was far from ideal data
                  collection. In a perfect world, I would have loved a larger
                  sample size but due to time and budget limitations, this was
                  not possible.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Redesign",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Taking a small step in the right direction. </>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Given all the constraints, I was asked to redesign the
                  onboarding. It must include cross-sales, must not require
                  changes to the access control or ways of working in the
                  organization but should aim at improving clarity, align
                  expectations, and offer better guidance.
                </Paragraph>
                <Paragraph>
                  I created several different versions of the onboarding. These
                  were tested against each other, tweaked and the one that
                  performed best was then chosen.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.ONE_IMAGE_FULLSIZE,
            images: [
              {
                imageUrl: "assets/case-7/wip-1.png",
                imageAlt: "Workflow",
              },
            ],
          },
        },
      ],
    },
    {
      header: "eCommerce",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Shifting the focus to eCommerce</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  At this point, the focus was shifted to covering a potential
                  e-commerce platform. One of the daughter companies in the
                  organization specializes in selling gym equipment to
                  businesses and they wanted to explore potential collaboration.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "A second survey, more interviews",
            h: 2,
            text: (
              <>
                <Paragraph>
                  A second survey was sent. Focusing on product customer
                  interest, desirability, and potential product offering.
                </Paragraph>
                <Paragraph>
                  On top of the surveys, I conducted more interviewed via phone
                  and in-person to complement the quantitative findings with
                  qualitative data.
                </Paragraph>
                <Title h={3}>Learnings: </Title>
                <Paragraph>
                  We collected 37 responses. As the sheer competition in this
                  segment could have indicated an interest in buying gym
                  equipment and food supplements online exists. Despite that,
                  most members preferred buying their equipment through
                  dedicated stores and wouldn’t consider buying anything from
                  the gym itself. This gym chain is known for its low prices and
                  people assumed that their products will not be of sufficient
                  quality.
                </Paragraph>
                <Paragraph>
                  Despite that, I was asked to design a storefront for an
                  eCommerce platform in order to sway decision-makers and to be
                  included in the report.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.ONE_IMAGE_FULLSIZE,
            images: [
              {
                imageUrl: "assets/case-7/wip-2.png",
                imageAlt: "Workflow",
              },
            ],
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
            title: <>Setting a vision for the future</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  At this point, things change. It was like the chips finally
                  fell and I was asked to visualize how the onboarding could be
                  without the given constraints. How might we offer a 100%
                  digital experience?
                </Paragraph>
                <Paragraph>
                  <strong>
                    This required adressing 3 of the steps that now require
                    physical presence:{" "}
                  </strong>
                  <br />
                  Signing an agreement, Getting their picture taken, and Picking
                  up a magnetic card
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.ONE_IMAGE_FULLSIZE,
            images: [
              {
                imageUrl: "assets/case-7/wip-3.png",
                imageAlt: "Workflow",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Some key features</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  In order to make this, everything that was currently done
                  manually at the gyms needed to be moved to the mobile app.
                  This namely included: Identification and contract signing,
                  taking a picture, and securing access to the gyms.
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
                imageUrl: "assets/case-7/sneakpeek-1.png",
                imageAlt: "Identification & signing membership agreement",
                title: "Identification & signing membership agreement",
                text: (
                  <>
                    <Paragraph>
                      At the moment one after users completes their online
                      application they need to physically go to the gym during
                      manned hours. This is done in order to sign the membership
                      agreement, take a picture, and handle the magnetic
                      entrance card.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution: </strong>Identification at least in
                      Sweden can be done using BankId, which also offers
                      digitally signing legally binding agreements.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-7/sneakpeek-2.png",
                imageAlt: "Snapping a selfi instead of going to the gym",
                title: "Taking member’s pictures.",
                text: (
                  <>
                    <Paragraph>
                      At the moment after users finish signing up online, they
                      are required to physically go to the gym to get their
                      image taken. Sometimes, this information is disregarded as
                      it comes in an email upon signup. At times this leads to
                      potential members choosing to physically go to the gyms to
                      complete the application.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution: </strong> In the re-imagined onboarding
                      we allow users to take a selfie instead. Much simpler,
                      doesn’t require any employee involvement, and reduces
                      workload in gyms.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-7/sneakpeek-3.png",
                imageAlt: "QR codes and NFC to replace old magnetic cards",
                title: "Physical access control at the gyms",
                text: (
                  <>
                    <Paragraph>
                      Gym goers today use magnetic cards to enter during
                      unmanned hours. This however requires employees to assist
                      in membership signups and makes the process more complex.
                      Employees also reported that a lot of members eventually
                      lose their cards leading to additional administration
                      costs.
                    </Paragraph>
                    <Paragraph>
                      <strong>Solution: </strong> Instead of the current
                      entrance system we proposed to use QR locks on the doors
                      or even exploring NFC chips instead in order to allow
                      unassisted membership sign-up’s making the process much
                      simpler and effective. This will however entail a cost and
                      is currently being evaluated.
                    </Paragraph>
                  </>
                ),
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.ONE_IMAGE_FULLSIZE,
            images: [
              {
                imageUrl: "assets/case-7/onboarding-after.png",
                imageAlt: "Workflow",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Oh, one last thing</>,
            h: 2,
            text: (
              <>
                <Paragraph />
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
            imageUrl: "assets/case-7/result.png",
            bgColor: "rgba(9, 93, 132, .72)",
            text: (
              <>
                <Paragraph large>
                  The results were shared with the leadership and funding for
                  the project was secured. The findings helped the organization
                  focus on removing obsticles in order to onboard members in a
                  better way.
                </Paragraph>
                <Title h={3}>After thoughts:</Title>
                <Paragraph large>
                  Despite time constraints and focus on speedy delivery, a lot
                  of the issues uncovered during the research phase were
                  addressed. Given more time I would have loved to revisit this
                  redesign to gather some concrete data about its impact.
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
