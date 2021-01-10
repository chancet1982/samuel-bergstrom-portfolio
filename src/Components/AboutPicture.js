/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import CaseThumbnail from "./CaseThumbnail";
import CASES from "../data/CASES";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import Textbox from "./Textbox";
import Image from "./Elements/Image";

const StyledAboutImage = styled(motion.div)`
  /*display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.25rem;
  row-gap: 0.25rem;*/
  max-width: 32vw;
  margin: 0 auto;
  padding-top: ${padding.vertical.quadruple};
  padding-bottom: ${padding.vertical.quadruple};

  /*> div {
    @media (max-width: ${breakpoints.tablet}px) {
      grid-column: 1 / span 2;
    }

    &:nth-child(1) {
      padding-left: ${padding.horizontal.double};
    }
  }*/
`;

const AboutImage = () => {
  const imageUrl = "assets/Sam.png";
  const imageAlt = "Just a picture of me being myself";

  return (
    <StyledAboutImage>
      <Image
        imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
        imageAlt={imageAlt}
      />
    </StyledAboutImage>
  );
};

export default AboutImage;
