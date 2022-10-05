import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Span from "../../Shared/Span";

const StyledQuote = styled.q`
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
      <Span huge highContrast>
        {children}
      </Span>
    </StyledQuote>
  );
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Quote;
