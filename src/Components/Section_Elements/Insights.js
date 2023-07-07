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
  grid-gap: max(
    ${padding.outsideElements.double},
    ${padding.insideElements.single}
  );

  @media (min-width: ${breakpoints.mobileLarge}px) and (max-width: ${breakpoints.desktop -
    1}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: ${({ $isTwoColumnsOnDesktop }) =>
      $isTwoColumnsOnDesktop ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  }
`;

function Insights({
  overline,
  title,
  h,
  items,
  bgColor,
  isTwoColumnsOnDesktop,
  text,
  isCentered,
}) {
  const [, setElementBgColor] = useContext(ElementColorContext);

  useEffect(() => {
    if (bgColor) {
      setElementBgColor(bgColor);
    }
  }, [setElementBgColor, bgColor]);

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
      <TitleAndText
        overline={overline}
        title={title}
        h={h}
        isCentered={isCentered}
      >
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
  overline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  h: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    })
  ).isRequired,
  bgColor: PropTypes.string,
  isTwoColumnsOnDesktop: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isCentered: PropTypes.bool,
};

Insights.defaultProps = {
  overline: null,
  title: null,
  h: 2,
  bgColor: null,
  isTwoColumnsOnDesktop: false,
  text: null,
  isCentered: false,
};

export default Insights;
