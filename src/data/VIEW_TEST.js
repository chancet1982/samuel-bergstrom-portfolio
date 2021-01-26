/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Elements/Paragraph";
import Title from "../Components/Elements/Title";

export const VIEW_TEST = [
  {
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: <>Collaboration and co-creation</>,
          text: (
            <>
              <Title h={1}>Headline h1</Title>
              <Title h={2}>Headline h2</Title>
              <Title h={3}>Headline h3</Title>
              <Title h={4}>Headline h4</Title>
              <Title h={5}>Headline h5</Title>
              <Paragraph>
                We needed to support multiple platforms and devices. We didnt
                want to create an “android version” and an “iOS” version so
                instead we made an app that was neither.
              </Paragraph>
              <Paragraph>
                It was meant to be purely Diaverum, playful and colorful without
                reducing its accessability.
              </Paragraph>
              <Paragraph>
                We focused on adding micro interactions to reduce confusion when
                things “just vanish from the screen” but before it was time to
                implement it we needed to make sure it actually works. We needed
                to put it to the test and see if real users will find it easy to
                use.
              </Paragraph>
              <Paragraph>
                But how do you test an app for clinics that operate globally?
                where can you find old patients that will be willing to test out
                a new application for improving their wellbeing?
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
