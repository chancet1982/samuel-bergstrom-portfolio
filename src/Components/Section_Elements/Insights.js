/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import TitleAndText from "../Shared/TitleAndText";
import breakpoints from "../../theme/breakpoints";
import { ElementColorContext } from "../../Context/ElementColorContext";
import Paragraph from "../Shared/Paragraph";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import shouldUseLightText from "../../utils/shouldUseLightText";

const StyledInsights = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

const StyledInsightsContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: ${padding.insideElements.single};
  row-gap: ${padding.insideElements.single};

  @media (min-width: ${breakpoints.mobileLarge}px) and (max-width: ${breakpoints.desktop -
    1}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: ${({ $isTwoColumnsOnDesktop }) =>
      $isTwoColumnsOnDesktop ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  }
`;

function Insights({ title, h, items, bgColor, isTwoColumnsOnDesktop, text }) {
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    setLight(shouldUseLightText(bgColor));
  }, [setLight, bgColor]);

  const convertRawInsightsToElements = () =>
    items.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <TitleAndText title={item.title} h={5} key={index}>
        <Paragraph>{item.text}</Paragraph>
      </TitleAndText>
    ));

  const renderInsights = () => (
    <StyledInsights
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <TitleAndText h={h} title={title}>
        {text && text}
      </TitleAndText>
      <StyledInsightsContent $isTwoColumnsOnDesktop={isTwoColumnsOnDesktop}>
        {convertRawInsightsToElements()}
      </StyledInsightsContent>
    </StyledInsights>
  );

  return bgColor ? (
    <BackgroundWrapper bgColor={bgColor}>{renderInsights()}</BackgroundWrapper>
  ) : (
    renderInsights()
  );
}

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
  isTwoColumnsOnDesktop: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Insights.defaultProps = {
  title: null,
  h: 2,
  bgColor: null,
  isTwoColumnsOnDesktop: false,
  text: null,
};

export default Insights;
