import React from "react";
import PropTypes from "prop-types";
import { Blob } from "react-blob";

const BackgroundBlob = ({ bgColor, size }) => {
  return (
    <Blob
      size={size}
      style={{
        position: "absolute",
        top: "-15%",
        right: "-15%",
        zIndex: -1,
        backgroundColor: bgColor,
        opacity: 0.5,
        fontSize: "50vh",
      }}
    />
  );
};

BackgroundBlob.propTypes = {
  bgColor: PropTypes.string.isRequired,
  size: PropTypes.string,
};

BackgroundBlob.defaultProps = {
  size: "100vh",
};

export default BackgroundBlob;
