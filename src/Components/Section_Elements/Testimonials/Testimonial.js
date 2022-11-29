import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";
import padding from "../../../theme/padding";
import colors from "../../../theme/colors";
// import breakpoints from "../../../theme/breakpoints";
import sizes from "../../../theme/sizes";
import TestimonialAuthor from "./TestimonialAuthor";
import Span from "../../Shared/Span";

const StyledTestimonial = styled(motion.div)`
  max-width: ${sizes.contentWidthLimit}px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin-bottom: ${padding.vertical.double};
`;

const StyledTestimonialContent = styled(motion.div)`
  position: relative;
  font-style: italic;
  display: block;
  max-width: 64ch;
  padding: ${padding.vertical.half} ${padding.horizontal.double};

  p {
    :last-of-type {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 2vw; /* TODO: replace magic number */
    height: 100%;
    width: 2px;
    background-color: ${({ $light }) =>
      $light ? colors.text.light.low : colors.text.dark.low};
  }
`;

const StyledTestimonialAuthor = styled(motion.div)`
  display: block;

  :before {
    display: inline-block;
    content: "-";
    width: 1rem;
    margin-left: -1rem;
    color: ${({ $light }) =>
      $light ? colors.text.light.low : colors.text.dark.low};
  }
`;

function Testimonial({ children, author }) {
  const { authorName, authorTitle, authorImageUrl } = author;

  const testimonialVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 10,
    },
    inView: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };
  return (
    <StyledTestimonial
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.7 }}
      transition={{
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6,
        type: "spring",
        bouce: 3,
      }}
      variants={testimonialVariants}
    >
      <TestimonialAuthor authorImageUrl={authorImageUrl} />
      <StyledTestimonialContent>
        {children}
        <StyledTestimonialAuthor>
          <Span small>{`${authorName}, ${authorTitle}`}</Span>
        </StyledTestimonialAuthor>
      </StyledTestimonialContent>
    </StyledTestimonial>
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
