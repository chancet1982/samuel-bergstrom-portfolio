import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Badge from "../../Shared/Badge";
import { CursorContext } from "../../../Context/CursorContext";
import { CASE_STATUS } from "../../../data/dictionaries/CASE_STATUS";
import Paragraph from "../../Shared/Paragraph";
import TitleAndText from "../../Shared/TitleAndText";
import padding from "../../../theme/padding";

const StyledCasePreviewThumbnail = styled(motion.div)`
  padding: 4vmin;
  width: 100%;
  height: 100%;
  box-sizing: border-box;


    > a {
      display:block;
      width: 100%;
      height: 100%;
    }
`;

const StyledCasePreviewThumbnailImageAndCaption = styled(motion.div)`
  ${({ $imageUrl }) =>
    $imageUrl && {
      backgroundImage: `url(${$imageUrl})`,
      backgroundSize: "cover",
    }}
          width: 100%;
      height: 100%;
`;

const StyledCasePreviewThumbnailCaption = styled(motion.div)`
  display: flex;

  > div {
    padding: ${padding.vertical.double} ${padding.horizontal.double};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

function CasePreviewThumbnail({ data, status, caseUrl }) {
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

  return (
    <StyledCasePreviewThumbnail
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ staggerChildren: 0.2 }}
    >
    <Link
      to={caseUrl}
      onMouseEnter={() => casePreviewThumbnailMouseEnter()}
      onMouseLeave={() => casePreviewThumbnailMouseLeave()}
    >

<StyledCasePreviewThumbnailImageAndCaption $imageUrl={imageUrl}>
      <StyledCasePreviewThumbnailCaption
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true, amount: "some" }}
        transition={{ staggerChildren: 0.1 }}
      >
        <TitleAndText title={title} h={3}>
          <Paragraph xl>{text}</Paragraph>
        </TitleAndText>
      </StyledCasePreviewThumbnailCaption>
      {status === CASE_STATUS.COMING_SOON && <Badge>COMING SOON!</Badge>}
    </StyledCasePreviewThumbnailImageAndCaption>
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
