import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Span from "../../Shared/Span";

const StyledQuote = styled(motion.q)`
  position: relative;
  font-style: italic;
  display: block;
  max-width: 64ch;

  :before,
  :after {
    content: "";
  }
`;

function Quote({ children }) {
  return (
    <StyledQuote>
      <Span xl highContrast>
        {children}
      </Span>
    </StyledQuote>
  );
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Quote;
