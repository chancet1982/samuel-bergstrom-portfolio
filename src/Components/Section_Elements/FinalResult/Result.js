import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Span from "../../Shared/Span";
import Title from "../../Shared/Title";
import padding from "../../../theme/padding";

const StyledResult = styled(motion.div)`
  margin-bottom: ${padding.insideElements.half};
`;

function Result({ value, description }) {
  return (
    <StyledResult>
      <Title h={4} withMargin={false}>
        {value}
      </Title>
      <Span>{description}</Span>
    </StyledResult>
  );
}

Result.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Result;
