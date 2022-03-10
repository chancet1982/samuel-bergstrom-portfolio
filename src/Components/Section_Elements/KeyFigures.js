import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import breakpoints from "../../theme/breakpoints";
import KeyFigure from "../Elements/KeyFigure";
import BackgroundWrapper from "../BackgroundWrapper";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";

const StyledKeyFigures = styled(motion.div)`
  padding: 4rem 4vw;
  max-width: ${breakpoints.contentWidthLimit}px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${breakpoints.mobileLarge}px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const KeyFigures = ({ items, bgColor, bgImageUrl, limitMaxWidth }) => {
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (setLight !== null &&
      setLight(
        bgColor !== null &&
          bgColor !== colors.offwhite &&
          bgColor !== colors.primaryShade
      )) ||
      bgImageUrl !== null;
  }, [setLight, bgColor, bgImageUrl]);

  const renderKeyFigures = () => (
    <StyledKeyFigures>
      {items.map(({ value, description }) => (
        <KeyFigure value={value} description={description} key={uuid()} />
      ))}
    </StyledKeyFigures>
  );

  return bgColor || bgImageUrl ? (
    <BackgroundWrapper
      bgColor={bgColor}
      bgImageUrl={bgImageUrl}
      limitMaxWidth={limitMaxWidth}
    >
      {renderKeyFigures()}
    </BackgroundWrapper>
  ) : (
    renderKeyFigures()
  );
};

KeyFigures.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  bgColor: PropTypes.string,
  bgImageUrl: PropTypes.string,
  limitMaxWidth: PropTypes.bool,
};

KeyFigures.defaultProps = {
  bgColor: null,
  bgImageUrl: null,
  limitMaxWidth: false,
};

export default KeyFigures;
