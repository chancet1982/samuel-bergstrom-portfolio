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
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;

  > div:not(:first-of-type) {
    margin-bottom: ${padding.vertical.single};
    padding: ${padding.vertical.single} ${padding.horizontal.double};
    display: flex;
  }

  > div:nth-of-type(2n + 2) {
    border-radius: 2rem 2rem 2rem 0;
    flex-direction: row;
  }

  > div:nth-of-type(2n + 3) {
    border-radius: 2rem 2rem 0 2rem;
    flex-direction: row-reverse;
  }
`;

const StyledTestimonial = styled(motion.div)`
  background-color: ${colors.offwhite};
`;

const StyledTestimonialAuthor = styled(motion.div)`
  padding: ${padding.vertical.single} ${padding.horizontal.single};
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-basis: 20vw;
  flex: 0;
`;

const StyledAuthorImage = styled(motion.img)`
  width: 4rem;
  height: 4rem;
  background-color: pink;
  border-radius: 50%;
`;

const StyledAuthorName = styled(motion.div)`
  position: relative;
`;

const StyledAuthorTitle = styled(motion.div)`
  position: relative;
`;

const TestimonialAuthor = ({ authorName, authorTitle, authorImageUrl }) => {
  return (
    <StyledTestimonialAuthor>
      <StyledAuthorImage src={authorImageUrl} />
      <StyledAuthorName>
        <Span>{authorName}</Span>
      </StyledAuthorName>
      <StyledAuthorTitle>
        <Span small>{authorTitle}</Span>
      </StyledAuthorTitle>
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
      {TESTIMONIALS.map(
        ({ author: { authorName, authorTitle, authorImageUrl }, content }) => (
          <StyledTestimonial>
            <TestimonialAuthor
              authorName={authorName}
              title={authorTitle}
              imageUrl={authorImageUrl}
            />
            {content}
          </StyledTestimonial>
        )
      )}
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
