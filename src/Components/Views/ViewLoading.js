import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import FullScreenCenteredFlexContainer from "../Shared/FullScreenCenteredFlexContainer";
import colors from "../../theme/colors";

const LoadingSlider = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0.25rem;
  overflow-x: hidden;
`;

const LoadingLine = styled(motion.div)`
  position: absolute;
  opacity: 0.4;
  background: ${colors.primary};
  height: 0.25rem;
`;

const LoadingSubline = styled(motion.div)`
  position: absolute;
  background: ${colors.primary};
  width: 150%;
  height: 0.25rem;

  &.inc {
    animation: increase 2s infinite;
  }
  &.dec {
    animation: decrease 2s 0.5s infinite;
  }

  @keyframes increase {
    from {
      left: -5%;
      width: 5%;
    }
    to {
      left: 130%;
      width: 100%;
    }
  }
  @keyframes decrease {
    from {
      left: -80%;
      width: 80%;
    }
    to {
      left: 110%;
      width: 10%;
    }
  }
`;

function ViewLoading() {
  return (
    <FullScreenCenteredFlexContainer>
      <LoadingSlider>
        <LoadingLine />
        <LoadingSubline className="inc" />
        <LoadingSubline className="dec" />
      </LoadingSlider>
    </FullScreenCenteredFlexContainer>
  );
}

export default ViewLoading;
