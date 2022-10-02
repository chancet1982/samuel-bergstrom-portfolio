/* eslint-disable react/jsx-no-constructed-context-values */
// github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
import React, { useState } from "react";
import PropTypes from "prop-types";

const initialContext = [
  false,
  () => {
    // eslint-disable-next-line no-console
    console.error("No ViewColorContextProvider is wrapping this component");
    return null;
  },
];

export const ViewColorContext = React.createContext(initialContext);

function ViewColorContextProvider(props) {
  const { children } = props;
  const [light, setLight] = useState(false);

  return (
    <ViewColorContext.Provider value={[light, setLight]}>
      {children}
    </ViewColorContext.Provider>
  );
}

ViewColorContextProvider.propTypes = {
  children: PropTypes.node,
};

ViewColorContextProvider.defaultProps = {
  children: null,
};
export default ViewColorContextProvider;
