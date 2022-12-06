import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

import TitleAndText from "../Shared/TitleAndText";
import ValueAndLabel from "../Shared/ValueAndLabel";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";

const StyledOverviewWrapper = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  min-height: ${({
    theme: {
      sizes: { small },
    },
  }) => small};

  padding: 0 ${padding.horizontal.double};

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

const StyledOverviewText = styled(motion.div)`
  grid-column: 1 / span 3;
  position: relative;

  padding: 0 ${padding.horizontal.double};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${padding.vertical.double} ${padding.horizontal.double} 0
    ${padding.horizontal.double};

  @media (min-width: ${breakpoints.tablet}px) {
    grid-column: 1 / span 2;
    padding: ${padding.vertical.double} ${padding.horizontal.double};
  }
`;

const StyledOverviewItems = styled(motion.div)`
  grid-column: 1 / span 3;
  > div {
    align-items: flex-start;
    text-align: left;
  }

  @media (max-width: ${breakpoints.tablet - 1}px) {
    > div {
      padding: 0 ${padding.horizontal.double} ${padding.vertical.double}
        ${padding.horizontal.double};
    }
  }
  @media (min-width: ${breakpoints.tablet}px) {
    grid-column: 3 / span 1;
  }
`;

function Overview({ text, toolsAndMethods }) {
  return (
    <StyledOverviewWrapper
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <StyledOverviewText>
        {text && <TitleAndText>{text}</TitleAndText>}
      </StyledOverviewText>
      <StyledOverviewItems>
        {toolsAndMethods.length ? (
          <ValueAndLabel
            value="Tools & Methods:"
            label={toolsAndMethods.join(", ")}
            withMargin
          />
        ) : null}
      </StyledOverviewItems>
    </StyledOverviewWrapper>
  );
}

Overview.propTypes = {
  text: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  toolsAndMethods: PropTypes.array,
};

Overview.defaultProps = {
  text: null,
  toolsAndMethods: [],
};

export default Overview;
