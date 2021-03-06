/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Elements/Paragraph";
import { IMAGE_GALLERY_TEMPLATES } from "./dictionaries/IMAGE_GALLERY_TEMPLATES";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

export const CASE_5 = {
  caseStatus: CASE_STATUS.PUBLISHED,
  caseType: CASE_TYPES.DESIGN,
  thumbnail: {
    overline: "Diaverum",
    title: "TGS-WS",
    imageUrl: "assets/case-5/thumbnail.png",
    coverImageUrl: "assets/case-5/cover.png",
    imageAlt: "assets/case-5/cover.png",
    text: "Self-service with a twist",
    bgColor: "rgba(9, 93, 132, .72)",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Diaverum",
            title: "TGS-WS",
            text: (
              <>
                <Paragraph large>
                  Speeding up adminisions and discharge in dialysis clinics.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-5/cover.png",
            bgColor: "rgba(9, 93, 132, .72)",
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            bgColor: "rgba(99, 182, 187, .72)",
            text: (
              <>
                <Paragraph huge>
                  Diaverum is one of the largest private renal care providers in
                  the world. It employs more than 11 000, treating over 40 000
                  patients suffering from kidney failure. They operate more than
                  400 clinics across 22 countries.
                </Paragraph>
                <Paragraph huge>
                  Admission and discharge blocked the treatment stations and
                  required staff intervention for every patient. I helped our
                  client create a self-service kiosk for patient admission and
                  discharge for all clinics.
                </Paragraph>
              </>
            ),
            myRole: ROLES.UI_UX,
            duration: "2 months",
            platforms: [PLATFORMS.MOBILE_ANDROID],
            toolsAndMethods: [
              TOOLS_AND_METHODS.FIELD_STUDIES,
              TOOLS_AND_METHODS.COMPETITOR_ANALYSIS,
              TOOLS_AND_METHODS.FLOW_MAPPING,
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
            title: <>The problem</>,
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
                <Paragraph>
                  Dialysis patients need to register their weight before and
                  after every treatment. This is done to both ensure proper
                  treatment and to follow up on patients’ health when not in the
                  clinics. This means that until their weight is registered
                  their treatment cannot be terminated and the treatment station
                  is blocked.
                </Paragraph>
                <Paragraph>
                  It is a manual process in which patients disconnect from the
                  dialysis machines, queue up for taking their weight, and then
                  communicate this back to the medical staff.{" "}
                </Paragraph>
                <Paragraph>
                  This is very error-prone and time-consuming process in which,
                  almost all patients require assistance to ensure that the
                  correct weight is entered into the systems.
                </Paragraph>
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
            images: [
              {
                imageUrl: "assets/case-5/mood-1.jpg",
                imageAlt: "?",
              },
              {
                imageUrl: "assets/case-5/mood-2.jpg",
                imageAlt: "Co-creating wireframes",
              },
              {
                imageUrl: "assets/case-5/mood-3.jpg",
                imageAlt: "Co-creating wireframes",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>The goal:</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  The client asked us to deliver a self-admission and discharge
                  system to free their staff, shorten admission times, and free
                  up treatment stations.
                </Paragraph>
              </>
            ),
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
            title: <>3 main goals,</>,
            text: (
              <>
                <Paragraph>
                  Early in the process, we realized that for every
                  admission/discharge we need to achieve 2 things: Identifying
                  patients (without disclosing their identity), and registering
                  their weight.
                </Paragraph>
                <Paragraph>
                  In some cases, our system needs to allow staff to assist
                  patients and correct invalid measurements.
                </Paragraph>
                <Paragraph>
                  On the surface, these are simple tasks, but having to support
                  multiple languages, operate in over 20 countries, be
                  accessible and easy enough for our grandparents to use things
                  get complicated. All of that is of course before we’re taking
                  into account the specific impairments that are common for
                  renal patients. We needed to do some homework.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
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
          template: SECTION_ELEMENTS.IMAGE_WITH_CAPTION,
          data: {
            imageUrl: "assets/case-5/personas.png",
            imageAlt:
              "Personas, 3 distincs user groups that have contact surface with the app",
            bgColor: "rgba(9, 93, 132, .28)",
            caption:
              "Personas, 3 distincs user groups that have contact surface with the app",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>General research findings:</>,
            text: (
              <>
                <Paragraph>
                  <strong>Manual input of information: </strong>Based on
                  research elderly type more than 3 times slower compared to
                  young adults For patients with NP this is even more
                  challenging as they lose sensation in their fingertips so we
                  should expect that manual input would be time-consuming and
                  error prone. Any manual input should be limited to the minimum
                  and errors are to be expected.
                </Paragraph>

                <Paragraph>
                  <strong>Patient identification & GDPR concerns: </strong>
                  Patients had no hard time selecting their names from a list.
                  However, openly displaying a list of full names raised
                  concerns about GDPR compliance. When showing only partial
                  names, staff pointed out that in some countries, you had 6
                  patients with the same name scheduled for the same shift.
                </Paragraph>
                <Paragraph>
                  <strong>Weighing patients:</strong>I looked into different
                  ways of registering patients’ weight. From nowadays shouting,
                  through manually inputting values, to fully automated hardware
                  integrations. Shouting is ineffective and error-prone.
                  Hardware proved too costly and complex to implement. Manually
                  inputting values were sub-optimal but much cheaper to
                  implement.
                </Paragraph>
                <Paragraph>
                  <strong>Accounting for wheelchairs:</strong>Accurately
                  following the patient weight is crucial for dialysis. In the
                  clinics, patients using a wheelchair suffer the most. Every
                  wheelchair varies in weight so caregivers move patients to a
                  “reference chair” with known weight, then manually calculate
                  the weight of the patient (without the chair). A process that
                  is far from ideal for both patients and staff.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Proposal",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: (
              <>
                2 approaches to the same problem,{" "}
                <strong>no clear winner</strong>
              </>
            ),
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
          template: SECTION_ELEMENTS.SIDE_BY_SIDE_IMAGES_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: "assets/case-5/side-by-side-1.png",
                imageAlt: "Auto check-in",
                title: "Auto check-in using facial recognition and OCR",
                text: (
                  <>
                    <Paragraph>
                      In the automated solution, I suggested using facial
                      recognition and cameras for identifying the patients.
                      Weighing patients would be done using a “hack” where
                      instead of using a hardware integration use an external
                      camera pointed at the display of the scales and feed in
                      the values automatically using OCR.
                    </Paragraph>
                    <Paragraph>
                      Clinics simply used too many different scales to make any
                      “real” integration possible so a clever walk-around was
                      the only alternative.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-5/side-by-side-2.png",
                imageAlt: "Manual check-in",
                title: "Manual input of identify and weight",
                text: (
                  <>
                    <Paragraph>
                      The other solution was more “barebones”, patients will
                      have to identify themselves by selecting their name from a
                      list of patients that are scheduled for that shift. In
                      some countries, some names are very common (even in a
                      small group of 20), and an additional identifier had to be
                      used. I proposed using the year of birth as a follow-up
                      question in those cases.
                    </Paragraph>
                    <Paragraph>
                      Once the patient identified him/herself, they would
                      manually enter their weight. At any step, patients can go
                      back and correct their errors or ask for staff assistance.
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
            title: <>If at first, you don’t succeed.</>,
            flip: true,
            imageUrl: "assets/case-5/design.jpg",
            imageAlt: "One of the patients during our interview",
            caption: "One of the patients during our interview",
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
                <Paragraph>
                  For the next version, I opted for a much simpler design
                  removing all illustrations and aimed at a more familiar
                  design. I removed all illustrations, increased the contrast,
                  and text sizes, and provided additional signifiers to
                  interactive elements.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.IMAGE_GALLERY,
          data: {
            template: IMAGE_GALLERY_TEMPLATES.ONE_IMAGE_FULLSIZE,
            images: [
              {
                imageUrl: "assets/case-5/wip.png",
                imageAlt: "Workflow",
                caption: "Some phases from my work in this project",
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT,
          data: {
            items: [
              {
                imageUrl: "assets/case-5/sneakpeek-1.png",
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
                imageUrl: "assets/case-5/sneakpeek-2.png",
                imageAlt: "Multi-Language support",
                title: "Multi-Language support",
                text: (
                  <>
                    <Paragraph>
                      This interface needs to be used by patients in more than
                      20 differnent countries and would need to support even
                      right-to-left languages. The interface language is
                      customizable per clinic but in case patients are visiting
                      from another country they will be able to change the
                      interface language to any supported language.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-5/sneakpeek-3.png",
                imageAlt: "Registering patients’ weight",
                title: "Registering patients’ weight",
                text: (
                  <>
                    <Paragraph>
                      Manually registering patients’ weight was designed as a
                      fallback in case automatically registering the weight
                      failed or was not available in a specific clinic.{" "}
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
      header: "Validation",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>2 days, 20 tests, and an overhaul</>,
            imageUrl: "assets/case-5/validation.jpg",
            imageAlt:
              "Participant during usability testing, first time ever using a tablet",
            caption:
              "Participant during usability testing, first time ever using a tablet",
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
      elements: [
        {
          template: SECTION_ELEMENTS.RESULT,
          data: {
            imageUrl: "assets/case-5/result.png",
            bgColor: "rgba(9, 93, 132, .72)",
            results: [
              {
                value: "1.6+",
                unit: "mil.",
                description: "treatment station hours freed *",
              },
              {
                value: "3.3+",
                unit: "mil.",
                description: "staff & patients hours saved *",
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
      elements: [
        {
          template: SECTION_ELEMENTS.ADDITIONAL_CASES,
        },
        {
          template: SECTION_ELEMENTS.CASE_FOOTER,
        },
        {
          template: SECTION_ELEMENTS.FOOTER,
        },
      ],
    },
  ],
};
