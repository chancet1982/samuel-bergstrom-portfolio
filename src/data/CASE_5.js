/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Shared/Paragraph";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";
import colors from "../theme/colors";
import Title from "../Components/Shared/Title";

const SETTINGS = {
  BG_COLOR: colors.offwhite,
  URL: "/cases/5",
  MEDIA_BASE_URL: "assets/case-5",
  KEY_FIGURES: {
    CASE_TYPE: { label: CASE_TYPES.LABEL, value: CASE_TYPES.PRODUCT_DESIGN },
    MY_ROLE: { label: ROLES.LABEL, value: ROLES.UI_UX },
    CASE_PLATFORMS: {
      label: PLATFORMS.LABEL,
      value: [PLATFORMS.MOBILE_ANDROID],
    },
    TOOLS_AND_METHODS: {
      label: TOOLS_AND_METHODS.LABEL,
      renderAsList: true,
      value: [
        TOOLS_AND_METHODS.FIELD_STUDIES,
        TOOLS_AND_METHODS.COMPETITOR_ANALYSIS,
        TOOLS_AND_METHODS.FLOW_MAPPING,
        TOOLS_AND_METHODS.PROTOTYPING,
        TOOLS_AND_METHODS.USABILITY_TESTING,
      ],
    },
    CASE_YEAR: { label: "Year:", value: "2018" },
    CASE_DURATION: { label: "Duration:", value: "2 months" },
  },
};

