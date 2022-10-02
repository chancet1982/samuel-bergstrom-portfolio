/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import Client from "./Clients/Client";
import { CLIENTS } from "../../data/dictionaries/CLIENTS";
import padding from "../../theme/padding";
import CenteredTitleAndText from "../Shared/CenteredTitleAndText";
import sizes from "../../theme/sizes";

const StyledClients = styled(motion.div)`
  margin-left: ${padding.horizontal.quadruple};
  margin-right: ${padding.horizontal.quadruple};
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};
  box-sizing: border-box;
  max-width: ${sizes.contentWidthLimit}px;
  margin: 0 auto;

  > div {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(144px, 1fr));

    div {
      text-align: center;
    }
  }
`;

function Clients() {
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
    <StyledClients>
      <CenteredTitleAndText
        title={
          <>
            Some of the <mark>companies</mark> I worked with
          </>
        }
      />
      <div>{renderClients}</div>
    </StyledClients>
  );
}

export default Clients;
