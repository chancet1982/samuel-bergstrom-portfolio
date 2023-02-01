/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

import Paragraph from "./Paragraph";

const StyledOverline = styled(motion.div)`
  text-transform: uppercase;
  position: relative;
`;

function Overline({ children, ...rest }) {
  return (
    <StyledOverline {...rest}>
      <Paragraph small highContrast>
        <strong>{children}</strong>
      </Paragraph>
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
