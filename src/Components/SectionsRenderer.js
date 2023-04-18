import { v4 as uuid } from "uuid";
import React from "react";
import Section from "./Section/Section";
import SectionElementsRenderer from "./SectionElementsRenderer";
import SectionColorContextProvider from "../Context/SectionColorContext";
import HorizontalScrollingSection from "./Section/HorizontalScrollingSection";

const SectionsRenderer = ({ sections }) =>
  sections.map(
    ({
      elements,
      header,
      sectionTitle,
      isCentered,
      h,
      bgColor,
      navBgColor,
      isSticky,
      paddedUp,
      paddedDown,
      marginUp,
      marginDown,
      fullScreen,
      horizontal,
    }) =>
      horizontal ? (
        <SectionColorContextProvider key={uuid()}>
          <HorizontalScrollingSection bgColor={bgColor}>
            {elements.map(({ data, template }) => (
              <SectionElementsRenderer
                key={uuid()}
                elementKey={uuid()}
                data={data}
                template={template}
              />
            ))}
          </HorizontalScrollingSection>
        </SectionColorContextProvider>
      ) : (
        <SectionColorContextProvider key={uuid()}>
          <Section
            header={header}
            sectionTitle={sectionTitle}
            isCentered={isCentered}
            h={h}
            bgColor={bgColor}
            navBgColor={navBgColor}
            isSticky={isSticky}
            paddedUp={paddedUp}
            paddedDown={paddedDown}
            marginUp={marginUp}
            marginDown={marginDown}
            fullScreen={fullScreen}
          >
            {elements.map(({ data, template }) => (
              <SectionElementsRenderer
                key={uuid()}
                elementKey={uuid()}
                data={data}
                template={template}
              />
            ))}
          </Section>
        </SectionColorContextProvider>
      )
  );

export default SectionsRenderer;
