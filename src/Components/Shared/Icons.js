/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../theme/colors";

const StyledIcon = styled.svg`
  width: ${({ $size }) => `${$size}px` || "24px"};
  height: ${({ $size }) => `${$size}px` || "24px"};
`;

const StyledIconPath = styled.path`
  fill: ${(props) => props.color || colors.text.dark.high};
`;

StyledIcon.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.number,
};

StyledIconPath.propTypes = {
  color: PropTypes.string,
};

function Icon({ color, path, size, viewBox }, ...rest) {
  return (
    <StyledIcon viewBox={viewBox || "0 0 24 24"} $size={size} {...rest}>
      <StyledIconPath color={color} d={path} />
    </StyledIcon>
  );
}

Icon.propTypes = {
  color: PropTypes.string,
  path: PropTypes.string.isRequired,
  size: PropTypes.number,
  viewBox: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
  viewBox: "0 0 24 24",
  color: colors.text.dark.high,
};

export default Icon;
