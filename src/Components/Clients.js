/* eslint-disable import/prefer-default-export */
import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Client from "./Client";
import { CLIENTS } from "../data/dictionaries/CLIENTS";
import padding from "../theme/padding";
import CenteredTitleAndText from "./StyledCenteredText";

const StyledClients = styled(motion.div)`
  margin-left: ${padding.horizontal.quadruple};
  margin-right: ${padding.horizontal.quadruple};
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;

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
const Clients = ({ preview }) => {
  const pickRandom = (arr, count) => {
    // eslint-disable-next-line no-underscore-dangle
    const _arr = [...arr];
    return [...Array(count)].map(
      () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
    );
  };

  const render5RandomClients = pickRandom(CLIENTS, 5).map((item) => (
    <Client
      key={uuid()}
      title={item.title}
      url={item.url}
      imageUrl={item.imageUrl}
      description={item.description}
    />
  ));
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
      {!preview && (
        <CenteredTitleAndText
          title={
            <>
              Some of the <mark>companies</mark> I worked with
            </>
          }
        />
      )}
      <div>{preview ? render5RandomClients : renderClients}</div>
    </StyledClients>
  );
};

Clients.propTypes = {
  preview: PropTypes.bool,
};

Clients.defaultProps = {
  preview: false,
};

export default Clients;
