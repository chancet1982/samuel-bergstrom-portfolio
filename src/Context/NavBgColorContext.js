/* eslint-disable react/jsx-no-constructed-context-values */
// github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
import React, { useState } from "react";
import PropTypes from "prop-types";
import colors from "../theme/colors";

const initialContext = [
  colors.offwhite,
  () => {
    // eslint-disable-next-line no-console
    console.error("No NavBgColorContextProvider is wrapping this component");
    return null;
  },
];

export const NavBgColorContext = React.createContext(initialContext);

function NavBgColorContextProvider({ children }) {
  const [navBgColor, setNavBgColor] = useState(colors.offwhite);

  return (
    <NavBgColorContext.Provider value={[navBgColor, setNavBgColor]}>
      {children}
    </NavBgColorContext.Provider>
  );
}

NavBgColorContextProvider.propTypes = {
  children: PropTypes.node,
};

NavBgColorContextProvider.defaultProps = {
  children: null,
};
export default NavBgColorContextProvider;
