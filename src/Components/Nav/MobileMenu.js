import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import colors from "../../theme/colors";
import MenuLink from "./MenuLink";
import { MenuExpandedContext } from "../../Context/MenuExpandedContext";
import breakpoints from "../../theme/breakpoints";

const StyledMobileMenu = styled(motion.menu)`
  position: absolute;
  top: 0rem;
  right: 0;
  width: 80vw;
  max-width: ${breakpoints.tablet}px;
  margin: 0;
  height: calc(100vh - 5.5rem);
  background: ${colors.offblack};
  padding: 5.5rem 0 0 0;
  display: flex;
  flex-direction: column;
`;

function MobileMenu({ isLight }) {
  const [expanded] = useContext(MenuExpandedContext);

  const menuVariants = {
    expanded: {
      x: "5%",
      transition: {
        type: "spring",
        duration: 0.3,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
    collapsed: {
      x: "100%",
      transition: {
        type: "spring",
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };

  const menuLinks = [
    { to: "/", text: "Home", end: true },
    { to: "/about", text: "About me" },
    { to: "/cases", text: "Cases" },
    { to: "/contact", text: "Get in touch" },
  ];

  return (
    <StyledMobileMenu
      initial="collapsed"
      animate={expanded ? "expanded" : "collapsed"}
      variants={menuVariants}
    >
      {menuLinks.map(({ to, text, end }) => (
        <MenuLink key={to} to={to} isLight={isLight} end={end}>
          {text}
        </MenuLink>
      ))}
    </StyledMobileMenu>
  );
}

MobileMenu.propTypes = {
  isLight: PropTypes.bool.isRequired,
};

export default MobileMenu;
