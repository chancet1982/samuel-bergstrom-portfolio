/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Shared/Paragraph";
import Span from "../Components/Shared/Span";
import List from "../Components/Shared/List";
import colors from "../theme/colors";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { BG_MEDIA_TYPES } from "./dictionaries/BG_MEDIA_TYPES";

export const VIEW_ABOUT_ME = [
  {
    navBgColor: "#9c9090",
    elements: [
      {
        template: SECTION_ELEMENTS.SECTION_HERO,
        data: {
          bgColor: "#9c9090",
          caption: {
            title: (
              <>
                <mark>Unicorns</mark> are real!
              </>
            ),
            h: 1,
            text: (
              <Paragraph xl>
                Designer with a knack for{" "}
                <Span xl highContrast>
                  research and numbers
                </Span>
                , Product Manager specializing in{" "}
                <Span xl highContrast>
                  product discovery and delivery
                </Span>{" "}
                and{" "}
                <Span xl highContrast>
                  Engineer
                </Span>
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
    bgColor: colors.white,
    paddedUp: true,
    elements: [
      { template: SECTION_ELEMENTS.SPACER_MEDIUM },
      {
        template: SECTION_ELEMENTS.COLUMNS,
        data: {
          items: [
            {
              imageUrl: "assets/not-here-to-look-good.png",
            },
            {
              title: "Designed to make you look good!",
              h: 2,
              text: (
                <Paragraph>
                  Its really not about me. I help businesses reach their goals,
                  making you look good for your salary review.
                </Paragraph>
              ),
            },
          ],
        },
      },
      { template: SECTION_ELEMENTS.SPACER_MEDIUM },
      {
        template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
        data: {
          items: [
            {
              imageUrl: "assets/packed-with-useful-ideas.png",
              imageAlt: "Packed with useful ideas",
              title: "Packed with useful ideas",
              h: 2,
              text: (
                <Paragraph>
                  <Paragraph>
                    I am opinionated, knowledgable, and care about your success.
                    Whatever the challenge, I will find a way to move forward.
                  </Paragraph>
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
    sectionTitle: <>Why me?</>,
    h: 3,
    bgColor: colors.darkgray,
    elements: [
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
                  I believe in growth and love helping others. I am currently a
                  Board member of Malmö Design network and an active mentor in
                  ADPList and ECUtbildning.
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
                  deal with chaos (ah sorry a “dynamic environment”) on a daily
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
    bgColor: "#ffffff",
    paddedUp: true,
    paddedDown: true,
    sectionTitle: <>Trusted by:</>,
    isCentered: true,
    elements: [
      {
        template: SECTION_ELEMENTS.CLIENTS,
        data: {},
      },
    ],
  },
  {
    bgColor: colors.offblack,
    sectionTitle: <>Dont take my word for it!</>,
    isCentered: true,
    elements: [
      {
        template: SECTION_ELEMENTS.TESTIMONIALS,
        data: {
          inLandingPage: false,
        },
      },
    ],
  },
  {
    bgColor: colors.offwhite,
    paddedUp: true,
    elements: [
      {
        template: SECTION_ELEMENTS.COLUMNS,
        data: {
          items: [
            {
              title: "My journey so far",
              h: 3,
              text: (
                <>
                  <Paragraph>
                    I started my career 15 years ago as a graphic designer for a
                    financial services provider in Copenhagen. Over time, I
                    became responsible for a small team that created web and
                    document solutions used by 50-70 banks and investment
                    groups.
                  </Paragraph>
                  <Paragraph>
                    However, the work became repetitive, and I needed a new
                    challenge. So, I signed up for university while continuing
                    to work full-time. There, I studied IT Communications and
                    New Media. After graduating, I worked as a front-end
                    developer for two years before returning to design. This
                    time, I focused on data visualizations for medical studies.
                    Later on, I worked as a consultant and had the opportunity
                    to be involved in all stages of the product development
                    process, from ideation to evaluation.
                  </Paragraph>
                  <Paragraph>
                    Currently, I am the head of design at tretton37, leading a
                    team of 20 designers. My responsibilities include:
                  </Paragraph>
                  <List
                    items={[
                      <Span>
                        Working on our VP, EVP, and Competence development (in
                        collaboration with a dedicated competence lead).
                      </Span>,
                      <Span>Packaging design services.</Span>,
                      <Span>
                        Ensuring that designers have a home at tretton37.
                      </Span>,
                    ]}
                  />
                </>
              ),
            },
            {
              title: "My credentials",
              h: 3,
              text: (
                <>
                  <Paragraph>
                    <strong>Certified Scrum Product Owner® (CSPO®)</strong>{" "}
                    <br />
                    Scrum Alliance
                  </Paragraph>
                  <Paragraph>
                    <strong>Certified ScrumMaster® (CSM®)</strong> <br />
                    Scrum Alliance
                  </Paragraph>
                  <Paragraph>
                    <strong>UXC Spec. UX Management</strong> <br />
                    Nielson Norman Group
                  </Paragraph>
                  <Paragraph>
                    <strong>UXC Spec. UX Research</strong> <br />
                    Nielson Norman Group
                  </Paragraph>
                  <Paragraph>
                    <strong>BSc. Eng. ITCOM</strong> <br />
                    Ålborg university, Copenhagen, DK
                  </Paragraph>
                  <Paragraph>
                    <strong>Associate, Graphic Design</strong> <br />
                    College of Management, Ashdod, Israel
                  </Paragraph>
                </>
              ),
            },
          ],
        },
      },
      {
        template: SECTION_ELEMENTS.SPACER_MEDIUM,
      },
      {
        template: SECTION_ELEMENTS.TIMELINE,
        data: {
          items: [
            {
              year: "2022",
              events: [
                {
                  title: "Head of Design, tretton37",
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
    bgColor: colors.white,
    paddedUp: true,
    paddedDown: true,
    elements: [
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: "More than a designer",
          h: 2,
          text: (
            <Paragraph>
              Did I mention I make some kick-ass pizzas? So yeah, sourdough,
              Biga, Poolish, you name it. I started making Neapolitan pizzas
              about five years ago. I bought a small Ooni and started
              experimenting. Now, after five years, three pizza ovens, and
              several hundred kilos of imported flour later, I&apos;m getting
              the trick.
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
];
