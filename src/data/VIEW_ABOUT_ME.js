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
          imageUrl: "assets/meet-sam.jpg",
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
          h: 0,
          text: (
            <>
              <Paragraph huge>
                A digital product designer, engineer, speaker, mentor,
                accessibility enthusiast, father, husband, and quite a nice guy.
              </Paragraph>
            </>
          ),
        },
      },
    ],
  },
  {
    bgColor: colors.primaryShade,
    header: "Why Sam?",
    elements: [
      {
        template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
        data: {
          listTitle: "Why Sam?",
          items: [
            {
              imageUrl: "assets/designer.png",
              imageAlt: "Designer",
              title: "Designer",
              text: (
                <>
                  <Paragraph>
                    15 years of industry experience as UX/UI Designer.
                    Throughout the years I worked in both product companies and
                    as an external consultant. Working with clients from all
                    sizes from small companies to well-known brands with primary
                    focus on eCommerce, Finance. and healthcare.
                  </Paragraph>
                  <Paragraph>
                    Certified UXC, by NNg and an uber-nerd, I have a tendency to
                    keep expanding my knowledge, lately I sparked an interest
                    for Behavioural Design
                  </Paragraph>
                </>
              ),
            },
            {
              imageUrl: "assets/speaker.png",
              imageAlt: "Holding a lecture about accessibility",
              title: "Speaker & Mentor",
              text: (
                <>
                  <Paragraph>
                    Public speaking? No problem. I held both internal and
                    extanal talks sharing my experiences with hundrads of
                    people.
                  </Paragraph>
                  <Paragraph>
                    For me, speaking in-front of an audience is just another
                    excuse to learn more about the a topic. Throughout the years
                    I held talked for different audiences from C-level
                    executives to Students.
                  </Paragraph>
                  <Paragraph>
                    Some of the talks I did: “Inclusive design, beyond the 80%”,
                    “UX Research Methods”, “Microcopy, how to make better
                    products without writing a single line of code?”, and
                    “Practical Design systems” to name a few.
                  </Paragraph>
                </>
              ),
            },
            {
              imageUrl: "assets/facilitator.png",
              imageAlt: "Service blueprinting workshop I did",
              title: "Facilitator",
              text: (
                <>
                  <Paragraph>
                    Experience in facilitating various workshops. In-person and
                    virtual. Ideation sessions, discovery workshops, User story
                    mapping etc.
                  </Paragraph>
                </>
              ),
            },
            {
              imageUrl: "assets/engineer.png",
              imageAlt: "Did I mention I am a unicorn?",
              title: "Engineer",
              text: (
                <>
                  <Paragraph>
                    One of 2 designers (that I actually know) that is an
                    educated engineer. I will not pretend I am a great
                    developer, At best, I am decent. I was good enough to get
                    hired but never good enough to be great. I simply lacked the
                    passion I have for design. Knowing how to code helps me
                    communicate better with developers, helps me create designs
                    that are implementable and I better understand the
                    implications of my design choices.
                  </Paragraph>
                </>
              ),
            },
            {
              imageUrl: "assets/father.png",
              imageAlt: "2 adorable monsters",
              title: "Father",
              text: (
                <>
                  <Paragraph>
                    A father of 2 (plus a dog) means I am no stranger to stress.
                    I deal with chaos (ah sorry a “dynamic environment”) on a
                    dialy basis!.
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
    bgColor: colors.offwhite,
    header: "Clients",
    elements: [
      {
        template: SECTION_ELEMENTS.CLIENTS,
        data: {},
      },
    ],
  },
  {
    header: "Testimonials",
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
    header: "My story",
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
    ],
  },
  {
    header: "Education",
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
            <>
              <List
                items={[
                  <>
                    <Span>
                      <strong>UXC Spec. UX Management</strong>, NNg (Nielson
                      Norman Group)
                    </Span>
                  </>,
                  <>
                    <Span>
                      <strong>BSc</strong> Eng. ICT, Ålborg university
                    </Span>
                  </>,
                  <>
                    <Span>
                      <strong>Assoc. Deg.</strong> Graphic Design, College of
                      Management
                    </Span>
                  </>,
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
              date: "2022",
              title: "Did some Awesome shit!",
              content: "For the following client",
            },
          ],
        },
      },
    ],
  },
  {
    header: "Pizza",
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: "Ho, did I mention I make some kick-ass pizzas?",
          h: 2,
          text: (
            <>
              <Paragraph>
                Some of the awesome pizzas I did last summer
              </Paragraph>
            </>
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
