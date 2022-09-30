import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "../../Shared/Image";

const StyledClient = styled.div``;

const Client = ({ imageUrl, imageAlt }) => {
  return (
    <StyledClient>
      <Image
        grayscale
        imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
        imageAlt={imageAlt}
      />
    </StyledClient>
  );
};

Client.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
};

Client.defaultProps = {
  imageUrl: "default imageUrl",
  imageAlt: "default imageAlt",
};

export default Client;
