import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import TitleAndText from "./TitleAndText";
import Span from "./Elements/Span";
import { TESTIMONIALS } from "../data/dictionaries/TESTIMONIALS";
import padding from "../theme/padding";
import colors from "../theme/colors";

const StyledTestimonials = styled(motion.div)`
  padding: ${padding.vertical.double} ${padding.horizontal.double};
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;
`;

const StyledTestimonial = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: ${padding.vertical.single};

  :nth-of-type(2n + 1) {
    grid-template-areas: "a b b b b";

    > div {
      border-radius: 2rem 2rem 2rem 0;
      position: relative;

      ::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        left: -2rem;
        bottom: 0;
        border: solid 1rem;
        border-color: transparent ${colors.offwhite} ${colors.offwhite}
          transparent;
      }
    }
  }

  :nth-of-type(2n + 2) {
    grid-template-areas: "b b b b a";

    > div {
      border-radius: 2rem 2rem 0 2rem;
      position: relative;

      ::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        right: -2rem;
        bottom: 0;
        border: solid 1rem;
        border-color: transparent transparent ${colors.offwhite}
          ${colors.offwhite};
      }
    }
  }

  > figure {
    grid-area: a;
  }
  > div {
    grid-area: b;
  }
`;

const StyledTestimonialAuthor = styled(motion.figure)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: stretch;
  justify-content: center;
`;

const StyledTestimonialContent = styled(motion.div)`
  padding: ${padding.vertical.single} ${padding.horizontal.double};
  background-color: ${colors.offwhite};
`;

const StyledAuthorImage = styled(motion.img)`
  width: 6rem;
  height: 6rem;
  clip-path: circle(50%);
  margin: 0 auto;
  filter: grayscale(100%);
`;

const StyledAuthorName = styled(motion.figcaption)``;

const TestimonialAuthor = ({ authorName, authorTitle, authorImageUrl }) => {
  return (
    <StyledTestimonialAuthor>
      <StyledAuthorImage src={authorImageUrl} alt={authorTitle} />
      <StyledAuthorName>
        <Span>{authorName}</Span> <br />
        <Span small>{authorTitle}</Span>
      </StyledAuthorName>
    </StyledTestimonialAuthor>
  );
};

TestimonialAuthor.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorTitle: PropTypes.string.isRequired,
  authorImageUrl: PropTypes.string.isRequired,
};

const Testimonials = ({ title, text }) => {
  return (
    <StyledTestimonials>
      {(title || text) && (
        <TitleAndText title={title} h={2}>
          {text}
        </TitleAndText>
      )}
      {TESTIMONIALS.map(({ author, content }) => (
        <StyledTestimonial>
          <TestimonialAuthor
            authorName={author.authorName}
            authorTitle={author.authorTitle}
            authorImageUrl={author.authorImageUrl}
          />
          <StyledTestimonialContent>{content}</StyledTestimonialContent>
        </StyledTestimonial>
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
