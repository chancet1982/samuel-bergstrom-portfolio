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

  ${({ $isSticky }) =>
    $isSticky && {
      position: "sticky",
      top: "0",
    }}

  /* TODO: add the ability for sections to have padding and not just based on the bgColor */
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

  /* TODO: this is only used once (in the contact form) should most likely be handled there */
  ${({ $isPadded }) =>
    $isPadded && {
      paddingLeft: padding.horizontal.double,
      paddingRight: padding.horizontal.double,
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
  isPadded,
  paddedUp,
  paddedDown,
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
      $isPadded={isPadded}
      $paddedUp={paddedUp}
      $paddedDown={paddedDown}
    >
      {header && !isMobile && <SectionHeader>{header}</SectionHeader>}
      {sectionTitle && <Title h={2}>{sectionTitle}</Title>}
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
  isPadded: PropTypes.bool,
  paddedUp: PropTypes.bool,
  paddedDown: PropTypes.bool,
};

Section.defaultProps = {
  header: null,
  sectionTitle: null,
  bgColor: null,
  isSticky: false,
  isPadded: false,
  paddedUp: false,
  paddedDown: false,
};

export default Section;
