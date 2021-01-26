import React, { useState } from "react";
import PropTypes from "prop-types";

export const ElementColorContext = React.createContext(false);

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
