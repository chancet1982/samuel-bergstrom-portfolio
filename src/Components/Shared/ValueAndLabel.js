/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Span from "./Span";
import Title from "./Title";
import List from "./List";

const StyledValueAndLabel = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

/* TODO: Implement this in "FinalResult" as well, for that to happen youll need to control text alignment and padding as prop */
function ValueAndLabel({ value, renderAsList, label, flip, h, withMargin }) {
  const renderValueAndLabel = () => {
    const convertValuesArrayToListItems = () => (
      <List
        items={value.map((item) => (
          <Title h={h} withMargin={withMargin}>
            {item}
          </Title>
        ))}
      />
    );

    const renderValuesAsNode = Array.isArray(value) ? (
      renderAsList ? (
        convertValuesArrayToListItems()
      ) : (
        <Title h={h} withMargin={withMargin}>
          {value.join(", ")}
        </Title>
      )
    ) : (
      <Title h={h} withMargin={withMargin}>
        {value}
      </Title>
    );

    return flip ? (
      <>
        <Span>{label}</Span>
        {renderValuesAsNode}
      </>
    ) : (
      <>
        {renderValuesAsNode}
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
  renderAsList: PropTypes.bool,
  label: PropTypes.string.isRequired,
  flip: PropTypes.bool,
  h: PropTypes.oneOf([3, 5]),
  withMargin: PropTypes.bool,
};

ValueAndLabel.defaultProps = {
  renderAsList: false,
  flip: false,
  h: 5,
  withMargin: false,
};

export default ValueAndLabel;
