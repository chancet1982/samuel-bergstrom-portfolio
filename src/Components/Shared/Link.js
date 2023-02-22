/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
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

const StyledLink = styled(RouterLink)`
  ${linkStyle}

  color: ${({ $light }) =>
    $light ? colors.text.light.high : colors.text.dark.high};

  :hover {
    color: ${({ $light }) =>
      $light ? colors.text.light.medium : colors.primary};
  }
`;

const StyledAnchorLink = styled(motion.a)`
  ${linkStyle}

  color: ${({ $light }) =>
    $light ? colors.text.light.high : colors.text.dark.high};

  :hover {
    color: ${({ $light }) =>
      $light ? colors.text.light.medium : colors.primary};
  }
`;

function Link({
  small,
  large,
  xl,
  xxl,
  children,
  to,
  href,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
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
      onMouseEnter={onMouseEnter ? () => onMouseEnter() : null}
      onMouseLeave={onMouseEnter ? () => onMouseLeave() : null}
      {...rest}
    >
      {children}
    </StyledLink>
  ) : (
    <StyledAnchorLink
      href={href}
      $fluidType={fluidType}
      $light={light}
      target="_blank"
      rel="noopener noreferrer"
      variants={textVariants}
      onMouseEnter={onMouseEnter ? () => onMouseEnter() : null}
      onMouseLeave={onMouseEnter ? () => onMouseLeave() : null}
      {...rest}
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
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

Link.defaultProps = {
  small: false,
  large: false,
  xl: false,
  xxl: false,
  to: null,
  href: null,
  onMouseEnter: null,
  onMouseLeave: null,
};

export default Link;
