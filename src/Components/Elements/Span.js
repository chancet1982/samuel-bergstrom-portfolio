/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useBgColor from "../../utils/useBgColor";
import useFluidTypography from "../../utils/useBodyFluidTypography";
import colors from "../../theme/colors";
import typography from "../../theme/typography";

const StyledSpan = styled.span`
  color: ${({ light }) =>
    light ? colors.text.light.medium : colors.text.dark.medium};

  ${({ fluidType }) => fluidType};
  font-family: ${typography.bodyFont};

  strong {
    color: ${({ light }) =>
      light ? colors.text.light.high : colors.text.dark.high};
  }
`;

const Span = ({ small, large, huge, children }) => {
  const light = useBgColor();
  const mapSizeToNumber = () => {
    if (small) return 1;
    if (large) return 3;
    if (huge) return 4;
    return 2;
  };

  const fluidType = useFluidTypography(mapSizeToNumber(), false);

  return (
    <StyledSpan
      small={small}
      large={large}
      huge={huge}
      light={light}
      fluidType={fluidType}
    >
      {children}
    </StyledSpan>
  );
};

Span.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  huge: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Span.defaultProps = {
  small: false,
  large: false,
  huge: false,
};

export default Span;
