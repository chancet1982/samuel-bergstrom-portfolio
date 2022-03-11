import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useBgColor from "../../../utils/useBgColor";
import colors from "../../../theme/colors";
import padding from "../../../theme/padding";
import Span from "../../Shared/Span";

const StyledQuote = styled.q`
  position: relative;
  font-style: italic;
  font-weight: 500;
  padding-bottom: ${padding.vertical.quarter};
  :before,
  :after {
    color: ${({ light }) => (light ? colors.text.light.high : colors.primary)};
    position: absolute;
    font-size: 4rem;
  }

  :before {
    content: open-quote;
    margin-left: -0.6em;
    margin-top: -0.4em;
  }

  :after {
    content: close-quote;
    bottom: 0;
    right: 0;
    margin-right: -0.6em;
    margin-bottom: -0.8em;
  }
`;

const Quote = ({ children }) => {
  const light = useBgColor();

  return (
    <StyledQuote light={light}>
      <Span huge light={light} highContrast>
        {children}
      </Span>
    </StyledQuote>
  );
};

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Quote;
