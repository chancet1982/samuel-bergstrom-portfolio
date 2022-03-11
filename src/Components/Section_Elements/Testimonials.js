import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { useWindowSize } from "react-use";
import TitleAndText from "../Shared/TitleAndText";
import { TESTIMONIALS } from "../../data/dictionaries/TESTIMONIALS";
import padding from "../../theme/padding";
import Testimonial from "./Testimonials/Testimonial";
import breakpoints from "../../theme/breakpoints";
import pickRandom from "../../utils/pickRandom";

const StyledTestimonials = styled(motion.div)`
  padding: ${padding.vertical.double} ${padding.horizontal.double};
  box-sizing: border-box;
  max-width: ${breakpoints.contentWidthLimit}px;
  margin: 0 auto;
`;

const Testimonials = ({ title, text }) => {
  const { width } = useWindowSize();
  const isMobile = width < breakpoints.desktop;

  return (
    <StyledTestimonials>
      {(title || text) && (
        <TitleAndText title={title} h={2}>
          {text}
        </TitleAndText>
      )}
      {isMobile
        ? pickRandom(TESTIMONIALS, 3).map(({ author, content }) => (
            <Testimonial key={uuid()} author={author}>
              {content}
            </Testimonial>
          ))
        : TESTIMONIALS.map(({ author, content }) => (
            <Testimonial key={uuid()} author={author}>
              {content}
            </Testimonial>
          ))}
    </StyledTestimonials>
  );
};

Testimonials.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Testimonials.defaultProps = {
  title: null,
  text: null,
};

export default Testimonials;
