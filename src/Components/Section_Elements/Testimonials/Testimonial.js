import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";
import TestimonialAuthor from "./TestimonialAuthor";
import Card from "../../Shared/Card";

const StyledTestimonialContent = styled(motion.div)`
  /* removing the last bit of margin*/
  > *:first-child {
    margin-top: 0;
  }
`;

function Testimonial({ children, author }) {
  return (
    <Card>
      <TestimonialAuthor author={author} />
      <StyledTestimonialContent>{children}</StyledTestimonialContent>
    </Card>
  );
}

Testimonial.propTypes = {
  author: PropTypes.shape({
    authorName: PropTypes.string.isRequired,
    authorTitle: PropTypes.string.isRequired,
    authorImageUrl: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

Testimonial.defaultProps = {};

export default Testimonial;
