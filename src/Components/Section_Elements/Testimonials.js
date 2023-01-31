/* eslint-disable no-nested-ternary */
import { motion } from "framer-motion";
import styled from "styled-components";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { useWindowSize } from "react-use";
import TitleAndText from "../Shared/TitleAndText";
import { TESTIMONIALS } from "../../data/dictionaries/TESTIMONIALS";
import padding from "../../theme/padding";
import Testimonial from "./Testimonials/Testimonial";
import breakpoints from "../../theme/breakpoints";
import MasonryLayout from "../Shared/MasonryLayout";
import pickRandom from "../../utils/pickRandom";
import Button from "../Shared/Button";

const StyledTestimonials = styled(motion.div)`
  padding: 0 ${padding.horizontal.double};

  > button {
    width: 100%;
  }
`;

function Testimonials({ title, text }) {
  const { width } = useWindowSize();
  const [isPreview, togglePreview] = useState(width <= breakpoints.mobileLarge); // TODO: this works but does not account for resize
  const testimonials = isPreview ? pickRandom(TESTIMONIALS, 3) : TESTIMONIALS;

  return (
    <StyledTestimonials>
      {(title || text) && (
        <TitleAndText
          title={title}
          h={2}
          initial="hidden"
          whileInView="inView"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          isPadded
          isCentered
        >
          {text}
        </TitleAndText>
      )}
      <MasonryLayout
        columns={
          width <= breakpoints.mobileLarge
            ? 1
            : width > breakpoints.mobileLarge && width < breakpoints.desktop
            ? 2
            : 3
        }
        gap={24}
      >
        {testimonials.map(({ author, content }) => (
          <Testimonial key={uuid()} author={author}>
            {content}
          </Testimonial>
        ))}
      </MasonryLayout>
      {width <= breakpoints.mobileLarge && (
        <Button onClick={() => togglePreview(!isPreview)}>
          {isPreview ? "Show all testimonials" : "Collapse"}
        </Button>
      )}
    </StyledTestimonials>
  );
}

Testimonials.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Testimonials.defaultProps = {
  title: null,
  text: null,
};

export default Testimonials;
