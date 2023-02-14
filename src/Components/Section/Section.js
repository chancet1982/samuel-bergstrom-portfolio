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
      paddingTop: padding.vertical.quadruple,
      /* backgroundColor: "red", */
    }}

  ${({ $paddedDown }) =>
    $paddedDown && {
      paddingBottom: padding.vertical.quadruple,
      /* backgroundColor: "green", */
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
      paddingTop: padding.vertical.quadruple,
      paddingBottom: padding.vertical.quadruple,
      marginTop: padding.vertical.quadruple,
      marginBottom: padding.vertical.quadruple,
    }}
`;

function Section({
  header,
  sectionTitle,
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
      {sectionTitle && <Title h={1}>{sectionTitle}</Title>}
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  header: PropTypes.string,
  sectionTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
  bgColor: null,
  isSticky: false,
  paddedUp: false,
  paddedDown: false,
  fullScreen: false,
};

export default Section;
