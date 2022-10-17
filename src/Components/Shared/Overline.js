import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

import Span from "./Span";

const StyledOverline = styled(motion.div)`
  text-transform: uppercase;
  position: relative;
`;

function Overline({ children }) {
  return (
    <StyledOverline>
      <Span small>{children}</Span>
    </StyledOverline>
  );
}

Overline.propTypes = {
  children: PropTypes.node,
};

Overline.defaultProps = {
  children: "overline",
};

export default Overline;
