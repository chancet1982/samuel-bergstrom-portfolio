/* eslint-disable react/jsx-no-constructed-context-values */
// github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
import React, { useState } from "react";
import PropTypes from "prop-types";

export const SplashAnimationFinishedContext = React.createContext(false);

function SplashAnimationFinishedContextProvider({ children }) {
  const [animationFinished, setAnimationFinished] = useState(false);

  return (
    <SplashAnimationFinishedContext.Provider
      value={[animationFinished, setAnimationFinished]}
    >
      {children}
    </SplashAnimationFinishedContext.Provider>
  );
}

SplashAnimationFinishedContextProvider.propTypes = {
  children: PropTypes.node,
};

SplashAnimationFinishedContextProvider.defaultProps = {
  children: null,
};
export default SplashAnimationFinishedContextProvider;
