import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import breakpoints from "../../theme/breakpoints";
import ValueAndLabel from "../Shared/ValueAndLabel";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";

const StyledKeyFigures = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid ${colors.text.dark.low};
  border-bottom: 1px solid ${colors.text.dark.low};
  box-sizing: border-box;

  padding: ${({ bgColor }) =>
    bgColor
      ? `${padding.vertical.double} ${padding.horizontal.double}`
      : `0 ${padding.horizontal.double}`};

  @media (min-width: ${breakpoints.mobileLarge}px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

function KeyFigures({ items, bgColor, bgImageUrl }) {
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    setLight !== null &&
      setLight(
        (bgColor !== null &&
          bgColor !== colors.offwhite &&
          bgColor !== colors.primaryShade) ||
          bgImageUrl !== null
      );
  }, [setLight, bgColor, bgImageUrl]);

  const renderKeyFigures = () => (
    <StyledKeyFigures
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {items.map(({ value, label }) => (
        <ValueAndLabel value={value} label={label} key={uuid()} h={3} />
      ))}
    </StyledKeyFigures>
  );

  return bgColor || bgImageUrl ? (
    <BackgroundWrapper bgColor={bgColor} bgImageUrl={bgImageUrl}>
      {renderKeyFigures()}
    </BackgroundWrapper>
  ) : (
    renderKeyFigures()
  );
}

KeyFigures.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  bgColor: PropTypes.string,
  bgImageUrl: PropTypes.string,
};

KeyFigures.defaultProps = {
  bgColor: null,
  bgImageUrl: null,
};

export default KeyFigures;
