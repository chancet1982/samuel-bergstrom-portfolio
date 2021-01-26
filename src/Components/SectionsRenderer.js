import { v4 as uuid } from "uuid";
import React from "react";
import Section from "./Section";
import ElementsRenderer from "./ElementsRenderer";
import SectionColorContextProvider from "../Context/SectionColorContext";

const SectionsRenderer = ({ sections }) =>
  sections.map(({ elements, header, bgColor, isSticky }) => (
    <SectionColorContextProvider key={uuid()}>
      <Section header={header} bgColor={bgColor} isSticky={isSticky}>
        {elements.map(({ data, template }) => (
          <ElementsRenderer
            key={uuid()}
            elementKey={uuid()}
            data={data}
            template={template}
          />
        ))}
      </Section>
    </SectionColorContextProvider>
  ));

export default SectionsRenderer;
