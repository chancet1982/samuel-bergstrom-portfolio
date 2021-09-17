import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "./Elements/Title";
import colors from "../theme/colors";
import useBgColor from "../utils/useBgColor";
import padding from "../theme/padding";
import typography from "../theme/typography";

const StyledSectionHeader = styled.header`
  position: absolute;
  top: ${padding.vertical.quadruple};
  left: 0;
  display: block;
  width: 2vw;
  height: calc(100% - (2 * ${padding.vertical.quadruple}));

  h2 {
    position: sticky;
    top: 5.5rem;
    margin: 0;
    font-weight: 500;
    writing-mode: vertical-lr;
    width: fit-content;
    display: inline-block;
    line-height: 1;
    transform: rotateZ(180deg);
    font-family: ${typography.bodyFont};

    color: ${({ light }) =>
      light ? colors.text.light.low : colors.text.dark.low};
  }
`;

const SectionHeader = ({ children }) => {
  const light = useBgColor();

  return (
    <StyledSectionHeader light={light}>
      <Title h={2}>{children}</Title>
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
