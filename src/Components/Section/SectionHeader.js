import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "../Shared/Title";
import colors from "../../theme/colors";
import useBgColor from "../../utils/useBgColor";
import padding from "../../theme/padding";

const StyledSectionHeader = styled(motion.header)`
  position: sticky;
  top: 0;
  left: 0;
  display: block;
  width: calc(50% - 1280px / 2 - ${padding.horizontal.half});
  text-align: right;
  z-index: -1;
  height: 0;

  h5 {
    margin: 0;
    line-height: 1;
    display: inline-block;
    padding-bottom: ${padding.vertical.half};
    margin-bottom: ${padding.vertical.half};
    color: ${({ light }) =>
      light ? colors.lighten.medium : colors.darken.medium};
    box-shadow: inset 0px -0.125rem 0px 0rem ${({ light }) => (light ? colors.lighten.medium : colors.darken.medium)};
    position: relative;
    top: 7rem;
  }
`;

function SectionHeader({ children }) {
  const light = useBgColor();

  return (
    <StyledSectionHeader light={light}>
      <Title h={5}>{children}</Title>
    </StyledSectionHeader>
  );
}

SectionHeader.propTypes = {
  children: PropTypes.node,
};

SectionHeader.defaultProps = {
  children: "overline",
};

export default SectionHeader;
