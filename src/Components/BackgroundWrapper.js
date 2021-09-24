import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../theme/colors";
import padding from "../theme/padding";

const StyledBackground = styled.div`
  height: 100%;
  width: 100%;

  ${({ bgImageUrl }) =>
    bgImageUrl && {
      backgroundImage: `url(${process.env.PUBLIC_URL}/${bgImageUrl})`,
      backgroundSize: "cover",
    }}
  ${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor || colors.offwhite,
    }}

${({ bgImageUrl, bgColor }) =>
    (bgImageUrl || bgColor) && {
      paddingTop: padding.vertical.double,
      paddingBottom: padding.vertical.double,
    }}

${({ limitMaxWidth }) =>
    limitMaxWidth && {
      maxWidth: "1440px",
      margin: "0 auto",
    }}
`;

const BackgroundWrapper = ({
  bgColor,
  bgImageUrl,
  limitMaxWidth,
  children,
}) => {
  return bgColor || bgImageUrl ? (
    <StyledBackground
      bgColor={bgColor}
      bgImageUrl={bgImageUrl}
      limitMaxWidth={limitMaxWidth}
    >
      {children}
    </StyledBackground>
  ) : (
    <>{children}</>
  );
};

BackgroundWrapper.propTypes = {
  bgColor: PropTypes.string,
  bgImageUrl: PropTypes.string,
  children: PropTypes.node.isRequired,
  limitMaxWidth: PropTypes.bool,
};

BackgroundWrapper.defaultProps = {
  bgColor: null,
  bgImageUrl: null,
  limitMaxWidth: false,
};

export default BackgroundWrapper;
