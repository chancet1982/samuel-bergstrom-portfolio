/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Shared/Paragraph";
import Title from "../Components/Shared/Title";

export const VIEW_LEADERSHIP = [
  {
    paddedUp: true,
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: "Leadership phylosophy",
          h: 1,
          text: (
            <Paragraph large>
              To me leadership is not about a systematic approach. There are
              different goals and circumstances that require different
              approaches to leadership. In some cases, it is about softer
              leadership and nudging results while in others it might be helping
              others reach their goals.
            </Paragraph>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: "Formal leadership",
          h: 1,
          text: (
            <Paragraph large>
              I had different roles throughout the years. Some had direct
              leadership responsibilities while in others I needed to lead by
              influence. In every case, I strived to take small iterative steps
              in the right direction.
            </Paragraph>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: "Community activities and mentorship",
          h: 1,
          text: (
            <>
              <Paragraph large>
                I started my career in design 15 years ago. At that time, a lot
                of the information was not readly available. I since took active
                roles in different constulations to mentor and help fellow
                designers.
              </Paragraph>
              <Title h={4}>Mentorship</Title>
              <Paragraph>
                Active mentor on adplist which is the leading mentorship
                platform with 5000 vetted mentors worldwide.
              </Paragraph>
              <Paragraph>UX mentor for students on ECUtbildning</Paragraph>
              <Paragraph>
                Mentored several collegues during my years. These now work for
                IBM, IKEA, TetraPak and other big names.
              </Paragraph>
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
