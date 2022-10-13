import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import Tag from "./Tag";

import { AppContext } from "../../Context/AppContext";
import { ElementColorContext } from "../../Context/ElementColorContext";
import { CASE_STATUS } from "../../data/dictionaries/CASE_STATUS";
import Paragraph from "./Paragraph";
import TitleAndText from "./TitleAndText";
import padding from "../../theme/padding";

/* TODO: CaseThumbnail gets bgColor which isnt used. Make sure to clean up. */
const StyledCaseThumbnail = styled(motion.div)`
  background: white;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.08),
    0 0.25rem 0.5rem rgba(0, 0, 0, 0.016), 0 0.5rem 0.75rem rgba(0, 0, 0, 0.02),
    0 1rem 1.25rem rgba(0, 0, 0, 0.024), 0 1.5rem 4rem rgba(0, 0, 0, 0.032),
    0 4rem 5rem rgba(0, 0, 0, 0.04);

  a {
    text-decoration: none !important ;
  }

  :nth-of-type(2n + 1) {
    a > div > div:first-of-type {
      grid-area: b;
    }
  }

  :nth-of-type(2n + 2) {
    a > div > div:first-of-type {
      grid-area: a;
    }
  }
`;

const StyledCaseThumbnailImage = styled(motion.div)`
  aspect-ratio: 1;

  ${({ $imageUrl }) =>
    $imageUrl && {
      backgroundImage: `url(${$imageUrl})`,
      backgroundSize: "cover",
    }}
`;

const StyledCaseThumbnailImageAndCaption = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  grid-template-areas: "a b";

  > div {
    padding: ${padding.vertical.double} ${padding.horizontal.double};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

/* TODO: Fix hover transitions, Fix inView animations (use blinds) */
function CaseThumbnail({ data, status, caseUrl }) {
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

  const { imageUrl, overline, title, text } = data;

  const renderCaseThumbnail = () => (
    <StyledCaseThumbnailImageAndCaption>
      <TitleAndText title={title} h={3}>
        <Paragraph>{text}</Paragraph>
      </TitleAndText>

      <StyledCaseThumbnailImage
        $imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
      />
      {status === CASE_STATUS.COMING_SOON && <Tag />}
    </StyledCaseThumbnailImageAndCaption>
  );

  const wrapWithLink = () => (
    <Link
      to={caseUrl}
      onClick={() => changeLoaderContent(`${overline}, ${title}`)}
    >
      {renderCaseThumbnail()}
    </Link>
  );

  return (
    <StyledCaseThumbnail
      ref={intersectionRef}
      initial="hidden"
      animate={inView ? "inView" : "hidden"}
    >
      {status !== CASE_STATUS.COMING_SOON
        ? wrapWithLink(renderCaseThumbnail())
        : renderCaseThumbnail()}
    </StyledCaseThumbnail>
  );
}

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
