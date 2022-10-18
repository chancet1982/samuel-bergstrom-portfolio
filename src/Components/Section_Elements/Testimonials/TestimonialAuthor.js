import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import Span from "../../Shared/Span";
import Title from "../../Shared/Title";
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

const StyledAuthorName = styled(motion.figcaption)``;

function TestimonialAuthor({ authorName, authorTitle, authorImageUrl }) {
  return (
    <StyledTestimonialAuthor>
      <StyledAuthorImage
        src={authorImageUrl}
        alt={authorTitle}
        variants={authorImageVariants}
      />
      <StyledAuthorName>
        <Title h={5}>{authorName}</Title>
        <Span>{authorTitle}</Span>
      </StyledAuthorName>
    </StyledTestimonialAuthor>
  );
}

TestimonialAuthor.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorTitle: PropTypes.string.isRequired,
  authorImageUrl: PropTypes.string.isRequired,
};

export default TestimonialAuthor;
