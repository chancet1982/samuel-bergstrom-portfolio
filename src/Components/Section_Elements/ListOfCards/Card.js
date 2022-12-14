import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";
import TitleAndText from "../../Shared/TitleAndText";
import padding from "../../../theme/padding";
import breakpoints from "../../../theme/breakpoints";
import useBgColor from "../../../utils/useBgColor";

const StyledCard = styled(motion.div)`
  width: clamp(${breakpoints.mobile}, 50%, ${breakpoints.mobileLarge});
  background-color: ${({ $light }) =>
    $light ? "rgba(255,255,255,0.04)" : "white"};
  border-radius: 0.5rem;
  scroll-snap-align: start;
  position: relative;
  box-sizing: border-box;
  min-height: 260px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 5%);
`;

const StyledCardMedia = styled(motion.div)`
  background-image: url(${({ $mediaUrl }) => $mediaUrl});
  aspect-ratio: 3/2;
  background-size: cover;
`;

const StyledCardContent = styled(motion.div)`
  padding: ${padding.vertical.double} ${padding.horizontal.double};
`;

function Card({ title, text, mediaUrl }) {
  const light = useBgColor();
  return (
    <StyledCard $light={light}>
      {mediaUrl && <StyledCardMedia $mediaUrl={mediaUrl} />}
      <StyledCardContent>
        <TitleAndText title={title} h={4}>
          {text}
        </TitleAndText>
      </StyledCardContent>
    </StyledCard>
  );
}

Card.propTypes = {
  mediaUrl: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Card.defaultProps = {
  mediaUrl: null,
  title: null,
};

Card.defaultProps = {};

export default Card;
