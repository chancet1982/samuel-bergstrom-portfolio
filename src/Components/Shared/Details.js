import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDetails = styled.details``;
const StyledSummary = styled.summary``;

function Details({ open, summary, details }) {
  return (
    <StyledDetails open={open}>
      <StyledSummary>{summary}</StyledSummary>
      {details}
    </StyledDetails>
  );
}

Details.propTypes = {
  open: PropTypes.bool,
  summary: PropTypes.node.isRequired,
  details: PropTypes.node.isRequired,
};

Details.defaultProps = {
  open: false,
};

export default Details;
