/* eslint-disable no-nested-ternary */
import { motion } from "framer-motion";
import styled from "styled-components";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useWindowSize } from "react-use";
import { TESTIMONIALS } from "../../data/dictionaries/TESTIMONIALS";
import padding from "../../theme/padding";
import Testimonial from "./Testimonials/Testimonial";
import breakpoints from "../../theme/breakpoints";
import MasonryLayout from "../Shared/MasonryLayout";
import pickRandom from "../../utils/pickRandom";
import Button from "../Shared/Button";

const StyledTestimonials = styled(motion.div)`
  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};
  box-sizing: border-box;

  > button {
    width: 100%;
  }
`;

function Testimonials() {
  const { width } = useWindowSize();
  const [isPreview, togglePreview] = useState(width <= breakpoints.mobileLarge); // TODO: this works but does not account for resize
  const testimonials = isPreview ? pickRandom(TESTIMONIALS, 3) : TESTIMONIALS;

  return (
    <StyledTestimonials>
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

export default Testimonials;
