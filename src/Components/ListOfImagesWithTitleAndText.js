import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageWithTitleAndText from "./ImageWithTitleAndText";
import padding from "../theme/padding";

const StyledListOfImagesWithTitleAndText = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: ${padding.vertical.double};
  /*max-width: 84wv;
  margin: 0 auto;*/

  > div > figure {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 360px;
  }

  /*background: repeating-linear-gradient(#ddd 0 35px, transparent 35px 70px);*/

  > div:nth-of-type(2n + 1) {
    grid-column: 1 / span 2;
    /*position: relative;*/

    /*:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
    }

    * > {
      color: white !important;
    }*/

    /*> figure {
      padding-left: ${padding.horizontal.double};
    }*/
    > div {
      padding-left: 0;
    }
  }

  > div:nth-of-type(2n + 2) {
    grid-column: 2 / span 2;
    /*> figure {
      padding-right: ${padding.horizontal.double};
    }*/
    > div {
      padding-right: 0;
    }
  }
`;

const ListOfImagesWithTitleAndText = ({ items }) => {
  return (
    <StyledListOfImagesWithTitleAndText>
      {items.map(({ imageUrl, imageAlt, title, text, bgColor }, index) => (
        <ImageWithTitleAndText
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          title={title}
          text={text}
          bgColor={bgColor}
          horizontal
          flip={index % 2 === 1}
        />
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
