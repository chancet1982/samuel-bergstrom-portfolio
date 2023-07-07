/* eslint-disable react/jsx-no-constructed-context-values */
// github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
import React, { useState } from "react";
import PropTypes from "prop-types";

const initialContext = [
  null,
  () => {
    // eslint-disable-next-line no-console
    console.error("No ElementContextProvider is wrapping this component");
    return null;
  },
];

export const ElementColorContext = React.createContext(initialContext);

function ElementColorContextProvider({ children }) {
  const [elementBgColor, setElementBgColor] = useState(null);

  return (
    <ElementColorContext.Provider value={[elementBgColor, setElementBgColor]}>
      {children}
    </ElementColorContext.Provider>
  );
}

ElementColorContextProvider.propTypes = {
  children: PropTypes.node,
};

ElementColorContextProvider.defaultProps = {
  children: null,
};
export default ElementColorContextProvider;
