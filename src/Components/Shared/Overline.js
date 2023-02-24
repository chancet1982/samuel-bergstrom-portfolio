/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Span from "./Span";

const StyledOverline = styled(Span)`
  display: inline-block;
  text-transform: uppercase;
  position: relative;
  font-weight: 600 !important;
  font-stretch: 104% !important;
`;

function Overline({ children, ...rest }) {
  return (
    <StyledOverline small {...rest}>
      {children}
    </StyledOverline>
  );
}

Overline.propTypes = {
  children: PropTypes.node,
};

Overline.defaultProps = {
  children: "overline",
};

export default Overline;
