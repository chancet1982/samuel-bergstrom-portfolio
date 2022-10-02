/* eslint-disable react/jsx-no-constructed-context-values */
// github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
import React, { useState } from "react";
import PropTypes from "prop-types";

const initialContext = [
  false,
  () => {
    // eslint-disable-next-line no-console
    console.error("No SectionColorContextProvider is wrapping this component");
    return null;
  },
];

export const SectionColorContext = React.createContext(initialContext);

function SectionColorContextProvider(props) {
  const { children } = props;
  const [light, setLight] = useState(false);

  return (
    <SectionColorContext.Provider value={[light, setLight]}>
      {children}
    </SectionColorContext.Provider>
  );
}

SectionColorContextProvider.propTypes = {
  children: PropTypes.node,
};

SectionColorContextProvider.defaultProps = {
  children: null,
};
export default SectionColorContextProvider;
