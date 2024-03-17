  {

    template: SECTION_ELEMENTS.TEXTBOX,
    data: {
      flip: true,
      title: <>Illustrations</>,
      h: 3,
      text: (
        <Paragraph>
          Both companies used illustrations made specifically for them but
          they didn’t share a common theme and needed an alignment. Our
          illustrator and marketing team was responsible for aligning all
          illustrations and ensuring consistency, while I made sure these
          were available as symbols and had the same dimensions. This
          ensured that all of the illustrations shared a graphical style
          and that we could use and reuse them in any design project.
        </Paragraph>
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
      template: SECTION_ELEMENTS.COLUMNS,
      data: {
        items: [
          {
            imageUrl: "assets/case-6/zeroheight.png",
            imageAlt: "ZeroHeight",
            title: "ZeroHeight",
            text: (
              <Paragraph>
                We initially explored using zero-height. It offered a Figma
                integration and allowed to extend the pattern library with
                documentation of color rules and even provided a connection
                to Storybook. We eventually decided to move away from it as
                the design system was still in its early stages and not
                mature enough. Every change to a component required manually
                updating ZeroHeight and the added value was simply not worth
                the effort. I believe that ZeroHeight would be of great
                value for more mature design systems but it isn’t that
                effective when introduced too early.
              </Paragraph>
            ),
          },
          {
            imageUrl: "assets/case-6/storybook.png",
            imageAlt: "Storybook",
            title: "Storybook",
            text: (
              <Paragraph>
                I chose to use Storybook for documenting code components. So
                that every new component implemented will be documented and
                available there. It was a new concept for the development
                team, one which they gladly adopted after realizing the
                headaches it prevents. With some tweaking, Storybook can
                accommodate for additional documentation, implementation
                guidelines, and can even be synced automatically with Figma.
              </Paragraph>
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