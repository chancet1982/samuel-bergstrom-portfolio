import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
/* TODO: Investigate how we can animate NavLinks */
// import { motion } from "framer-motion";
import PropTypes from "prop-types";
import breakpoints from "../../theme/breakpoints";
import colors from "../../theme/colors";
import typography from "../../theme/typography";
import useFluidTypography from "../../utils/useHeadlinesFluidTypography";
import { MenuExpandedContext } from "../../Context/MenuExpandedContext";

const StyledMenuLink = styled(NavLink)`
  font-size: ${typography.size}rem;
  font-family: ${typography.bodyFont};
  text-decoration: none;
  font-weight: 400;
  margin: 0;

  :focus-visible {
    box-shadow: 0 0 0.25rem ${colors.primary};
    outline: solid 0.125rem ${colors.primary};
  }

  &.active {
    font-weight: 600;
  }

  @media (max-width: ${breakpoints.desktop - 1}px) {
    ${({ $fluidType }) => $fluidType};
    color: ${colors.text.light.medium};
    padding: 0 12vw;
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    &.active {
      color: ${colors.primary};
    }
  }

  @media (min-width: ${breakpoints.desktop}px) {
    padding: 0.75rem 1.25rem;
    color: ${({ $isLight }) =>
      $isLight ? colors.text.light.medium : colors.text.dark.medium};

    transition: all 0.5s !important;

    &:hover {
      color: ${({ $isLight }) =>
        $isLight ? colors.text.light.high : colors.text.dark.high};
    }

    &.active {
      color: ${({ $isLight }) =>
        $isLight ? colors.text.light.high : colors.text.dark.high};
    }
  }
`;

function MenuLink({ to, children, isLight, end }) {
  const fluidType = useFluidTypography(4, false);
  const [, setExpanded] = useContext(MenuExpandedContext);

  return (
    <StyledMenuLink
      $fluidType={fluidType}
      $isLight={isLight}
      to={to}
      onClick={() => setExpanded(false)}
      end={end}
    >
      {children}
    </StyledMenuLink>
  );
}

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isLight: PropTypes.bool.isRequired,
  end: PropTypes.bool,
};

MenuLink.defaultProps = {
  end: false,
};
export default MenuLink;
