import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";
import TitleAndText from "../../Shared/TitleAndText";
import padding from "../../../theme/padding";
import breakpoints from "../../../theme/breakpoints";

const StyledCard = styled(motion.div)`
  width: clamp(${breakpoints.mobile}, 50%, ${breakpoints.mobileLarge});
  background-color: white;
  border-radius: 0.5rem;
  scroll-snap-align: start;
`;

const StyledCardMedia = styled(motion.div)`
  background-image: url(${({ $mediaUrl }) => $mediaUrl});
  aspect-ratio: 3/2;
  background-size: cover;
`;

const StyledCardContent = styled(motion.div)`
  background-color: white;
  padding: ${padding.vertical.double} ${padding.horizontal.double};
`;

function Card({ title, text, mediaUrl }) {
  return (
    <StyledCard>
      <StyledCardMedia $mediaUrl={mediaUrl} />
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
