import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import { variants } from "../../animations/animations";
import Span from "./Span";

const StyledOverline = styled(motion.div)`
  text-transform: uppercase;
  position: relative;
`;

function Overline({ children, disableAnimations }) {
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

  return (
    <StyledOverline
      ref={intersectionRef}
      initial="hidden"
      animate={disableAnimations || inView ? "inView" : "hidden"}
      variants={variants}
    >
      <Span small>{children}</Span>
    </StyledOverline>
  );
}

Overline.propTypes = {
  children: PropTypes.node,
  disableAnimations: PropTypes.bool,
};

Overline.defaultProps = {
  children: "overline",
  disableAnimations: false,
};

export default Overline;
