import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import FullScreenCenteredFlexContainer from "../FullScreenCenteredFlexContainer";
import Title from "../Elements/Title";

//TODO: Fix better loading screen
const ViewLoading = () => {
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: "50%",
    },
    end: {
      y: "150%",
    },
  };

  const loadingCircleTransition = {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  const LoadingContainer = styled(motion.div)`
    background: white;
    width: 8vw;
    height: 8vw;
    display: flex;
    justify-content: space-between;
  `;

  const LoadingCircle = styled(motion.div)`
    background: ${({ theme: { colors } }) => colors.primary};
    width: 2vw;
    height: 2vw;
    border-radius: 50%;
  `;

  return (
    <FullScreenCenteredFlexContainer>
      <LoadingContainer
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <LoadingCircle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <LoadingCircle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <LoadingCircle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </LoadingContainer>

      <Title h={3}>Loading...</Title>
    </FullScreenCenteredFlexContainer>
  );
};

export default ViewLoading;
