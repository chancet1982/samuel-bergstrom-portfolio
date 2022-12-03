/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Video from "../Shared/Video";

const StyledSectionVideo = styled(motion.div)``;

function SectionVideo({
  width,
  height,
  controls,
  autoplay,
  loop,
  muted,
  poster,
  preload,
  source,
  captions,
  size,
}) {
  return (
    <StyledSectionVideo
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <Video
        poster={poster}
        preload={preload}
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
}

SectionVideo.propTypes = {
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  poster: PropTypes.string,
  preload: PropTypes.oneOf(["auto", "metadata", "none"]),
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  source: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  captions: PropTypes.any,
};

SectionVideo.defaultProps = {
  controls: false,
  autoplay: true,
  loop: true,
  muted: true,
  poster: null,
  preload: "auto",
  width: "320px",
  height: "320px",
  size: "480px",
  captions: null,
};

export default SectionVideo;
