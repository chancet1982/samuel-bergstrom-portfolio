/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import TitleAndText from "../Shared/TitleAndText";
import { variants } from "../../animations/animations";
import breakpoints from "../../theme/breakpoints";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";
import Paragraph from "../Shared/Paragraph";
import padding from "../../theme/padding";

const StyledInsights = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${breakpoints.contentWidthLimit}px;
    margin: 0 auto;
  }

  ${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    }};

  p,
  li {
    max-width: 80ch;
  }
`;

const StyledInsightsContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: ${padding.vertical.single};

  @media (min-width: ${breakpoints.mobileLarge}px) and (max-width: ${breakpoints.desktop -
    1}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Insights = ({ title, h, items, bgColor }) => {
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

  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    setLight !== null &&
      setLight(
        bgColor !== null &&
          bgColor !== colors.offwhite &&
          bgColor !== colors.primaryShade
      );
  }, [setLight, bgColor]);

  const convertRawInsightsToElements = () =>
    items.map((item) => (
      <TitleAndText title={item.title} h={5}>
        <Paragraph>{item.text}</Paragraph>
      </TitleAndText>
    ));

  return (
    <StyledInsights
      ref={intersectionRef}
      initial="hidden"
      animate={inView ? "inView" : "hidden"}
      variants={variants}
      bgColor={bgColor}
    >
      <TitleAndText h={h} title={title} disableAnimations isPadded>
        <StyledInsightsContent>
          {convertRawInsightsToElements()}
        </StyledInsightsContent>
      </TitleAndText>
    </StyledInsights>
  );
};

Insights.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  bgColor: PropTypes.string,
};

Insights.defaultProps = {
  title: null,
  h: 2,
  bgColor: null,
};

export default Insights;
