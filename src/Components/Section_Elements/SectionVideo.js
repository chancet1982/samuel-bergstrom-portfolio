/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Video from "../Shared/Video";

const StyledSectionVideo = styled(motion.div)``;

const SectionVideo = ({
  width,
  height,
  controls,
  autoplay,
  loop,
  muted,
  source,
  captions,
  size,
}) => {
  console.log("SOURCE", source);
  return (
    <StyledSectionVideo>
      <Video
        width={size || width}
        height={size || height}
        controls={controls}
        autoplay={autoplay}
        loop={loop}
        muted={muted}
        source={source}
        captions={captions}
      />
    </StyledSectionVideo>
  );
};

SectionVideo.propTypes = {
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  source: PropTypes.string.isRequired,
  captions: PropTypes.any,
};

SectionVideo.defaultProps = {
  controls: false,
  autoplay: true,
  loop: true,
  muted: true,
  width: "320px",
  height: "320px",
  size: "480px",
  captions: null,
};

export default SectionVideo;
