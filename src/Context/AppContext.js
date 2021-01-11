import React, { useState } from "react";
import PropTypes from "prop-types";

export const AppContext = React.createContext({ content: "SAMUEL BERGSTRÖM" });

const AppContextProvider = (props) => {
  const { children } = props;
  const [content, setContent] = useState("SAMUEL BERGSTRÖM");

  return (
    <AppContext.Provider value={[content, setContent]}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};

AppContextProvider.defaultProps = {
  children: null,
};
export default AppContextProvider;
