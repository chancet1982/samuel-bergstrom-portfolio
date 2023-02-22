import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useWindowSize, useOrientation } from "react-use";
import Badge from "../../Shared/Badge";
import { CursorContext } from "../../../Context/CursorContext";
import { CASE_STATUS } from "../../../data/dictionaries/CASE_STATUS";
import BgMedia from "../Cover/BgMedia";
import breakpoints from "../../../theme/breakpoints";
import { ElementColorContext } from "../../../Context/ElementColorContext";
import padding from "../../../theme/padding";
import sizes from "../../../theme/sizes";
import { BG_MEDIA_TYPES } from "../../../data/dictionaries/BG_MEDIA_TYPES";
import Overline from "../../Shared/Overline";
import TitleAndText from "../../Shared/TitleAndText";

const StyledCasePreviewThumbnail = styled(motion.div)`
  padding: ${padding.outsideElements.double};
  flex-grow: 0;
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none !important;
`;

const StyledBackgroundColor = styled(motion.div)`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: ${padding.outsideElements.double};
  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }}
`;

const StyledThumbnailCaption = styled(motion.div)`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: center;
  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
  z-index: 1;
  width: 100%;

  h1 {
    max-width: 15ch;
    ${({ $h }) =>
      $h === 0 && {
        fontWeight: 900,
      }}
  }

  p {
    @media (min-width: ${breakpoints.tablet}px) {
      max-width: 30ch;
    }
  }

  @media (min-width: ${breakpoints.mobileLarge}px) {
    justify-content: center;
    padding-top: 0;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

const StyledFgImage = styled(motion.img)`
  position: absolute;
  max-height: 92vh;
  right: 0;

  @media (min-width: ${breakpoints.mobileLarge}px) {
    left: 50%;
  }
  transform-origin: center;
`;

function CasePreviewThumbnail({ data, status, caseUrl }) {
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    setLight(true);
  }, [setLight]);

  const { bgColor, bgMedia, caption, fgImage } = data;
  const { overline, h, title, text } = caption;
  const { imageUrl, mobileImageUrl, imageAlt } = fgImage;

  const { width } = useWindowSize();
  const isMobile = width < breakpoints.desktop;
  const deviceOrientation = useOrientation();
  const isLandscape = deviceOrientation.type === "landscape-primary";

  const [, setCursorText, , setCursorVariant] = useContext(CursorContext);

  function casePreviewThumbnailMouseEnter() {
    setCursorText("View");
    setCursorVariant("project");
  }

  function casePreviewThumbnailMouseLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  const thumbnailImageVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    inView: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.2,
    },
  };

  const coverCaptionVariants = {
    hidden: { opacity: 0, y: 10 },
    inView: {
      opacity: 0.96,
      y: 0,
    },
    hover: {
      opacity: 1,
    },
  };

  const caseThumbnailVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
    },
    inView: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const caseThumbnailBackgroundColorVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
    },
    inView: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hover: {
      scale: 0.96,
    },
  };

  return (
    <StyledCasePreviewThumbnail
      whileHover="hover"
      initial="hidden"
      whileInView={isMobile ? "hover" : "inView"}
      viewport={{ once: true, amount: "some" }}
      transition={{ staggerChildren: 0.1 }}
      variants={caseThumbnailVariants}
    >
      <StyledBackgroundColor
        variants={caseThumbnailBackgroundColorVariants}
        $bgColor={bgColor}
      >
        <StyledLink
          to={caseUrl}
          onMouseEnter={() => casePreviewThumbnailMouseEnter()}
          onMouseLeave={() => casePreviewThumbnailMouseLeave()}
        >
          {bgMedia && (
            <BgMedia type={bgMedia.type} mediaUrl={bgMedia.mediaUrl} />
          )}

          {fgImage && (
            <StyledFgImage
              variants={thumbnailImageVariants}
              src={`${process.env.PUBLIC_URL}/${
                // eslint-disable-next-line no-nested-ternary
                isMobile ? (isLandscape ? imageUrl : mobileImageUrl) : imageUrl
              }`}
              alt={imageAlt}
            />
          )}

          <StyledThumbnailCaption variants={coverCaptionVariants}>
            <>
              {overline && <Overline>{overline}</Overline>}
              <TitleAndText h={h} title={title}>
                {text}
              </TitleAndText>
            </>
          </StyledThumbnailCaption>

          {status === CASE_STATUS.COMING_SOON && <Badge>COMING SOON!</Badge>}
        </StyledLink>
      </StyledBackgroundColor>
    </StyledCasePreviewThumbnail>
  );
}

CasePreviewThumbnail.propTypes = {
  data: PropTypes.shape({
    bgMedia: PropTypes.shape({
      type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
      mediaUrl: PropTypes.string,
    }),
    bgColor: PropTypes.string,
    fgImage: PropTypes.shape({
      imageUrl: PropTypes.string,
      mobileImageUrl: PropTypes.string,
      imageAlt: PropTypes.string,
    }),
    caption: PropTypes.shape({
      overline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      h: PropTypes.number,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
  }),
  status: PropTypes.string.isRequired,
  caseUrl: PropTypes.string.isRequired,
};

CasePreviewThumbnail.defaultProps = {
  data: null,
};

export default CasePreviewThumbnail;
