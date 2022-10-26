/* eslint-disable react/jsx-no-constructed-context-values */
// github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
import React, { useState } from "react";
import PropTypes from "prop-types";

export const CursorContext = React.createContext({
  cursorText: "",
  cursorVariant: "default",
});

function CursorContextProvider(props) {
  const { children } = props;
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <CursorContext.Provider
      value={[cursorText, setCursorText, cursorVariant, setCursorVariant]}
    >
      {children}
    </CursorContext.Provider>
  );
}

CursorContextProvider.propTypes = {
  children: PropTypes.node,
};

CursorContextProvider.defaultProps = {
  children: null,
};
export default CursorContextProvider;
