import React, { useContext } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { MenuExpandedContext } from "../Context/MenuExpandedContext";

const StyledOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  z-index: 2;
`;

function Overlay() {
  const [expanded] = useContext(MenuExpandedContext);

  const overlayVariants = {
    expanded: {
      opacity: 1,
    },
    collapsed: { opacity: 0 },
  };
  return (
    <StyledOverlay
      initial="collapsed"
      animate={expanded ? "expanded" : "collapsed"}
      variants={overlayVariants}
    />
  );
}

export default Overlay;
