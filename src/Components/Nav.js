/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useWindowScroll, useWindowSize } from "react-use";
import { useScrollDirection } from "../utils/useScrollDirection";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import { SplashAnimationFinishedContext } from "../Context/SplashAnimationFinishedContext";
import { NavBgColorContext } from "../Context/NavBgColorContext";
import { CursorContext } from "../Context/CursorContext";
import Logo from "./Nav/Logo";
import MenuToggler from "./Nav/MenuToggler";
import Menu from "./Nav/Menu";
import MobileMenu from "./Nav/MobileMenu";
import shouldUseLightText from "../utils/shouldUseLightText";

const StyledNav = styled(motion.nav)`
  height: 5.5rem;
  position: fixed;
  top: 0;
  background-color: transparent;
  width: 100%;
  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
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
  const [navBgColor] = useContext(NavBgColorContext);

  const { width } = useWindowSize();
  const isDesktop = width >= breakpoints.desktop;

  const scrollDirection = useScrollDirection();

  const [expanded] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const location = useLocation();

  // TODO: resetting the cursor on route change, this should happen elsewhere...
  useEffect(() => {
    setCursorText("");
    setCursorVariant("default");
  }, [location, setCursorText, setCursorVariant]);

  useEffect(() => {
    setIsLight(shouldUseLightText(navBgColor));
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
        type: "spring",
        bounce: 0.125,
        duration: 0.6,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
    hide: { y: "-100%" },
  };

  const [animationFinished] = useContext(SplashAnimationFinishedContext);
  const navRef = useRef(null);

  const [hasFocus, setHasFocus] = useState(false);

  const handleFocusChange = () => {
    if (!navRef.current) return;

    setHasFocus(Boolean(navRef.current.querySelector("a:focus-visible")));
  };

  /* TODO: implement a better logo that only shows once you scroll past a certain point */
  return animationFinished ? (
    <StyledNav
      ref={navRef}
      $opaque={navState === "opaque"}
      $navBgColor={navBgColor}
      $isLight={isLight}
      onFocusCapture={() => handleFocusChange()}
      onBlurCapture={() => handleFocusChange()}
      initial="show"
      animate={
        scrollDirection === "down" &&
        ((isDesktop && !hasFocus) || (!expanded && !isDesktop && !hasFocus))
          ? "hide"
          : "show"
      }
      variants={navVariants}
    >
      <Logo isLight={isLight} />

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
