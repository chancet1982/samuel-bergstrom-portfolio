/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { motion } from "framer-motion";
import Title from "./Title";
import padding from "../../theme/padding";
// import sizes from "../../theme/sizes";
import TitleAndText from "./TitleAndText";

const StyledNote = styled(TitleAndText)`
  margin-top: ${padding.vertical.single};
  background-color: white;
  position: relative;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 5%);
  padding: ${padding.vertical.single} ${padding.horizontal.single};
`;

function Note({ title, h, children, ...rest }) {
  return (
    <StyledNote {...rest}>
      {title && <Title h={h}>{title}</Title>}
      {children && children}
    </StyledNote>
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
