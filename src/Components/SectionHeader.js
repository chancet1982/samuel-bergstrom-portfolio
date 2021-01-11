import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "./Elements/Title";

//TODO: Fix connection to typography.
const StyledSectionHeader = styled(motion.header)`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 2vw;
  height: 100%;

  h5 {
    position: sticky;
    top: 5.5rem;
    margin: 0;
    font-weight: 500;
    writing-mode: vertical-lr;
    padding: 2rem 0;
    width: fit-content;
    display: inline-block;
    font-size: 4.8rem;
    line-height: 1;
    transform: rotateZ(180deg);
    font-family: "Fira Sans", sans-serif;

    color: ${({
      theme: {
        colors: {
          text: {
            dark: { low },
          },
        },
      },
    }) => low};
  }
`;

const SectionHeader = ({ children, light, disableAnimations }) => {
  return (
    <StyledSectionHeader light={light}>
      <Title h={5}>{children}</Title>
    </StyledSectionHeader>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.node,
  light: PropTypes.bool,
  disableAnimations: PropTypes.bool,
};

SectionHeader.defaultProps = {
  children: "overline",
  light: false,
  disableAnimations: false,
};

export default SectionHeader;
