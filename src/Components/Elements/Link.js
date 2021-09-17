/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import typography from "../../theme/typography";
import colors from "../../theme/colors";
import useBgColor from "../../utils/useBgColor";
import useFluidTypography from "../../utils/useBodyFluidTypography";

const StyledLink = styled(RouterLink)`
  color: ${({ light }) =>
    light ? colors.text.light.medium : colors.text.dark.medium};
  ${({ fluidType }) => fluidType};
  font-family: ${typography.bodyFont};
`;

const StyledAncorlLink = styled.a`
  color: ${({ light }) =>
    light ? colors.text.light.medium : colors.text.dark.medium};
  ${({ fluidType }) => fluidType};
  font-family: ${typography.bodyFont};
`;

// TODO: fix link "TO" attribute
const Link = ({ small, large, huge, children, to, href }) => {
  const light = useBgColor();

  const fluidType = useFluidTypography(2, false);

  return to ? (
    <StyledLink
      small={small || undefined}
      large={large || undefined}
      huge={huge || undefined}
      light={light || undefined}
      to={to}
      fluidType={fluidType}
    >
      {children}
    </StyledLink>
  ) : (
    href && (
      <StyledAncorlLink
        small={small || undefined}
        large={large || undefined}
        huge={huge || undefined}
        light={light || undefined}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        fluidType={fluidType}
      >
        {children}
      </StyledAncorlLink>
    )
  );
};

Link.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  huge: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
};

Link.defaultProps = {
  small: false,
  large: false,
  huge: false,
  to: null,
  href: null,
};

export default Link;
