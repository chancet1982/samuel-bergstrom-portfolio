/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Shared/Paragraph";
import List from "../Components/Shared/List";
import colors from "../theme/colors";
import Span from "../Components/Shared/Span";
import Title from "../Components/Shared/Title";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";

export const VIEW_ABOUT_ME = [
  {
    elements: [
      {
        template: SECTION_ELEMENTS.COVER,
        data: {
          bgColor: "#9c9090",
          caption: {
            title: (
              <>
                Creating <mark>business value</mark> through better experiences.
              </>
            ),
            h: 1,
            text: (
              <Paragraph xl>
                A digital product designer, engineer, speaker, mentor,
                accessibility enthusiast, father, husband, and quite a nice guy.
              </Paragraph>
            ),
          },
          bgMedia: {
            type: BG_MEDIA_TYPES.VIDEO,
            mediaUrl: "assets/about-me.mp4",
            fit: "cover",
          },
        },
      },
    ],
  },
  {
    bgColor: colors.offwhite,
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: <>Why Sam?.</>,
        },
      },
      {
        template: SECTION_ELEMENTS.LIST_OF_CARDS,
        data: {
          items: [
            {
              title: "Designer",
              text: (
                <Paragraph>
                  Seasoned designer with 15 years of experience working in-house
                  and as an external consultant with clients from all sizes.
                  Currently leading a team of 20 designers.
                </Paragraph>
              ),
            },
            {
              title: "Mentor",
              text: (
                <Paragraph>
                  Active mentor in ADPList and ECUtbildning, sharing my
                  knowledge with the community.
                </Paragraph>
              ),
            },
            {
              title: "Speaker",
              text: (
                <Paragraph>
                  Held talks, both virtual and in-person for different audiences
                  from C-level executives to hundrads of Students.
                </Paragraph>
              ),
            },
            {
              title: "Facilitator",
              text: (
                <Paragraph>
                  Experience in facilitating various workshops. In-person and
                  virtual. Design Sprints, ideation sessions, discovery
                  workshops, User story mapping etc.
                </Paragraph>
              ),
            },
            {
              title: "Engineer",
              text: (
                <Paragraph>
                  Educated engineer, I can code. More importantly, I can
                  communicate better with developers and create designs that are
                  implementable.
                </Paragraph>
              ),
            },
            {
              title: "Father",
              text: (
                <Paragraph>
                  A father of 2 (plus a dog) means I am no stranger to stress. I
                  deal with chaos (ah sorry a “dynamic environment”) on a dialy
                  basis!.
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
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          isCentered: true,
          title: <>Among my clients</>,
        },
      },
      {
        template: SECTION_ELEMENTS.CLIENTS,
        data: {},
      },
    ],
  },
  {
    bgColor: colors.offblack,
    elements: [
      {
        template: SECTION_ELEMENTS.TESTIMONIALS,
        data: {
          title: "What others say about me",
        },
      },
    ],
  },
  {
    bgColor: colors.offwhite,
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: "My story",
          h: 2,
          text: (
            <>
              <Paragraph>
                My career started off 15 years ago when I was hired as a graphic
                designer for a financial services provider in Copenhagen. I had
                many hats at that time and eventually I was in charge of a small
                team responsible for creating web and document creation
                solutions used by 50-70 banks and investment groups.
              </Paragraph>
              <Paragraph>
                But work got repetative. I needed a new challenge. I signed up
                to go back to university where I studied It Communications and
                New Media while working full-time. After graduation, I worked as
                a Front-end developer for a couple of years before going back to
                design. This time working with data visualizations for medical
                studies before being hired as a consultant.
              </Paragraph>
              <Paragraph>
                As a consultant, I was hired to work as part of an in-house
                delivery organization. This included involvement in all parts of
                process. From from defining problems worth solving, through
                product discovery, ideation, design, and validation, to
                building, launching and evaluting the impact of our efforts.
              </Paragraph>
              <Paragraph>
                Currently working as head of design at tretton37. I lead a team
                of 20 designers and am responsible for working on our VP, EVP,
                Competence development (in collaboration with a dedicated
                competence lead) packaging design services, and generally trying
                to ensure that designers have a home at tretton37.
              </Paragraph>
              <Title h={4}>Some of my credentials</Title>
              <List
                items={[
                  <Span>
                    <strong>UXC Spec. UX Management</strong>, NNg (Nielson
                    Norman Group)
                  </Span>,
                  <Span>
                    <strong>BSc</strong> Eng. ICT, Ålborg university
                  </Span>,
                  <Span>
                    <strong>Assoc. Deg.</strong> Graphic Design, College of
                    Management
                  </Span>,
                ]}
              />
            </>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.TIMELINE,
        data: {
          items: [
            {
              year: "2022",
              events: [
                {
                  title: "Head of Design, 1337",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
              ],
            },
            {
              year: "2021",
              events: [
                {
                  title: "UX Consultant, Prisjakt",
                  content:
                    "Helped prisjakt work strategically with insights and UX. Worked on improving search, cateogry, and product page",
                },
                {
                  title: "UX Consultant & Mentor, Alfa Laval",
                  content: "Under NDA",
                },
              ],
            },
            {
              year: "2020",
              events: [
                {
                  title: "UX Lead, Mitsubishi Electric",
                  content:
                    "Helped Mitsubishi Electric genarate a vision for D2C sales",
                },
                {
                  title: "UX Designer, Fitness 24 Seven",
                  content:
                    "Helped Fitness 24 Seven investigate new business oppurtunities",
                },
                {
                  title: "Senior UX Designer, Loomis",
                  content: "Helped redesign Loomises courier app",
                },
              ],
            },
            {
              year: "2019",
              events: [
                {
                  title: "UX Designer, Lumito",
                  content:
                    "Conducted research and design work used for utilizing disruptive technology in digital patology",
                },
                {
                  title: "Head of design, Euro Finans",
                  content:
                    "Led the omni channel design activities on behalf of EuroFinans",
                },
                {
                  title: "Senior UX Designer, NoWaste Logistics",
                  content:
                    "Created a design for a last mile grocery delivery solution",
                },
              ],
            },
            {
              year: "2018",
              events: [
                {
                  title: "UX Designer, Diaverum",
                  content:
                    "Worked on multiple projects and platforms aimed at providing better treatment for renal patients",
                },
                {
                  title: "UX Designer, Modity",
                  content: "Designed an energy trading platform",
                },
              ],
            },
            {
              year: "2017",
              events: [
                {
                  title: "UX Engineer, Capish",
                  content:
                    "Worked on complex data visualizations for medical studies",
                },
              ],
            },
            {
              year: "2016",
              events: [
                {
                  title: "Frontend Developer, NetSet",
                  content:
                    "Helped ATEA webshop transition to responsive design as part of a product team",
                },
              ],
            },
            {
              year: "2011",
              events: [
                {
                  title: "Head of Web, FundConnect (Accuired by FEFundInfo)",
                  content:
                    "I was in charge of the companies portfolio of online and document creation solutions used by 50-70 banks, financial institutions, and stock exchanges",
                },
              ],
            },
            {
              year: "2006",
              events: [
                {
                  title: "UI/UX Designer, (Accuired by FEFundInfo)",
                  content:
                    "Designing internal and extrnal fund information services",
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: "More than a designer",
          h: 2,
          text: (
            <Paragraph>
              Did I mention I make some kick-ass pizzas? So yeah, sourdough,
              Biga, Poolish, you name it. I started making neapolitan pizzas
              about 5 years ago. I bought a small Ooni and started
              experimenting. Now, 5 years, 3 pizza ovens, and several hundrads
              of kilos of imported flour later, I think I&apos;m getting the
              trick.
            </Paragraph>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.IMAGE_GALLERY,
        data: {
          template: IMAGE_GALLERY_TEMPLATES.FIVE_IMAGES_MIX_COLUMNS,
          images: [
            {
              imageUrl: "assets/pizza-1.jpg",
              imageAlt: "?",
            },
            {
              imageUrl: "assets/pizza-2.jpg",
              imageAlt: "Co-creating wireframes",
            },
            {
              imageUrl: "assets/pizza-3.jpg",
              imageAlt: "Co-creating wireframes",
            },
            {
              imageUrl: "assets/pizza-4.jpg",
              imageAlt: "Co-creating wireframes",
            },
            {
              imageUrl: "assets/pizza-5.jpg",
              imageAlt: "Co-creating wireframes",
            },
          ],
        },
      },
    ],
  },
  {
    elements: [
      {
        template: SECTION_ELEMENTS.CASE_FOOTER,
      },
      {
        template: SECTION_ELEMENTS.FOOTER,
      },
    ],
  },
];
