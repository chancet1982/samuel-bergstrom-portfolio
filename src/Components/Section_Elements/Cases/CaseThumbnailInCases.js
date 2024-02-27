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
import TitleAndText from "../../Shared/TitleAndText";

const StyledCaseThumbnail = styled(motion.div)`
  padding-bottom: ${padding.outsideElements.double};
  box-sizing: border-box;
  position: relative;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row-reverse;
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
  transition: all 0.3s;

  ${({ $bgColor }) =>
    $bgColor && {
      background: $bgColor,
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

  box-sizing: border-box;
  position: absolute;
  left: 0;
  text-wrap: balance;

  @media (min-width: ${breakpoints.mobileLarge}px) {
    justify-content: center;
    padding-top: 0;
    max-width: 50%;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: calc(${sizes.contentWidthLimit}px / 2);
    margin: 0 auto;
  }
`;

const StyledFgImage = styled(motion.img)`
  max-height: 400px;
  opacity: 0.1;

  @media (min-width: ${breakpoints.mobileLarge}px) {
    max-height: 640px;
    left: 50%;
    opacity: 1;
  }
  transform-origin: center;
`;

function CaseThumbnail({ data, status, caseUrl }) {
  const { bgColor, bgMedia, caption, fgImage } = data;
  const { overline, title, h, text } = caption;
  const { imageUrl, mobileImageUrl, imageAlt } = fgImage;
  const [, setElementBgColor] = useContext(ElementColorContext);

  useEffect(() => {
    if (bgColor) {
      setElementBgColor(bgColor);
    } else if (bgMedia !== null) {
      setElementBgColor("#000000");
    }
  }, [setElementBgColor, bgColor, bgMedia]);

  const { width } = useWindowSize();
  const isMobile = width < breakpoints.desktop;
  const deviceOrientation = useOrientation();
  const isLandscape = deviceOrientation.type === "landscape-primary";

  const [, setCursorText, , setCursorVariant] = useContext(CursorContext);

  function CaseThumbnailMouseEnter() {
    setCursorText("View");
    setCursorVariant("project");
  }

  function CaseThumbnailMouseLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

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

  const caseThumbnailImageVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    inView: {
      scale: 1,
      opacity: width < breakpoints.mobileLarge ? 0.1 : 1,
    },
    hover: {
      scale: 1.2,
    },
  };

  const caseThumbnailCaptionVariants = {
    hidden: { opacity: 0, y: 10 },
    inView: {
      opacity: 0.96,
      y: 0,
    },
    hover: {
      opacity: 1,
    },
  };

  return (
    <StyledCaseThumbnail
      whileHover="hover"
      initial="hidden"
      whileInView="inView"
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
          onMouseEnter={() => CaseThumbnailMouseEnter()}
          onMouseLeave={() => CaseThumbnailMouseLeave()}
        >
          {bgMedia && (
            <BgMedia type={bgMedia.type} mediaUrl={bgMedia.mediaUrl} />
          )}

          {fgImage && (
            <StyledFgImage
              variants={caseThumbnailImageVariants}
              src={`${process.env.PUBLIC_URL}/${
                isMobile && !isLandscape && mobileImageUrl
                  ? mobileImageUrl
                  : imageUrl
              }`}
              alt={imageAlt}
            />
          )}

          <StyledThumbnailCaption variants={caseThumbnailCaptionVariants}>
            <TitleAndText overline={overline} title={title} h={h}>
              {text}
            </TitleAndText>
          </StyledThumbnailCaption>

          {status === CASE_STATUS.COMING_SOON && <Badge>COMING SOON!</Badge>}
        </StyledLink>
      </StyledBackgroundColor>
    </StyledCaseThumbnail>
  );
}

CaseThumbnail.propTypes = {
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

CaseThumbnail.defaultProps = {
  data: null,
};

export default CaseThumbnail;
