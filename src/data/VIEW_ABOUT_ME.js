/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Elements/Paragraph";
import List from "../Components/Elements/List";
import { Link } from "react-router-dom";
import colors from "../theme/colors.js";

//TODO: (later) fix screen transition content setting
export const VIEW_ABOUT_ME = [
  {
    header: "About Me",
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
              <Paragraph>
                I'm a digital product designer, Accessibility nerd, father,
                husband, and quite a nice guy. Or at least a semi-decent human
                being. During the last 13 years, I've worked with many companies
                operating in a wide array of domains. To name a few: Finance,
                healthcare, and e-commerce.
              </Paragraph>
              <Paragraph>
                I believe in creating <strong>practical designs</strong>.
                Designs that are fast to implement, easy to use, and are scaled
                to fit. That requires more than having an “eye” for design. It
                requires a deeper understanding of business and technology. I
                believe that decisions need to be based on evidence, in lack of
                evidence, decisions are based on gut-feeling, intuition, which
                simply creates friction and mediocre results.
              </Paragraph>
              <Paragraph>
                I don’t know if designers should code or not, but believe that a
                basic understanding of code can only make designers better at
                creating designs that are feasible.
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
              <Paragraph>
                When I’m not working I'm most likely chasing down my kids,
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
          imageUrl: "assets/me.jpg",
          imageAlt: "A wonderful picture of me being myself",
        },
      },
    ],
  },
  {
    header: "Clients",
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
                    <strong>UXC Spec. UX Management</strong>, NNg (Nielson
                    Norman Group)
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
    elements: [
      {
        template: SECTION_ELEMENTS.SOCIAL_MEDIA_LINKS,
      },
    ],
  },
];
