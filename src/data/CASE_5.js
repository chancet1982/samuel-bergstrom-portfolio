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
                  required staff intervention for every patient.
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
                  Renal patients are a very specific group. Mostly elderly,
                  suffering from different impairments such as diabetes, motor,
                  cognitive, visory, and hearing impairments.
                </Paragraph>
                <Paragraph>
                  Dialysis patients need to register their weight before and
                  after every treatment. This is done to both ensure proper
                  treatment and to follow up on patients health when not in the
                  clinics. This means that until their weight is registered
                  their treatment cannot be terminated and the treatment station
                  is blocked.
                </Paragraph>
                <Paragraph>
                  This is a manual process in which patients need to be
                  disconnected from the dialysis machines. Then patients queue
                  up for taking their weight and then communicate this back to
                  the medical staff.
                </Paragraph>
                <Paragraph>
                  This is very error prone and time consuming and almost all
                  require assistance to ensure that the correct weight in
                  entered into the systems.
                </Paragraph>
                <Paragraph>
                  On top of that upwards of 10% of their patients use
                  wheelchairs which creates an additional challange: A patient
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
                  The client asked us to deliver a self admission and discharge
                  system to free their staff and shorten admission times to free
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
                  Early in the process we realised that we need to achieve 3
                  main goals: Identifying patients (without disclosing their
                  identity), registering their weight, and allowing staff to
                  assist and correct invalid measurements.
                </Paragraph>
                <Paragraph>
                  On the surface these are simple tasks, but having to support
                  multiple languages, oparate in over 20 countries, be
                  accessible and easy enough for our grandparents to use. On top
                  that is even before accounting to specific impariments that
                  are common for renal patients. We needed to do some homework.
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
                  There is plenty of reports that provide insights regarding
                  tech and “elderlies”. then there are reports about how to make
                  accessible applications. So we did our homework and read
                  through a lot of material hoping to find a way that will allow
                  patients to assist their care-givers.
                </Paragraph>
                <Paragraph>
                  We conducted field studies, competitor analysis, interviewed
                  hospital staff and patients for collect as much information as
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
            title: <>Identification & authentication</>,
            h: 5,
            text: (
              <>
                <Paragraph>
                  Manual input of people’s identifying details is time
                  consuming. Specially considering the target audience. we set
                  out to find a solution in which we could gather that
                  information automatically without involving the patients.
                  After this the patients will need to authenticate their
                  identity to prevent errors and potential impersonations.
                </Paragraph>
                <Paragraph>
                  <strong>Solution:</strong> We suggested using a facial
                  recognition software and cameras to fully automate the
                  identification and authentication. On top of that a manual
                  “assistive mode” in which care-givers will be able to assist
                  patients that need help.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Registering patients’ weight</>,
            h: 5,
            text: (
              <>
                <Paragraph>
                  Registering patients weight before and after treatment is an
                  important step for dialysis. patients manually shouting their
                  weight to the nearest care-giver just proved ineffective and
                  error prone. Hardware integration with noumerous models of
                  weights available all around the world prooved too costly and
                  manual input was sub-optimal and error prone.
                </Paragraph>
                <Paragraph>
                  <strong>Solution:</strong> We suggested using OCR readers
                  mounted on a camera feed directly above the weight itself.
                  doing this, elimintated the need for hardware integration and
                  required software only.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Accounting for wheelchairs</>,
            h: 5,
            text: (
              <>
                <Paragraph>
                  Ideally when weight is crusial for treatment you want to be
                  accurate. In order to get accurate readings you will aim at
                  weighing people in the morning, naked, and after their first
                  toilet visit. In the clinics patient's are weighed fully
                  clothed, in different times based on their treatment schedule
                  and available treatment station. For patients using a
                  wheelchair things get trickier. Every wheelchair has a
                  different weight. In most clinics, caregivers will move
                  patients to a "reference chair" with known weight, then
                  manually deduct the weight of that chair from the reading on
                  the display. A process which is far from ideal for both
                  patients and staff.
                </Paragraph>
                <Paragraph>
                  <strong>Solution:</strong> Instead of using reference
                  wheelchairs, it is possible to register which patients are
                  using a wheelchair and store the weight of each patients chair
                  in the system. That way "accounting" for wheelchairs can
                  happen automatically. Using this approach, the patient get
                  weighed using their own wheelchair, and the system
                  automatically deducts the known weight of the chair from the
                  recorded weight.
                </Paragraph>
                <Paragraph>
                  <strong>Note:</strong> This approach is not perfect, staff
                  intervention might still be required when patients replace
                  their wheelchair or in case patients start using a wheelchair.
                  In such cases staff can go into the system and make the
                  required changes.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Legal considerations and GDPR</>,
            h: 5,
            text: (
              <>
                <Paragraph>
                  Looking at the options for identification, it is easy to
                  simply list the patients and ask them to choose their name in
                  the list. This entails some security risks but should provide
                  an "easy way out". But what do you do when you have 2 patients
                  with the same name? This is common in some countries where the
                  staff flaged us that they had sometimes 6 patients with the
                  same name for the same scheduled for the same shift. How can
                  you solve that without compremising patients right to privacy?
                </Paragraph>
                <Paragraph>
                  <strong>Solution:</strong> We decided to split the
                  identification into 2 parts. In order to avoid breach of GDPR
                  in the first step we only presented a list of patients
                  scheduled for treatment and their first name and first letter
                  of their last name. If 2 patients or more had the same
                  combination then a question was presented showing one of the
                  full names, "are you X?" once a full name match was found, if
                  more than one patient had the same first and last name, an
                  additional question was added for their year of birth, old
                  people seemed to be less forgetful of their year of birth
                  compared to their age or exact date of birth.
                </Paragraph>
              </>
            ),
          },
        },
        /* {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Staff assistance</>,
            h: 5,
            text: (
              <>
                <Paragraph>
                  ...
                  <br />
                  <strong>Action - </strong>...
                </Paragraph>
              </>
            ),
          },
        }, */
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
                2 options, the easy way <strong>or the right way</strong>
              </>
            ),
            text: (
              <>
                <Paragraph>
                  After researching the problem area, looking at other check-in
                  systems in other cliincs, and talking to both staff and
                  patients. We seem to reach a dead-end. Any solution that will
                  involve manual input will be error prone, and will require
                  staff involvement.
                </Paragraph>
                <Paragraph>
                  We presented our findings to the client and instead of showing
                  a single solution we presented 2.{" "}
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
                bgColor: "rgba(9, 93, 132, .28)",
                imageUrl: "assets/case-5/sneakpeek-1.png",
                imageAlt: "Auto check-in",
                title: "Auto check-in using facial recognition and OCR",
                text: (
                  <>
                    <Paragraph>
                      In the automated solution we proposed using facial
                      recognition and cameras for identifying the patients.
                      Weight will be automatically registered by using an
                      external camera pointed at the scales display. Hardware
                      integration was complex. We simply couldnt guaruntee that
                      all clinics will use a limited number of models.
                    </Paragraph>
                  </>
                ),
              },
              {
                bgColor: "rgba(9, 93, 132, .28)",
                imageUrl: "assets/case-5/sneakpeek-2.png",
                imageAlt: "Manual check-in",
                title: "Manual input of identify and weight",
                text: (
                  <>
                    <Paragraph>
                      The other solution was more "barebones", patients will
                      have to identify themselves by selecting their name from a
                      list of names on the screen. The names list was limited to
                      only patients that are scheduled for that specific shift.
                      In some countries it is very common that 2 paitents in the
                      shift have the same name. We chose to account for that by
                      adding a followup question asking for the year of birth.
                    </Paragraph>
                    <Paragraph>
                      Once the patient was identified they would have to
                      manually enter their weight. As both steps were error
                      prone we created a forgiving layout allowing to correct
                      mistakes and call for help in any phase.
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
            title: <>If at first you dont succeed.</>,
            flip: true,
            imageUrl: "assets/case-5/design.jpg",
            imageAlt: "One of the patients during our interview",
            caption: "One of the patients during our interview",
            text: (
              <>
                <Paragraph>
                  As the client opted for the manual version for their MVP it
                  was important to make sure that users can identify themselves
                  and register their weight without issues.
                </Paragraph>
                <Paragraph>
                  We mapped out the flows for both the patients and their
                  caregivers. Created scenarios and went on for testing in the
                  actual use environment. Based on the input adjusted the
                  design. We knew we struck gold when an elderly lady using a
                  tablet for the first time was able to check herself in in
                  under 3 minutes.
                </Paragraph>
                <Paragraph>
                  We chose colors that were soothing, accessible and text that
                  is readable even for vision impared. All steps were reversible
                  in order to allow potential errors to be corrected and “help”
                  button was added for assistive mode.
                </Paragraph>
              </>
            ),
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
            title: <>2 days, 20 tests and an overhall</>,
            imageUrl: "assets/case-5/validation.jpg",
            imageAlt:
              "Participant during usability testing, first time ever using a tablet",
            caption:
              "Participant during usability testing, first time ever using a tablet",
            text: (
              <>
                <Paragraph large>
                  Like most things Design is hard to get right the first time.
                  We allowed for several days of intensive rounds of testing
                  using REIT method. Using this method, the input from every
                  round of tests is the basis for changes for the following
                  version. It allowes for quick iterations and reaching a better
                  level of “maturity” in a far shorter time.
                </Paragraph>
                <Paragraph small>
                  During those tests it became apparent that the hospital staff
                  was quite accustomed to using tablets had no problems
                  assisting patients. Some patients however experienced problems
                  navigating their way and identifying buttons as clickable
                  elements. UI changes were introduced making the design more
                  fermiliar and improving the overall experience.
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
  ],
};
