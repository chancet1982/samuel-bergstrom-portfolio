import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageWithTitleAndText from "../Shared/ImageWithTitleAndText";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";
import sizes from "../../theme/sizes";

const StyledListOfImagesWithTitleAndText = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  > div {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    > figure {
      @media (max-width: ${breakpoints.desktop - 1}px) {
        padding-left: ${padding.horizontal.double};
        padding-right: ${padding.horizontal.double};
      }
    }

    @media (min-width: ${breakpoints.desktop}px) {
      max-width: ${sizes.contentWidthLimit}px;
      margin: 0 auto;
    }
  }

  > div:nth-of-type(2n + 1) {
    @media (min-width: ${breakpoints.desktop}px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "a b";

      > figure {
        grid-area: a;
        padding-left: ${padding.horizontal.double};
      }

      > div {
        grid-area: b;
      }
    }
  }

  > div:nth-of-type(2n + 2) {
    @media (min-width: ${breakpoints.desktop}px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "a b";

      > figure {
        grid-area: b;
        padding-right: ${padding.horizontal.double};
      }

      > div {
        grid-area: a;
      }
    }
  }
`;

function ListOfImagesWithTitleAndText({ items }) {
  return (
    <StyledListOfImagesWithTitleAndText>
      {items.map(({ imageUrl, imageAlt, title, text }, index) => (
        <ImageWithTitleAndText
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          title={title}
          text={text}
          horizontal
          flip={index % 2 === 1}
          key={imageUrl}
        />
      ))}
    </StyledListOfImagesWithTitleAndText>
  );
}

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
