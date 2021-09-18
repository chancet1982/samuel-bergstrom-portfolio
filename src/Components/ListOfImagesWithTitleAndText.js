import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageWithTitleAndText from "./ImageWithTitleAndText";
import padding from "../theme/padding";
import breakpoints from "../theme/breakpoints";
import ElementContextProvider from "../Context/ElementColorContext";
import CenteredTitleAndText from "./StyledCenteredText";

const StyledListOfImagesWithTitleAndText = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ${({ listTitle }) =>
    !listTitle && `padding-top: ${padding.vertical.double};`};

  ${({ listBgColor }) =>
    listBgColor &&
    ` background-color: ${listBgColor}; padding-bottom: ${padding.vertical.double};`};
`;

const StyledListContainer = styled(motion.div)`
  > div {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    > figure {
      max-height: 84vh;
    }

    @media (min-width: ${breakpoints.desktop}px) {
      max-width: 1440px;
      margin: 0 auto;
    }
  }

  > div:nth-of-type(2n + 1) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "a b b";
    @media (min-width: ${breakpoints.desktop}px) {
      > figure {
        grid-area: a;
      }
      > div {
        grid-area: b;
      }
    }
  }

  > div:nth-of-type(2n + 2) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "a a b";

    @media (min-width: ${breakpoints.desktop}px) {
      > figure {
        grid-area: b;
      }
      > div {
        grid-area: a;
      }
    }
  }
`;

const ListOfImagesWithTitleAndText = ({
  listTitle,
  listText,
  items,
  listBgColor,
}) => {
  return (
    <>
      <StyledListOfImagesWithTitleAndText
        listBgColor={listBgColor}
        listTitle={listTitle}
      >
        {(listTitle || listText) && (
          <CenteredTitleAndText title={listTitle} text={listText} />
        )}
        <StyledListContainer>
          {items.map(({ imageUrl, imageAlt, title, text, bgColor }, index) => (
            <ElementContextProvider key={title}>
              <ImageWithTitleAndText
                imageUrl={imageUrl}
                imageAlt={imageAlt}
                title={title}
                text={text}
                bgColor={bgColor}
                horizontal
                flip={index % 2 === 1}
              />
            </ElementContextProvider>
          ))}
        </StyledListContainer>
      </StyledListOfImagesWithTitleAndText>
    </>
  );
};

ListOfImagesWithTitleAndText.propTypes = {
  listTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  listText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  listBgColor: PropTypes.string,
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

ListOfImagesWithTitleAndText.defaultProps = {
  listTitle: null,
  listText: null,
  listBgColor: null,
};

export default ListOfImagesWithTitleAndText;
