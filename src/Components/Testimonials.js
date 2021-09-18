import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import TitleAndText from "./TitleAndText";

const StyledTestimonials = styled(motion.div)`
  position: relative;
`;

const StyledTestimonial = styled(motion.div)`
  position: relative;
`;

const StyledTestimonialAuthor = styled(motion.div)`
  position: relative;
`;

const Testimonials = ({ title, text, items }) => {
  return (
    <StyledTestimonials>
      {(title || text) && (
        <TitleAndText title={title} h={2}>
          {text}
        </TitleAndText>
      )}
      {items.map(({ author, content }) => (
        <StyledTestimonial>
          <StyledTestimonialAuthor
            name={author.name}
            title={author.title}
            picture={author.picture}
          />
          {content}
        </StyledTestimonial>
      ))}
      ;
    </StyledTestimonials>
  );
};

Testimonials.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      }).isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Testimonials.defaultProps = {
  title: null,
  text: null,
};

export default Testimonials;
