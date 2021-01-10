import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import Title from "./Elements/Title";

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
    /*text-transform: uppercase;*/
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
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  /* const sectionHeaderVariants = {
    inView: {
      x: "0%",
      opacity: 1,
      rotate: 90,
      transition: { delay: 0.6, type: "spring", damping: 20 },
    },
    hidden: {
      x: "-100%",
      opacity: 0,
      rotate: 90,
      transition: { type: "spring", damping: 20 },
    },
  }; */

  return (
    <StyledSectionHeader
      ref={intersectionRef}
      light={light}
      /* initial="hidden"
      animate={disableAnimations || inView ? "inView" : "hidden"}
      variants={sectionHeaderVariants} */
    >
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
