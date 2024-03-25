import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";
import padding from "../../theme/padding";
import useBgColor from "../../utils/useBgColor";
import colors from "../../theme/colors";
import { cardVariants } from "../../animations/animations";
import breakpoints from "../../theme/breakpoints";

const StyledCard = styled(motion.div)`
  background-color: ${({ $light }) =>
    $light ? colors.lighten.low : colors.white};
  scroll-snap-align: start;
  position: relative;
  box-sizing: border-box;
  border-radius: ${padding.insideElements.single};
  /*box-shadow: 5px 5px 10px rgb(0 0 0 / 5%);*/
`;

const StyledCardMedia = styled(motion.div)`
  background-image: url(${({ $mediaUrl }) => $mediaUrl});
  aspect-ratio: 3/2;
  background-size: cover;
`;

const StyledCardContent = styled(motion.div)`
  padding: ${padding.insideElements.single} ${padding.insideElements.single};

  @media (min-width: ${breakpoints.mobileLarge}px) and (max-width: ${breakpoints.desktop -
    1}px) {
    padding: ${padding.insideElements.double} ${padding.insideElements.double};
  }

  @media (min-width: ${breakpoints.desktop}px) {
    padding: ${padding.insideElements.tripple} ${padding.insideElements.tripple};
  }
`;

function Card({ children, mediaUrl }) {
  const light = useBgColor();
  return (
    <StyledCard
      $light={light}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, staggerChildren: 0.1, delayChildren: 0.2 }}
      variants={cardVariants}
    >
      {mediaUrl && <StyledCardMedia $mediaUrl={mediaUrl} />}
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  );
}

Card.propTypes = {
  mediaUrl: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  mediaUrl: null,
};

Card.defaultProps = {};

export default Card;