export const CASE_5 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseUrl: SETTINGS.URL,
  thumbnail: {
    bgColor: SETTINGS.BG_COLOR,
    caption: {
      overline: "Renal Care",
      title: <>Self-service Kiosk</>,
      text: <>Speeding up admissions and discharge in dialysis clinics.</>,
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
              overline: "Renal Care",
              title: <>Self-service Kiosk</>,
              h: 1,
              text: (
                <Paragraph xxl>
                  Speeding up admissions and discharge in dialysis clinics.
                </Paragraph>
              ),
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
                <Paragraph xl>
                  My client, one of the largest private renal care providers in
                  the world. It employs more than 11 000, treating over 40 000
                  patients suffering from kidney failure. They operate more than
                  400 clinics across 22 countries.
                </Paragraph>
                <Paragraph xl>
                  Admission and discharge blocked the treatment stations and
                  required staff intervention for every patient. I helped our
                  client create a self-service kiosk for patient admission and
                  discharge for all clinics.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Background",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>An unexpected problem is blocking dialysis treatments</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Renal patients are a very specific group. On top of their
                  illness (Kidney failure) most of them suffer from a vast array
                  of other conditions due to background diseases, such as
                  diabetes, and age-related problems such as loss of hearing
                  cognitive degradation loss of motor control, and deteriorating
                  eyesight.
                </Paragraph>
                <Title h={4}>
                  Weighing dialysis patients is blocking treatment stations
                </Title>
                <Paragraph>
                  Dialysis patients need to register their weight before and
                  after every treatment. This is done to both ensure proper
                  treatment and to follow up on patients’ health when not in the
                  clinics. This means that until their weight is registered
                  their treatment cannot be terminated and the treatment station
                  is blocked.
                </Paragraph>
                <Title h={4}>
                  Manual, time consuming, and error prone process.
                </Title>
                <Paragraph>
                  It is a manual process in which patients disconnect from the
                  dialysis machines, queue up for taking their weight, and then
                  communicate this back to the medical staff. This is very
                  error-prone and time-consuming process in which, almost all
                  patients require assistance to ensure that the correct weight
                  is entered into the systems.
                </Paragraph>
                <Title h={4}>Added complexity weighing wheelchairs users</Title>
                <Paragraph>
                  On top of that upwards of 10% of their patients use
                  wheelchairs which creates an additional challenge: A patient
                  needs to be moved from the treatment stations to a temporary
                  wheelchair, then taken to a special scale from which nurses
                  deduct the weight of the temporary wheelchair manually.
                </Paragraph>
              </>
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
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-1.jpg`,
                imageAlt: "?",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-2.jpg`,
                imageAlt: "Co-creating wireframes",
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/mood-3.jpg`,
                imageAlt: "Co-creating wireframes",
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
            title: <>Self service to expedite admission and discharge</>,
            h: 4,
            text: (
              <>
                <Paragraph>
                  The client asked us to deliver a self-admission and discharge
                  system in order to free their staff, shorten admission times,
                  and free up treatment stations.
                </Paragraph>
                <Paragraph>
                  Every admission/discharge we need to achieve 2 things:
                  Identifying patients (without disclosing their identity), and
                  registering their weight. In some cases, our system needs to
                  allow staff to assist patients and correct invalid
                  measurements. On the surface, these are simple tasks, but
                  having to support multiple languages, operate in over 20
                  countries, be accessible and easy enough for our grandparents
                  to use things get complicated. All of that is of course before
                  we’re taking into account the specific impairments that are
                  common for renal patients. We needed to do some homework.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      paddedUp: true,
      header: "Process",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title:
              "Designing for the elderlies, Accessibility, GDPR, and much more",
            text: (
              <>
                <Paragraph>
                  There are plenty of reports about designing for the elderly
                  and accessibility. So we did our homework and read through a
                  lot of material hoping to find a way that will allow patients
                  to assist their care-givers.
                </Paragraph>
                <Paragraph>
                  We conducted field studies, competitor analysis, interviewed
                  hospital staff, and patients to collect as much information as
                  possible.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/personas.jpg`,
            imageAlt:
              "Personas, 3 distincs user groups that have contact surface with the app",
            caption:
              "Personas, 3 distincs user groups that have contact surface with the app",
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.INSIGHTS,
          data: {
            title: <>General research findings:</>,
            h: 2,
            bgColor: colors.offwhite,
            isTwoColumnsOnDesktop: true,
            items: [
              {
                title: "Manual input of information:",
                text: "Based on research elderly type more than 3 times slower compared to young adults For patients with NP this is even more challenging as they lose sensation in their fingertips so we should expect that manual input would be time-consuming and error prone. Any manual input should be limited to the minimum and errors are to be expected.",
              },
              {
                title: "Patient identification & GDPR concerns:",
                text: "Patients had no hard time selecting their names from a list. However, openly displaying a list of full names raised concerns about GDPR compliance. When showing only partial names, staff pointed out that in some countries, you had 6 patients with the same name scheduled for the same shift.",
              },
              {
                title: "Weighing patients:",
                text: "I looked into different ways of registering patients’ weight. From nowadays shouting, through manually inputting values, to fully automated hardware integrations. Shouting is ineffective and error-prone. Hardware proved too costly and complex to implement. Manually inputting values were sub-optimal but much cheaper to implement. ",
              },
              {
                title: "Accounting for wheelchairs:",
                text: "Accurately following the patient weight is crucial for dialysis. In the clinics, patients using a wheelchair suffer the most. Every wheelchair varies in weight so caregivers move patients to a “reference chair” with known weight, then manually calculate the weight of the patient (without the chair). A process that is far from ideal for both patients and staff. ",
              },
            ],
          },
        },
      ],
    },
    {
      paddedUp: true,
      header: "Proposal",
      elements: [
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>2 approaches to the same problem</>,
            text: (
              <>
                <Paragraph>
                  After researching the problem area, looking at other check-in
                  systems in other clinics, and talking to both staff and
                  patients. It became apparent that any manual solution would be
                  insufficient. Any such solution would be error-prone and would
                  require staff involvement.
                </Paragraph>
                <Paragraph>
                  On the other hand, creating an automated system would be very
                  costly and potentially hard to implement due to the different
                  hardware found in different clinics across the globe.
                </Paragraph>
                <Paragraph>
                  I presented both options to the client and discussed the pros
                  and cons of both approaches.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.COLUMNS,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/side-by-side-1.jpg`,
                imageAlt: "Auto check-in",
                title: "Auto check-in using facial recognition and OCR",
                text: (
                  <Paragraph>
                    In the automated solution, I suggested using facial
                    recognition for patient identification. Weight would be
                    recorded using an external camera with OCR. This workaround
                    was necessary. Clinics used too many models of scales to do
                    any real integration.
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/side-by-side-2.jpg`,
                imageAlt: "Manual check-in",
                title: "Manual input of identify and weight",
                text: (
                  <Paragraph>
                    In the manual solution, patients would identify themselves
                    by selecting their name from a list of patients scheduled
                    for treatment. We needed to implement an additional question
                    as followup in case several patients shared a name (A likely
                    scenario according in some countries) Once the patient
                    identified him/herself, they would manually enter their
                    weight.
                  </Paragraph>
                ),
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
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>If at first, you don’t succeed.</>,
            text: (
              <>
                <Paragraph>
                  Our initial design aimed to included colorful illustrations
                  that were friendly and joyful. It followed the same design
                  language used in other products for this client. The interface
                  was forgiving, allowing users to correct mistakes, and a
                  “help” button was added to all screens allowing patients to
                  call for assistance when needed.
                </Paragraph>
                <Paragraph>
                  All colors were tested for contrast ratios, hit areas were
                  tested to be sufficiently large, but as testing later showed
                  the design simply didn’t work. Patients could not distinguish
                  clickable elements. The illustrations did not serve a purpose
                  but were decorative and distracting and generally the system
                  was too unfamiliar. Texts were too long and didn’t provide
                  enough clarity.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/design.jpg`,
            imageAlt: "One of the patients during our interview",
            caption: "Patients during our interview",
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>Simplicity wins every time.</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  It was back to the drawingboard. Elderlies use kiosks
                  regularly, ATMs for example, where utility, simplicity, and
                  fermiliarity play a key role. The new design was stripped from
                  all decorative elements, contrast ratios were increased, and
                  signifiers added in order to make the design more usable.
                </Paragraph>
                <Paragraph>
                  This was a deviation from their corporate identity and brand
                  guidelines, I shared my idea with the PO and we agreed it was
                  worth testing.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/wip.jpg`,
            imageAlt: "Workflow",
            caption: "Some phases from my work in this project",
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-1.png`,
                imageAlt: "Patient Identification",
                title: "Patient Identification",
                text: (
                  <>
                    <Paragraph>Patient Identification</Paragraph>
                    <Paragraph>
                      Patients identify themselves by selecting the first letter
                      of their name, then they are presented with a list of
                      first names and the first letter of the last name. If
                      muplitple patients share a name combination a followup
                      question will be shown.
                    </Paragraph>
                    <Paragraph>
                      <strong>Note: </strong> this is not an optimal solution.
                      Names globally come in many different standards, so this
                      might fail later, it was however decided to go with this
                      solution as it existing patient records are stored. In
                      hindsight, this is not a good solution.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-2.png`,
                imageAlt: "Multi-Language support",
                title: "Multi-Language support",
                text: (
                  <Paragraph>
                    This interface needs to be used by patients in more than 20
                    differnent countries and would need to support even
                    right-to-left languages. The interface language is
                    customizable per clinic but in case patients are visiting
                    from another country they will be able to change the
                    interface language to any supported language.
                  </Paragraph>
                ),
              },
              {
                imageUrl: `${SETTINGS.MEDIA_BASE_URL}/sneakpeek-3.png`,
                imageAlt: "Registering patients’ weight",
                title: "Registering patients’ weight",
                text: (
                  <Paragraph>
                    Manually registering patients’ weight was designed as a
                    fallback in case automatically registering the weight failed
                    or was not available in a specific clinic.{" "}
                  </Paragraph>
                ),
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
          template: SECTION_ELEMENTS.SECTION_IMAGE,
          data: {
            imageUrl: `${SETTINGS.MEDIA_BASE_URL}/validation.jpg`,
            imageAlt:
              "Participant during usability testing, first time ever using a tablet",
            caption:
              "Participant during usability testing, first time ever using a tablet",
          },
        },
        {
          template: SECTION_ELEMENTS.SPACER_MEDIUM,
        },
        {
          template: SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT,
          data: {
            title: <>2 days, 20 tests, and an overhaul</>,
            text: (
              <>
                <Paragraph>
                  Like most things, Design is hard to get right the first time.
                  We allowed for several days of intensive rounds of testing
                  using the REIT method. Using this method, the input from every
                  round of tests is the basis for changes for the following
                  version. It allows for quick iterations and reaching a better
                  level of “maturity” in a far shorter time.
                </Paragraph>
                <Paragraph>
                  During those tests, it became apparent that the hospital staff
                  was quite accustomed to using tablets had no problems
                  assisting patients. Some patients however experienced problems
                  navigating their way and identifying buttons as clickable
                  elements. UI changes were introduced making the design more
                  familiar and improving the overall experience.
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
            results: [
              {
                value: "+1.6 mil.",
                description: "Treatment station hours freed *",
              },
              {
                value: "+3.3 mil.",
                description: "Staff & patients hours saved *",
              },
            ],
            text: (
              <Paragraph small>
                * Estimate based on current number of patients and calculated
                per anum.
              </Paragraph>
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
