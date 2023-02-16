/* eslint-disable react/require-default-props */
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import padding from "../../theme/padding";
import { SPACER_SIZES } from "../../data/dictionaries/SPACER_SIZES";

const StyledSpacer = styled(motion.div)`
  ${({ $size }) =>
    $size === SPACER_SIZES.MEDIUM && {
      paddingTop: padding.vertical.quadruple,
      /* backgroundColor: "pink", */
    }}

${({ $size }) =>
    $size === SPACER_SIZES.SMALL && {
      paddingTop: padding.vertical.double,
      /* backgroundColor: "pink", */
    }}
`;

function SectionSpacer({ size = SPACER_SIZES.MEDIUM }) {
  return <StyledSpacer $size={size} />;
}

SectionSpacer.propTypes = {
  size: PropTypes.oneOf([
    SPACER_SIZES.MEDIUM,
    SPACER_SIZES.SMALL,
  ]),
};

export default SectionSpacer;
