/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import TitleAndText from "./TitleAndText";
import sizes from "../../theme/sizes";

const StyledCenteredTitleAndText = styled(motion.div)`
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};

  ${({ $isPadded }) =>
    $isPadded && {
      paddingTop: padding.vertical.quadruple,
    }}

  @media (min-width: ${breakpoints.desktop}px) {
    background-color: transparent;
    max-width: calc(${sizes.contentWidthLimit}px * 0.64);
    justify-content: flex-start;
    text-align: center;
    margin: 0 auto;

    p {
      max-width: inherit;
    }
  }
`;

function CenteredTitleAndText({ title, text, isPadded, h }) {
  return (
    <StyledCenteredTitleAndText $isPadded={isPadded}>
      <TitleAndText h={h} title={title}>
        {text}
      </TitleAndText>
    </StyledCenteredTitleAndText>
  );
}

CenteredTitleAndText.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isPadded: PropTypes.bool,
  h: PropTypes.number,
};

CenteredTitleAndText.defaultProps = {
  title: null,
  text: null,
  isPadded: false,
  h: 2,
};

export default CenteredTitleAndText;
