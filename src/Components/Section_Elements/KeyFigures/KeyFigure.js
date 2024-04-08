import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import breakpoints from "../../../theme/breakpoints";
import ValueAndLabel from "../../Shared/ValueAndLabel";
import { ElementColorContext } from "../../../Context/ElementColorContext";
import padding from "../../../theme/padding";

const StyledKeyFigure = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${padding.insideElements.double};

  @media (width > ${breakpoints.mobileLarge}px) {
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: solid 1rem white;

    ${({ $bgColor }) =>
      $bgColor && {
        backgroundColor: $bgColor,
      }}
  }

  @media (width > ${breakpoints.tablet}px) {
    scale: 1.1;
  }
`;

function KeyFigure({ value, label, bgColor }) {
  const [, setElementBgColor] = useContext(ElementColorContext);

  useEffect(() => {
    if (bgColor) {
      setElementBgColor(bgColor);
    }
  }, [setElementBgColor, bgColor]);

  return (
    <StyledKeyFigure key={uuid()} $bgColor={bgColor}>
      <ValueAndLabel label={label} value={value} h={2} />
    </StyledKeyFigure>
  );
}

KeyFigure.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

KeyFigure.defaultProps = {
  bgColor: null,
};

export default KeyFigure;
