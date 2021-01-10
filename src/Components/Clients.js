/* eslint-disable import/prefer-default-export */
import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Client from "./Client";
import CLIENTS from "../data/CLIENTS";
import Title from "./Elements/Title";
import padding from "../theme/padding";

const StyledClients = styled.div`
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};
  > div {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    div {
      text-align: center;
    }
  }
`;

const Clients = () => {
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
      <Title h={2}>
        Some of the <mark>companies</mark> I worked with
      </Title>
      <div>{renderClients}</div>
    </StyledClients>
  );
};

export default Clients;
