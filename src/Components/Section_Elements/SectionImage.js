import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImageWithCaption from "../Shared/ImageWithCaption";
import sizes from "../../theme/sizes";

const StyledSectionImage = styled.div`
  ${({ limitMaxWidth }) =>
    limitMaxWidth && {
      maxWidth: `${sizes.contentWidthLimit}px`,
      margin: "0 auto",
    }}
`;

function SectionImage({ imageUrl, imageAlt, caption, limitMaxWidth }) {
  return (
    <StyledSectionImage limitMaxWidth={limitMaxWidth}>
      <ImageWithCaption
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        caption={caption}
      />
    </StyledSectionImage>
  );
}

SectionImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  limitMaxWidth: PropTypes.bool,
};

SectionImage.defaultProps = {
  caption: null,
  limitMaxWidth: false,
};

export default SectionImage;
