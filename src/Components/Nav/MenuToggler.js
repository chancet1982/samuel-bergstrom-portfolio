/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import colors from "../../theme/colors";
import { MenuExpandedContext } from "../../Context/MenuExpandedContext";
import padding from "../../theme/padding";

const StyledMenuToggler = styled(motion.a)`
  width: ${padding.insideElements.tripple};
  height: ${padding.insideElements.tripple};
  box-sizing: border-box;
  align-self: center;
  margin: 0;
  right: ${padding.outsideElements.double};
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: block;
  z-index: 1;

  span {
    display: block;
    position: absolute;
    height: ${padding.insideElements.quarter};
    border-radius: 2px;
    width: ${padding.insideElements.double};
    margin: 0 auto;
    background: ${({ $isLight }) =>
      $isLight ? colors.text.light.high : colors.text.dark.high};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
  }

  span:nth-child(1) {
    top: 12px;

    ${({ $expanded }) =>
      $expanded && {
        top: "24px",
        width: "0%",
        left: "50%",
      }}
  }

  span:nth-child(2) {
    top: 24px;

    ${({ $expanded }) =>
      $expanded && {
        transform: "rotate(45deg)",
      }}
  }

  span:nth-child(3) {
    top: 24px;

    ${({ $expanded }) =>
      $expanded && {
        transform: "rotate(-45deg)",
      }}
  }

  span:nth-child(4) {
    top: 36px;
    ${({ $expanded }) =>
      $expanded && {
        top: "24px",
        width: "0%",
        left: "50%",
      }}
  }
`;

function MenuToggler({ isLight }) {
  const [expanded, setExpanded] = useContext(MenuExpandedContext);

  return (
    <StyledMenuToggler
      onClick={() => setExpanded(!expanded)}
      $isLight={isLight || expanded}
      $expanded={expanded}
    >
      <span />
      <span />
      <span />
      <span />
    </StyledMenuToggler>
  );
}

MenuToggler.propTypes = {
  isLight: PropTypes.bool.isRequired,
};

export default MenuToggler;
