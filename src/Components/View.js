import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ScreenTransition from "./ScreenTransition";
import padding from "../theme/padding";

const StyledView = styled.main`
  ${({ padded }) =>
    padded && {
      paddingTop: padding.vertical.quadruple,
      paddingBottom: padding.vertical.quadruple,
    }}
`;

const View = ({ children, padded, transition }) => {
  const [screenTransition, setScreenTransition] = useState(transition);

  const removeTransition = () => {
    setScreenTransition(false);
  };
  console.log(screenTransition);
  return screenTransition ? (
    <ScreenTransition animationFinished={() => removeTransition()} />
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
