import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Badge from "../../Shared/Badge";
import { CursorContext } from "../../../Context/CursorContext";
import { CASE_STATUS } from "../../../data/dictionaries/CASE_STATUS";
import breakpoints from "../../../theme/breakpoints";
import padding from "../../../theme/padding";
import sizes from "../../../theme/sizes";

import TitleAndText from "../../Shared/TitleAndText";

const StyledPlainCaseThumbnail = styled(motion.div)``;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none !important;
`;

const StyledThumbnailCaption = styled(motion.div)`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
  z-index: 1;
  width: 100%;
  box-sizing: border-box;

  /*h1 {
    max-width: 15ch;
    ${({ $h }) =>
    $h === 0 && {
      fontWeight: 900,
    }}
  }

  p {
    max-width: 40ch;

    @media (min-width: ${breakpoints.tablet}px) {
      max-width: 30ch;
    }
  }*/

  @media (min-width: ${breakpoints.mobileLarge}px) {
    justify-content: center;
    padding-top: 0;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

function PlainCaseThumbnail({ data, status, caseUrl }) {
  const { caption } = data;
  const { title, text } = caption;
  const [, setCursorText, , setCursorVariant] = useContext(CursorContext);

  function plainCaseThumbnailMouseEnter() {
    setCursorText("View");
    setCursorVariant("project");
  }

  function plainCaseThumbnailMouseLeave() {
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
    <StyledPlainCaseThumbnail
      whileHover="hover"
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: "some" }}
      transition={{ staggerChildren: 0.1 }}
      variants={caseThumbnailVariants}
    >
      <StyledLink
        to={caseUrl}
        onMouseEnter={() => plainCaseThumbnailMouseEnter()}
        onMouseLeave={() => plainCaseThumbnailMouseLeave()}
      >
        <StyledThumbnailCaption variants={caseThumbnailCaptionVariants}>
          <TitleAndText title={title} h={3}>
            {text}
          </TitleAndText>
        </StyledThumbnailCaption>

        {status === CASE_STATUS.COMING_SOON && <Badge>COMING SOON!</Badge>}
      </StyledLink>
    </StyledPlainCaseThumbnail>
  );
}

PlainCaseThumbnail.propTypes = {
  data: PropTypes.shape({
    caption: PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      h: PropTypes.number,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
  }),
  status: PropTypes.string.isRequired,
  caseUrl: PropTypes.string.isRequired,
};

PlainCaseThumbnail.defaultProps = {
  data: null,
};

export default PlainCaseThumbnail;
