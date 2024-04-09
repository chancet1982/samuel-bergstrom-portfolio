import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import Title from "../Components/Shared/Title";
import { ROLES } from "./dictionaries/ROLES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import colors from "../theme/colors";

const SETTINGS = {
  BG_COLOR: colors.offwhite,
  URL: "/cases/3",
  MEDIA_BASE_URL: "assets/case-3",
  KEY_FIGURES: {
    CASE_TYPE: { label: CASE_TYPES.LABEL, value: CASE_TYPES.PRODUCT_DESIGN },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.UI_UX },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.TABLET_ANDROID],
    },
    TOOLS_AND_METHODS: {
      label: TOOLS_AND_METHODS.LABEL,
      renderAsList: true,
      value: [
        TOOLS_AND_METHODS.INTERVIEWS,
        TOOLS_AND_METHODS.COMPETITOR_ANALYSIS,
        TOOLS_AND_METHODS.FIELD_STUDIES,
        TOOLS_AND_METHODS.MOCKUPS,
        TOOLS_AND_METHODS.PROTOTYPING,
        TOOLS_AND_METHODS.USABILITY_TESTING,
      ],
    },
    CASE_YEAR: { label: "Year:", value: "2019" },
    CASE_DURATION: { label: "Duration:", value: "7 months" },
  },
};

