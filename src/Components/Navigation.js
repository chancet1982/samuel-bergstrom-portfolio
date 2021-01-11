/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from "react";
/* import PropTypes from "prop-types"; */
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useWindowScroll, useWindowSize } from "react-use";
import { AppContext } from "../Context/AppContext";
import { useScrollDirection } from "../utils/useScrollDirection";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import { ReactComponent as Logo } from "../assets/logo.svg";
import colors from "../theme/colors";
import shadows from "../theme/shadows";

const StyledNavigation = styled(motion.nav)`
  height: 5.5rem;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  ${({ opaque }) =>
    opaque && {
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow: "0 1px 16px rgba(0,0,0,0.16)",
    }};
`;

const StyledLogo = styled.div`
  align-self: center;
  color: ${({
    theme: {
      colors: { text },
    },
  }) => text.dark.high};
  font-weight: 600;
  padding-right: ${padding.horizontal.half};
`;

const StyledMenu = styled(motion.menu)`
  @media (max-width: ${breakpoints.desktop - 1}px) {
    position: absolute;
    top: 0rem;
    right: 0;
    width: 100vw;
    height: calc(100vh - 5.5rem);
    background: ${colors.dark};
    padding-top: 5.5rem;
    flex-direction: column;
    z-index: -1;
    align-items: center;
    justify-content: center;
  }

  margin: 0;
  padding: 0;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

//TODO: logo should link back to home
//TODO: menu links need hover on desktop
//TODO: menu link missing link to typography
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 400;
  margin: 0;

  color: ${({
    theme: {
      colors: { text },
    },
  }) => text.light.medium};

  &.active {
    color: ${({
      theme: {
        colors: { text },
      },
    }) => text.light.high};
    font-weight: 600;
  }

  @media (max-width: ${breakpoints.desktop - 1}px) {
    font-size: 3.4529765914192145rem;
    font-family: "Lora", serif;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    color: ${({
      theme: {
        colors: { text },
      },
    }) => text.dark.medium};

    &.active {
      color: ${({
        theme: {
          colors: { text },
        },
      }) => text.dark.high};
    }

    &.primary {
      background-color: ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
      border-radius: 0.25rem;
      ${shadows.short};
      color: ${({
        theme: {
          colors: { text },
        },
      }) => text.dark.high};
      font-weight: 600;
    }
  }

  @media (max-width: ${breakpoints.desktop - 1}px) {
    display: block;
    padding: 0 3vw;
    flex: 1;
    height: calc(25vh - 5.5rem / 4);
    line-height: calc(25vh - 5.5rem / 4);
    width: 100%;
    text-align: center;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    padding: 0.75rem 1.25rem;

    &.primary {
      position: absolute;
      right: 0;
    }
  }
`;

const StyledMenuToggler = styled(motion.a)`
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  align-self: center;
  margin: 0;
  right: 4vw;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: block;
  z-index: 1;

  span {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
    width: 32px;
    margin: 0 auto;
    background: ${({
      theme: {
        colors: { text },
      },
    }) => text.dark.high};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 12px;

    ${({ expanded }) =>
      expanded && {
        top: "24px",
        width: "0%",
        left: "50%",
      }}
  }

  span:nth-child(2) {
    top: 24px;

    ${({ expanded }) =>
      expanded && {
        transform: "rotate(45deg)",
      }}
  }

  span:nth-child(3) {
    top: 24px;

    ${({ expanded }) =>
      expanded && {
        transform: "rotate(-45deg)",
      }}
  }

  span:nth-child(4) {
    top: 36px;
    ${({ expanded }) =>
      expanded && {
        top: "24px",
        width: "0%",
        left: "50%",
      }}
  }
`;

//TODO: Fix nicer menu on mobile
const Navigation = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= breakpoints.desktop;

  const scrollDirection = useScrollDirection();

  const [, setContent] = useContext(AppContext);

  const [expanded, setExpanded] = useState(false);
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
  }, [navState, y]);

  useEffect(() => {
    setExpanded(!!isDesktop);
  }, [isDesktop]);

  const changeLoaderContent = (newContent) => {
    setContent(newContent);
    if (!isDesktop) {
      setExpanded(!expanded);
    }
  };

  const menuTogglerClick = () => {
    setExpanded(!expanded);
  };

  const transition = {
    ease: "anticipate",
    duration: 0.6,
  };

  const menuVariants = {
    expanded: { y: "0%", opacity: 1, transition },
    collapsed: { y: "-100%", opacity: 0, transition },
  };

  const navVariants = {
    show: {
      y: "0%",
      transition: {
        staggerChildren: 0.2,
        ...transition,
      },
    },
    hide: { y: "-100%", transition },
  };
  return (
    <StyledNavigation
      opaque={navState === "opaque"}
      initial="show"
      animate={
        scrollDirection === "down" && (isDesktop || (!expanded && !isDesktop))
          ? "hide"
          : "show"
      }
      variants={navVariants}
    >
      <StyledLogo>
        <Logo />
      </StyledLogo>

      {!isDesktop && (
        <StyledMenuToggler onClick={menuTogglerClick} expanded={expanded}>
          <span />
          <span />
          <span />
          <span />
        </StyledMenuToggler>
      )}

      <StyledMenu
        initial="collapsed"
        animate={expanded ? "expanded" : "collapsed"}
        variants={menuVariants}
      >
        <StyledNavLink
          exact
          to="/"
          onClick={() => changeLoaderContent("SAMUEL BERGSTRÖM")}
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          to="/about"
          onClick={() => changeLoaderContent("About me")}
        >
          About me
        </StyledNavLink>
        <StyledNavLink to="/cases" onClick={() => changeLoaderContent("Cases")}>
          Cases
        </StyledNavLink>
        {/*<StyledNavLink to="/test" onClick={() => changeLoaderContent("Test")}>
          Test
        </StyledNavLink>*/}
        <StyledNavLink
          className="primary"
          to="/contact"
          onClick={() => changeLoaderContent("Get in touch")}
        >
          Get in touch
        </StyledNavLink>
      </StyledMenu>
    </StyledNavigation>
  );
};

Navigation.propTypes = {};

export default Navigation;
