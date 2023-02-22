import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { imageVariants } from "../../../animations/animations";
import Span from "../../Shared/Span";
import padding from "../../../theme/padding";

const StyledTestimonialAuthor = styled(motion.figure)`
  display: flex;
  align-items: center;
  margin: 0;
  padding-bottom: ${padding.insideElements.half};
`;

const StyledAuthorImage = styled(motion.img)`
  width: ${padding.insideElements.quadruple};
  height: ${padding.insideElements.quadruple};
  clip-path: circle(50%);
  margin: 0 auto;
  filter: grayscale(100%);
  display: inline-block;
`;

const StyledAuthorInfo = styled(motion.figcaption)`
  flex: 1;
  padding-left: ${padding.insideElements.half};
`;

function TestimonialAuthor({ author }) {
  const { authorName, authorTitle, authorImageUrl } = author;

  return (
    <StyledTestimonialAuthor>
      <StyledAuthorImage
        src={authorImageUrl}
        alt={authorImageUrl}
        variants={imageVariants}
      />
      <StyledAuthorInfo>
        <Span highContrast>{authorName}</Span>
        <br />
        <Span small>{authorTitle}</Span>
      </StyledAuthorInfo>
    </StyledTestimonialAuthor>
  );
}

TestimonialAuthor.propTypes = {
  author: PropTypes.shape({
    authorName: PropTypes.string.isRequired,
    authorTitle: PropTypes.string.isRequired,
    authorImageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default TestimonialAuthor;
