import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "./Elements/Title";
import { ElementColorContext } from "../Context/ElementColorContext";
import { SectionColorContext } from "../Context/SectionColorContext";
import { ViewColorContext } from "../Context/ViewColorContext";
import colors from "../theme/colors";

const StyledSectionHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 2vw;
  height: 100%;

  h1 {
    position: sticky;
    top: 5.5rem;
    margin: 0;
    font-weight: 500;
    writing-mode: vertical-lr;
    padding: 2rem 0;
    width: fit-content;
    display: inline-block;
    line-height: 1;
    transform: rotateZ(180deg);
    font-family: "Fira Sans", sans-serif;

    color: ${({ light }) =>
      light ? colors.text.light.low : colors.text.dark.low};
  }
`;

const SectionHeader = ({ children }) => {
  const [hasViewBgColor] = useContext(ViewColorContext);
  const [hasSectionBgColor] = useContext(SectionColorContext);
  const context = useContext(ElementColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const hasElementBgColor = !context ? false : context[0];

  const light = hasViewBgColor || hasSectionBgColor || hasElementBgColor;

  return (
    <StyledSectionHeader light={light}>
      <Title h={1}>{children}</Title>
    </StyledSectionHeader>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.node,
};

SectionHeader.defaultProps = {
  children: "overline",
};

export default SectionHeader;