// eslint-disable-next-line import/prefer-default-export
export const CASE_3 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Healthcare",
      title: <>Digital pathology</>,
      text: <>Tissue scanner interface design</>,
    },
    fgImage: {
      imageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail-desktop.png`,
      mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/thumbnail-mobile.png`,
      imageAlt: "thumbnail",
    },
  },
  details: [
    {
      navBgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_HERO_CASES,
          data: {
            bgColor: SETTINGS.BG_COLOR,
            caption: {
              overline: "Healthcare",
              title: <>Digital pathology</>,
              h: 1,
              text: <Paragraph xl>Tissue scanner interface design</Paragraph>,
            },
            fgImage: {
              imageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-desktop.png`,
              mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/cover-mobile.png`,
              imageAlt: "hero image",
            },
            highlights: [
              [
                SETTINGS.KEY_FIGURES.CASE_TYPE,
                SETTINGS.KEY_FIGURES.CASE_PLATFORMS,
                SETTINGS.KEY_FIGURES.CASE_YEAR,
              ],
              [SETTINGS.KEY_FIGURES.TOOLS_AND_METHODS],
            ],
          },
        },
      ],
    },
    {
      paddedUp: true,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            text: (
              <>
                <Paragraph large>
                  A medical startup that developed a new technology that can
                  revolutionize Cancer diagnosis. Their idea was to provide a
                  view that will only show mutated cells, not healthy tissue. In
                  order to do that they developed a new staining technology
                  unsupported by current-day scanners.
                </Paragraph>
                <Paragraph large>
                  They asked for our help in creating the software for their new
                  tissue scanner that will support their new staining type.
                </Paragraph>
              </>
            ),
          },
        },
        { template: SECTION_ELEMENTS.SPACER_SMALL },
      ],
    },
    {
      header: "Background",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Interface a for medical hardware device",
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
                  My client needed to show that their revolutionary new staining
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
            isPadded: true,
            images: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-1.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-2.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-3.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-4.jpg`,
                imageAlt: "?",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "A proof of concept, nothing more",
            h: 4,
            text: (
              <Paragraph>
                As the focus of this project was creating a scanner to support
                their tech. Certain fundamental questions were left unanswered.
                For Example: do Pathologists even prefer their imaging compared
                to conventional technology. Instead, the sole focus was to
                create the “best” scanner for its intended purpose.
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      header: "Research",
      paddedUp: true,
      paddedDown: true,
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Digital pathology, crash course",
            h: 2,
            text: (
              <>
                <Paragraph>
                  My client invented a new technology that if successful, can
                  revolutionize how we detect and treat cancer. Originally, the
                  scanner was intended to be used by lab technicians and
                  researchers. Later we discovered that these 2 groups have very
                  little in common and decided to focus on Lab Technicians in
                  Pathology labs because simply put, it is a much larger market
                  compared to researchers.
                </Paragraph>
                <Title h={4}>
                  Protopersonas help prioritize potential users
                </Title>
                <Paragraph>
                  They were unsure of where to start, and I knew very little
                  about pathology. So in order to facilitate discussions we
                  created some protopersonas and tried to prioritize their
                  needs.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/personas.jpg`,
            imageAlt: "The personas used for this project",
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Field Studies & Interviews",
            h: 4,
            text: (
              <Paragraph>
                For me this was uncharted waters, I have no background in
                pathology and the team was operating under a lot of assumptions.
                We needed to understand when will the scanner be used, by whom,
                and for what purpose. We agreed on gathering this information
                via Field studies to pathology labs and expert interviews. We
                came in contact with several leading hospitals in the field of
                digital pathology and asked for a visit.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.THREE_IMAGES_TWO_COLUMNS,
            isPadded: true,
            images: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/research-1.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/research-2.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/research-3.jpg`,
                imageAlt: "?",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Collaborating with medical institutions",
            h: 4,
            text: (
              <Paragraph>
                We collaborated with 2 hospitals in Sweden and visited an
                external pathology lab where we spoke to both lab technicians
                and experts within pathology to gain knowledge of their work
                environment, needs, and challenges.
              </Paragraph>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.KEY_FIGURES,
          data: {
            items: [
              {
                value: "2",
                label: "Pathology clinics visited",
              },
              {
                value: "1",
                label: "Specialist Lab",
              },
              {
                value: "13",
                label: "Interviews conducted",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_SMALL,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Pathology clinics, not what you'd expect",
            h: 4,
            text: (
              <Paragraph>
                We learned a lot about the work environment. This was not a
                research lab, but an assembly line these technicians slicing,
                sanding, filing, and preparing tissue samples in hectic pase.
              </Paragraph>
            ),
          },
        },
      ],
    },
    {
      bgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.INSIGHTS,
          data: {
            title: <>Insights:</>,
            h: 2,
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
      ],
    },
    {
      paddedUp: true,
      elements: [
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-1.png`,
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
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-2.png`,
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
      paddedUp: true,
      header: "Design",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
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
            isPadded: true,
            images: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/design-1.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/design-2.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/design-3.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/design-4.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/design-5.jpg`,
                imageAlt: "?",
              },
            ],
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      header: "Validation",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: "Testing without being able to test",
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
                  we’ve identified and tested internally using colleagues that
                  were not members of the team and had no prior knowledge of the
                  field. Properly testing the interface would have required
                  testing in the use environment by lab-technicians but the
                  project was cut short due to circumstances.
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
      navBgColor: SETTINGS.BG_COLOR,
      elements: [
        {
          template: SECTION_ELEMENTS.RESULT,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/result-desktop.png`,
            mobileImageUrl: `${SETTINGS.MEDIA_BASE_URL}/result-mobile.png`,
            bgColor: SETTINGS.BG_COLOR,
            title: <>Final thoughts:</>,
            text: (
              <>
                <Paragraph large>
                  It is impossible to evaluate an ongoing project. Although
                  internal testing was conducted, it was insufficient to uncover
                  specific issues either due to the use environment, user group,
                  or specific use cases. On top of that, the final user
                  experience is not only determined by the interface alone, it
                  is largely dependent on hardware, technology limitations,
                  scanning speed, and other factors.
                </Paragraph>
                <Title h={3}>After thoughts</Title>
                <Paragraph>
                  This scanner is but a first step. It is meant as a proof of
                  concept for the technology. In retrospect a better approach
                  altogether might have been signing up partnerships with
                  existing scanner manufacturers to include support for this new
                  staining technology. Only time will tell if this device will
                  gain traction in pathology clinics.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      paddedUp: true,
      paddedDown: true,
      elements: [
        {
          template: SECTION_ELEMENTS.ADDITIONAL_CASES,
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.FOOTER,
        },
      ],
    },
  ],
};
