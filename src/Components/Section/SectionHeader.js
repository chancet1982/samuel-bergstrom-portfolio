import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../Shared/Title";
import colors from "../../theme/colors";
import useBgColor from "../../utils/useBgColor";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";

const StyledSectionHeader = styled.header`
  position: sticky;
  top: 8rem;
  left: 0;
  display: block;
  width: calc(50% - 1280px / 2 - ${padding.horizontal.double});
  text-align: right;
  z-index: -1;
  max-width: ${sizes.sectionHeaderWidthLimit};

  h4 {
    margin: 0;
    line-height: 1;
    display: inline-block;
    padding-bottom: ${padding.vertical.half};
    margin-bottom: ${padding.vertical.half};
    color: ${({ light }) =>
      light ? colors.text.light.low : colors.text.dark.low};
    box-shadow: inset 0px -0.125rem 0px 0rem ${({ light }) => (light ? colors.text.light.low : colors.text.dark.low)};
  }
`;

const SectionHeader = ({ children }) => {
  const light = useBgColor();

  return (
    <StyledSectionHeader light={light}>
      <Title h={4}>{children}</Title>
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
