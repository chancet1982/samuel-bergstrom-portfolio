/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Shared/Paragraph";
import Title from "../Components/Shared/Title";

export const VIEW_TEST = [
  {
    elements: [
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          text: (
            <>
              <Title h={1}>
                A wizard’s job is to vex chumps quickly in fog
              </Title>
              <Title h={2}>
                A wizard’s job is to vex chumps quickly in fog
              </Title>
              <Title h={3}>
                A wizard’s job is to vex chumps quickly in fog
              </Title>
              <Title h={4}>
                A wizard’s job is to vex chumps quickly in fog
              </Title>
              <Title h={5}>
                A wizard’s job is to vex chumps quickly in fog
              </Title>
              <Title h={6}>
                A wizard’s job is to vex chumps quickly in fog
              </Title>
            </>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          text: (
            <>
              <Paragraph xl>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur viverra, quam at porttitor consectetur, libero lectus
                sagittis metus, vel tincidunt felis dui vitae arcu.
              </Paragraph>
              <Paragraph large>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur viverra, quam at porttitor consectetur, libero lectus
                sagittis metus, vel tincidunt felis dui vitae arcu.
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur viverra, quam at porttitor consectetur, libero lectus
                sagittis metus, vel tincidunt felis dui vitae arcu.
              </Paragraph>
              <Paragraph small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur viverra, quam at porttitor consectetur, libero lectus
                sagittis metus, vel tincidunt felis dui vitae arcu.
              </Paragraph>
            </>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: <>Collaboration and co-creation</>,
          h: 2,
          text: (
            <>
              <Paragraph large>
                We needed to support multiple platforms and devices. We didnt
                want to create an “android version” and an “iOS” version so
                instead we made an app that was neither.
              </Paragraph>
              <Paragraph large>
                It was meant to be purely Diaverum, playful and colorful without
                reducing its accessability.
              </Paragraph>
            </>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: <>Collaboration and co-creation</>,
          h: 2,
          text: (
            <>
              <Paragraph>
                We needed to support multiple platforms and devices. We didnt
                want to create an “android version” and an “iOS” version so
                instead we made an app that was neither.
              </Paragraph>
              <Paragraph>
                It was meant to be purely Diaverum, playful and colorful without
                reducing its accessability.
              </Paragraph>
            </>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: <>Collaboration and co-creation</>,
          h: 3,
          text: (
            <>
              <Paragraph>
                We needed to support multiple platforms and devices. We didnt
                want to create an “android version” and an “iOS” version so
                instead we made an app that was neither.
              </Paragraph>
              <Paragraph>
                It was meant to be purely Diaverum, playful and colorful without
                reducing its accessability.
              </Paragraph>
            </>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: <>Collaboration and co-creation</>,
          h: 4,
          text: (
            <>
              <Paragraph>
                We needed to support multiple platforms and devices. We didnt
                want to create an “android version” and an “iOS” version so
                instead we made an app that was neither.
              </Paragraph>
              <Paragraph>
                It was meant to be purely Diaverum, playful and colorful without
                reducing its accessability.
              </Paragraph>
            </>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: <>Collaboration and co-creation</>,
          h: 4,
          text: (
            <>
              <Paragraph small>
                We needed to support multiple platforms and devices. We didnt
                want to create an “android version” and an “iOS” version so
                instead we made an app that was neither.
              </Paragraph>
              <Paragraph small>
                It was meant to be purely Diaverum, playful and colorful without
                reducing its accessability.
              </Paragraph>
            </>
          ),
        },
      },
      {
        template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
        data: {
          title: <>Collaboration and co-creation</>,
          h: 5,
          text: (
            <>
              <Paragraph small>
                We needed to support multiple platforms and devices. We didnt
                want to create an “android version” and an “iOS” version so
                instead we made an app that was neither.
              </Paragraph>
              <Paragraph small>
                It was meant to be purely Diaverum, playful and colorful without
                reducing its accessability.
              </Paragraph>
            </>
          ),
        },
      },
    ],
  },
];
