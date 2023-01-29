/* eslint-disable react/jsx-no-constructed-context-values */
// github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
import React, { useState } from "react";
import PropTypes from "prop-types";

const initialContext = [
  false,
  () => {
    // eslint-disable-next-line no-console
    console.error("No MenuExpandedContextProvider is wrapping this component");
    return null;
  },
];
export const MenuExpandedContext = React.createContext(initialContext);

function MenuExpandedContextProvider({ children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <MenuExpandedContext.Provider value={[expanded, setExpanded]}>
      {children}
    </MenuExpandedContext.Provider>
  );
}

MenuExpandedContextProvider.propTypes = {
  children: PropTypes.node,
};

MenuExpandedContextProvider.defaultProps = {
  children: null,
};
export default MenuExpandedContextProvider;
