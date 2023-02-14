import { v4 as uuid } from "uuid";
import React from "react";
import Section from "./Section/Section";
import SectionElementsRenderer from "./SectionElementsRenderer";
import SectionColorContextProvider from "../Context/SectionColorContext";

const SectionsRenderer = ({ sections }) =>
  sections.map(
    ({
      elements,
      header,
      sectionTitle,
      bgColor,
      isSticky,
      paddedUp,
      paddedDown,
      fullScreen,
    }) => (
      <SectionColorContextProvider key={uuid()}>
        <Section
          header={header}
          sectionTitle={sectionTitle}
          bgColor={bgColor}
          isSticky={isSticky}
          paddedUp={paddedUp}
          paddedDown={paddedDown}
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
