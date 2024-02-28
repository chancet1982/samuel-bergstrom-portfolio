import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { ReactComponent as LogoMedia } from "../../assets/logo.svg";
import PropTypes from "prop-types";
import Span from "../Shared/Span";

const StyledLogo = styled(motion.div)`
  align-self: center;

  a {
    text-decoration: none;

    span {
      font-weight: 600;
    }
  }
`;

function Logo({ isLight }) {
  return (
    <StyledLogo $isLight={isLight}>
      <Link to="/">
        <Span isLight={isLight}>Samuel Bergström</Span>
        {/* <LogoMedia /> */}
      </Link>
    </StyledLogo>
  );
}

Logo.propTypes = {
  isLight: PropTypes.bool.isRequired,
};

export default Logo;
