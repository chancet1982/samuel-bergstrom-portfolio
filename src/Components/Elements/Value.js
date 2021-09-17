/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useFluidTypography from "../../utils/useHeadlinesFluidTypography";
import useBgColor from "../../utils/useBgColor";
import colors from "../../theme/colors";

const StyledValue = styled.span`
  color: ${({ light }) =>
    light ? colors.text.light.high : colors.text.dark.high};

  font-weight: 500;

  ${({ fluidType }) => fluidType};
`;

const Value = ({ children }) => {
  const light = useBgColor();
  const fluidType = useFluidTypography(1, false);

  return (
    <StyledValue light={light} fluidType={fluidType}>
      {children}
    </StyledValue>
  );
};

Value.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Value;
