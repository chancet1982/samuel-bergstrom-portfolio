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
import { textVariants } from "../../animations/animations";

const linkStyle = `
  ${({ $fluidType }) => $fluidType};
  font-family: ${typography.bodyFont};
  transition: all 0.3s;
  font-weight: 500;
`;

/* TODO: RouterLink styling isnt working with light and fluidtype */
const StyledLink = styled(RouterLink)`
  ${linkStyle}

  color: ${({ $light }) =>
    $light ? colors.text.light.high : colors.text.dark.high};

  :hover {
    color: ${({ $light }) =>
      $light ? colors.text.light.medium : colors.primary};
  }
`;

const StyledAnchorLink = styled.a`
  ${linkStyle}

  color: ${({ $light }) =>
    $light ? colors.text.light.high : colors.text.dark.high};

  :hover {
    color: ${({ $light }) =>
      $light ? colors.text.light.medium : colors.primary};
  }
`;

function Link(props) {
  const { small, large, xl, xxl, children, to, href } = props;
  const light = useBgColor();

  const mapSizeToNumber = () => {
    if (small) return 1;
    if (large) return 3;
    if (xl) return 4;
    if (xxl) return 8;
    return 2;
  };

  const fluidType = useFluidTypography(mapSizeToNumber(), false);
  return to ? (
    <StyledLink
      to={to}
      $fluidType={fluidType}
      $light={light}
      variants={textVariants}
      {...props}
    >
      {children}
    </StyledLink>
  ) : (
    <StyledAnchorLink
      href={href}
      $fluidType={fluidType}
      light={light}
      target="_blank"
      rel="noopener noreferrer"
      variants={textVariants}
      {...props}
    >
      {children}
    </StyledAnchorLink>
  );
}

Link.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
};

Link.defaultProps = {
  small: false,
  large: false,
  xl: false,
  xxl: false,
  to: null,
  href: null,
};

export default Link;
