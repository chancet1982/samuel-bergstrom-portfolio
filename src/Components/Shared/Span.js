/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useBgColor from "../../utils/useBgColor";
import useFluidTypography from "../../utils/useBodyFluidTypography";
import colors from "../../theme/colors";
import typography from "../../theme/typography";

const StyledSpan = styled.span`
  color: ${({ $light, $highContrast }) =>
    $light
      ? $highContrast
        ? colors.text.light.high
        : colors.text.light.medium
      : $highContrast
      ? colors.text.dark.high
      : colors.text.dark.medium};

  ${({ $fluidType }) => $fluidType};
  font-family: ${typography.bodyFont};

  strong {
    color: ${({ $light }) =>
      $light ? colors.text.light.high : colors.text.dark.high};
  }
`;

function Span({ small, large, xl, xxl, children, highContrast }) {
  const light = useBgColor();

  const mapSizeToNumber = () => {
    if (small) return 1;
    if (large) return 3;
    if (xl) return 4;
    if (xxl) return 8;
    return 2;
  };

  const fluidType = useFluidTypography(mapSizeToNumber(), false);

  return (
    <StyledSpan
      $light={light}
      $fluidType={fluidType}
      $highContrast={highContrast}
    >
      {children}
    </StyledSpan>
  );
}

Span.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  children: PropTypes.node.isRequired,
  highContrast: PropTypes.bool,
};

Span.defaultProps = {
  small: false,
  large: false,
  xl: false,
  xxl: false,
  highContrast: false,
};

export default Span;
