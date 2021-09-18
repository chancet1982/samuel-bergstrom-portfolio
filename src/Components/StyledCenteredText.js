/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import TitleAndText from "./TitleAndText";

const StyledCenteredTitleAndText = styled.div`
  padding-top: ${padding.vertical.quadruple};
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};

  @media (min-width: ${breakpoints.desktop}px) {
    background-color: transparent;
    width: 60%;
    justify-content: flex-start;
    text-align: center;
    padding-top: 12rem;
    margin: 0 auto;

    p {
      max-width: inherit;
    }
  }
`;

const CenteredTitleAndText = ({ title, text }) => {
  return (
    <StyledCenteredTitleAndText>
      <TitleAndText h={2} title={title}>
        {text}
      </TitleAndText>
    </StyledCenteredTitleAndText>
  );
};

CenteredTitleAndText.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

CenteredTitleAndText.defaultProps = {
  title: null,
  text: null,
};

export default CenteredTitleAndText;
