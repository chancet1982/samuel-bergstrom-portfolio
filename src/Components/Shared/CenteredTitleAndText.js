/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import TitleAndText from "./TitleAndText";
import { variants } from "../../animations/animations";
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

function CenteredTitleAndText({ title, text, isPadded, disableAnimations, h }) {
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
    <StyledCenteredTitleAndText
      ref={intersectionRef}
      initial={disableAnimations ? "inView" : "hidden"}
      animate={disableAnimations || inView ? "inView" : "hidden"}
      variants={variants}
      $isPadded={isPadded}
    >
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
  disableAnimations: PropTypes.bool,
  h: PropTypes.number,
};

CenteredTitleAndText.defaultProps = {
  title: null,
  text: null,
  isPadded: false,
  disableAnimations: false,
  h: 2,
};

export default CenteredTitleAndText;
