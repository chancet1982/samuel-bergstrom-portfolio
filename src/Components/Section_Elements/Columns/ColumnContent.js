/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledColumnContent = styled(motion.div)``;

function ColumnContent({ children }) {
  return (
    <StyledColumnContent
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {children}
    </StyledColumnContent>
  );
}

ColumnContent.propTypes = {
  children: PropTypes.node,
};

ColumnContent.defaultProps = {
  children: null,
};

export default ColumnContent;
