/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "../../theme/colors";
import typography from "../../theme/typography";
import { formElementsVariants } from "../../animations/animations";
import padding from "../../theme/padding";
import useBgColor from "../../utils/useBgColor";

const { size, lh, inc } = typography;

const StyledTextarea = styled(motion.textarea)`
  box-sizing: border-box;
  display: block;
  width: fill-available;
  border-radius: ${padding.insideElements.half};
  line-height: ${({ $small, $large }) =>
    $small ? lh + inc : $large ? lh - inc : lh};
  font-family: ${typography.bodyFont};
  font-size: ${({ $small, $large, $xl }) =>
    $small ? size / 1.2 : $large ? size * 1.2 : $xl ? size * 1.618 : size}rem;
  padding: 0.5rem;
  resize: none;
  background-color: ${colors.lighten.low};
  border: solid 0.125rem
    ${({ $light }) => ($light ? colors.lighten.medium : colors.darken.medium)};
  color: ${({ $light }) =>
    $light ? colors.text.light.high : colors.text.dark.high};

  :focus-visible {
    background-color: ${colors.lighten.low};
    box-shadow: 0 0 0.25rem ${colors.primary};
    border: solid 0.125rem ${colors.primary};
    outline: none;
  }
`;

function Textarea({
  name,
  rows,
  columns,
  required,
  small,
  large,
  xl,
  isLight,
  ...rest
}) {
  const light = useBgColor() || isLight;

  const handleChange = (event) => {
    event.target.checkValidity();
  };

  return (
    <StyledTextarea
      $light={light}
      name={name}
      rows={rows}
      columns={columns}
      required={required}
      onChange={required ? handleChange : null}
      $small={small}
      $large={large}
      $xl={xl}
      variants={formElementsVariants}
      {...rest}
    />
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.string,
  columns: PropTypes.string,
  required: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xl: PropTypes.bool,
  isLight: PropTypes.bool,
};

Textarea.defaultProps = {
  rows: "4",
  columns: "50",
  required: false,
  small: false,
  large: false,
  xl: false,
  isLight: false,
};

export default Textarea;
