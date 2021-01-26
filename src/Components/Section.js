import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import breakpoints from "../theme/breakpoints";
import SectionHeader from "./SectionHeader";
import padding from "../theme/padding";
import { SectionColorContext } from "../Context/SectionColorContext";
import colors from "../theme/colors";

const StyledSection = styled(motion.section)`
  height: fit-content;
  margin: 0 auto;
  position: relative;
  background-color: white;

  ${({ isSticky }) =>
    isSticky && {
      position: "sticky",
      top: "0",
    }}

  ${({ header }) =>
    header && {
      paddingLeft: padding.horizontal.double,
      paddingRight: padding.horizontal.double,
    }}

  ${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
      paddingTop: padding.vertical.quadruple,
      paddingBottom: padding.vertical.quadruple,
    }}
`;

const Section = ({ header, children, bgColor, isSticky }) => {
  const [, setLight] = useContext(SectionColorContext);
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < breakpoints.tablet);
  }, [setIsMobile, width]);

  useEffect(() => {
    setLight(bgColor !== null && bgColor !== colors.offwhite);
  }, [setLight, bgColor]);

  return (
    <StyledSection header={header} bgColor={bgColor} isSticky={isSticky}>
      {header && !isMobile && <SectionHeader>{header}</SectionHeader>}
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  isSticky: PropTypes.bool,
};

Section.defaultProps = {
  header: null,
  bgColor: null,
  isSticky: false,
};

export default Section;
