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

const StyledDescription = styled(Paragraph)`
  color: ${({
    light,
    theme: {
      colors: { text },
    },
  }) => (light ? text.light.medium : text.dark.medium)};
`;

const Result = ({ value, unit, description, light }) => {
  return (
    <StyledResult light={light}>
      <div>
        {value && (
          <Value>
            <mark>{value}</mark>
          </Value>
        )}
        {unit && <Unit> {unit}</Unit>}
      </div>
      <StyledDescription>{description}</StyledDescription>
    </StyledResult>
  );
};

Result.propTypes = {
  value: PropTypes.string,
  unit: PropTypes.string,
  description: PropTypes.string,
  light: PropTypes.bool,
};

Result.defaultProps = {
  value: null,
  unit: null,
  description: null,
  light: false,
};

export default Result;
