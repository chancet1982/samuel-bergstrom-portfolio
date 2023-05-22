/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Shared/Paragraph";
import List from "../Components/Shared/List";
import colors from "../theme/colors";
// import Span from "../Components/Shared/Span";

export const VIEW_LEADERSHIP = [
  {
    paddedUp: true,
    fullScreen: true,
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: "Leadership philosophy",
          h: 1,
          text: (
            <Paragraph xl>
              To me leadership is not about a systematic approach. There are
              different goals and circumstances that require different
              approaches to leadership. In some cases, it is about softer
              leadership and nudging results while in others it might be helping
              others reach their goals.
            </Paragraph>
          ),
        },
      },
    ],
  },
  {
    fullScreen: true,
    sectionTitle: "tretton37",
    bgColor: colors.offblack,
    elements: [
      {
        template: SECTION_ELEMENTS.INSIGHTS,
        data: {
          title: "Notable accomplishments",
          h: 3,
          text: (
            <Paragraph xl>
              Increasing revenue from design related consultants with about 50%.
              Increasing overall eNPS score
            </Paragraph>
          ),
          items: [
            {
              title: "Recruitment",
              text: (
                <List
                  items={[
                    <Paragraph>
                      Aligned and improved the recruitment a process to better
                      identify high value candidates, expediate recruitment, and
                      better evaluate potential candidates.
                    </Paragraph>,
                    <Paragraph>
                      Tightened the collaboration between TA and design across
                      regions. Ongoing work with EVP
                    </Paragraph>,
                    <Paragraph>
                      Introduced competence mapping as part of onboarding new
                      team members.
                    </Paragraph>,
                  ]}
                />
              ),
            },
            {
              title: "Retention",
              text: (
                <List
                  items={[
                    <Paragraph>
                      Increased team belongingness and collaboration between
                      designers.
                    </Paragraph>,
                    <Paragraph>
                      Introduced weekly meetup across offices
                    </Paragraph>,
                    <Paragraph>
                      {" "}
                      Introduced career development paths and mentorship
                      programme (buddy system)
                    </Paragraph>,
                    <Paragraph>
                      Driving internal knowledge activities (knowledge days, and
                      inviting external speakers) to further develop design
                      skills
                    </Paragraph>,
                  ]}
                />
              ),
            },
            {
              title: "Sales",
              text: (
                <List
                  items={[
                    <Paragraph>
                      Created a set of small introducory services to generate
                      trust and establish collaboration with new clients.
                    </Paragraph>,
                    <Paragraph>
                      Tightening the collaboration between sales and the
                      different departments.
                    </Paragraph>,
                    <Paragraph>
                      Educating sales to better identify oppurtunities when
                      working with new clients.
                    </Paragraph>,
                    <Paragraph>
                      Established a respository of our track record, designers
                      and experience to improve assignment matching.
                    </Paragraph>,
                  ]}
                />
              ),
            },
          ],
        },
      },
    ],
  },
  {
    fullScreen: true,
    sectionTitle: "Prisjakt",
    elements: [
      {
        template: SECTION_ELEMENTS.INSIGHTS,
        data: {
          title: "Notable accomplishments",
          h: 3,
          text: (
            <Paragraph xl>
              Helped Prisjakt win SEO prize for 2022 (Åretsracket). Improved
              Prisjakt´s ways of working. Increased product revenue
            </Paragraph>
          ),
          items: [
            {
              title: "Research",
              text: (
                <List
                  items={[
                    <Paragraph>
                      Helped create a centeralized insights respository
                    </Paragraph>,
                    <Paragraph>
                      Educated regarding balancing quantitative data with
                      qualitative data.
                    </Paragraph>,
                    <Paragraph>
                      Automated insights collection via quarterly and on-site
                      surveys .
                    </Paragraph>,
                  ]}
                />
              ),
            },
            {
              title: "Strategy",
              text: (
                <List
                  items={[
                    <Paragraph>
                      Introduced north star UX metrics using sentiment to
                      evaluate improvements.
                    </Paragraph>,
                    <Paragraph>Helped create a UX roadmap</Paragraph>,
                    <Paragraph>
                      Helped formulate OKRs, team constilations, and problems
                      worth solving
                    </Paragraph>,
                  ]}
                />
              ),
            },
            {
              title: "Ways of working",
              text: (
                <List
                  items={[
                    <Paragraph>Helped launch the design system.</Paragraph>,
                    <Paragraph>
                      Facilitated transition to a collaborative platform (Figma)
                    </Paragraph>,
                    <Paragraph>
                      Introduced product discovery to the organization.
                    </Paragraph>,
                  ]}
                />
              ),
            },
          ],
        },
      },
    ],
  },
  {
    fullScreen: true,
    bgColor: colors.primary,
    sectionTitle: "EuroFinans",
    elements: [
      {
        template: SECTION_ELEMENTS.INSIGHTS,
        data: {
          title: "Notable accomplishments",
          h: 3,
          text: (
            <Paragraph xl>
              Helped EuroFinans expand into new business areas and improved
              their ways of working
            </Paragraph>
          ),
          items: [
            {
              title: "Increased design maturity",
              text: (
                <Paragraph>
                  Shifted delivery from waterfall to more agile with rapid
                  sessions of prototyping and testing instead of long release
                  cycles.
                </Paragraph>
              ),
            },
            {
              title: "Introduced design system",
              text: (
                <Paragraph>
                  Created a design system to support both EuroFinans and
                  PrioritetFinans (mother company). The design system was
                  shortened release cycles, reduced bugs, and aligned the design
                  across all products and platforms
                </Paragraph>
              ),
            },
            {
              title: "Established a process",
              text: (
                <Paragraph>
                  Coordinated deliveries and mentored 2 other designers.
                </Paragraph>
              ),
            },
          ],
        },
      },
    ],
  },
  {
    fullScreen: true,
    paddedDown: true,
    sectionTitle: "Community activities and mentorship",
    elements: [
      {
        template: SECTION_ELEMENTS.INSIGHTS,
        data: {
          isCentered: true,
          text: (
            <Paragraph xl>
              Helping others grow outside my formal role. I am currently a board
              member of Malmö Design Network and mentoring design students and
              other designers online.
            </Paragraph>
          ),
          items: [
            {
              title: "ADPList, Mentor",
              text: (
                <Paragraph>
                  Active mentor on adplist which is the leading mentorship
                  platform with 5000 vetted mentors worldwide.
                </Paragraph>
              ),
            },
            {
              title: "MDN, Board Member",
              text: (
                <Paragraph>
                  Board member of Malmö Design Network. The largest design
                  network in Skåne with more than 600 members aimed at
                  exchanging ideas and sharing knowledge
                </Paragraph>
              ),
            },
            {
              title: "ECUtbildning, Mentor",
              text: (
                <Paragraph>
                  UX mentor for students in ECUtbildning. As part of their
                  education students are required to have a mentor. I was
                  contacted by ECU after holding a talk there to be one of the
                  mentors and am since then responsible for 4 students
                </Paragraph>
              ),
            },
          ],
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
];
