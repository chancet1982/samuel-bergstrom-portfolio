import styled from "styled-components";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ElementColorContext } from "../../Context/ElementColorContext";
import { SectionColorContext } from "../../Context/SectionColorContext";
import { ViewColorContext } from "../../Context/ViewColorContext";

const styleCite = (size, lh, margin) => `
  font-size: ${size}rem;
  margin-top: ${margin}rem;
  margin-bottom: ${margin * 3}rem;
  line-height: ${lh};
`;

const StyledCite = styled.cite`
  color: ${({
    light,
    theme: {
      colors: { text },
    },
  }) => (light ? text.light.medium : text.dark.medium)};

  ${({
    theme: {
      typography: { size, lh, margin },
    },
  }) => styleCite(size, lh, margin)}

  display: block;
  /*margin-top: 0.5rem;*/

  :before {
    display: inline-block;
    content: "-";
    width: 1rem;
    margin-left: -1rem;
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  }
`;

const Cite = ({ children }) => {
  const [hasViewBgColor] = useContext(ViewColorContext);
  const [hasSectionBgColor] = useContext(SectionColorContext);

  const context = useContext(ElementColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const hasElementBgColor = !context ? false : context[0];

  const light = hasViewBgColor || hasSectionBgColor || hasElementBgColor;

  return <StyledCite light={light}>{children}</StyledCite>;
};

Cite.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cite;
