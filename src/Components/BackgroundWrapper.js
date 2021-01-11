import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ bgColor, theme: { colors } }) =>
    bgColor || colors.offwhite};
`;

const BackgroundWrapper = ({ bgColor, children }) => {
  return bgColor ? (
    <StyledBackground bgColor={bgColor}>{children}</StyledBackground>
  ) : (
    <>{children}</>
  );
};

BackgroundWrapper.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BackgroundWrapper.defaultProps = {
  bgColor: null,
};

export default BackgroundWrapper;
