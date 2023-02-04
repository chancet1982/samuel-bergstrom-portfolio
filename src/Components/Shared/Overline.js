/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Paragraph from "./Paragraph";

const StyledOverline = styled(Paragraph)`
  text-transform: uppercase;
  position: relative;
`;

function Overline({ children, ...rest }) {
  return (
    <StyledOverline small {...rest}>
      <strong>{children}</strong>
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
