import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import { variants } from "../animations/animations";
import Span from "./Elements/Span";

const StyledOverline = styled(motion.div)`
  text-transform: uppercase;
  position: relative;
`;

const Overline = ({ children, light, sectionOverline, disableAnimations }) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  const sectionOverlineVariants = {
    inView: {
      x: "0%",
      opacity: 1,
      transition: { delay: 0.6, type: "spring", damping: 20 },
    },
    hidden: {
      x: "-100%",
      opacity: 0,
      transition: { type: "spring", damping: 20 },
    },
  };

  return (
    <StyledOverline
      ref={intersectionRef}
      light={light}
      initial="hidden"
      animate={disableAnimations || inView ? "inView" : "hidden"}
      variants={sectionOverline ? sectionOverlineVariants : variants}
      sectionOverline={sectionOverline}
    >
      <Span small light={light}>
        {children}
      </Span>
    </StyledOverline>
  );
};

Overline.propTypes = {
  children: PropTypes.node,
  light: PropTypes.bool,
  sectionOverline: PropTypes.bool,
  disableAnimations: PropTypes.bool,
};

Overline.defaultProps = {
  children: "overline",
  light: false,
  sectionOverline: false,
  disableAnimations: false,
};

export default Overline;
