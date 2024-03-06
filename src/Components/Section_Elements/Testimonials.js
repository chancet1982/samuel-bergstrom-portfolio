/* eslint-disable no-nested-ternary */
import { motion } from "framer-motion";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useWindowSize } from "react-use";
import PropTypes from "prop-types";
import { TESTIMONIALS } from "../../data/dictionaries/TESTIMONIALS";
import padding from "../../theme/padding";
import Testimonial from "./Testimonials/Testimonial";
import breakpoints from "../../theme/breakpoints";
import MasonryLayout from "../Shared/MasonryLayout";
import pickRandom from "../../utils/pickRandom";
import Button from "../Shared/Button";
import sizes from "../../theme/sizes";

const StyledTestimonials = styled(motion.div)`
  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  > button {
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    ${({ $limitMaxWidth }) =>
      $limitMaxWidth && {
        maxWidth: `${sizes.contentWidthLimit}px`,
        margin: "0 auto",
      }}
  }
`;

function Testimonials({ inLandingPage, limitMaxWidth }) {
  const { width } = useWindowSize();
  const [isPreview, togglePreview] = useState(width <= breakpoints.mobileLarge); // TODO: this works but does not account for resize: ;
  const testimonials = isPreview ? pickRandom(TESTIMONIALS, 3) : TESTIMONIALS;

  useEffect(() => {
    if (inLandingPage) {
      togglePreview(true);
    }
  }, [inLandingPage]);

  return (
    <StyledTestimonials $limitMaxWidth={limitMaxWidth}>
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
      {(width <= breakpoints.mobileLarge || inLandingPage) && (
        <Button onClick={() => togglePreview(!isPreview)}>
          {isPreview ? "Show all testimonials" : "Collapse"}
        </Button>
      )}
    </StyledTestimonials>
  );
}

Testimonials.propTypes = {
  inLandingPage: PropTypes.bool,
  limitMaxWidth: PropTypes.bool,
};

Testimonials.defaultProps = {
  inLandingPage: false,
  limitMaxWidth: false,
};

export default Testimonials;
