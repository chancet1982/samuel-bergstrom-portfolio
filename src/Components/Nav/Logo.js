import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { ReactComponent as LogoMedia } from "../../assets/logo.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Span from "../Shared/Span";
import colors from "../../theme/colors";

const StyledLogo = styled(motion.div)`
  align-self: center;

  a {
    padding: 0.75rem 1.25rem;
    text-decoration: none;

    :focus {
      box-shadow: 0 0 0.25rem ${colors.primary};
      outline: solid 0.125rem ${colors.primary};
    }

    span {
      font-weight: 600;
    }
  }
`;

const StyledSkipLink = styled(Link)`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;

  :focus {
    left: 0;
    top: 0;
    width: auto;
    height: auto;
    background: white;
  }
`;

const StyledLink = styled(Link)``;

function Logo({ isLight }) {
  return (
    <StyledLogo $isLight={isLight}>
      <StyledSkipLink to="#main">
        <Span>to main content</Span>
      </StyledSkipLink>
      <StyledLink to="/">
        <Span isLight={isLight}>Samuel Bergström</Span>
        {/* <LogoMedia /> */}
      </StyledLink>
    </StyledLogo>
  );
}

Logo.propTypes = {
  isLight: PropTypes.bool.isRequired,
};

export default Logo;
