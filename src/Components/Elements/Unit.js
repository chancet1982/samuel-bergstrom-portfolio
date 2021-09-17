/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useBgColor from "../../utils/useBgColor";
import useFluidTypography from "../../utils/useHeadlinesFluidTypography";
import colors from "../../theme/colors";

const StyledUnit = styled.span`
  color: ${({ light }) =>
    light ? colors.text.light.disabled : colors.text.dark.disabled};

  font-weight: 300;

  ${({ fluidType }) => fluidType};
`;

const Unit = ({ children }) => {
  const light = useBgColor();
  const fluidType = useFluidTypography(3, false);

  return (
    <StyledUnit light={light} fluidType={fluidType}>
      {children}
    </StyledUnit>
  );
};

Unit.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Unit;
