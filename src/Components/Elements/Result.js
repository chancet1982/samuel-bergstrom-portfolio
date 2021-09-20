import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Span from "./Span";
import Title from "./Title";
import padding from "../../theme/padding";

const StyledResult = styled.div`
  margin-bottom: ${padding.vertical.half};
`;

const Result = ({ value, description }) => {
  return (
    <StyledResult>
      <Title h={3} withMargin={false}>
        {value}
      </Title>
      <Span>{description}</Span>
    </StyledResult>
  );
};

Result.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Result;
