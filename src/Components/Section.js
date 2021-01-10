import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import breakpoints from "../theme/breakpoints";
import SectionHeader from "./SectionHeader";
import padding from "../theme/padding";

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

const Section = (props) => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < breakpoints.tablet);
  }, [setIsMobile, width]);

  const { header, children } = props;

  return (
    <StyledSection {...props}>
      {header && !isMobile && <SectionHeader>{header}</SectionHeader>}
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  bgColor: PropTypes.string,
  padding: PropTypes.bool,
  isSticky: PropTypes.bool,
};

Section.defaultProps = {
  header: null,
  fullWidth: false,
  bgColor: null,
  padding: true,
  isSticky: false,
};

export default Section;
