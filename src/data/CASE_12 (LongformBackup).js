/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import Note from "../Components/Shared/Note";
import List from "../Components/Shared/List";
import Span from "../Components/Shared/Span";
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";

const SETTINGS = {
  BG_COLOR: "#00ADDB",
  URL: "/cases/12",
  MEDIA_BASE_URL: "assets/case-12",
  KEY_FIGURES: {
    CASE_TYPE: {
      label: CASE_TYPES.LABEL,
      value: CASE_TYPES.CONCEPT_VISUALISATION,
    },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.LEAD },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.DESKTOP, PLATFORMS.TABLET, PLATFORMS.MOBILE],
    },
    TOOLS_AND_METHODS: {
      label: TOOLS_AND_METHODS.LABEL,
      value: [TOOLS_AND_METHODS.INTERVIEWS, TOOLS_AND_METHODS.WORKSHOPS],
    },
    CASE_YEAR: { label: "Year:", value: "2022" },
    CASE_DURATION: { label: "Duration:", value: "2 monthS" },
  },
};

export const CASE_12 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Fitness & healthcare",
      title: "Creating better habits",
      text: <Paragraph>Concept validation for healthcare app</Paragraph>,
    },
    fgImage: {
      imageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail.png`,
      imageAlt: "thumbnail",
    },
  },
  details: [
    {
      navBgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            bgMedia: {
              type: BG_MEDIA_TYPES.IMAGE,
              mediaUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-bg.jpg`,
            },
            caption: {
              overline: "Fitness & healthcare",
              title: "Creating better habbits",
              text: (
                <Paragraph xxl>Concept validation for healthcare app</Paragraph>
              ),
            },
            fgImage: {
              imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-fg.png`,
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
      paddedDown: true,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            text: (
              <>
                <Paragraph xl>
                  My client, working in the fitness and health domain, wanted to
                  explore a potential idea. They wanted to create an app focused
                  on helping people live a healthier life. They asked us to
                  evaluate their idea and help them create a prototype to help
                  align their vision and so that they could raise more capital
                  for its eventual development.
                </Paragraph>
                <Paragraph>
                  The general idea was to create an app that would help
                  teenagers that are active in sports to gain healthier habits.
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
      header: "background",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Painkillers, not vitamins",
            text: (
              <>
                <Paragraph>
                  There are a lot of apps in the market today, and in order to
                  succeed, you need an audience and a problem and a solution. In
                  this case, I proposed we kick off the process by conducting
                  several excercises.
                </Paragraph>
                <Paragraph>
                  Our stakeholders had a lot of different ideas and we needed to
                  understand what it is we are going to prototype. We Chose to
                  start with a problem framing excercise, followed by a value
                  proposition canvas, and then an assumption mapping and
                  business model canvas. Simply put, we needed to understand the
                  problem, ensure we are addressing a real need in a valuable
                  way, and that we can capture the value that we create.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/problem-framing.jpg`,
            imageAlt: "problem-framing",
            caption: "Problem framing whiteboard",
            limitMaxWidth: true,
            isPadded: true,
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            text: (
              <>
                <Paragraph>
                  We started with a problem framing. This helped pin-point the
                  problem we were trying to solve and answer the 4Ws (Who, What,
                  When/Where and Why).
                </Paragraph>
                <Note title="Resulting problem statement:">
                  <Paragraph>
                    Teenagers in sports and life are lacking good healthy
                    sleeping/eating/training habits. Helping teenagers acquire
                    healthy habits will have a long-lasting impact for the rest
                    of their life.
                  </Paragraph>
                </Note>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/value-proposition-canvas.jpg`,
            imageAlt: "problem-framing",
            caption: "Strategyzer's value proposition canvas",
            limitMaxWidth: true,
            isPadded: true,
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            text: (
              <Paragraph>
                Using the value proposition canvas we could connect how the
                product intends to address the above problem. On top of that, we
                could align all stakeholders around the shared vision. We closed
                the day with conducting an assumption mapping. With a goal in
                mind, to use it to focus our efforts on the riskiest
                assumptions.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Research plan",
            text: (
              <>
                <Paragraph>
                  Based on the insight we got from the Value Proposition Canvas
                  for both the teenagers and the trainer, for the app to be a
                  success we have to investigate further and verify the points
                  below.
                </Paragraph>
                <List
                  items={[
                    <Span>
                      If teenagers knew what they needed to perform well, they
                      would do so.
                    </Span>,
                    <Span>
                      If teenagers would use an app to record their habits if
                      the choice is easy enough and fun.
                    </Span>,
                    <Span>
                      If teens do what their coaches want them to do (reporting,
                      living healthier)
                    </Span>,
                    <Span>
                      If coaches care about the health of their athletes
                    </Span>,
                    <Span>
                      If sports associations see value in their athletes
                      becoming healthier
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
      header: "research",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            text: (
              <Paragraph>
                With the above assumptions in mind, we needed to do some ground
                work. That meant looking at <strong>general reserach</strong>,{" "}
                <strong>market research & competitor analysis</strong>, and
                conduct <strong>interviews</strong> with both teenagers and
                trainers.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Studies and statistics",
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Major data points:",
            h: 3,
            text: (
              <List
                items={[
                  <Span>
                    A record 30% of teens own an Apple Watch in the Fall 2021
                    survey. Apple also has 86% market share among teen smart
                    watch owners
                  </Span>,
                  <Span>
                    30% of teens use a fitness app as a part of their workout
                    regimen. Of fitness app users, over 50% use an Apple app
                  </Span>,
                  <Span>
                    Half of teens are concerned about their internet activity
                    being tracked
                  </Span>,
                ]}
              />
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Physical activity:",
            h: 3,
            text: (
              <>
                <Paragraph>
                  Physical activity provides fundamental health benefits for
                  adolescents, including improved cardiorespiratory and muscular
                  fitness, bone health, maintenance of healthy body weight, and
                  psychosocial benefits. WHO recommends for adolescents
                  accumulate at least 60 minutes of moderate to vigorous
                  intensity physical activity on average per day across the
                  week, which may include play, games, sports, but also an
                  activity for transportation (such as cycling and walking), or
                  physical education.
                </Paragraph>
                <Paragraph>
                  Globally, only 1 in 5 adolescents are estimated to meet these
                  guidelines. Prevalence of inactivity is high across all WHO
                  regions, and higher in female adolescents as compared to male
                  adolescents.
                </Paragraph>
                <Paragraph>
                  To increase activity levels, countries, societies and
                  communities need to create safe and enabling environments and
                  opportunities for physical activity for all adolescents
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Intrinsic & extrinsic rewards:",
            h: 3,
            text: (
              <Paragraph>
                Extrinsic rewards can destroy teenagers’ love of the game.
                Children usually participate in sports because of their
                internal/intrinsic motivation to play “for the fun of it.” When
                material rewards (food, money, trophies, ribbons, T-shirts,
                etc.) are introduced, kids can lose their intrinsic motivation.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "The market",
            text: (
              <>
                <Paragraph>
                  Most swedes and 54% of teenagers, the initial target group for
                  the app, are members of a sports club.
                </Paragraph>
                <Paragraph>
                  With this in mind and a general positive trend in living a
                  healthy life, there should be a market for similar concepts
                  and apps.
                </Paragraph>
                <Paragraph>
                  The concept could also be a way for sports clubs to retain
                  members who otherwise tend to leave the club in their late
                  teens.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/competitor-1.jpg`,
            imageAlt: "problem-framing",
            caption: "Problem framing whiteboard",
            limitMaxWidth: true,
            isPadded: true,
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Competitors",
            text: (
              <>
                <Paragraph>
                  Health is an important segment of the app market. The
                  increasing popularity of smartwatches and other health-related
                  products is evidence of this. One of Apple’s apps of the year
                  is Gentler Streak, an app with a clear health focus.
                </Paragraph>
                <Paragraph>
                  Apps that are especially interesting to look at:
                </Paragraph>
                <List
                  items={[
                    <Paragraph>
                      <strong>XPS </strong> is an ambitious apps with lots of
                      features and content for sports clubs and coaches. It is
                      important to make clear how this app differs from XPS.
                    </Paragraph>,
                    <Paragraph>
                      <strong>Gentler streak</strong> is an iPhone & Apple Watch
                      app that helps users form healthy exercise habits. On
                      February 23rd, it will release a new version that focuses
                      more on other aspects of health than just exercise. It
                      recently won Apple’s app of the year award.
                    </Paragraph>,
                    <Paragraph>
                      <strong>Apple Health</strong> is a service built into
                      Apple’s operating systems. It contains much of what a user
                      might need in order to track their health and exercise. It
                      is done with a very basic user interface, though. Apple
                      Health is better understood as a general health platform
                      that supports a big landscape of apps.
                    </Paragraph>,
                    <Paragraph>
                      <strong>LifeSum</strong> is an app for tracking food
                      intake in detail. The user has to enter exactly how much
                      of each ingredient they eat, but the app also has a large
                      database of packaged foodstuff that can be used for
                      quicker entry. The app has worked hard on making this
                      quite elaborate reporting easy. The user can copy entries
                      from other days, create recipes etc.
                    </Paragraph>,
                  ]}
                />
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Interviews:",
            text: (
              <>
                <Paragraph>
                  In order to validate the assumptions we got from our
                  workshops, we set out to interview representatives of the two
                  main user types for the app – teenage athletes and their
                  coaches. We interviewed 5 teenagers and 5 coaches. From those
                  interviews we can get a summary of recommendations and
                  findings:
                </Paragraph>
                <List
                  items={[
                    <Paragraph>
                      We need to differentiate between aspiring athletes and
                      “average teenagers” and see them as 2 separate groups with
                      separate needs. There are no “aspiring athletes” before
                      ages 15+
                    </Paragraph>,
                    <Paragraph>
                      We recommend focusing on known problem areas for teenagers
                      I.E. actively tracking exercise, and sleep. Tracking food
                      intake should focus on “eating right” and not just
                      “eating” (yes/no) while water intake should be pre-filled
                      as 100% by default yet editable.
                    </Paragraph>,
                    <Paragraph>
                      We should potentially explore using the “tallriksmodellen”
                      for reporting meal quality.
                    </Paragraph>,
                    <Paragraph>
                      When looking at hydration, we should focus on avoiding
                      sweetened beverages, and not reaching a certain hydration
                      level.
                    </Paragraph>,
                    <Paragraph>
                      For energy to make sense it needs to be connected to
                      “performance”
                    </Paragraph>,
                    <Paragraph>
                      Trainers only care about performance when talking about
                      aspiring athletes, for the avg. teenager participation and
                      team spirit are enough.
                    </Paragraph>,
                  ]}
                />
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
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            text: (
              <Paragraph>
                From all the data collected so far (client’s concept, market
                strategy and research results), we created a prototype that
                shows the app’s potential and possibilities to cater to the
                users’ needs. But to expand it even more, deeper research is
                needed to iron out all the details and how it would answer the
                need of both the players and the trainers to increase the
                quality of health among teenagers and the general population as
                a whole.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek.png`,
            imageAlt: "problem-framing",
            limitMaxWidth: true,
            isPadded: true,
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "The idea",
            text: (
              <Paragraph>
                It’s an application where teenagers can start building healthier
                habits by reporting their food intake, sleep duration, drink
                intake and exercise. Those data are then processed to become a
                fuel meter where they can see how they perform every day. To
                keep them motivated, they can join or get invited to a
                team/group based on the sports clubs they belong to. The trainer
                can see the progress of their team members, set a group
                challenge, and have a one-on-one chat with the team member. The
                app will also try to motivate its users by inspiring them with
                daily goals, diverse reading materials and videos from coaches
                and athletes.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Technicalities",
            text: (
              <Paragraph>
                To make reporting as easy as possible, the app could work
                together with external devices such as smartwatches and other
                reporting apps. From the data collected, the app could then
                create the fuel meter.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Features",
            text: (
              <Paragraph>
                The prototype covered the basic features of the app, such as
                signing up, signing in, checking the fuel meter for individuals,
                creating groups/teams, adding members, joining a group, a group
                page with a group fuel meter, chat functionality and an
                inspiration tab.
              </Paragraph>
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
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result-desktop.png`,
            mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/result-mobile.png`,
            bgColor: SETTINGS.BG_COLOR,
            text: <Paragraph large>...</Paragraph>,
          },
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
