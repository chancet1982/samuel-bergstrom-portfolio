import React, { useState } from "react";
import PropTypes from "prop-types";

export const ViewColorContext = React.createContext(false);

const ViewColorContextProvider = (props) => {
  const { children } = props;
  const [light, setLight] = useState(false);

  return (
    <ViewColorContext.Provider value={[light, setLight]}>
      {children}
    </ViewColorContext.Provider>
  );
};

ViewColorContextProvider.propTypes = {
  children: PropTypes.node,
};

ViewColorContextProvider.defaultProps = {
  children: null,
};
export default ViewColorContextProvider;
