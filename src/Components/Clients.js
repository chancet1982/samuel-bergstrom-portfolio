/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useIntersection } from "react-use";
import { motion } from "framer-motion";
import Client from "./Client";
import { CLIENTS } from "../data/dictionaries/CLIENTS";
import Title from "./Elements/Title";
import padding from "../theme/padding";
import { variants } from "../animations/animations";

const StyledClients = styled(motion.div)`
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  > div {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    div {
      text-align: center;
    }
  }
`;

// TODO: fix inView animation repeats itself...
const Clients = () => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  const renderClients = CLIENTS.map((item) => (
    <Client
      key={uuid()}
      title={item.title}
      url={item.url}
      imageUrl={item.imageUrl}
      description={item.description}
    />
  ));

  return (
    <StyledClients
      ref={intersectionRef}
      initial="hidden"
      animate={inView ? "inView" : "hidden"}
      variants={variants}
    >
      <Title h={2}>
        Some of the <mark>companies</mark> I worked with
      </Title>
      <div>{renderClients}</div>
    </StyledClients>
  );
};

export default Clients;
