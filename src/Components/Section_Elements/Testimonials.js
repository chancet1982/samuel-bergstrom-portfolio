import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import TitleAndText from "../Elements/TitleAndText";
import { TESTIMONIALS } from "../../data/dictionaries/TESTIMONIALS";
import padding from "../../theme/padding";
import Testimonial from "../Elements/Testimonial";

const StyledTestimonials = styled(motion.div)`
  padding: ${padding.vertical.double} ${padding.horizontal.double};
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;
`;

const Testimonials = ({ title, text }) => {
  return (
    <StyledTestimonials>
      {(title || text) && (
        <TitleAndText title={title} h={2}>
          {text}
        </TitleAndText>
      )}
      {TESTIMONIALS.map(({ author, content }) => (
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
