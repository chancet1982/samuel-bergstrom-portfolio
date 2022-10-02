/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../theme/colors";
import typography from "../../theme/typography";

const { size, lh, inc } = typography;

const StyledInput = styled.input`
  display: block;
  width: fill-available;
  border-radius: 0.25rem;
  line-height: ${({ small, large }) =>
    small ? lh + inc : large ? lh - inc : lh};
  border: solid 0.125rem ${colors.darkgray};
  font-family: ${typography.bodyFont};
  font-size: ${({ small, large, huge }) =>
    small ? size / 1.2 : large ? size * 1.2 : huge ? size * 1.618 : size}rem;
  color: ${colors.text.dark.high};
  padding: 0.5rem;
  box-sizing: border-box;

  :focus {
    box-shadow: 0 0 0.25rem ${colors.primary};
    border: solid 0.125rem ${colors.primary};
    outline: none;
  }
`;

// TODO: (later) add input validation
function Input({ type, name, required, small, large, huge }) {
  const handleChange = (event) => {
    event.target.checkValidity();
  };

  return (
    <StyledInput
      type={type}
      name={name}
      required={required}
      onChange={required ? handleChange : null}
      small={small}
      large={large}
      huge={huge}
    />
  );
}

Input.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "date",
    "search",
    "url",
    "tel",
    "email",
    "password",
  ]),
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  huge: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
  required: false,
  small: false,
  large: false,
  huge: false,
};

export default Input;
