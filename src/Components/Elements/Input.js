import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../theme/colors";
import typography from "../../theme/typography";

const { size, lh, inc } = typography;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  line-height: ${({ small, large }) =>
    small ? lh + inc : large ? lh - inc : lh};
  border: solid 0.125rem ${colors.darkgray};
  font-family: "Fira Sans", sans-serif;
  font-size: ${({ small, large, huge }) =>
    small ? size / 1.2 : large ? size * 1.2 : huge ? size * 1.618 : size}rem;
  color: ${colors.text.dark.high};
  padding: 0.5rem;
`;

//TODO: fix some errors (pattern, value, onChange)
const Input = ({ type, name, required, small, large, huge }) => {
  const handleChange = (event) => {
    event.target.checkValidity();
  };

  /*const getValidationPattern = () => {
    switch (type) {
      case "text":
        return ".{1,}";
      case "email":
        return "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
      case "password":
        return "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
      default:
        return ".{1,}";
    }
  };*/

  /*const getHintText = () => {
    switch (type) {
      case "text":
        return "Cannot be empty";
      case "email":
        return "Must contain a valid email address";
      case "password":
        return "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters";
      default:
        return "Cannot be empty";
    }
  };*/

  return (
    <StyledInput
      type={type}
      name={name}
      required={required}
      onChange={required ? handleChange : null}
      small={small}
      large={large}
      huge={huge}
    ></StyledInput>
  );
};

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
