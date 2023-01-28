/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import { CLIENTS } from "../../data/dictionaries/CLIENTS";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";
import Image from "../Shared/Image";

const StyledClients = styled(motion.div)`
  margin-left: ${padding.horizontal.quadruple};
  margin-right: ${padding.horizontal.quadruple};
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};
  box-sizing: border-box;
  max-width: ${sizes.contentWidthLimit}px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(144px, 1fr));
  padding-bottom: ${padding.horizontal.quadruple};
`;

function Clients() {
  const renderClients = CLIENTS.map((item) => (
    <Image
      key={uuid()}
      grayscale
      imageUrl={`${process.env.PUBLIC_URL}/${item.imageUrl.color}`}
      imageAlt={item.imageAlt}
    />
  ));

  return (
    <StyledClients
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {renderClients}
    </StyledClients>
  );
}

export default Clients;
