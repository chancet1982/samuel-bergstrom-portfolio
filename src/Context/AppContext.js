import React, { useState } from "react";
import PropTypes from "prop-types";

export const AppContext = React.createContext({ content: "Samuel Bergström" });

const AppContextProvider = (props) => {
  const { children } = props;
  const [content, setContent] = useState("Samuel Bergström");

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
