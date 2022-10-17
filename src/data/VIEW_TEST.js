/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import Paragraph from "../Components/Shared/Paragraph";
import Title from "../Components/Shared/Title";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";

export const VIEW_TEST = [
  {
    elements: [
      {
        template: SECTION_ELEMENTS.TEXTBOX,
        data: {
          title: <>Collaboration and co-creation</>,
          imageUrl: "assets/me-3.jpg",
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
      {
        template: SECTION_ELEMENTS.INSIGHTS,
        data: {
          title: <>Research findings and application:</>,
          h: 2,
          bgColor: "purple",
          text: (
            <Paragraph>
              We learned a lot about the work environment. This was not a
              research lab, but an assembly line these technicians slicing,
              sanding, filing, and preparing tissue samples in hectic pase.
            </Paragraph>
          ),
          items: [
            {
              title: "Production line, not a lab",
              text: "After visiting the clinics and interviewing lab-technicians it was evident that technicians would rather have a solution that is fully automated. Digital pathology was already adding additional workload on lab personnel. In healthcare, it is a known fact that there is a shortage of pathologists. A lesser-known fact however is that the bottleneck for diagnosis isn’t pathologists but actually the process for producing digital tissue scans.",
            },
            {
              title: "Dust is the real enemy",
              text: "Due to scanners being overly sensitive (slides are getting stuck if their labels are protruding) every slide needs to be sanded by hand. This creates dust that later sets inside the scanners, leads to unwanted artifacts, requires daily cleaning, and increases the scanner’s failure rate considerably. It is safe to assume, a lot of lives would have been saved if only scanners were a little more tolerant towards protruding labels. ",
            },
            {
              title: "We’re solving the wrong problem",
              text: "In retrospect, it was clear that the issue isnt providing better cancer diagnosis. Nor was it the lack of pathologists. If at all the product should be able to provide a pre-diagnosis evaluation in order to free up pathologists to deal with the increasing workload. Digital pathology in itself is a xl leap forward. Instead of sending physical tissue samples from one clinic to another, digital copies could be sent. The side-effect however was that it increased the workload on lab personal, reducing their role to manufacturing workers, and creating an environment where speed is all that matters.",
            },
          ],
        },
      },
      {
        template: SECTION_ELEMENTS.KEY_FIGURES,
        data: {
          items: [
            {
              value: "102",
              label: "Survey responses",
            },
            { value: "5", label: "clinics" },
            {
              value: "3",
              label: "countries",
            },
          ],
        },
      },
      {
        template: SECTION_ELEMENTS.OVERVIEW,
        data: {
          text: (
            <>
              <Paragraph xl>
                A world-leading integrated cash distribution network had a
                problem. Their couriers were using Windows mobile devices for
                monitoring their daily routes. These devices were old, slow, and
                increasingly hard to replace in case of failure.
              </Paragraph>
              <Paragraph xl>
                They decided to move the application to a new device running
                Android. I was tasked to migrate the UI from the existing app to
                a new platform.
              </Paragraph>
            </>
          ),
          toolsAndMethods: [
            TOOLS_AND_METHODS.INTERVIEWS,
            TOOLS_AND_METHODS.FLOW_MAPPING,
            TOOLS_AND_METHODS.MOCKUPS,
            TOOLS_AND_METHODS.PROTOTYPING,
          ],
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
        template: SECTION_ELEMENTS.CASE_FOOTER,
      },
      {
        template: SECTION_ELEMENTS.FOOTER,
      },
    ],
  },
];
