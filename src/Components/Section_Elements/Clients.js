/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { createBreakpoint } from "react-use";
import Client from "./Clients/Client";
import { CLIENTS } from "../../data/dictionaries/CLIENTS";
import padding from "../../theme/padding";
import CenteredTitleAndText from "../Shared/CenteredTitleAndText";
import pickRandom from "../../utils/pickRandom";
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
const useBreakpoint = createBreakpoint({ XL: 1315, L: 1048, M: 781, S: 300 });

const Clients = ({ preview }) => {
  const breakpoint = useBreakpoint();
  const getNumberOfClientsBasedOnViewportWidth = () =>
    breakpoint === "XL"
      ? 10
      : breakpoint === "L"
      ? 4
      : breakpoint === "M"
      ? 3
      : 4;

  const render5RandomClients = pickRandom(
    CLIENTS,
    getNumberOfClientsBasedOnViewportWidth()
  ).map((item) => (
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
