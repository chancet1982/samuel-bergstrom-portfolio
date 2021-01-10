import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Elements/Paragraph";
import { ROLES } from "./dictionaries/ROLES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";

// eslint-disable-next-line import/prefer-default-export
export const CASE_3 = {
  caseStatus: CASE_STATUS.PUBLISHED,
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
                  tissue. In order to do that they developed a new staining tech
                  unsupported by current-day scanners.
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
                  pathology, tissue samples need to be processed in pathology
                  clinics. These slides are then sent to pathologists to be
                  analyzed. If a second opinion is required then samples need to
                  be physically sent from one clinic to another. Even after
                  treatment, tissue samples need to be kept in storage for a
                  very long period.
                </Paragraph>
                <Paragraph>
                  Lumito needed to show that their revolutionaty new staining
                  technique works. They decided to create their own scanner to
                  help pre-cancer diagnosis. We needed to create an a "control
                  unit" for this new scanner.
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
                  purpose.
                </Paragraph>
                <Paragraph>
                  In order to do that, we defined potential users and their
                  relevant use-cases and environments. The main focus was set to
                  Lab Technicians in Pathology labs as they are the largest
                  potential “winners” for Lumito’s technology.
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
                  technicians and researchers. Laer we discovered that these 2
                  groups have very little in common. So we decided to focus on
                  Lab Technicians in Pathology labs as they are the largest
                  potential “winners” for Lumito’s technology.
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
                  In order to answer these questions we needed to when will the
                  scanner be used. By whom and to what purpose. We agreed on
                  gathering this information via Field studies to pathology labs
                  and expert interviews. We came in contact with several leading
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
                  After visiting the clinics and interviewing lab-technicians,
                  it confirmed our hypothesis. No technician wants to fiddle
                  around with machines while they can do other things. Digital
                  pathology was clearly adding additional workload on lab staff
                  and while there is a shortage of pathologists, the bottleneck
                  for diagnosis is actually the process for producing digital
                  tissue scans. Mechanical sensitivity (slides are getting stuck
                  if the labels are protruding) means that every slide needs to
                  be sanded by hand. This creates dust that later sets inside
                  the scanners leading to unwanted artifacts.
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
                  <>
                    Auto-detection of area of interest, reducing manual labour
                  </>
                ),
                text: (
                  <>
                    <Paragraph>
                      Pathology clinics in Sweden area leading the transition to
                      digital pathology. More and more scans need to be done
                      every day which leads to additional strain. In some
                      clinics,{" "}
                      <strong>
                        technicians spend more than 2 hours every shift manually
                        selecting areas of interest and focus areas
                      </strong>
                      .
                    </Paragraph>
                    <Paragraph>
                      <b>Solution:</b> We decided to add an algorithm to
                      automatically select the area of interest saving
                      technicians many hours of manual repetative work.
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
                      The typical algorithm used in competitor devices looks at
                      "focus points" creating a virtual plane but it often
                      failes, leading to images that are scanned but not
                      focused. These "soft failuers" are extremely problematic
                      as they often identified only after a scan was completed
                      "successfully". At that point, the slide that was already
                      moved elsewhere needs to be retrieved. the current scan
                      needs to be stopped and the sample rescanned with manually
                      added focus points.
                    </Paragraph>
                    <Paragraph>
                      <b>Solution:</b> A different algorithm was used in order
                      to test every picture and its sharpness (think auto-focus
                      on mobile devices) This significantly reduced the amount
                      of failed scans during testing (less than 3%). We added a
                      better evaluation of low quality results and an interface
                      that allowes lab technicians to rescan slides directly in
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
      header: "TODO rewrite me!",
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
                  we've indentified and tested internally using collegues that
                  were not members of the team and had no prior knowledge of the
                  field. Ideally we would have tested using lab-technicians but
                  the project was cut-short due to circumstances.
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
                <Paragraph small>
                  It is hard to evaluate the impact of this project. Although
                  internal testing was conducted, not proper testing was done.
                  The final user experience is not only determined by the
                  interface alone, specially with a hardware project, it is
                  largely dependent on hardware, technology limitation, scanning
                  speeed and other factors.
                </Paragraph>
                <Paragraph>
                  Looking at the narrow perspective of the interface, I am
                  pleased with the result. Only time will tell if this device
                  will gain tracktion in pathology clinics.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
  ],
};
