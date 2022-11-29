import { motion } from "framer-motion";
import styled from "styled-components";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import TitleAndText from "../Shared/TitleAndText";
import { TESTIMONIALS } from "../../data/dictionaries/TESTIMONIALS";
import padding from "../../theme/padding";
import Testimonial from "./Testimonials/Testimonial";
import breakpoints from "../../theme/breakpoints";
import pickRandom from "../../utils/pickRandom";
import sizes from "../../theme/sizes";
import Button from "../Shared/Button";

const StyledTestimonials = styled(motion.div)`
  padding: 0 ${padding.horizontal.double};

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
    padding: ${padding.vertical.double} ${padding.horizontal.double};
  }
`;

/* TODO: update style of testimonial to be more minimalistic and to match the style of quotes */
/* TODO: title and text need to be padding left and right */
function Testimonials({ title, text }) {
  const [isPreview, togglePreview] = useState(true);
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
          transition={{ staggerChildren: 0.2 }}
        >
          {text}
        </TitleAndText>
      )}
      {testimonials.map(({ author, content }) => (
        <Testimonial key={uuid()} author={author}>
          {content}
        </Testimonial>
      ))}
      <Button onClick={() => togglePreview(!isPreview)}>
        {isPreview ? "Expand" : "Collapse"}
      </Button>
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
