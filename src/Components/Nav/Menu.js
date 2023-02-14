import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import MenuLink from "./MenuLink";

const StyledMenu = styled(motion.menu)`
  margin: 0;
  padding: 0;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Menu({ isLight }) {
  const menuLinks = [
    { to: "/", text: "Home", end: true },
    { to: "/about", text: "About me" },
    { to: "/cases", text: "Design" },
    { to: "/leadership", text: "Leadership" },
    { to: "/contact", text: "Get in touch" },
  ];

  return (
    <StyledMenu>
      {menuLinks.map(({ to, text, end }) => (
        <MenuLink key={to} to={to} isLight={isLight} end={end}>
          {text}
        </MenuLink>
      ))}
    </StyledMenu>
  );
}

Menu.propTypes = {
  isLight: PropTypes.bool.isRequired,
};

export default Menu;
