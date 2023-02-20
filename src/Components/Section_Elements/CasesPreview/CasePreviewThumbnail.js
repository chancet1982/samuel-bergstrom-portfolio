import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import Badge from "../../Shared/Badge";
import { CursorContext } from "../../../Context/CursorContext";
import { CASE_STATUS } from "../../../data/dictionaries/CASE_STATUS";
import Paragraph from "../../Shared/Paragraph";
import TitleAndText from "../../Shared/TitleAndText";
import breakpoints from "../../../theme/breakpoints";
import { ElementColorContext } from "../../../Context/ElementColorContext";

const StyledCasePreviewThumbnail = styled(motion.div)`
  padding: 4vmin;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;

  > a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none !important;
  }
`;

const StyledCasePreviewThumbnailImage = styled(motion.div)`
  ${({ $imageUrl }) =>
    $imageUrl && {
      backgroundImage: `url(${$imageUrl})`,
      backgroundSize: "cover",
    }}
  position: absolute;
  top: 4vmin;
  right: 4vmin;
  bottom: 4vmin;
  left: 4vmin;
`;

const StyledCasePreviewThumbnailCaption = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
`;

function CasePreviewThumbnail({ data, status, caseUrl }) {
  const [, setLight] = useContext(ElementColorContext);

  useEffect(() => {
    setLight(true);
  }, [setLight]);

  const { width } = useWindowSize();
  const isMobile = width < breakpoints.desktop;

  const [, setCursorText, , setCursorVariant] = useContext(CursorContext);

  function casePreviewThumbnailMouseEnter() {
    setCursorText("View");
    setCursorVariant("project");
  }

  function casePreviewThumbnailMouseLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  const { imageUrl, title, text } = data;

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };

  const thumbnailImageVariants = {
    normal: {
      scale: 1,
      opacity: 1,
      transition: spring,
    },
    hover: {
      scale: 0.9,
      opacity: 0.2,
      transition: spring,
    },
  };

  return (
    <StyledCasePreviewThumbnail
      whileHover="hover"
      animate={isMobile ? "hover" : "normal"}
      initial="normal"
    >
      <Link
        to={caseUrl}
        onMouseEnter={() => casePreviewThumbnailMouseEnter()}
        onMouseLeave={() => casePreviewThumbnailMouseLeave()}
      >
        <StyledCasePreviewThumbnailImage
          variants={thumbnailImageVariants}
          $imageUrl={imageUrl}
        />

        <StyledCasePreviewThumbnailCaption
          initial="hidden"
          whileInView="inView"
          viewport={{ once: true, amount: "all" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <TitleAndText title={title} h={2} isCentered>
            <Paragraph xl>{text}</Paragraph>
          </TitleAndText>
        </StyledCasePreviewThumbnailCaption>
        {status === CASE_STATUS.COMING_SOON && <Badge>COMING SOON!</Badge>}
      </Link>
    </StyledCasePreviewThumbnail>
  );
}

CasePreviewThumbnail.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  status: PropTypes.string.isRequired,
  caseUrl: PropTypes.string.isRequired,
};

CasePreviewThumbnail.defaultProps = {
  data: {},
};

export default CasePreviewThumbnail;
