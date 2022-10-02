import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useBgColor from "../../../utils/useBgColor";
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
  const light = useBgColor();

  return (
    <StyledQuote light={light}>
      <Span huge light={light} highContrast>
        {children}
      </Span>
    </StyledQuote>
  );
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Quote;
