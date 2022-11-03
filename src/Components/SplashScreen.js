/* eslint-disable no-nested-ternary */
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Title from "./Shared/Title";
import padding from "../theme/padding";
import colors from "../theme/colors";
import { SplashAnimationFinishedContext } from "../Context/SplashAnimationFinishedContext";

const StyledSplashScreen = styled(motion.main)`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: flex-start;
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  padding-top: ${padding.vertical.quadruple};
  padding-bottom: ${padding.vertical.quadruple};
  box-sizing: border-box;
  background-color: ${colors.offblack};
`;

function SplashScreen() {
  const clientList = [
    " ",
    "Prisjakt",
    "Mitsubishi",
    "Nasdaq OMX",
    "Fitness24Seven",
    "Nordea",
    " ",
  ];

  const [index, setIndex] = useState(0);
  const interval = 1000;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < clientList.length; i++) {
    setTimeout(() => {
      setIndex(index + 1);
    }, interval);
  }

  const animationDuration = interval * clientList.length;
  const initlaAndExitAnimationDuration = 1000;
  let clientsAnimationFinished = false;
  const [, setAnimationFinished] = useContext(SplashAnimationFinishedContext);

  setTimeout(() => {
    clientsAnimationFinished = true;

    setTimeout(() => {
      // eslint-disable-next-line react/destructuring-assignment
      setAnimationFinished(true);
    }, initlaAndExitAnimationDuration);
  }, animationDuration);

  const variants = {
    initial: {},
    animate: {},
    clientsAnimationFinished: {},
  };

  const pretextVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    clientsAnimationFinished: {
      opacity: 0,
    },
  };

  const clientsNameVariants = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: {
      opacity: 1,
      y: "0",
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    clientsAnimationFinished: {
      opacity: 0,
      y: "-100%",
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <StyledSplashScreen
      initial="initial"
      animate={
        clientsAnimationFinished ? "clientsAnimationFinished" : "animate"
      }
      variants={variants}
    >
      <Title h={1} withMargin={false} isLight variants={pretextVariants}>
        Helped:{" "}
      </Title>
      <AnimatePresence initial={false} mode="wait">
        <Title
          h={1}
          isLight
          variants={clientsNameVariants}
          key={clientList[index]}
          withMargin={false}
        >
          {clientList[index]}
        </Title>
      </AnimatePresence>
    </StyledSplashScreen>
  );
}

export default SplashScreen;
