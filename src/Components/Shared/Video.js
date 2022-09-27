/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledVideo = styled.video``;

const Video = ({
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
}) => {
  return (
    <StyledVideo
      width={size || width}
      height={size || height}
      controls={controls}
      autoplay={autoplay}
      loop={loop}
      muted={muted}
      poster={poster}
      preload={preload}
    >
      <source src={`${process.env.PUBLIC_URL}/${source}`} type="video/webm" />
      <source src={`${process.env.PUBLIC_URL}/${source}`} type="video/mp4" />
      <source src={`${process.env.PUBLIC_URL}/${source}`} type="video/ogg" />
      <track kind="captions" {...captions} />
    </StyledVideo>
  );
};

Video.propTypes = {
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  poster: PropTypes.string,
  preload: PropTypes.bool,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  source: PropTypes.string.isRequired,
  captions: PropTypes.any,
};

Video.defaultProps = {
  controls: false,
  autoplay: true,
  loop: true,
  muted: true,
  poster: null,
  preload: true,
  width: "320px",
  height: "320px",
  size: "480px",
  captions: null,
};

export default Video;
