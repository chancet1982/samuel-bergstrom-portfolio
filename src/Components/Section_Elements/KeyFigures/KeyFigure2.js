import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useIntersection } from "react-use";
import { variants } from "../../../animations/animations";
import padding from "../../../theme/padding";
import Span from "../../Shared/Span";

const StyledKeyFigure = styled(motion.div)`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${padding.vertical.double} ${padding.horizontal.double};
`;

function KeyFigure2({ value, label, flip }) {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  const renderValueAndLabel = () =>
    flip ? (
      <>
        <Span>{label}</Span>
        <Span xxl>
          <strong>{value}</strong>
        </Span>
      </>
    ) : (
      <>
        <Span xxl>
          <strong>{value}</strong>
        </Span>
        <Span>{label}</Span>
      </>
    );

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

KeyFigure2.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  flip: PropTypes.bool,
};

KeyFigure2.defaultProps = {
  flip: false,
};

export default KeyFigure2;
