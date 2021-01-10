import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  line-height: 2rem;
`;

const Input = ({ type, value, name, required }) => {
  const handleChange = () => {};

  const getValidationPattern = () => {
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
  };

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
      value={value}
      required={required}
      onChange={required ? handleChange : null}
      pattern={required ? getValidationPattern : null}
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
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
  value: "",
  required: false,
};

export default Input;
