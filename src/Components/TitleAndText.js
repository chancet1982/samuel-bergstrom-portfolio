import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import Title from "./Elements/Title";
import { variants } from "../animations/animations";
import padding from "../theme/padding";

const StyledTitleAndText = styled(motion.div)`
  ${({ padded }) =>
    padded && {
      padding: `${padding.vertical.double} ${padding.horizontal.double}`,
    }}

  ${({ sticky }) =>
    sticky && {
      position: "sticky",
      top: "6vw",
      height: "fit-content",
    }}
`;

const TitleAndText = ({
  title,
  h,
  children,
  disableAnimations,
  sticky,
  padded,
}) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  return (
    <StyledTitleAndText
      ref={intersectionRef}
      initial="hidden"
      sticky={sticky}
      variants={variants}
      animate={disableAnimations || inView ? "inView" : "hidden"}
      padded={padded}
    >
      {title && <Title h={h}>{title}</Title>}
      {children}
    </StyledTitleAndText>
  );
};

TitleAndText.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
  disableAnimations: PropTypes.bool,
  sticky: PropTypes.bool,
  padded: PropTypes.bool,
};

TitleAndText.defaultProps = {
  title: null,
  children: null,
  h: 1,
  disableAnimations: false,
  sticky: false,
  padded: false,
};

export default TitleAndText;
