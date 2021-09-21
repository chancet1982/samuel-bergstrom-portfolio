import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import Overline from "./Overline";
import Title from "./Elements/Title";
import breakpoints from "../theme/breakpoints";
import { AppContext } from "../Context/AppContext";
import padding from "../theme/padding";
import { CASE_STATUS } from "../data/dictionaries/CASE_STATUS";
import Tag from "./Elements/Tag";
import { ElementColorContext } from "../Context/ElementColorContext";
import Span from "./Elements/Span";

const StyledCaseThumbnail = styled(motion.div)`
  flex: 1 1 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  @media (max-width: ${breakpoints.tablet}px) {
    height: 83.96vw;
  }

  @media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop -
    1}px) {
    height: 49.25vw;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    height: 27.5vw;
  }

  a {
    text-decoration: none;
  }

  ${(props) =>
    props.bgColor && {
      backgroundColor: props.bgColor,
    }}
`;

const StyledCaseThumbnailCaption = styled(motion.div)`
  position: absolute;
  padding-left: ${padding.horizontal.double};
  padding-right: ${padding.horizontal.double};
  left: 0;
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
    background: rgba(0, 0, 0, 0.24);
  }
`;

const StyledCaseIntro = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${padding.vertical.double} ${padding.horizontal.double};
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.1);
  color: white;
  box-sizing: border-box;
`;

const CaseThumbnail = ({ data, status, caseUrl }) => {
  const [, setContent] = useContext(AppContext);

  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    setLight(true);
  }, [setLight]);

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
    inView: {},
    hover: {},
  };

  const thumbnailImageVariants = {
    inView: {
      scale: 1,
      opacity: 1,
      transition: spring,
    },
    hover: {
      scale: 1.2,
      opacity: 0.2,
      transition: spring,
    },
  };

  const thumbnailCaptionVariants = {
    inView: {
      opacity: 1,
      y: "0%",
      transition: spring,
    },
    hover: {
      opacity: 0.8,
      y: "-100%",
      transition: spring,
    },
  };

  const caseIntroVariants = {
    inView: {
      y: "100%",
      transition: spring,
    },
    hover: {
      y: "0%",
      transition: spring,
    },
  };

  const renderCaseThumbnail = () => {
    return (
      <motion.div whileHover="hover" variants={test} initial="inView">
        <StyledCaseThumbnailImage
          variants={thumbnailImageVariants}
          imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
        />

        <StyledCaseThumbnailCaption variants={thumbnailCaptionVariants}>
          <Overline>{overline}</Overline>
          <Title h={3} padding>
            {title}
          </Title>
        </StyledCaseThumbnailCaption>

        <StyledCaseIntro variants={caseIntroVariants}>
          <Span>{text}</Span>
        </StyledCaseIntro>
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
};

CaseThumbnail.defaultProps = {
  data: {},
};

export default CaseThumbnail;
