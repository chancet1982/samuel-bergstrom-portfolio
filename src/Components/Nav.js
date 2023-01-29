/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useWindowScroll, useWindowSize } from "react-use";
import { useScrollDirection } from "../utils/useScrollDirection";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import colors from "../theme/colors";
import { SplashAnimationFinishedContext } from "../Context/SplashAnimationFinishedContext";
import { NavBgColorContext } from "../Context/NavBgColorContext";
import { CursorContext } from "../Context/CursorContext";
import Logo from "./Nav/Logo";
import MenuToggler from "./Nav/MenuToggler";
import Menu from "./Nav/Menu";
import MobileMenu from "./Nav/MobileMenu";

const StyledNav = styled(motion.nav)`
  height: 5.5rem;
  position: fixed;
  top: 0;
  background-color: transparent;
  width: 100%;
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  z-index: 2;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  ${({ $opaque, $navBgColor }) =>
    $opaque &&
    $navBgColor && {
      backgroundColor: $navBgColor,
      boxShadow: "0 1px 16px rgba(0,0,0,0.16)",
    }};

  @media print {
    display: none;
  }
`;

function Nav() {
  const [, setCursorText, , setCursorVariant] = useContext(CursorContext);
  const [navBgColor, setNavBgColor] = useContext(NavBgColorContext);

  const { width } = useWindowSize();
  const isDesktop = width >= breakpoints.desktop;

  const scrollDirection = useScrollDirection();

  const [expanded] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const location = useLocation();

  /* TODO: Resetting bgColor on navigation does not work when leaving a case to a different page (might be a sequencing issue) */
  // Resetting things..
  useEffect(() => {
    setNavBgColor(colors.offwhite);
    setCursorText("");
    setCursorVariant("default");
  }, [location, setNavBgColor, setCursorText, setCursorVariant]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    setIsLight !== null &&
      setIsLight(
        navBgColor !== null &&
          navBgColor !== colors.offwhite &&
          navBgColor !== colors.primaryShade
      );
  }, [setIsLight, navBgColor]);

  const [navState, setNavState] = useState("transparent");
  const { y } = useWindowScroll();

  useEffect(() => {
    if (y >= 120) {
      if (navState !== "opaque") {
        setNavState("opaque");
      }
    } else if (navState !== "transparent") {
      setNavState("transparent");
    }
  }, [navState, y, setNavState]);

  const navVariants = {
    show: {
      y: "0%",
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
    hide: { y: "-100%", duration: 0.6 },
  };

  const [animationFinished] = useContext(SplashAnimationFinishedContext);

  /* TODO: implement a better mobile navigation (side panel style) */
  /* TODO: implement a better logo that only shows once you scroll past a certain point */
  return animationFinished ? (
    <StyledNav
      $opaque={navState === "opaque"}
      $navBgColor={navBgColor}
      $isLight={isLight}
      initial="show"
      animate={
        scrollDirection === "down" && (isDesktop || (!expanded && !isDesktop))
          ? "hide"
          : "show"
      }
      variants={navVariants}
    >
      <Logo />

      {!isDesktop ? (
        <>
          <MenuToggler isLight={isLight} />
          <MobileMenu isLight={isLight} />
        </>
      ) : (
        <Menu isLight={isLight} />
      )}
    </StyledNav>
  ) : null;
}

export default Nav;
