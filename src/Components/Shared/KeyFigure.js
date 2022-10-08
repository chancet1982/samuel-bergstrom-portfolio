import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useIntersection } from "react-use";
import { variants } from "../../animations/animations";
import padding from "../../theme/padding";
import Span from "./Span";
import Title from "./Title";

const StyledKeyFigure = styled(motion.div)`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${padding.vertical.double} ${padding.horizontal.double};
`;

/* TODO: Find a better name for it (Can already used in KeyFigures & Highlights, can potentially be used in Overview & Result) */
function KeyFigure({ value, label, flip }) {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  const renderValueAndLabel = () => {
    const valueAsString = Array.isArray(value) ? value.join(", ") : value;

    return flip ? (
      <>
        <Span>{label}</Span>
        <Title h={5}>{valueAsString}</Title>
      </>
    ) : (
      <>
        <Span xxl>
          <strong>{valueAsString}</strong>
        </Span>
        <Span>{label}</Span>
      </>
    );
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  return (
    <StyledKeyFigure
      ref={intersectionRef}
      initial="hidden"
      variants={variants}
      animate={inView ? "inView" : "hidden"}
    >
      {renderValueAndLabel()}
    </StyledKeyFigure>
  );
}

KeyFigure.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  label: PropTypes.string.isRequired,
  flip: PropTypes.bool,
};

KeyFigure.defaultProps = {
  flip: false,
};

export default KeyFigure;
