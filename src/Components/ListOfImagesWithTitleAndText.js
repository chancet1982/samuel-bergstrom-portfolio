import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageWithTitleAndText from "./ImageWithTitleAndText";
import padding from "../theme/padding";
import colors from "../theme/colors";
import breakpoints from "../theme/breakpoints";
import LightContextProvider from "../Context/ColorContext";

const StyledListOfImagesWithTitleAndText = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-top: ${padding.vertical.double};

  > div {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    > figure {
      max-height: 84vh;
    }

    @media (min-width: ${breakpoints.desktop}px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: "a b c";

      > div {
        grid-area: b;
      }
    }
  }

  > div:nth-of-type(2n + 1) {
    @media (min-width: ${breakpoints.desktop}px) {
      > figure {
        grid-area: a;
      }
    }
  }

  > div:nth-of-type(2n + 2) {
    background: ${colors.offwhite};

    @media (min-width: ${breakpoints.desktop}px) {
      > figure {
        grid-area: c;
      }
    }
  }
`;

const ListOfImagesWithTitleAndText = ({ items }) => {
  return (
    <StyledListOfImagesWithTitleAndText>
      {items.map(({ imageUrl, imageAlt, title, text, bgColor }, index) => (
        <LightContextProvider>
          <ImageWithTitleAndText
            key={title}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            title={title}
            text={text}
            bgColor={bgColor}
            horizontal
            flip={index % 2 === 1}
          />
        </LightContextProvider>
      ))}
    </StyledListOfImagesWithTitleAndText>
  );
};

ListOfImagesWithTitleAndText.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      bgColor: PropTypes.string,
    })
  ).isRequired,
};

export default ListOfImagesWithTitleAndText;
