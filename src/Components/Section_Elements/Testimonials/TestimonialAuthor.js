import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { authorImageVariants } from "../../../animations/animations";

const StyledTestimonialAuthor = styled(motion.figure)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: stretch;
  justify-content: center;
`;

const StyledAuthorImage = styled(motion.img)`
  width: 6rem;
  height: 6rem;
  clip-path: circle(50%);
  margin: 0 auto;
  filter: grayscale(100%);
`;

function TestimonialAuthor({ authorImageUrl }) {
  return (
    <StyledTestimonialAuthor>
      <StyledAuthorImage
        src={authorImageUrl}
        alt={authorImageUrl}
        variants={authorImageVariants}
      />
    </StyledTestimonialAuthor>
  );
}

TestimonialAuthor.propTypes = {
  authorImageUrl: PropTypes.string.isRequired,
};

export default TestimonialAuthor;
