/* eslint-disable react/jsx-no-constructed-context-values */
// github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
import React, { useState } from "react";
import PropTypes from "prop-types";

export const AppContext = React.createContext({ content: "Samuel Bergström" });

function AppContextProvider(props) {
  const { children } = props;
  const [content, setContent] = useState("Samuel Bergström");

  return (
    <AppContext.Provider value={[content, setContent]}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node,
};

AppContextProvider.defaultProps = {
  children: null,
};
export default AppContextProvider;
