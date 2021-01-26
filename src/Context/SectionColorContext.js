import React, { useState } from "react";
import PropTypes from "prop-types";

export const SectionColorContext = React.createContext(false);

const SectionColorContextProvider = (props) => {
  const { children } = props;
  const [light, setLight] = useState(false);

  return (
    <SectionColorContext.Provider value={[light, setLight]}>
      {children}
    </SectionColorContext.Provider>
  );
};

SectionColorContextProvider.propTypes = {
  children: PropTypes.node,
};

SectionColorContextProvider.defaultProps = {
  children: null,
};
export default SectionColorContextProvider;
