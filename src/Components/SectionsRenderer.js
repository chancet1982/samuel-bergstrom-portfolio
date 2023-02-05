import { v4 as uuid } from "uuid";
import React from "react";
import Section from "./Section/Section";
import SectionElementsRenderer from "./SectionElementsRenderer";
import SectionColorContextProvider from "../Context/SectionColorContext";

const SectionsRenderer = ({ sections }) =>
  sections.map(
    ({ elements, header, bgColor, isSticky, paddedUp, paddedDown }) => (
      <SectionColorContextProvider key={uuid()}>
        <Section
          header={header}
          bgColor={bgColor}
          isSticky={isSticky}
          paddedUp={paddedUp}
          paddedDown={paddedDown}
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
