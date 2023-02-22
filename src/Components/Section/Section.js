import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import SectionHeader from "./SectionHeader";
import padding from "../../theme/padding";
import { SectionColorContext } from "../../Context/SectionColorContext";
import colors from "../../theme/colors";
import sizes from "../../theme/sizes";
import breakpoints from "../../theme/breakpoints";
import Title from "../Shared/Title";

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
      backgroundColor: $bgColor,
      paddingTop: padding.outsideElements.quadruple,
      paddingBottom: padding.outsideElements.quadruple,
    }}
`;

const StyledSectionTitle = styled(motion.div)`
  padding-bottom: ${padding.insideElements.double};
  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};

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
  isSticky,
  paddedUp,
  paddedDown,
  fullScreen,
}) {
  const [, setLight] = useContext(SectionColorContext);
  const { width } = useWindowSize();
  const isMobile =
    width < sizes.contentWidthLimit + sizes.sectionHeaderWidthLimit;

  useEffect(() => {
    setLight(
      bgColor !== null &&
        bgColor !== colors.offwhite &&
        bgColor !== colors.primaryShade
    );
  }, [setLight, bgColor]);

  return (
    <StyledSection
      $bgColor={bgColor}
      $isSticky={isSticky}
      $paddedUp={paddedUp}
      $paddedDown={paddedDown}
      $fullScreen={fullScreen}
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
  isSticky: PropTypes.bool,
  paddedUp: PropTypes.bool,
  paddedDown: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

Section.defaultProps = {
  header: null,
  sectionTitle: null,
  isCentered: false,
  h: 2,
  bgColor: null,
  isSticky: false,
  paddedUp: false,
  paddedDown: false,
  fullScreen: false,
};

export default Section;
