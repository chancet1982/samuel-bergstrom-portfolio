import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import MenuLink from "./MenuLink";
import { MENU_LINKS } from "../../data/dictionaries/MENU_LINKS";

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
  return (
    <StyledMenu>
      {MENU_LINKS.map(({ to, text, end }) => (
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
