import React, { useState } from "react";
import PropTypes from "prop-types";

const initialContext = [
  false,
  () => {
    // eslint-disable-next-line no-console
    console.error("No ElementContextProvider is wrapping this component");
    return null;
  },
];

export const ElementColorContext = React.createContext(initialContext);

const ElementColorContextProvider = (props) => {
  const { children } = props;
  const [light, setLight] = useState(false);

  return (
    <ElementColorContext.Provider value={[light, setLight]}>
      {children}
    </ElementColorContext.Provider>
  );
};

ElementColorContextProvider.propTypes = {
  children: PropTypes.node,
};

ElementColorContextProvider.defaultProps = {
  children: null,
};
export default ElementColorContextProvider;
