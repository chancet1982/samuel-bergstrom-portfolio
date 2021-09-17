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
    header: "About Me",
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
              <Title h={2}>Why Sam?</Title>
              <Paragraph>
                Because good design always lives in on the intersection of
                Business value, User value, and technical feasibility. Because
                solving the right problem is often more important than solving
                it the right way. of <strong>practical designs</strong>. Designs
                that are fast to implement, easy to use, and are scaled to fit.
                That requires more than having an “eye” for design. It requires
                a deeper understanding of business and technology. I believe
                that decisions need to be based on evidence, in lack of
                evidence, decisions are based on gut-feeling, intuition, which
                simply creates friction and mediocre results.
              </Paragraph>
              <Title h={3}>User value</Title>
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
    elements: [
      {
        template: SECTION_ELEMENTS.CLIENTS,
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
