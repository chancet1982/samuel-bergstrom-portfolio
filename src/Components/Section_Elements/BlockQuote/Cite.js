import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useBgColor from "../../../utils/useBgColor";
import Span from "../../Shared/Span";
import colors from "../../../theme/colors";

const StyledCite = styled(motion.cite)`
  display: block;

  :before {
    display: inline-block;
    content: "-";
    width: 1rem;
    margin-left: -1rem;
    color: ${({ $light }) =>
      $light ? colors.lighten.medium : colors.darken.medium};
  }
`;

function Cite({ children }) {
  const light = useBgColor();

  return (
    <StyledCite $light={light}>
      <Span small>{children}</Span>
    </StyledCite>
  );
}

Cite.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cite;
