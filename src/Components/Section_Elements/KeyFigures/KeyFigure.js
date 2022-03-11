import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useIntersection } from "react-use";
import colors from "../../../theme/colors";
import Title from "../../Shared/Title";
import Paragraph from "../../Shared/Paragraph";
import breakpoints from "../../../theme/breakpoints";
import { variants } from "../../../animations/animations";
import padding from "../../../theme/padding";

const StyledKeyFigure = styled(motion.div)`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${padding.horizontal.double};

  @media (min-width: ${breakpoints.tablet}px) {
    width: 12%;
  }
`;

const StyledCircle = styled(motion.div)`
  border-radius: 50%;
  height: 8vw;
  width: 8vw;
  background-color: ${colors.darker10};
  padding: 5ch;

  > h3 {
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const KeyFigures = ({ value, description }) => {
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
    <StyledKeyFigure
      ref={intersectionRef}
      initial="hidden"
      variants={variants}
      animate={inView ? "inView" : "hidden"}
    >
      <StyledCircle>
        <Title h={3}>{value}</Title>
      </StyledCircle>
      <Paragraph>{description}</Paragraph>
    </StyledKeyFigure>
  );
};

KeyFigures.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default KeyFigures;
