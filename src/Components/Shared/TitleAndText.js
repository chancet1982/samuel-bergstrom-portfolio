import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

import Title from "./Title";
import padding from "../../theme/padding";

const StyledTitleAndText = styled(motion.div)`
  ${({ $isPadded }) =>
    $isPadded && {
      padding: `${padding.vertical.double} ${padding.horizontal.double}`,
    }}

  ${({ $sticky }) =>
    $sticky && {
      position: "sticky",
      top: "6vw",
      height: "fit-content",
    }}
`;

function TitleAndText({
  title,
  h,
  children,

  sticky,
  isPadded,
}) {
  return (
    <StyledTitleAndText $sticky={sticky} $isPadded={isPadded}>
      {title && <Title h={h}>{title}</Title>}
      {children}
    </StyledTitleAndText>
  );
}

TitleAndText.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,

  sticky: PropTypes.bool,
  isPadded: PropTypes.bool,
};

TitleAndText.defaultProps = {
  title: null,
  children: null,
  h: 1,

  sticky: false,
  isPadded: false,
};

export default TitleAndText;
