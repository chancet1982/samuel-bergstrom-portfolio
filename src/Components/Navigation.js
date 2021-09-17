/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
/* import PropTypes from "prop-types"; */
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useWindowScroll, useWindowSize } from "react-use";
import { useScrollDirection } from "../utils/useScrollDirection";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import { ReactComponent as Logo } from "../assets/logo.svg";
import colors from "../theme/colors";
import typography from "../theme/typography";
import useFluidTypography from "../utils/useHeadlinesFluidTypography";

const StyledNavigation = styled(motion.nav)`
  height: 5.5rem;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  z-index: 2;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  ${({ opaque }) =>
    opaque && {
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow: "0 1px 16px rgba(0,0,0,0.16)",
    }};

  @media print {
    display: none;
  }
`;

const StyledLogo = styled.div`
  align-self: center;
  color: ${colors.text.dark.high};
  font-weight: 600;
  padding-right: ${padding.horizontal.half};
`;

const StyledMenu = styled(motion.menu)`
  @media (max-width: ${breakpoints.desktop - 1}px) {
    position: absolute;
    top: 0rem;
    right: 0;
    width: 100vw;
    height: calc(100vh - 11rem);
    background: ${colors.darkgray};
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
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
  justify-content: flex-end;
`;

const StyledNavLink = styled(NavLink)`
  font-size: ${typography.size}rem;
  font-family: ${typography.bodyFont};

  text-decoration: none;
  font-weight: 400;
  margin: 0;

  &.active {
    font-weight: 600;
  }

  @media (max-width: ${breakpoints.desktop - 1}px) {
    color: ${colors.text.light.medium};
    ${({ mobileFluidType }) => mobileFluidType};
    font-family: ${typography.headlineFont};
    display: block;
    padding: 0 3vw;
    flex: 1;
    height: calc(25vh - 11rem / 4);
    line-height: calc(25vh - 11rem / 4);
    width: 100%;
    text-align: center;

    &.active {
      color: ${colors.text.light.high};

      background-color: ${colors.primary};
    }
  }

  @media (min-width: ${breakpoints.desktop}px) {
    padding: 0.75rem 1.25rem;
    color: ${colors.text.dark.medium};

    transition: all 0.5s !important;

    &:hover {
      color: ${colors.text.dark.high};
    }

    &.active {
      color: ${colors.text.dark.high};
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
    background: ${colors.text.dark.high};
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

const Navigation = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= breakpoints.desktop;

  const scrollDirection = useScrollDirection();

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

  const menuTogglerClick = () => {
    if (!isDesktop) setExpanded(!expanded);
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

  const fluidType = useFluidTypography(4, false);

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
        <Link to="/" onClick={menuTogglerClick}>
          <Logo />
        </Link>
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
          fluidType={fluidType}
          exact
          to="/"
          onClick={menuTogglerClick}
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          fluidType={fluidType}
          to="/about"
          onClick={menuTogglerClick}
        >
          About me
        </StyledNavLink>
        <StyledNavLink
          fluidType={fluidType}
          to="/cases"
          onClick={menuTogglerClick}
        >
          Cases
        </StyledNavLink>
        <StyledNavLink
          fluidType={fluidType}
          to="/contact"
          onClick={menuTogglerClick}
        >
          Get in touch
        </StyledNavLink>
      </StyledMenu>
    </StyledNavigation>
  );
};

Navigation.propTypes = {};

export default Navigation;
