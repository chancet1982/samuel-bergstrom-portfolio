/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Elements/Paragraph";
import List from "../Components/Elements/List";
import colors from "../theme/colors";
import Span from "../Components/Elements/Span";
import Link from "../Components/Elements/Link";
import Title from "../Components/Elements/Title";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";

export const VIEW_ABOUT_ME = [
  {
    elements: [
      {
        template: SECTION_ELEMENTS.IMAGE_GALLERY,
        data: {
          template: IMAGE_GALLERY_TEMPLATES.ONE_IMAGE_FULLSIZE,
          limitMaxWidth: true,
          images: [
            {
              imageUrl: "assets/meet-sam.png",
              imageAlt: "A wonderful picture of me being myself",
            },
          ],
        },
      },
    ],
  },
  {
    header: "Why Sam?",
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: (
            <>
              Meet <mark>Sam</mark>
            </>
          ),
          h: 1,
          text: (
            <>
              <Paragraph huge>
                A digital product designer, engineer, Speaker, Mentor,
                Accessibility enthusiast, father, husband, and quite a nice guy.
              </Paragraph>
            </>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
        data: {
          listTitle: "Why Sam?",
          items: [
            {
              imageUrl: "assets/designer.png",
              imageAlt: "Designer",
              title: "Me looking all designery and stuff",
              text: (
                <>
                  <Paragraph>
                    15 years of industry experience. Awesome designer! come and
                    buy!.
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
                    virtual.
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
                    Experience in facilitating various workshops. In-person and
                    virtual.
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
                    Experience in facilitating various workshops. In-person and
                    virtual.
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
    header: "Testimonials",
    isPadded: true,
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
          title: "User value",
          h: 3,
          text: (
            <>
              <Paragraph>
                Every designer claims to be user centric, I am no different, I
                honestly love what I do and really aim to make the world a
                better place one pixel at a time. I believe in creating business
                value via design.
              </Paragraph>
              <Title h={3}>Business value</Title>
              <Paragraph>
                It can be hard to convey the business value of design. I started
                my career in the financial sector where worked with very complex
                systems. I am no stranger to management meetings, OKRs KPIs and
                communicating/projecting business value via design.
              </Paragraph>
              <Title h={3}>Techical feasibility</Title>
              <Paragraph>
                As designers, we need to know the understand our medium. As an
                Engineer, I am far more likely to create technically feasable
                designs. Because I know what it would take to implement a
                design, I can often create designs that are far less (resource)
                demanding
              </Paragraph>
              <Paragraph>
                I personally am a semi-decent coder focusing on the front-end
                (mostly React & Vue) I do this because it forces me to drink my
                own soup. I know what is implementable and what is just Dribbble
                material. It helps me communicate better with team members and
                it allows me to test my ideas at a fidelity level that is
                impossible even using current prototyping tools. I simply do it
                because it makes me a better designer.
              </Paragraph>
              <Title h={2}>Free-time?</Title>
              <Paragraph>
                When I’m not working I’m most likely chasing down my kids,
                trying to prevent the next disaster from happening, from houses
                on fire to cats in dishwashers that wonders of parenthood are
                endless.
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
