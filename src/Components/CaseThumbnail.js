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
import Span from "./Elements/Span";
import shadows from "../theme/shadows";

const StyledCaseThumbnail = styled(motion.div)`
  height: 41.919vw;
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
  padding-left: ${padding.horizontal.quadruple};
  padding-right: ${padding.horizontal.quadruple};
  left: 0;
  color: ${({
    theme: {
      colors: { text },
    },
  }) => text.light.high};
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
  padding: ${padding.vertical.double} ${padding.horizontal.quadruple};
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.1);
  color: white;
  box-sizing: border-box;
`;

const CaseThumbnail = ({ data, caseKey, status }) => {
  const [, setContent] = useContext(AppContext);

  const changeLoaderContent = (newContent) => {
    setContent(newContent);
  };

  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

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

  const thumbnailImageVariants = {
    hover: {
      scale: 1.2,
      transition: spring,
    },
    inView: {
      scale: 1,
      transition: spring,
    },
  };

  const thumbnailCaptionVariants = {
    hover: {
      opacity: 0.3,
      y: "-100%",
      transition: spring,
    },
    inView: {
      opacity: 1,
      y: "0%",
      transition: spring,
    },
  };

  const caseIntroVariants = {
    hover: {
      y: "0%",
      transition: spring,
    },
    inView: {
      y: "100%",
      transition: spring,
    },
  };

  const StyledTag = styled.div`
    position: absolute;
    top: -40px;
    right: -96px;
    transform: rotate(45deg);
    transform-origin: 0;
    padding: 0.5rem 4rem;
    background: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
    ${shadows.soft}
  `;

  const Tag = () => {
    return (
      <StyledTag>
        <Span>Coming Soon!</Span>
      </StyledTag>
    );
  };

  const renderCaseThumbnail = () => {
    console.log(imageUrl);
    return (
      <>
        <StyledCaseThumbnailImage
          initial="hidden"
          variants={thumbnailImageVariants}
          imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
        />
        <StyledCaseThumbnailCaption
          initial="hidden"
          variants={thumbnailCaptionVariants}
        >
          <Overline light>{overline}</Overline>
          <Title h={3} light padding>
            {title}
          </Title>
        </StyledCaseThumbnailCaption>
        <StyledCaseIntro initial="hidden" variants={caseIntroVariants}>
          {text}
        </StyledCaseIntro>
        {status === CASE_STATUS.COMING_SOON && <Tag />}
      </>
    );
  };

  const wrapWithLink = () => {
    return (
      <Link
        to={`/cases/${caseKey}`}
        onClick={() => changeLoaderContent(`${overline}, ${title}`)}
      >
        {renderCaseThumbnail()}
      </Link>
    );
  };

  return (
    <StyledCaseThumbnail
      ref={intersectionRef}
      whileHover="hover"
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
  caseKey: PropTypes.number,
};

CaseThumbnail.defaultProps = {
  data: {},
  caseKey: 0,
};

export default CaseThumbnail;
