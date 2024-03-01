import React, { useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import SectionHeader from "./SectionHeader";
import padding from "../../theme/padding";
import { SectionColorContext } from "../../Context/SectionColorContext";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import Title from "../Shared/Title";
import useIsTouchingTop from "../../utils/useIsTouchingTop";
import colors from "../../theme/colors";
import { NavBgColorContext } from "../../Context/NavBgColorContext";

const StyledSection = styled(motion.section)`
  height: fit-content;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;

  ${({ $isSticky }) =>
    $isSticky && {
      position: "sticky",
      top: "0",
    }}

  ${({ $isStickyBottom }) =>
    $isStickyBottom && {
      position: "sticky",
      bottom: "0",
      zIndex: "-1",
    }}    

  ${({ $paddedUp }) =>
    $paddedUp && {
      paddingTop: padding.outsideElements.quadruple,
    }}

  ${({ $paddedDown }) =>
    $paddedDown && {
      paddingBottom: padding.outsideElements.quadruple,
    }}

${({ $marginUp }) =>
    $marginUp && {
      marginTop: padding.outsideElements.quadruple,
    }}

  ${({ $marginDown }) =>
    $marginDown && {
      marginBottom: padding.outsideElements.quadruple,
    }}

  ${({ $fullScreen }) =>
    $fullScreen && {
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}

  ${({ $bgColor }) =>
    $bgColor && {
      background: $bgColor,
      paddingTop: padding.outsideElements.quadruple,
      paddingBottom: padding.outsideElements.quadruple,
    }}
`;

const StyledSectionTitle = styled(motion.div)`
  padding-bottom: ${padding.insideElements.double};
  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};
  box-sizing: border-box;

  ${({ $isCentered }) =>
    $isCentered && {
      textAlign: "center",
    }}

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

function Section({
  header,
  sectionTitle,
  isCentered,
  h,
  children,
  bgColor,
  navBgColor,
  isSticky,
  isStickyBottom,
  paddedUp,
  paddedDown,
  marginUp,
  marginDown,
  fullScreen,
}) {
  const [, setSectionBgColor] = useContext(SectionColorContext);
  const { width } = useWindowSize();
  const isMobile =
    width < sizes.contentWidthLimit + sizes.sectionHeaderWidthLimit;
  const ref = useRef(null);
  const isTouchingTop = useIsTouchingTop(ref);
  const [, setNavBgColor] = useContext(NavBgColorContext);

  useEffect(() => {
    setSectionBgColor(bgColor);
  }, [setSectionBgColor, bgColor]);

  useEffect(() => {
    const color = bgColor || navBgColor;

    if (isTouchingTop) {
      if (color) {
        setNavBgColor(color);
      } else {
        setNavBgColor(colors.offwhite);
      }
    }
  }, [isTouchingTop, setNavBgColor, bgColor, navBgColor]);

  return (
    <StyledSection
      $bgColor={bgColor}
      $isSticky={isSticky}
      $isStickyBottom={isStickyBottom}
      $paddedUp={paddedUp}
      $paddedDown={paddedDown}
      $marginUp={marginUp}
      $marginDown={marginDown}
      $fullScreen={fullScreen}
      ref={ref}
    >
      {header && !isMobile && <SectionHeader>{header}</SectionHeader>}
      {sectionTitle && (
        <StyledSectionTitle $isCentered={isCentered}>
          <Title h={h}>{sectionTitle}</Title>{" "}
        </StyledSectionTitle>
      )}
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  header: PropTypes.string,
  sectionTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isCentered: PropTypes.bool,
  h: PropTypes.number,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  navBgColor: PropTypes.string,
  isSticky: PropTypes.bool,
  isStickyBottom: PropTypes.bool,
  paddedUp: PropTypes.bool,
  paddedDown: PropTypes.bool,
  marginUp: PropTypes.bool,
  marginDown: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

Section.defaultProps = {
  header: null,
  sectionTitle: null,
  isCentered: false,
  h: 2,
  bgColor: null,
  navBgColor: null,
  isSticky: false,
  isStickyBottom: false,
  paddedUp: false,
  paddedDown: false,
  marginUp: false,
  marginDown: false,
  fullScreen: false,
};

export default Section;
