import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Badge from "../../Shared/Badge";
import { CursorContext } from "../../../Context/CursorContext";
import { CASE_STATUS } from "../../../data/dictionaries/CASE_STATUS";
import Paragraph from "../../Shared/Paragraph";
import TitleAndText from "../../Shared/TitleAndText";
import padding from "../../../theme/padding";
import colors from "../../../theme/colors";
import breakpoints from "../../../theme/breakpoints";

const StyledCaseThumbnail = styled(motion.div)`
  overflow: hidden;
  transition: box-shadow 600ms;

  a {
    text-decoration: none !important ;
  }

  @media (min-width: ${breakpoints.tablet}px) {
    :nth-of-type(2n + 1) {
      a > div > div:first-of-type {
        grid-area: b;
      }

      a > div > div:last-of-type {
        grid-area: a;
      }
    }

    :nth-of-type(2n + 2) {
      a > div > div:first-of-type {
        grid-area: a;
      }

      a > div > div:last-of-type {
        grid-area: b;
      }
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

const StyledPlaceholder = styled(motion.div)`
  aspect-ratio: 1;
  background: transparent;
`;

const StyledRollup = styled(motion.div)`
  background-color: ${colors.offblack};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scaleY(0);
  transform-origin: bottom;
`;

const StyledCaseThumbnailImageAndCaption = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  position: relative;
  overflow: hidden;

  @media (min-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "a b";
  }
`;

const StyledCaseThumbnailImageWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
`;

const StyledCaseThumbnailCaption = styled(motion.div)`
  display: flex;

  > div {
    padding: ${padding.vertical.double} ${padding.horizontal.double};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

function CaseThumbnail({ data, status, caseUrl }) {
  const [, setCursorText, , setCursorVariant] = useContext(CursorContext);

  function caseThumbnailMouseEnter() {
    setCursorText("View");
    setCursorVariant("project");
  }

  function caseThumbnailMouseLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  const { imageUrl, title, text } = data;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });

  const renderCaseThumbnail = () => (
    <StyledCaseThumbnailImageAndCaption>
      <StyledCaseThumbnailCaption
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true, amount: "some" }}
        transition={{ staggerChildren: 0.1 }}
      >
        <TitleAndText title={title} h={3}>
          <Paragraph xl>{text}</Paragraph>
        </TitleAndText>
      </StyledCaseThumbnailCaption>

      {!isInView ? (
        <StyledPlaceholder ref={ref} />
      ) : (
        <StyledCaseThumbnailImageWrapper>
          <StyledCaseThumbnailImage
            $imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
            initial={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
              opacity: 0.8,
            }}
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              opacity: 0.8,
              transition: { duration: 0.6, ease: "circIn" },
            }}
            whileHover={{ scale: 1.2, opacity: 1 }}
          />
          <StyledRollup
            animate={{ scaleY: [0, 1, 1, 0], originY: [1, 1, 0, 0] }}
            transition={{ duration: 1.2, ease: "circIn" }}
          />
        </StyledCaseThumbnailImageWrapper>
      )}

      {status === CASE_STATUS.COMING_SOON && <Badge>COMING SOON!</Badge>}
    </StyledCaseThumbnailImageAndCaption>
  );

  const wrapWithLink = () => (
    <Link
      to={caseUrl}
      onMouseEnter={() => caseThumbnailMouseEnter()}
      onMouseLeave={() => caseThumbnailMouseLeave()}
      /* onClick={() => changeLoaderContent(`${overline}, ${title}`)} */
    >
      {renderCaseThumbnail()}
    </Link>
  );

  return (
    <StyledCaseThumbnail
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ staggerChildren: 0.2 }}
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
