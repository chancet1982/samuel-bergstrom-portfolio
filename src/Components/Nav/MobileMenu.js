import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import colors from "../../theme/colors";
import MenuLink from "./MenuLink";
import { MenuExpandedContext } from "../../Context/MenuExpandedContext";
import breakpoints from "../../theme/breakpoints";
import { MENU_LINKS } from "../../data/dictionaries/MENU_LINKS";

const StyledMobileMenu = styled(motion.menu)`
  position: absolute;
  top: 0rem;
  right: 0;
  width: 80vw;
  max-width: ${breakpoints.tablet}px;
  margin: 0;
  height: calc(100vh - 16rem);
  background: ${colors.offblack};
  padding: 8rem 0;
  display: flex;
  flex-direction: column;

  > a {
    max-height: 8vh;
    min-height: 4rem;
  }
`;

const StyledOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  width: 100vw;
  height: 100vh;
`;

function MobileMenu({ isLight }) {
  const [expanded, setExpanded] = useContext(MenuExpandedContext);

  const menuVariants = {
    expanded: {
      x: "5%",
      transition: {
        type: "spring",
        duration: 0.4,
        delay: 0.2,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
    collapsed: {
      x: "100%",
      transition: {
        type: "spring",
        duration: 0.4,
        when: "afterChildren",
      },
    },
  };

  const overlayVariants = {
    expanded: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    collapsed: { opacity: 0 },
  };

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [expanded]);

  return (
    <>
      <StyledOverlay
        initial="collapsed"
        animate={expanded ? "expanded" : "collapsed"}
        variants={overlayVariants}
        onClick={() => setExpanded(false)}
      />
      <StyledMobileMenu
        initial="collapsed"
        animate={expanded ? "expanded" : "collapsed"}
        variants={menuVariants}
      >
        {MENU_LINKS.map(({ to, text, end }) => (
          <MenuLink key={to} to={to} isLight={isLight} end={end}>
            {text}
          </MenuLink>
        ))}
      </StyledMobileMenu>
    </>
  );
}

MobileMenu.propTypes = {
  isLight: PropTypes.bool.isRequired,
};

export default MobileMenu;
