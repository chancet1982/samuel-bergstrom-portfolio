import React, { useState } from "react";
import PropTypes from "prop-types";

export const LightContext = React.createContext(false);

const LightContextProvider = (props) => {
  const { children } = props;
  const [light, setLight] = useState(false);

  return (
    <LightContext.Provider value={[light, setLight]}>
      {children}
    </LightContext.Provider>
  );
};

LightContextProvider.propTypes = {
  children: PropTypes.node,
};

LightContextProvider.defaultProps = {
  children: null,
};
export default LightContextProvider;
