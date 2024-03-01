import React from "react";
import PropTypes from "prop-types";
import TitleAndText from "../../Shared/TitleAndText";

function Caption({ overline, title, text, h }) {
  return (
    <TitleAndText h={h} overline={overline} title={title}>
      {text}
    </TitleAndText>
  );
}

Caption.propTypes = {
  overline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
};

Caption.defaultProps = {
  overline: null,
  title: null,
  text: null,
  h: 1,
};

export default Caption;
