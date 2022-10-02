import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageWithTitleAndText from "../Shared/ImageWithTitleAndText";
import padding from "../../theme/padding";
import breakpoints from "../../theme/breakpoints";
import CenteredTitleAndText from "../Shared/CenteredTitleAndText";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import { ElementColorContext } from "../../Context/ElementColorContext";
import colors from "../../theme/colors";
import sizes from "../../theme/sizes";

const StyledListOfImagesWithTitleAndText = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ${({ listTitle }) =>
    !listTitle && `padding-top: ${padding.vertical.double};`};
`;

const StyledListContainer = styled(motion.div)`
  > div {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    > figure {
      /*height: 48vh;
      max-height: 48vh;*/
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

function ListOfImagesWithTitleAndText({
  listTitle,
  listText,
  items,
  bgColor,
  limitMaxWidth,
}) {
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    setLight !== null &&
      setLight(
        bgColor !== null &&
          bgColor !== colors.offwhite &&
          bgColor !== colors.primaryShade
      );
  }, [setLight, bgColor]);

  const renderListOfImagesWithTitleAndText = () => (
    <StyledListOfImagesWithTitleAndText listTitle={listTitle}>
      {(listTitle || listText) && (
        <CenteredTitleAndText title={listTitle} text={listText} />
      )}
      <StyledListContainer>
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
      </StyledListContainer>
    </StyledListOfImagesWithTitleAndText>
  );

  return bgColor ? (
    <BackgroundWrapper bgColor={bgColor} limitMaxWidth={limitMaxWidth}>
      {renderListOfImagesWithTitleAndText()}
    </BackgroundWrapper>
  ) : (
    renderListOfImagesWithTitleAndText()
  );
}

ListOfImagesWithTitleAndText.propTypes = {
  listTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  listText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      bgColor: PropTypes.string,
    })
  ).isRequired,
  bgColor: PropTypes.string,
  limitMaxWidth: PropTypes.bool,
};

ListOfImagesWithTitleAndText.defaultProps = {
  listTitle: null,
  listText: null,
  bgColor: null,
  limitMaxWidth: false,
};

export default ListOfImagesWithTitleAndText;
