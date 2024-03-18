import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useWindowSize, useOrientation } from "react-use";
import Badge from "../../Shared/Badge";
import { CursorContext } from "../../../Context/CursorContext";
import { CASE_STATUS } from "../../../data/dictionaries/CASE_STATUS";
import BgMedia from "../SectionHero/BgMedia";
import breakpoints from "../../../theme/breakpoints";
import { ElementColorContext } from "../../../Context/ElementColorContext";
import padding from "../../../theme/padding";
import { BG_MEDIA_TYPES } from "../../../data/dictionaries/BG_MEDIA_TYPES";
import TitleAndText from "../../Shared/TitleAndText";
import Overline from "../../Shared/Overline";
import Paragraph from "../../Shared/Paragraph";
import Button from "../../Shared/Button";
import { ICON_PATHS } from "../../../data/dictionaries/ICON_PATHS";

const StyledCaseThumbnail = styled(motion.div)`
  box-sizing: border-box;
  position: relative;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-decoration: none !important;
  justify-content: space-between;

  ${({ $isDisabled }) =>
    $isDisabled && {
      pointerEvents: "none",
    }}
`;

const StyledBackgroundColor = styled(motion.div)`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: ${padding.insideElements.single};
  transition: all 0.3s;

  ${({ $bgColor }) =>
    $bgColor && {
      background: $bgColor,
    }}
`;

const StyledCaseThumbnailOverline = styled(motion.div)`
  padding: ${padding.outsideElements.double};
  padding-bottom: 0;
`;

const StyledFgImage = styled(motion.img)`
  transform-origin: center;
`;

const StyledThumbnailCaption = styled(motion.div)`
  padding: ${padding.outsideElements.double};
  padding-top: 0;
  box-sizing: border-box;
  text-wrap: balance;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h5 {
    margin: 0 !important;
  }

  p {
    margin-top: 0 !important;
  }
`;

function CaseThumbnail({ data, status, caseUrl }) {
  const { bgColor, bgMedia, caption, fgImage } = data;
  const { overline, title, text } = caption;
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
    setCursorText("See project");
    setCursorVariant("project");
  }

  function CaseThumbnailMouseLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  const caseThumbnailVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
      },
    },
    hover: {
      opacity: 1,
      scale: 1.02,
      transition: {
        duration: 0.25,
      },
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
      <StyledBackgroundColor $bgColor={bgColor}>
        <StyledLink
          to={caseUrl}
          onMouseEnter={() => CaseThumbnailMouseEnter()}
          onMouseLeave={() => CaseThumbnailMouseLeave()}
          $isDisabled={status === CASE_STATUS.COMING_SOON}
        >
          {bgMedia && (
            <BgMedia type={bgMedia.type} mediaUrl={bgMedia.mediaUrl} />
          )}

          {overline && (
            <StyledCaseThumbnailOverline>
              <Overline>{overline}</Overline>
            </StyledCaseThumbnailOverline>
          )}

          {fgImage && (
            <StyledFgImage
              src={`${process.env.PUBLIC_URL}/${
                isMobile && !isLandscape && mobileImageUrl
                  ? mobileImageUrl
                  : imageUrl
              }`}
              alt={imageAlt}
            />
          )}

          <StyledThumbnailCaption variants={caseThumbnailCaptionVariants}>
            <TitleAndText title={title} h={5}>
              <Paragraph>{text}</Paragraph>
            </TitleAndText>
            <Button iconButton icon={ICON_PATHS.ARROW_RIGHT} />
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
