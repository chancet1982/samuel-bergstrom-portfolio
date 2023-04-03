/* eslint-disable no-nested-ternary */
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Title from "./Shared/Title";
import padding from "../theme/padding";
import colors from "../theme/colors";
import { SplashAnimationFinishedContext } from "../Context/SplashAnimationFinishedContext";
import breakpoints from "../theme/breakpoints";

const StyledSplashScreen = styled(motion.main)`
  display: flex;
  min-height: 100vh;
  padding: ${padding.outsideElements.quadruple};
  box-sizing: border-box;
  background-color: ${colors.offblack};

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: ${breakpoints.mobileLarge}px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

function SplashScreen() {
  const clientList = [
    " ",
    " Prisjakt",
    " Mitsubishi",
    " Nasdaq OMX",
    " Fitness24Seven",
    " Nordea",
  ];

  const [index, setIndex] = useState(0);
  const interval = 1200;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < clientList.length; i++) {
    setTimeout(() => {
      setIndex(index + 1);
    }, interval);
  }

  const animationDuration = interval * clientList.length;
  const initlaAndExitAnimationDuration = 600 + 600;
  const [clientsAnimationFinished, setClientsAnimationFinished] =
    useState(false);

  const [, setAnimationFinished] = useContext(SplashAnimationFinishedContext);

  useEffect(() => {
    setTimeout(() => {
      setClientsAnimationFinished(true);

      setTimeout(() => {
        // eslint-disable-next-line react/destructuring-assignment
        setAnimationFinished(true);
      }, initlaAndExitAnimationDuration);
    }, animationDuration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const variants = {
    initial: {},
    animate: {},
    clientsAnimationFinished: {},
  };

  const staticTextVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    clientsAnimationFinished: {
      opacity: 0,
      transition: {
        duration: 0.6,
      },
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
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    clientsAnimationFinished: {
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <StyledSplashScreen variants={variants}>
      <Title
        h={1}
        style={{
          fontStretch: "100%",
          fontWeight: "600",
          textTransform: "none",
        }}
        withMargin={false}
        isLight
        initial="initial"
        animate={
          clientsAnimationFinished ? "clientsAnimationFinished" : "animate"
        }
        variants={staticTextVariants}
      >
        I helped &nbsp;
      </Title>
      <AnimatePresence initial={false} mode="wait">
        <Title
          h={1}
          isLight
          initial="initial"
          animate={
            clientsAnimationFinished ? "clientsAnimationFinished" : "animate"
          }
          exit="exit"
          variants={clientsNameVariants}
          key={clientList[index]}
          withMargin={false}
          style={{ color: colors.primary }}
        >
          {clientList[index]}
        </Title>
      </AnimatePresence>
    </StyledSplashScreen>
  );
}

export default SplashScreen;
