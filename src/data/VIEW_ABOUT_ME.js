/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Elements/Paragraph";
import List from "../Components/Elements/List";

export const VIEW_ABOUT_ME = [
  {
    header: "About Me",
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        h: 1,
        data: {
          title: (
            <>
              Meet <mark>Sam</mark>
            </>
          ),
          text: (
            <>
              <Paragraph>
                I'm a digital product designer, Accessibility nerd, A father,
                husband, and quite a nice guy. Or at least a semi-decent human
                being. During the last 13 years I've worked with many companies
                operation in a wide array of domains. To name a few: Finance,
                healthcare, and e-commerece.
              </Paragraph>
              <Paragraph>
                I believe in creating <strong>practical designs</strong>.
                Designs that are fast to implement, easy to use, and are scaled
                to fit. That requires more than just knowing what looks nice. It
                requires a deeper understanding of business and technology. From
                the business aspect of things, I believe that decisions need to
                be based on evidence, in lack of evidence, its simply guided by
                intuition and opinions. I believe that designers need to
                understand code (not write code) but at least understand the
                medium in which we operate. I write code (mostly React & Vue)
                not to be the best developer but because it forces me to drink
                my own soup. If I know how to develop it, im sure it would be
                impementable. On top of that, it helps me overcome the
                limitations of using typical prototyping tools.
              </Paragraph>
              <Paragraph>
                When im not working I'm most likely chasing down my kids, trying
                to prevent the next disaster from happening at home. While not
                doing that, I make pizza... I love pizza, who doesnt? Well it is
                more of an obssession to be honest. It took over my life a
                couple of years ago and ive never looked back since. If that
                sounds like something you'd like come over, and let's talk over
                a warm slice of pizza and some cold beer
              </Paragraph>
            </>
          ),
          imageUrl: "assets/me.jpg",
          imageAlt: "A wonderful picture of me being myself",
        },
      },
    ],
  },
  {
    header: "Clients",
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
        h: 4,
        data: {
          title: (
            <>
              Just some of my <mark>credentials</mark>:
            </>
          ),
          text: (
            <>
              <List
                items={[
                  <>
                    <strong>UXC Spec. UX Management, Spec. Research</strong>,
                    NNg (Nielson Norman Group)
                  </>,
                  <>
                    <strong>BSc</strong> Eng. ICT, Ålborg university
                  </>,
                  <>
                    <strong>Assoc. Deg.</strong> Graphic Design, College of
                    Management
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
    header: "Timeline",
    elements: [
      {
        template: SECTION_ELEMENTS.TIMELINE,
        data: {
          items: [
            {
              date: "DATE1 from data",
              title: "TITLE1 from data",
              content: "CONTENT1 from data",
            },
            {
              date: "DATE2 from data",
              title: "TITLE2 from data",
              content: "CONTENT2 from data",
            },
            {
              date: "DATE3 from data",
              title: "TITLE3 from data",
              content: "CONTENT3 from data",
            },
          ],
        },
      },
    ],
  },
];
