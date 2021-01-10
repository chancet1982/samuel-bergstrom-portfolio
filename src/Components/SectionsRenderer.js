import { v4 as uuid } from "uuid";
import React from "react";
import Section from "./Section";
import ElementsRenderer from "./ElementsRenderer";

const SectionsRenderer = ({ sections }) =>
  sections.map(({ elements, header, bgColor, isSticky }) => (
    <Section header={header} key={uuid()} bgColor={bgColor} isSticky={isSticky}>
      {elements.map(({ data, template }) => (
        <ElementsRenderer
          key={uuid()}
          elementKey={uuid()}
          data={data}
          template={template}
        />
      ))}
    </Section>
  ));

export default SectionsRenderer;
