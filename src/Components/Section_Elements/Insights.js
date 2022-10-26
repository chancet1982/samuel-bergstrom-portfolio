/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import TitleAndText from "../Shared/TitleAndText";
import breakpoints from "../../theme/breakpoints";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";
import Paragraph from "../Shared/Paragraph";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";
import BackgroundWrapper from "../Shared/BackgroundWrapper";

const StyledInsights = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 0 ${padding.horizontal.double};

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
    padding: ${padding.vertical.double} ${padding.horizontal.double};
    box-sizing: border-box;
  }
`;

const StyledInsightsContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: ${padding.vertical.single};
  padding: 0 ${padding.horizontal.double};

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
    // eslint-disable-next-line no-unused-expressions
    setLight !== null &&
      setLight(
        bgColor !== null &&
          bgColor !== colors.offwhite &&
          bgColor !== colors.primaryShade
      );
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
      <TitleAndText h={h} title={title} isPadded>
        {text && text}
      </TitleAndText>
      <StyledInsightsContent
        $isTwoColumnsOnDesktop={isTwoColumnsOnDesktop}
        isPadded
      >
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
