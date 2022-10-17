import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import padding from "../../theme/padding";
import Span from "./Span";
import Title from "./Title";

const StyledValueAndLabel = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${padding.vertical.double} ${padding.horizontal.double};
`;

/* TODO: Implement this in "FinalResult" as well, for that to happen youll need to control text alignment and padding as prop */
function ValueAndLabel({ value, label, flip, h, withMargin }) {
  const renderValueAndLabel = () => {
    const valueAsString = Array.isArray(value) ? value.join(", ") : value;

    return flip ? (
      <>
        <Span>{label}</Span>
        <Title h={h} withMargin={withMargin}>
          {valueAsString}
        </Title>
      </>
    ) : (
      <>
        <Title h={h} withMargin={withMargin}>
          {valueAsString}
        </Title>
        <Span>{label}</Span>
      </>
    );
  };

  return <StyledValueAndLabel>{renderValueAndLabel()}</StyledValueAndLabel>;
}

ValueAndLabel.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  label: PropTypes.string.isRequired,
  flip: PropTypes.bool,
  h: PropTypes.oneOf([3, 5]),
  withMargin: PropTypes.bool,
};

ValueAndLabel.defaultProps = {
  flip: false,
  h: 5,
  withMargin: false,
};

export default ValueAndLabel;
