import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useWindowSize, useMeasure } from "react-use";
import { CLIENTS } from "../../data/dictionaries/CLIENTS";
import Image from "../Shared/Image";

const StyledSectionClients = styled(motion.div)`
  position: relative;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
`;

const StyledSectionClientsTrack = styled(motion.div)`
  > div {
    display: flex;
    width: max-content;

    > img {
      max-width: clamp(144px, 10rem, 160px);
      height: auto;
      flex: 0;
    }
  }
`;

const StyledFirstRowOfClients = styled(motion.div)`
  flex-direction: row;
`;

const StyledSecondRowOfClients = styled(motion.div)`
  flex-direction: row-reverse;
`;

function SectionClients() {
  const [clientsRef, { width }] = useMeasure();

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const viewport = useWindowSize();
  const viewportWidth = viewport.width;
  const effectRange = width - viewportWidth;
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -effectRange]),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [-effectRange, 0]),
    springConfig
  );

  const renderClients = CLIENTS.map((item) => (
    <Image
      key={uuid()}
      grayscale
      imageUrl={`${process.env.PUBLIC_URL}/${item.imageUrl.color}`}
      imageAlt={item.imageAlt}
    />
  ));

  return (
    <StyledSectionClients ref={ref}>
      <StyledSectionClientsTrack>
        <StyledFirstRowOfClients ref={clientsRef} style={{ x: translateX }}>
          {renderClients}
        </StyledFirstRowOfClients>
        <StyledSecondRowOfClients style={{ x: translateXReverse }}>
          {renderClients}
        </StyledSecondRowOfClients>
      </StyledSectionClientsTrack>
    </StyledSectionClients>
  );
}

export default SectionClients;
