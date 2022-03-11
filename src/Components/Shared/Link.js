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
    light ? colors.text.light.high : colors.text.dark.high};
  ${({ fluidType }) => fluidType};
  font-family: ${typography.bodyFont};
  transition: all 0.3s;
  :hover {
    color: ${({ light }) =>
      light ? colors.text.light.medium : colors.primary};
  }
`;

const StyledAnchorLink = styled.a`
  color: ${({ light }) =>
    light ? colors.text.light.high : colors.text.dark.high};
  ${({ fluidType }) => fluidType};
  font-family: ${typography.bodyFont};
  transition: all 0.3s;
  :hover {
    color: ${({ light }) =>
      light ? colors.text.light.medium : colors.primary};
  }
`;

// TODO: fix link "TO" attribute
const Link = ({ small, large, huge, children, to, href }) => {
  const light = useBgColor();

  const mapSizeToNumber = () => {
    if (small) return 1;
    if (large) return 3;
    if (huge) return 4;
    return 2;
  };

  const fluidType = useFluidTypography(mapSizeToNumber(), false);
  return to ? (
    <StyledLink to={to} fluidType={fluidType} light={light}>
      {children}
    </StyledLink>
  ) : (
    <StyledAnchorLink
      href={href}
      fluidType={fluidType}
      light={light}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </StyledAnchorLink>
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
