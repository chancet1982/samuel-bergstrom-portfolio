import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import breakpoints from "../theme/breakpoints";
import padding from "../theme/padding";
import sizes from "../theme/sizes";
import Span from "./Shared/Span";
import ContactForm from "./ContactForm";
import TitleAndText from "./Shared/TitleAndText";
import Paragraph from "./Shared/Paragraph";
import Image from "./Shared/Image";
import Title from "./Shared/Title";
import { ICON_PATHS } from "../data/dictionaries/ICON_PATHS";
import Button from "./Shared/Button";
import colors from "../theme/colors";
import { SectionColorContext } from "../Context/SectionColorContext";
import useIsTouchingTop from "../utils/useIsTouchingTop";
import { NavBgColorContext } from "../Context/NavBgColorContext";
import { CursorContext } from "../Context/CursorContext";

const StyledFooter = styled(motion.footer)`
  margin: 0;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ $bgColor }) =>
    $bgColor && {
      background: $bgColor,
      paddingTop: padding.outsideElements.quadruple,
      paddingBottom: padding.outsideElements.quadruple,
    }}
`;

const StyledSectionContactForm = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding-left: ${padding.outsideElements.double};
  padding-right: ${padding.outsideElements.double};
  grid-gap: max(
    ${padding.outsideElements.single},
    ${padding.insideElements.single}
  );
  padding-bottom: ${padding.insideElements.double};
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

const StyledSectionCopyright = styled(motion.div)`
  padding: ${padding.outsideElements.double}
    ${padding.outsideElements.quadruple};
  text-align: center;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

const StyledSocialMediaLinks = styled(motion.div)`
  display: flex;
  flex-direction: row;

  gap: ${padding.insideElements.single};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    padding: ${padding.insideElements.quarter} ${padding.insideElements.half}
      ${padding.insideElements.half} ${padding.insideElements.half};
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
  }
`;

function Footer({ bgColor, navBgColor }) {
  const [, setSectionBgColor] = useContext(SectionColorContext);

  useEffect(() => {
    setSectionBgColor(bgColor);
  }, [setSectionBgColor, bgColor]);

  const ref = useRef(null);
  const isTouchingTop = useIsTouchingTop(ref);
  const [, setNavBgColor] = useContext(NavBgColorContext);

  useEffect(() => {
    const color = bgColor || navBgColor;

    if (isTouchingTop) {
      if (color) {
        setNavBgColor(color);
      } else {
        setNavBgColor(colors.offwhite);
      }
    }
  }, [isTouchingTop, setNavBgColor, bgColor, navBgColor]);

  const [, setCursorText, , setCursorVariant] = useContext(CursorContext);

  function socialMediaLinkMouseEnter(text) {
    setCursorText(text);
    setCursorVariant("project");
  }

  function socialMediaLinkMouseLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <StyledFooter
      initial="hidden"
      whileInView="inView"
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.01 } }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      $bgColor={bgColor}
      ref={ref}
    >
      <StyledSectionContactForm
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <Image imageUrl={`${process.env.PUBLIC_URL}/assets/contact-form.png`} />
        <motion.div>
          <TitleAndText h={3} title="Let’s get in touch">
            <Paragraph xl>Found me interesting? Let’s talk</Paragraph>
          </TitleAndText>
          <ContactForm />
          <Title h={4}>Find me on social media</Title>
          <StyledSocialMediaLinks>
            <Button
              secondary
              iconButton
              large
              onMouseEnter={() => socialMediaLinkMouseEnter("Linkedin")}
              onMouseLeave={() => socialMediaLinkMouseLeave()}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/samuel-bergstr%C3%B6m-13bb8b1b/",
                  "_blank"
                )
              }
              icon={ICON_PATHS.LINKEDIN}
            />
            <Button
              secondary
              iconButton
              large
              onMouseEnter={() => socialMediaLinkMouseEnter("APDlist")}
              onMouseLeave={() => socialMediaLinkMouseLeave()}
              onClick={() =>
                window.open(
                  "https://adplist.org/mentors/samuel-bergstrom",
                  "_blank"
                )
              }
              icon={ICON_PATHS.ADPLIST}
            />
            <Button
              secondary
              iconButton
              large
              onMouseEnter={() => socialMediaLinkMouseEnter("Medium")}
              onMouseLeave={() => socialMediaLinkMouseLeave()}
              onClick={() =>
                window.open("https://medium.com/@chancet1982", "_blank")
              }
              icon={ICON_PATHS.MEDIUM}
            />
            <Button
              secondary
              iconButton
              large
              onMouseEnter={() =>
                socialMediaLinkMouseEnter("UX stack exchange")
              }
              onMouseLeave={() => socialMediaLinkMouseLeave()}
              onClick={() =>
                window.open(
                  "https://stackoverflow.com/users/4042508/samuel-bergstr%C3%B6m",
                  "_blank"
                )
              }
              icon={ICON_PATHS.STACK_EXCHANGE}
            />
          </StyledSocialMediaLinks>
        </motion.div>
      </StyledSectionContactForm>
      <StyledSectionCopyright>
        <Span small>2024, Samuel Bergström</Span>
      </StyledSectionCopyright>
    </StyledFooter>
  );
}

Footer.propTypes = {
  bgColor: PropTypes.string,
  navBgColor: PropTypes.string,
};

Footer.defaultProps = {
  bgColor: colors.offblack,
  navBgColor: null,
};

export default Footer;
