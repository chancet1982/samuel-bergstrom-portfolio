import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";
import padding from "../../../theme/padding";
import colors from "../../../theme/colors";
import breakpoints from "../../../theme/breakpoints";
import TestimonialAuthor from "./TestimonialAuthor";

const StyledTestimonial = styled(motion.div)`
  @media (min-width: ${breakpoints.tablet}px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  margin-bottom: ${padding.vertical.single};
  background-color: ${colors.primaryShade};
  border-radius: ${padding.vertical.single};
  padding: 1px;
  > div {
    position: relative;

    :before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
    }
  }

  :nth-of-type(2n + 1) {
    @media (max-width: ${breakpoints.tablet - 1}px) {
      > div {
        border-radius: 0 2rem 2rem 2rem;

        ::before {
          left: 0;
          top: -2rem;
          border: solid 1rem;
          border-color: transparent transparent white white;
        }
      }
    }

    @media (min-width: ${breakpoints.tablet}px) {
      grid-template-areas: "a b b b b";

      > div {
        border-radius: 2rem 2rem 2rem 0;

        ::before {
          left: -2rem;
          bottom: 0;
          border: solid 1rem;
          border-color: transparent white white transparent;
        }
      }
    }
  }

  :nth-of-type(2n + 2) {
    @media (max-width: ${breakpoints.tablet - 1}px) {
      > div {
        border-radius: 2rem 0 2rem 2rem;

        ::before {
          right: 0;
          top: -2rem;
          border: solid 1rem;
          border-color: transparent white white transparent;
        }
      }
    }

    @media (min-width: ${breakpoints.tablet}px) {
      grid-template-areas: "b b b b a";

      > div {
        border-radius: 2rem 2rem 0 2rem;
        position: relative;

        ::before {
          right: -2rem;
          bottom: 0;
          border: solid 1rem;
          border-color: transparent transparent white white;
        }
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

const StyledTestimonialContent = styled(motion.div)`
  padding: ${padding.vertical.single} ${padding.horizontal.double};
  background-color: white;
  display: flex;
  align-items: center;
`;

function Testimonial({ children, author }) {
  return (
    <StyledTestimonial>
      <TestimonialAuthor
        authorName={author.authorName}
        authorTitle={author.authorTitle}
        authorImageUrl={author.authorImageUrl}
      />
      <StyledTestimonialContent>{children}</StyledTestimonialContent>
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
