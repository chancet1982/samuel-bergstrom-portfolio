import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIntersection, useWindowSize } from "react-use";
/* import Overline from "./Overline"; */
import Tag from "./Tag";
import breakpoints from "../../theme/breakpoints";
import padding from "../../theme/padding";
import { AppContext } from "../../Context/AppContext";
import { ElementColorContext } from "../../Context/ElementColorContext";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import colors from "../../theme/colors";
import CenteredTitleAndText from "./CenteredTitleAndText";
import Paragraph from "./Paragraph";

const StyledCaseThumbnail = styled(motion.div)`
  flex: 1 1 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  height: ${({ inAdditionalCases }) =>
    inAdditionalCases
      ? `calc(92vw / 3 - 2 * ${padding.vertical.eighth})`
      : "72vh"};

  /*@media (max-width: ${breakpoints.tablet}px) {

  }

  @media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop -
  1}px) {
    
  }

  @media (min-width: ${breakpoints.desktop}px) {
    height: calc(92vw / 2 - ${padding.vertical.eighth});
  }*/

  a {
    text-decoration: none;
  }

  ${({ bgColor }) =>
    bgColor && {
      backgroundColor: bgColor,
    }}
`;

const StyledCaseThumbnailCaption = styled(motion.div)`
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};
  max-width: ${breakpoints.contentWidthLimit}px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const StyledCaseThumbnailImage = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ imageUrl }) =>
    imageUrl && {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
    }}

  :after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${colors.darker24};
  }
`;

/* const StyledCaseIntro = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${padding.vertical.double} ${padding.horizontal.double};
  backdrop-filter: blur(8px);
  background: ${colors.darker10};
  color: white;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.mobileLarge}px) {
    padding: ${padding.vertical.single} ${padding.horizontal.double};
  }
`; */

const CaseThumbnail = ({ data, status, caseUrl, inAdditionalCases }) => {
  const [, setContent] = useContext(AppContext);
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    setLight(true);
  }, [setLight]);

  const { width } = useWindowSize();
  const isMobile = width < breakpoints.desktop;

  const changeLoaderContent = (newContent) => {
    setContent(newContent);
  };

  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  const { imageUrl, overline, title, text, bgColor } = data;

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

  /* const caseIntroVariants = {
    normal: {
      y: "100%",
      transition: spring,
    },
    hover: {
      y: "0%",
      transition: spring,
    },
  }; */

  const renderCaseThumbnail = () => {
    const wrappedText = <Paragraph>{text}</Paragraph>;
    return (
      <motion.div
        whileHover="hover"
        variants={test}
        animate={isMobile ? "hover" : "normal"}
        initial="normal"
      >
        <StyledCaseThumbnailImage
          variants={thumbnailImageVariants}
          imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
        />

        <StyledCaseThumbnailCaption variants={thumbnailCaptionVariants}>
          {/* <Overline>{overline}</Overline> */}
          <CenteredTitleAndText
            title={title}
            h={3}
            text={wrappedText}
            disableAnimations
          />
        </StyledCaseThumbnailCaption>

        {status === CASE_STATUS.COMING_SOON && <Tag />}
      </motion.div>
    );
  };

  const wrapWithLink = () => {
    return (
      <Link
        to={caseUrl}
        onClick={() => changeLoaderContent(`${overline}, ${title}`)}
      >
        {renderCaseThumbnail()}
      </Link>
    );
  };

  return (
    <StyledCaseThumbnail
      ref={intersectionRef}
      initial="hidden"
      variants={thumbnailVariants}
      animate={inView ? "inView" : "hidden"}
      bgColor={bgColor}
      inAdditionalCases={inAdditionalCases}
    >
      {status !== CASE_STATUS.COMING_SOON
        ? wrapWithLink(renderCaseThumbnail())
        : renderCaseThumbnail()}
    </StyledCaseThumbnail>
  );
};

CaseThumbnail.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  status: PropTypes.string.isRequired,
  caseUrl: PropTypes.string.isRequired,
  inAdditionalCases: PropTypes.bool,
};

CaseThumbnail.defaultProps = {
  data: {},
  inAdditionalCases: false,
};

export default CaseThumbnail;