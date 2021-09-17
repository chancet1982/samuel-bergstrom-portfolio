import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useBgColor from "../../utils/useBgColor";
import useFluidTypography from "../../utils/useHeadlinesFluidTypography";
import colors from "../../theme/colors";

const StyledQuote = styled.q`
  color: ${({ light }) =>
    light ? colors.text.light.high : colors.text.dark.high};

  ${({ fluidType }) => fluidType};

  position: relative;
  font-style: italic;
  font-weight: 500;

  :before,
  :after {
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
    position: absolute;
    font-size: 4rem;
  }

  :before {
    content: open-quote;
    margin-left: -0.6em;
    margin-top: -0.4em;
  }

  :after {
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
    content: close-quote;
    bottom: 0;
    right: 0;
    margin-right: -0.6em;
    margin-bottom: -0.8em;
  }
`;

const Quote = ({ children }) => {
  const light = useBgColor();
  const fluidType = useFluidTypography(2);
  return (
    <StyledQuote light={light} fluidType={fluidType}>
      {children}
    </StyledQuote>
  );
};

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Quote;
