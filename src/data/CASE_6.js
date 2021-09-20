/* eslint-disable import/prefer-default-export */
import React from "react";
import { SECTION_ELEMENTS } from "./dictionaries/SECTION_ELEMENTS";
import { TOOLS_AND_METHODS } from "./dictionaries/TOOLS_AND_METHODS";
import { ROLES } from "./dictionaries/ROLES";
import { PLATFORMS } from "./dictionaries/PLATFORMS";
import Paragraph from "../Components/Elements/Paragraph";
import { CASE_STATUS } from "./dictionaries/CASE_STATUS";
import { CASE_TYPES } from "./dictionaries/CASE_TYPES";

export const CASE_6 = {
  caseStatus: CASE_STATUS.DEAFT,
  caseType: CASE_TYPES.DesignOps,
  caseUrl: "/cases/6",
  thumbnail: {
    overline: "Euro Finans",
    title: "Design system",
    imageUrl: "assets/case-6/thumbnail.png",
    coverImageUrl: "assets/case-6/cover.png",
    imageAlt: "assets/case-6/cover.png",
    text: "Practical design system for developers and designers alike.",
    bgColor: "rgba(0, 98, 155, .72)",
  },
  details: [
    {
      isSticky: true,
      elements: [
        {
          template: SECTION_ELEMENTS.COVER,
          data: {
            overline: "Finance",
            title: "Design system",
            text: (
              <>
                <Paragraph large>
                  Creating a practical, simple, design system for developers and
                  designers.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/cover.png",
          },
        },
      ],
    },
    {
      elements: [
        {
          template: SECTION_ELEMENTS.OVERVIEW,
          data: {
            bgColor: "rgba(0, 98, 155, .72)",
            text: (
              <>
                <Paragraph huge>
                  One of Sweden’s leading invoicing solutions provider. They are
                  a subsidiary of Prioritet Finans They weren’t geared for
                  scaling. Expanding their digital services platform was
                  impossible without making some drastic changes.
                </Paragraph>
                <Paragraph huge>
                  I was there as head of design, with 2 other designers giving
                  their organization a gentle nudge in the right direction.
                </Paragraph>
              </>
            ),
            myRole: ROLES.HEAD_OF_DESIGN,
            duration: "2 months",
            platforms: [PLATFORMS.DESKTOP],
            toolsAndMethods: [TOOLS_AND_METHODS.SERVICE_DESIGN],
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
                  My client and its parent company were sharing IT resources.
                  Both companies openly compete with each other offering the
                  same services in different geographic locations.
                </Paragraph>
                <Paragraph>
                  They were looking into expanding their digital services. By
                  not only offering an invoicing platform but also a contract
                  generation, and accounting platform. They soon realized that
                  having developers implementing the same set of components
                  across systems isn’t a scaleable strategy.
                </Paragraph>
                <Paragraph>
                  Every change and bugfix took 3 times as long. There were
                  multiple variations of each of the components and no unified
                  experience.
                </Paragraph>
              </>
            ),
          },
        },
        /* {
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
        }, */
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>The goal:</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  My aim in this project was to unify the look and feel of all
                  digital services. Reduce development time, and promote a more
                  efficient work process that will save the client time and
                  money.
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
            title: <>Inventorying</>,
            text: (
              <>
                <Paragraph>
                  Most design systems start off by inventorying. Looking at the
                  different pieces of the puzzle and how they connect. In this
                  case, only one system was in place and several others were in
                  the early stage of development. On top of that Inventorying is
                  a great way to get buy-in, but I was fortunate enough to have
                  the trust and approval to move forward.
                </Paragraph>
                <Paragraph>
                  Instead, My initial activities were to gather all existing
                  material regarding both company’s corporate identities. On top
                  of reaching out to the respective Heads of Marketing, I
                  reviewed their existing services to understand how the
                  guidelines are being used.
                </Paragraph>
                <Paragraph>
                  I had to make a decision before we started, are we approaching
                  this as a mobile-first or desktop-first project? In their
                  case, most traffic to their services was via PCs so we could
                  focus on the desktop experience while of course ensuring that
                  the components are mobile-friendly.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Start with the basics</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  As with many other design systems, I needed to create a strong
                  foundation of typography, buttons, and links so we could later
                  expand on it. So this is exactly what I focused on initially.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            flip: true,
            title: <>Typography</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  My approach to typography is mathematical and functional. I
                  decided to use a module scale. The idea behind a modular scale
                  to use a base font size, for example, 16px. Then use a scale
                  to create all headlines and other elements based on this base
                  size. I chose to use a relatively small modifier to
                  accommodate for high information density (1.25) and created an
                  alternative for mobile (1.125). Surrounding margins were
                  multiples of 0.25 of the sizes. base line-height of 1.5 was
                  used and was decreased by 0.1 per headlines size.
                </Paragraph>
                <Paragraph>
                  This approach is much closer to how things are implemented
                  (1rem = 16px) and allows for better control of the scaling by
                  using a single variable (i.e. modifier). On top of that, it is
                  a solid foundation to later converting the implementation to
                  utilize fluid typography.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/typography.png",
            imageAlt: "?",
            caption: "Example of the typography for desktop",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Colors</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  The color scheme needed to be flexible enough to support 2
                  different corporate identities. For this, I used a shared
                  neutral pallet with primary secondary colors matching each
                  company’s corporate identity.
                </Paragraph>
                <Paragraph>
                  Text colors (both light and dark variations) included 3
                  intensity levels a Concept extensively used by Google’s
                  Material Design. “High contrast” primarily used for elements
                  that should grab the user’s attention. For example headlines,
                  buttons, etc. “Low Contrast” is primarily used to indicate
                  items that are disabled, unavailable, or just less important
                  for example disclaimer text captions, etc. “Medium contrast”
                  is used for everything else.
                </Paragraph>
                <Paragraph>
                  Both the primary and secondary colors included a wider range
                  of shades to provide a broad enough color pallet and support
                  illustrations.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/colors.png",
            imageAlt: "?",
            caption: "1 Color scheme, 2 companies.",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            flip: true,
            title: <>Illustrations</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  Both companies used illustrations made specifically for them
                  but they didn’t share a common theme and needed an alignment.
                  Our illustrator and marketing team was responsible for
                  aligning all illustrations and ensuring consistency, while I
                  made sure these were available as symbols and had the same
                  dimensions. This ensured that all of the illustrations shared
                  a graphical style and that we could use and reuse them in any
                  design project.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/illustrations.png",
            imageAlt: "?",
            caption: "Example of the typography for desktop",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Icons</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  Icons as well were a bag of “Gott & Blandat” with different
                  sizes colors and formats used. I added them to the design
                  system and aligned their colors, strokes, and style. The
                  actual canvas size used for the different icons was also
                  aligned and we ended up with 3 sizes that were to be used for
                  all icons.
                </Paragraph>
                <Paragraph>
                  Icons that were missing or didn’t match the style were
                  recreated by me and exported as SVGs to a React Icon component
                  so that developers would be able to use them right away. SVGs
                  have many advantages compared to other pixel-based formats
                  such as PNG, JPG. The icons are not “bound” to a specific size
                  or color and can even support animations.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/icons.png",
            imageAlt: "?",
            caption: "1 Color scheme, 2 companies.",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            flip: true,
            title: <>Buttons, links, and CTA</>,
            h: 3,
            text: (
              <>
                <Paragraph>
                  Buttons require a minimum touch area of 48px to prevent
                  misclicks. In this case, some of the buttons were smaller and
                  needed to be resized. On top of that, the 2 companies use
                  different styles of buttons. Euro Finans went with round and
                  soft while Prioritet Finans with Hard and Rectangular.
                </Paragraph>
                <Paragraph>
                  After discussing this with the technical leads it was decided
                  that the best way to approach this is by creating 2 sets of
                  buttons (1 for each company) and switching between those as
                  part of the Theme of the implemented products. This is
                  supported by many modern styling frameworks and worked best
                  for our use-case. Both sets included primary and secondary
                  buttons and CTAs with the respective colors and states.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/buttons.png",
            imageAlt: "?",
            caption: "Buttons for Euro Finans & Prioritet finans",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: (
              <>Beyond the basics, organically growing our design system</>
            ),
            h: 2,
            text: (
              <>
                <Paragraph>
                  With a strong foundation in place, a design system was well on
                  its way to become valuable but was still incomplete. We needed
                  to add all missing components to our component library.
                </Paragraph>
                <Paragraph>
                  We already had some of the most basic components (buttons,
                  links, CTAs, Icons) but they were mere atoms. We took a
                  systematic approach to include more and more components as we
                  increased the design systems coverage.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/components.png",
            imageAlt: "?",
            caption: "Some of the components included in the design system",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Thoughts about Atomic Design</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  I tend to follow Brad Frost’s Atomic Design. I first heard of
                  it while I was working as an engineer for a large e-commerce
                  platform and it really fit well with how we actually built
                  components in modern front-end frameworks.
                </Paragraph>
                <Paragraph>
                  Now that it is more common and known in the design community,
                  it is only natural that we would like to leverage having a
                  shared language that both designers and developers can use for
                  describing components.
                </Paragraph>
                <Paragraph>
                  Based on my experience, it is best to consider design systems
                  as a living evolving organism. That means that you don’t have
                  to get them right from the start and instead can just take
                  small steps in the right direction so that the design system
                  grows in a more natural way based on needs, edge cases, covers
                  more use cases and is faster to go live. No design system is
                  actually live until it is used.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote:
              "Simplicity--the art of maximizing the amount of work not done--is essential.",
            cite: "Agile Manifesto",
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Adding components to the design system</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Trying to include too much and to cover all potential edge
                  cases often leads to creating design systems that are overly
                  complex and take longer to create and implement. An
                  alternative approach is to start small and increase the
                  coverage of the system based on needs.
                </Paragraph>
                <Paragraph>
                  Using this approach you start off by selecting a single
                  system. From which you select a single view and include
                  whatever components that are needed to cover that. You ad more
                  and more components as more and more views are added and the
                  more mature the design system becomes.
                </Paragraph>
                <Paragraph>
                  In most cases. I find that looking at needs instead of blindly
                  including “missing components” is a better way to work. For
                  example: if in one place we have filtering options using drop
                  downs and in another, this is done using radio buttons you
                  need to generalize the need and find an approach that will
                  work for both. That way you start considering and documenting
                  use patterns that span across different components and end up
                  with far fewer components to implement that are way more
                  robust.
                </Paragraph>
              </>
            ),
          },
        },
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: <>Governance</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  There are different ways in which one can govern a design
                  system. Some take it as a collaborative approach, while others
                  use a dedicated team or a mix of a single designer leading
                  while others can contribute in their respective fields.
                </Paragraph>
                <Paragraph>
                  In this case, I chose to implement the design system with me
                  leading the process. Other designers were in charge of smaller
                  parts of the system for example one designer was in charge of
                  illustrations, while another was in charge of testing the
                  components.
                </Paragraph>
                <Paragraph>
                  It is also vital to include developers early on in the
                  process. The design system’s components are but only one side
                  of the coin. Design components help designers work faster and
                  more consistently. On the other end, developers need to
                  extract their code components into a shared repository that
                  they can use and reuse across systems. So getting developer
                  buy-in is key. In this case, the front-end lead developer was
                  keen on being a part and his support was invaluable for our
                  success.
                </Paragraph>
              </>
            ),
          },
        },
      ],
    },
    {
      header: "Distribution",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            title: (
              <>
                Exposing the design system, from Figma to Storybook and
                ZeroHeight.
              </>
            ),
            h: 2,
            text: (
              <>
                <Paragraph>
                  Paraphrasing Bill Gates, Any knowledge that is not shared is
                  lost. In the same way, any design system that is not used is
                  better left untreated. A design system that only caters to
                  designers is bound to not be widely supported. So we needed to
                  ensure that developers and other stakeholders see its value
                  and for that, the design system must be made publicly
                  available.
                </Paragraph>
                <Paragraph>
                  On top of that, we wanted to include additional documentation
                  that does not directly relate to specific components. There,
                  Figma reached its limits.
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
                imageUrl: "assets/case-6/zeroheight.png",
                imageAlt: "ZeroHeight",
                title: "ZeroHeight",
                text: (
                  <>
                    <Paragraph>
                      We initially explored using zero-height. It offered a
                      Figma integration and allowed to extend the pattern
                      library with documentation of color rules and even
                      provided a connection to Storybook. We eventually decided
                      to move away from it as the design system was still in its
                      early stages and not mature enough. Every change to a
                      component required manually updating ZeroHeight and the
                      added value was simply not worth the effort. I believe
                      that ZeroHeight would be of great value for more mature
                      design systems but it isn’t that effective when introduced
                      too early.
                    </Paragraph>
                  </>
                ),
              },
              {
                imageUrl: "assets/case-6/storybook.png",
                imageAlt: "Storybook",
                title: "Storybook",
                text: (
                  <>
                    <Paragraph>
                      I chose to use Storybook for documenting code components.
                      So that every new component implemented will be documented
                      and available there. It was a new concept for the
                      development team, one which they gladly adopted after
                      realizing the headaches it prevents. With some tweaking,
                      Storybook can accommodate for additional documentation,
                      implementation guidelines, and can even be synced
                      automatically with Figma.
                    </Paragraph>
                  </>
                ),
              },
            ],
          },
        },
        {
          template: SECTION_ELEMENTS.QUOTE,
          data: {
            quote: "Power comes not from knowledge kept but knowledge shared.",
            cite: "Bill Gates",
          },
        },
      ],
    },
    {
      header: "Summary",
      elements: [
        {
          template: SECTION_ELEMENTS.TEXTBOX,
          data: {
            flip: true,
            title: <>Final thoughts</>,
            h: 2,
            text: (
              <>
                <Paragraph>
                  Depending on when a design system is introduced it can save
                  more or less time for each team member. In design heavy
                  organizations a well-documented design system provides more
                  value than the effort it takes. But often in smaller more
                  “developer-heavy” organizations, creating extensive design
                  systems isn’t really valuable. What is valuable is in-fact the
                  re-use of ready-made components.
                </Paragraph>
                <Paragraph>
                  For Euro Finans, this design system saved countless hours and
                  helped them work more efficiently. It ensured all stakeholders
                  share a “single source of truth” and for the first time
                  introduced a collaboration between marketing, design, and IT.
                  For me personally, it was simply common sense. But for my
                  client, it was an experience that changed how they work.
                </Paragraph>
              </>
            ),
            imageUrl: "assets/case-6/final-toughts.jpg",
            imageAlt:
              "CTO and Legal advisor rocking NNg stickers on their laptops (post project)",
            caption:
              "CTO and Legal advisor rocking NNg stickers on their laptops (post project)",
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
