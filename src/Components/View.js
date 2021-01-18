import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LongScreenTransition from "./LongScreenTransition";
import ShortScreenTransition from "./ShortScreenTransition";
import padding from "../theme/padding";

const StyledView = styled.main`
  ${({ padded }) =>
    padded && {
      paddingTop: padding.vertical.quadruple,
    }}
`;

// TODO: fix fade out on exit and use animate presence.
const View = ({ children, padded, transition }) => {
  const [screenTransition, setScreenTransition] = useState(transition);
  const isShort = sessionStorage.getItem("isShortLS");

  const removeTransition = () => {
    setScreenTransition(false);
  };

  const switchToShortScreenTransition = () => {
    sessionStorage.setItem("isShortLS", true);
    removeTransition();
  };

  const ScreenTransition = () => {
    return isShort ? (
      <ShortScreenTransition animationFinished={() => removeTransition()} />
    ) : (
      <LongScreenTransition
        animationFinished={() => switchToShortScreenTransition()}
      />
    );
  };

  return screenTransition ? (
    <ScreenTransition />
  ) : (
    <StyledView padded={padded}>{children}</StyledView>
  );
};

View.propTypes = {
  children: PropTypes.node,
  padded: PropTypes.bool,
  transition: PropTypes.bool,
};

View.defaultProps = {
  children: null,
  padded: false,
  transition: true,
};

export default View;
