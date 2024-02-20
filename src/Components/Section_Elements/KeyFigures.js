import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import breakpoints from "../../theme/breakpoints";
import ValueAndLabel from "../Shared/ValueAndLabel";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import { ElementColorContext } from "../../Context/ElementColorContext";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";
import Card from "../Shared/Card";

const StyledKeyFigures = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
  padding-top: ${padding.outsideElements.double};
  padding-bottom: ${padding.outsideElements.double};
  grid-gap: max(
    ${padding.outsideElements.double},
    ${padding.insideElements.single}
  );
  box-sizing: border-box;

  > div {
    align-items: flex-start;
    justify-content: flex-start;

    > h5 {
      text-align: left;
      margin-top: 0;
    }
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

function KeyFigures({ items, bgColor, bgMedia }) {
  const [, setElementBgColor] = useContext(ElementColorContext);

  useEffect(() => {
    if (bgColor) {
      setElementBgColor(bgColor);
    } else if (bgMedia !== null) {
      setElementBgColor("#000000");
    }
  }, [setElementBgColor, bgColor, bgMedia]);

  const renderKeyFigures = () => (
    <StyledKeyFigures
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      $columns={items.length}
    >
      {items.map(({ value, label }) => (
        <Card key={uuid()}>
          <ValueAndLabel label={label} value={value} h={3} />
        </Card>
      ))}
    </StyledKeyFigures>
  );

  return bgColor || bgMedia ? (
    <BackgroundWrapper bgColor={bgColor} bgMedia={bgMedia}>
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
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
  }),
};

KeyFigures.defaultProps = {
  bgColor: null,
  bgMedia: null,
};

export default KeyFigures;
