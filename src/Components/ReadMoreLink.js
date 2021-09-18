/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "./Elements/Link";

const StyledPageLink = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
`;

const ReadMoreLink = ({ to, children }) => {
  return (
    <StyledPageLink>
      <Link to={to}>{children}</Link>
    </StyledPageLink>
  );
};

ReadMoreLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default ReadMoreLink;
