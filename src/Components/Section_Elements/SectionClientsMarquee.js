import React, { useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useMeasure } from "react-use";
import { CLIENTS } from "../../data/dictionaries/CLIENTS";
import Image from "../Shared/Image";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";

const StyledSectionClients = styled(motion.div)`
  position: relative;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;

  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};

  grid-gap: max(
    ${padding.outsideElements.single},
    ${padding.insideElements.single}
  );
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    bottom: 0;
    z-index: 1;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    bottom: 0;
    z-index: 1;
    background: rgb(255, 255, 255);
    background: rgb(255, 255, 255);
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const StyledSectionClientsTrack = styled(motion.div)`
  width: max-content;

  > div {
    display: inline-block;
    width: max-content;

    > img {
      max-width: clamp(144px, 10rem, 160px);
      height: auto;
      flex: 0;
    }
  }
`;

const StyledFirstRowOfClients = styled(motion.div)``;

const StyledSecondRowOfClients = styled(motion.div)``;

function SectionClientsMarquee() {
  const [clientsRef, { width }] = useMeasure();

  const ref = useRef(null);

  const renderClients = CLIENTS.map((item) => (
    <Image
      key={uuid()}
      grayscale
      imageUrl={`${process.env.PUBLIC_URL}/${item.imageUrl.color}`}
      imageAlt={item.imageAlt}
    />
  ));

  const marqueeVariants = {
    animate: {
      x: [0, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <StyledSectionClients ref={ref}>
      <StyledSectionClientsTrack variants={marqueeVariants} animate="animate">
        <StyledFirstRowOfClients ref={clientsRef}>
          {renderClients}
        </StyledFirstRowOfClients>
        <StyledSecondRowOfClients>{renderClients}</StyledSecondRowOfClients>
      </StyledSectionClientsTrack>
    </StyledSectionClients>
  );
}

export default SectionClientsMarquee;
