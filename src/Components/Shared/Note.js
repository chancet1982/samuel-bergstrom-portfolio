/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import TitleAndText from "./TitleAndText";

function Note({ title, h, children, ...rest }) {
  return (
    <Card {...rest}>
      <TitleAndText title={title} h={h}>{children}</TitleAndText>
    </Card>
  );
}

Note.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
};

Note.defaultProps = {
  title: "Note: ",
  children: null,
  h: 5,
};

export default Note;
