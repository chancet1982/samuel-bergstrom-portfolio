import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIntersection, useWindowSize } from "react-use";
import sizes from "../../../theme/sizes";
import Badge from "../../Shared/Badge";
import breakpoints from "../../../theme/breakpoints";
import padding from "../../../theme/padding";
import { ElementColorContext } from "../../../Context/ElementColorContext";
import { CASE_STATUS } from "../../../data/dictionaries/CASE_STATUS";
import colors from "../../../theme/colors";
import Paragraph from "../../Shared/Paragraph";
import TitleAndText from "../../Shared/TitleAndText";
import { CursorContext } from "../../../Context/CursorContext";

const StyledAdditionalCasesCaseThumbnail = styled(motion.div)`
  flex: 1 1 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  @media (max-width: ${breakpoints.desktop - 1}px) {
    min-height: 320px;
    height: 50vh;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    height: calc(92vw / 3 - 2 * ${padding.vertical.eighth});
  }

  a {
    text-decoration: none;
  }

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }}
`;

const StyledAdditionalCasesCaseThumbnailCaption = styled(motion.div)`
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};
  max-width: ${sizes.contentWidthLimit}px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const StyledAdditionalCasesCaseThumbnailImage = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ $imageUrl }) =>
    $imageUrl && {
      backgroundImage: `url(${$imageUrl})`,
      backgroundSize: "cover",
    }}

  :after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${colors.darken.high};
  }
`;

/* TODO: cleanup all unused features as its only used in one place now */
function AdditionalCasesCaseThumbnail({ data, status, caseUrl }) {
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    setLight(true);
  }, [setLight]);

  const { width } = useWindowSize();
  const isMobile = width < breakpoints.desktop;

  const [, setCursorText, , setCursorVariant] = useContext(CursorContext);

  function caseThumbnailMouseEnter() {
    setCursorText("View");
    setCursorVariant("project");
  }

  function caseThumbnailMouseLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.1,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  const { imageUrl, title, text, bgColor } = data;

  const transition = {
    type: "tween",
    duration: 0.6,
    ease: [0.44, 0, 0.56, 1],
  };

  const thumbnailVariants = {
    inView: {
      opacity: 1,
      y: 0,
      transition,
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };

  const test = {
    normal: {},
    hover: {},
  };

  const thumbnailImageVariants = {
    normal: {
      scale: 1.2,
      opacity: 1,
      transition: spring,
    },
    hover: {
      scale: 1,
      opacity: 0.2,
      transition: spring,
    },
  };

  const thumbnailCaptionVariants = {
    normal: {
      scale: 1,
      transition: spring,
    },
    hover: {
      scale: 1.2,
      transition: spring,
    },
  };

  const renderAdditionalCasesCaseThumbnail = () => (
    <motion.div
      whileHover="hover"
      variants={test}
      animate={isMobile ? "hover" : "normal"}
      initial="normal"
    >
      <StyledAdditionalCasesCaseThumbnailImage
        variants={thumbnailImageVariants}
        $imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
      />

      <StyledAdditionalCasesCaseThumbnailCaption
        animate="normal"
        variants={thumbnailCaptionVariants}
      >
        {/* <Overline>{overline}</Overline> */}
        <TitleAndText title={title} h={3} isCentered>
          <Paragraph>{text}</Paragraph>
        </TitleAndText>
      </StyledAdditionalCasesCaseThumbnailCaption>

      {status === CASE_STATUS.COMING_SOON && <Badge>COMING SOON!</Badge>}
    </motion.div>
  );

  const wrapWithLink = () => (
    <Link
      to={caseUrl}
      onMouseEnter={() => caseThumbnailMouseEnter()}
      onMouseLeave={() => caseThumbnailMouseLeave()}
    >
      {renderAdditionalCasesCaseThumbnail()}
    </Link>
  );

  return (
    <StyledAdditionalCasesCaseThumbnail
      ref={intersectionRef}
      initial="hidden"
      variants={thumbnailVariants}
      animate={inView ? "inView" : "hidden"}
      $bgColor={bgColor}
    >
      {status !== CASE_STATUS.COMING_SOON
        ? wrapWithLink(renderAdditionalCasesCaseThumbnail())
        : renderAdditionalCasesCaseThumbnail()}
    </StyledAdditionalCasesCaseThumbnail>
  );
}

AdditionalCasesCaseThumbnail.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  status: PropTypes.string.isRequired,
  caseUrl: PropTypes.string.isRequired,
};

AdditionalCasesCaseThumbnail.defaultProps = {
  data: {},
};

export default AdditionalCasesCaseThumbnail;
