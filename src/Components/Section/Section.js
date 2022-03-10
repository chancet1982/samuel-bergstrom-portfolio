import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import breakpoints from "../../theme/breakpoints";
import SectionHeader from "./SectionHeader";
import padding from "../../theme/padding";
import { SectionColorContext } from "../../Context/SectionColorContext";
import colors from "../../theme/colors";

const StyledSection = styled(motion.section)`
  height: fit-content;
  margin: 0 auto;
  position: relative;

  ${({ isSticky }) =>
    isSticky && {
      position: "sticky",
      top: "0",
    }}

  ${({ header, isPadded }) =>
    (header || isPadded) && {
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

const Section = ({ header, children, bgColor, isSticky, isPadded }) => {
  const [, setLight] = useContext(SectionColorContext);
  const { width } = useWindowSize();
  const isMobile = width < breakpoints.desktop;

  useEffect(() => {
    setLight(
      bgColor !== null &&
        bgColor !== colors.offwhite &&
        bgColor !== colors.primaryShade
    );
  }, [setLight, bgColor]);

  return (
    <StyledSection
      header={header}
      bgColor={bgColor}
      isSticky={isSticky}
      isPadded={isPadded}
    >
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
  isPadded: PropTypes.bool,
};

Section.defaultProps = {
  header: null,
  bgColor: null,
  isSticky: false,
  isPadded: false,
};

export default Section;
