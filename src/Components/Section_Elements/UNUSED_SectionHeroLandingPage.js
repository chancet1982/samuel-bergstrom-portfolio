/* eslint-disable react/forbid-prop-types */
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import PropTypes from "prop-types";
import styled from "styled-components";
import BackgroundWrapper from "../Shared/BackgroundWrapper";
import colors from "../../theme/colors";
import { BG_MEDIA_TYPES } from "../../data/dictionaries/BG_MEDIA_TYPES";
import SectionTitleAndText from "./SectionTitleAndText";
import CaseThumbnail from "./Cases/CaseThumbnail";
import ElementColorContextProvider from "../../Context/ElementColorContext";
import { CASES } from "../../data/dictionaries/CASES";
import FgImage from "./SectionHero/FgImage";

const StyledRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-bottom: 5rem;
  gap: 5rem;
`;

const StyledRow2 = styled(motion.div)`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 5rem;
  gap: 5rem;
`;

const StyledSectionHeroLandingPage = styled(motion.div)`
  transform-style: preserve-3d;
  perspective: 1000px;
  /*padding-top: 10rem;
  padding-bottom: 10rem;*/
  overflow: hidden;
  align-self: auto;
  flex-direction: column;
  height: 300vh;
  display: flex;
  position: relative;
  box-sizing: border-box;
`;

export function SectionHeroLandingPage({ bgColor, bgMedia, fgImage, caption }) {
  const { imageUrl, mobileImageUrl, imageAlt } = fgImage || {};

  const firstRow = CASES.slice(0, 4);
  const secondRow = CASES.slice(4, 8);
  const thirdRow = CASES.slice(8, 12);

  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0.2, 1], [-380, 400]),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0.2, 1], [400, -380]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const { overline, title, h, text } = caption;

  return (
    <BackgroundWrapper bgMedia={bgMedia} bgColor={bgColor} isScaleOnScroll>
      <StyledSectionHeroLandingPage ref={ref}>
        <SectionTitleAndText
          isSticky
          isHalfScreen
          overline={overline}
          title={title}
          text={text}
          h={h}
        />
        {fgImage && (
          <FgImage
            imageUrl={imageUrl}
            mobileImageUrl={mobileImageUrl}
            imageAlt={imageAlt}
          />
        )}
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className=""
        >
          <StyledRow style={{ x: translateX }}>
            {firstRow.map(({ thumbnail, caseStatus, caseUrl }) => (
              <ElementColorContextProvider>
                <CaseThumbnail
                  key={caseUrl}
                  data={thumbnail}
                  caseUrl={caseUrl}
                  status={caseStatus}
                />
              </ElementColorContextProvider>
            ))}
          </StyledRow>
          <StyledRow2 style={{ x: translateXReverse }}>
            {secondRow.map(({ thumbnail, caseStatus, caseUrl }) => (
              <ElementColorContextProvider>
                <CaseThumbnail
                  key={caseUrl}
                  data={thumbnail}
                  caseUrl={caseUrl}
                  status={caseStatus}
                />
              </ElementColorContextProvider>
            ))}
          </StyledRow2>
          <StyledRow style={{ x: translateX }}>
            {thirdRow.map(({ thumbnail, caseStatus, caseUrl }) => (
              <ElementColorContextProvider>
                <CaseThumbnail
                  key={caseUrl}
                  data={thumbnail}
                  caseUrl={caseUrl}
                  status={caseStatus}
                />
              </ElementColorContextProvider>
            ))}
          </StyledRow>
        </motion.div>
      </StyledSectionHeroLandingPage>
    </BackgroundWrapper>
  );
}

SectionHeroLandingPage.propTypes = {
  bgColor: PropTypes.string,
  bgMedia: PropTypes.shape({
    type: PropTypes.oneOf([BG_MEDIA_TYPES.IMAGE, BG_MEDIA_TYPES.VIDEO]),
    mediaUrl: PropTypes.string,
  }),
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
};

SectionHeroLandingPage.defaultProps = {
  bgColor: colors.offwhite,
  bgMedia: null,
  fgImage: null,
  caption: {
    overline: "defualt overline",
    title: "default title",
    h: 1,
    text: "default text",
  },
};

export default SectionHeroLandingPage;
