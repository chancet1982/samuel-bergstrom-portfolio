import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Elements/Paragraph";
import { ROLES } from "./dictionaries/ROLES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

// eslint-disable-next-line import/prefer-default-export
export const CASE_3 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseType: CASE_TYPES.DESIGN,
  thumbnail: {
    overline: "Lumens",
    title: "Lumito",
    imageUrl: "assets/case-3/thumbnail.png",
    bgColor: "rgba(0,178, 162, 0.72)",
    imageAlt: "thumbnail",
    text: <>Revolutionizing digital pathology</>,
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Lumito",
            title: "Lumens",
            imageUrl: "assets/case-3/cover.png",
            /* bgColor: "rgba(0,178, 162, 0.72)", */
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            bgColor: "rgba(0,178, 162, 0.72)",
            text: (
              <>
                <Paragraph huge>
                  Lumito is a medical startup that developed a new technology
                  that can revolutionize Cancer diagnosis. Their idea was to
                  provide a view that will only show mutated cells, not healthy
                  tissue. In order to do that they developed a new staining
                  technology unsupported by current-day scanners.
                </Paragraph>
                <Paragraph huge>
                  Lumito asked for our help in creating the software for their
                  new tissue scanner that will support their new staining type.
                </Paragraph>
              </>
            ),
            myRole: ROLES.UI_UX,
            duration: "2 months",
            platforms: [PLATFORMS.DESKTOP, PLATFORMS.TABLET_ANDROID],
            toolsAndMethods: [
              TOOLS_AND_METHODS.INTERVIEWS,
              TOOLS_AND_METHODS.COMPETITOR_ANALYSIS,
              TOOLS_AND_METHODS.FIELD_STUDIES,
              TOOLS_AND_METHODS.MOCKUPS,
              TOOLS_AND_METHODS.PROTOTYPING,
              TOOLS_AND_METHODS.USABILITY_TESTING,
            ],
          },
        },
      ],
    },
    {
      header: "Background",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "Goal",
            h: 2,
            text: (
              <>
                <Paragraph>
                  Digital pathology is a growing field. With traditional
                  pathology, tissue samples need to be processed and physically
                  sent are then sent to pathologists to be analyzed. Even after
                  treatment, tissue samples need to be kept in storage for a
                  very long period.
                </Paragraph>
                <Paragraph>
                  Lumito needed to show that their revolutionary new staining
                  technology works. They decided to create their own scanner to
                  help with pre-cancer diagnosis. I was tasked to create the
                  interface for the control unit for this new scanner.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.FOUR_IMAGES_TWO_COLUMNS,
            images: [
              {
                imageUrl: "assets/case-3/mood-1.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-3/mood-2.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-3/mood-3.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-3/mood-4.jpg",
                imageAlt: "?",
              },
            ],
          },
        },
      ],
    },
    {
      header: "Process",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "Process",
            h: 2,
            text: (
              <>
                <Paragraph>
                  As the focus of this project was creating a scanner to support
                  Lumito’s tech. Certain fundamental questions were left
                  unanswered. For Example: do Pathologists even prefer their
                  imaging compared to conventional technology. Instead, the sole
                  focus was to create the “best” scanner for its intended
                  purpose. purpose.
                </Paragraph>
                <Paragraph>
                  In order to do that, we defined potential users and their
                  relevant use-cases and environments.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "Personas",
            h: 2,
            flip: true,
            text: (
              <>
                <Paragraph>
                  Originally, the scanner was intended to be used by lab
                  technicians and researchers. Later we discovered that these 2
                  groups have very little in common and decided to focus on Lab
                  Technicians in Pathology labs because simply put, it is a much
                  larger market compared to researchers.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-3/personas.png",
            caption: "A picture of the personas defined for this device",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "Field Studies & Interviews",
            h: 2,
            text: (
              <>
                <Paragraph>
                  For me this was uncharted waters, I have no background in
                  pathology and the team was operating under a lot of
                  assumptions. We needed to understand when will the scanner be
                  used, by whom, and for what purpose. We agreed on gathering
                  this information via Field studies to pathology labs and
                  expert interviews. We came in contact with several leading
                  hospitals in the field of digital pathology and asked for a
                  visit.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.THREE_IMAGES_TWO_COLUMNS,
            images: [
              {
                imageUrl: "assets/case-3/research-1.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-3/research-2.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-3/research-3.jpg",
                imageAlt: "?",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Research findings and application:</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  After visiting the clinics and interviewing lab-technicians it
                  was evident that technicians would rather have a solution that
                  is fully automated. Digital pathology was already adding
                  additional workload on lab personnel. In healthcare, it is a
                  known fact that there is a shortage of pathologists. A
                  lesser-known fact however is that the bottleneck for diagnosis
                  isn’t pathologists but actually the process for producing
                  digital tissue scans.
                </Paragraph>
                <Paragraph>
                  Due to scanners being overly sensitive (slides are getting
                  stuck if their labels are protruding) every slide needs to be
                  sanded by hand. This creates dust that later sets inside the
                  scanners, leads to unwanted artifacts, requires daily
                  cleaning, and increases the scanner’s failure rate
                  considerably.
                </Paragraph>
                <Paragraph>
                  In retrospect, a lot of lives would have been saved if only
                  scanners were a little more tolerant towards protruding
                  labels.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: "assets/case-3/sneakpeek-1.png",
                imageAlt: "?",
                title: (
                  <>Auto-detection of area of interest, reducing manual labor</>
                ),
                text: (
                  <>
                    <Paragraph>
                      Pathology clinics in Sweden are leading the transition to
                      digital pathology. More and more scans need to be done
                      every day which leads to additional strain. In some
                      clinics,
                      <strong>
                        {" "}
                        technicians spend more than 2 hours every shift manually
                        selecting areas of interest and focus areas.
                      </strong>
                    </Paragraph>
                    <Paragraph>
                      <b>Solution:</b> We decided to add an algorithm to
                      automatically select the area of interest saving
                      technicians many hours of manual repetitive work.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-3/sneakpeek-2.png",
                imageAlt: "?",
                title: <>Auto-focus, reducing the need for rescans.</>,
                text: (
                  <>
                    <Paragraph>
                      The typical algorithm used by competitor scanners looks at
                      “focus points” creating a virtual plane. This algorithm
                      fails at times, leading to images that are scanned but
                      lack focus. These “soft failures” are extremely
                      problematic as they often identified only after a scan was
                      completed “successfully”. At that point, the slide that
                      was already moved elsewhere needs to be retrieved. The
                      current scan needs to be stopped and the sample rescanned
                      with manually added focus points.
                    </Paragraph>
                    <Paragraph>
                      <b>Solution:</b> A different algorithm was used in order
                      to test every picture and its sharpness (think auto-focus
                      on mobile devices) This significantly reduced the amount
                      of failed scans during testing (less than 3%). We added a
                      better evaluation of low-quality results and an interface
                      that allows lab technicians to rescan slides directly on
                      the results page.
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
      header: "Design",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "Design",
            h: 2,
            text: (
              <>
                <Paragraph>
                  We started off by mapping out the different phases of working
                  with the device. Following this, we focused on what actions
                  should be possible at that phase and what information is
                  required in order to choose the right action.
                </Paragraph>
                <Paragraph>
                  With this in mind, we held some ideation workshops with the
                  client in which we focused on creating the low-fidelity
                  mockups for UI.
                </Paragraph>
                <Paragraph>
                  This was then converted into hi-fidelity UI’s and shared with
                  our team and stakeholders for feedback. After some iterations,
                  the high fidelity mockups were wired to a high fidelity
                  prototype and animation and micro-interactions were added.
                </Paragraph>
                <Paragraph>
                  During the implementation, we worked closely with the
                  development team and the client assisting with information and
                  insights regarding the end-users and weighed in regarding the
                  design when needed.
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
                imageUrl: "assets/case-3/design-1.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-3/design-2.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-3/design-3.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-3/design-4.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-3/design-5.jpg",
                imageAlt: "?",
              },
            ],
          },
        },
      ],
    },
    {
      header: "Validation",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: "Implementation and validation",
            text: (
              <>
                <Paragraph>
                  Throughout the implementation, we regularly presented our
                  progress to stakeholders and end-users. Iterated based on
                  their feedback. Moving from a very vague idea to a functional
                  interface.
                </Paragraph>
                <Paragraph>
                  We then created a series of test based on typical scenarios
                  we&apos;ve identified and tested internally using colleagues
                  that were not members of the team and had no prior knowledge
                  of the field. Properly testing the interface would have
                  required testing in the use environment by lab-technicians but
                  the project was cut short due to circumstances.
                </Paragraph>
                <Paragraph>
                  Even so, my hypothesis was that if people without prior
                  knowledge or experience could understand the interface it is
                  likely that lab-technicians would as well.
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
          template: SECTION_ELEMENTS.RESULT,
          data: {
            imageUrl: "assets/case-3/result.png",
            bgColor: "rgba(0, 178, 162, 0.72)",
            title: <>Final thoughts:</>,
            text: (
              <>
                <Paragraph>
                  It is impossible to evaluate an ongoing project. Although
                  internal testing was conducted, it was insufficient to uncover
                  specific issues either due to the use environment, user group,
                  or specific use cases. On top of that, the final user
                  experience is not only determined by the interface alone, it
                  is largely dependent on hardware, technology limitations,
                  scanning speed, and other factors.
                </Paragraph>
                <Paragraph>
                  Looking at the narrow perspective of the interface, I am
                  pleased with the result. Only time will tell if this device
                  will gain traction in pathology clinics.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
  ],
};
