/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Shared/Paragraph";
import List from "../Components/Shared/List";
import colors from "../theme/colors";
import Span from "../Components/Shared/Span";
import Link from "../Components/Shared/Link";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";

export const VIEW_ABOUT_ME = [
  {
    elements: [
      {
        template: SECTION_ELEMENTS.SECTION_IMAGE,
        data: {
          limitMaxWidth: true,
          imageUrl: "assets/meet-sam.png",
          imageAlt: "A wonderful picture of me being myself",
        },
      },
    ],
  },
  {
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: (
            <>
              Creating <mark>business value</mark> using design.
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
      },
    ],
  },
  {
    bgColor: colors.primaryShade,
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: (
            <>
              Why <mark>Sam</mark>?.
            </>
          ),
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
                  and as external consultant with clients from all sizes.
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
                  virtual. Ideation sessions, discovery workshops, User story
                  mapping etc.
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
          title: (
            <>
              Some of the <mark>companies</mark> I worked with
            </>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.CLIENTS,
        data: {},
      },
    ],
  },
  {
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
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: "My story",
          h: 2,
          text: (
            <>
              <Paragraph>
                I started off 15 years ago when I was hired as a graphic
                designer for a company developing solutions for banks and
                investment groups. There I grew and eventually led a team that
                was responsible for all web-solutions used by 50-70 banks and
                investment groups.
              </Paragraph>
              <Paragraph>
                I then decided to deepen my knowledge and signed up to the
                university where I studied It Communications and New Media
                (while working full-time). This side-tracked my career for a
                short while until I returned to my roots in designing usable
                interfaces.
              </Paragraph>
              <Paragraph>
                I worked for a while with data visualizations for medical
                studies before being hired as a consultant.
              </Paragraph>
              <Paragraph>
                As a consultant, I was hired to work as part of an in-house
                delivery organization where we worked with large organizations
                helping them reach their goals. This included involvement in all
                parts of the client communication, from pre-sales, discovery,
                ideation, design, validation, to building, launching and
                evaluting the impact of our efforts.
              </Paragraph>
              <Paragraph>
                I now work as a UX consultant as part of a larger design team.
                In this role I help the team establish their ways of working and
                improve designs based on user input.
              </Paragraph>
              <Paragraph>
                If any of this sounds interesting or if you just want to start a
                flamewar regarding web accessibility, just{" "}
                <Link to="/contact">reach out</Link>. I’m sure we could sort it
                over some warm slice of pizza and some cold beer.
              </Paragraph>
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
                    "Making sure design has a place in a tech consultancy",
                },
                {
                  title: "UX Consultant & Mentor, Alfa Laval",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
              ],
            },
            {
              year: "2020",
              events: [
                {
                  title: "UX Lead, Mitsubishi Electric",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
                {
                  title: "UX Designer, Fitness 24 Seven",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
                {
                  title: "Senior UX Designer, Loomis",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
              ],
            },
            {
              year: "2019",
              events: [
                {
                  title: "UX Designer, Lumito",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
                {
                  title: "Head of design, Euro Finans",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
                {
                  title: "Senior UX Designer, NoWaste Logistics",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
              ],
            },
            {
              year: "2018",
              events: [
                {
                  title: "UX Designer, Diaverum",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
                {
                  title: "UX Designer, Modity",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
              ],
            },
            {
              year: "2017",
              events: [
                {
                  title: "UX Engineer, Capish",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
              ],
            },
            {
              year: "2016",
              events: [
                {
                  title: "Frontend Developer, NetSet",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
              ],
            },
            {
              year: "2011",
              events: [
                {
                  title: "Head of Web, FundConnect (Accuired by FEFundInfo)",
                  content:
                    "Making sure design has a place in a tech consultancy",
                },
              ],
            },
            {
              year: "2006",
              events: [
                {
                  title: "UI/UX Designer, (Accuired by FEFundInfo)",
                  content:
                    "Making sure design has a place in a tech consultancy",
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
          title: (
            <>
              Just some of my <mark>credentials</mark>:
            </>
          ),
          h: 2,
          text: (
            <List
              items={[
                <Span>
                  <strong>UXC Spec. UX Management</strong>, NNg (Nielson Norman
                  Group)
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
          ),
        },
      },
    ],
  },
  {
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: "Ho, did I mention I make some kick-ass pizzas?",
          h: 2,
          text: (
            <Paragraph>Some of the awesome pizzas I did last summer</Paragraph>
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
