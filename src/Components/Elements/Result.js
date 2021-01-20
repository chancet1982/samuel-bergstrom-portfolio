import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import padding from "../../theme/padding";
import Paragraph from "./Paragraph";
import Value from "./Value";
import Unit from "./Unit";

const StyledResult = styled.div`
  max-width: 30ch;
  padding-bottom: ${padding.vertical.half};
`;

const Result = ({ value, unit, description }) => {
  return (
    <StyledResult>
      <div>
        {value && (
          <Value>
            <mark>{value}</mark>
          </Value>
        )}
        {unit && <Unit> {unit}</Unit>}
      </div>
      <Paragraph>{description}</Paragraph>
    </StyledResult>
  );
};

Result.propTypes = {
  value: PropTypes.string,
  unit: PropTypes.string,
  description: PropTypes.string,
};

Result.defaultProps = {
  value: null,
  unit: null,
  description: null,
};

export default Result;
