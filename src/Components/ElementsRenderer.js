/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { SECTION_ELEMENTS } from "../data/dictionaries/SECTION_ELEMENTS";
import Cover from "./Cover";
import LandingPageCover from "./LandingPageCover";
import Textbox from "./Textbox";
import Overview from "./Overview";
import Clients from "./Clients";
import Cases from "./Cases";
import ImageGallery from "./ImageGallery";
import FinalResult from "./FinalResult";
import BlockQuote from "./BlockQuote";
import SideBySideImagesAndText from "./SideBySideImagesAndText";
import ListOfImagesWithTitleAndText from "./ListOfImagesWithTitleAndText";
import ImageWithCaption from "./ImageWithCaption";
import Timeline from "./Timeline";
import SocialMediaLinks from "./SocialMediaLinks";
import CaseFooter from "./CaseFooter";
import AdditionalCases from "./AdditionalCases";
import Footer from "./Footer";
import KeyFigures from "./KeyFigures";
import ElementColorContextProvider from "../Context/ElementColorContext";
import Testimonials from "./Testimonials";

const SectionElementsRenderer = ({ elementKey, data, template }) => {
  if (!template) {
    return null;
  }

  switch (template) {
    case SECTION_ELEMENTS.COVER:
      return (
        <Cover
          key={elementKey}
          overline={data.overline}
          title={data.title}
          text={data.text}
          imageUrl={data.imageUrl}
          bgColor={data.bgColor}
          parallax={data.parallax}
          sticky={data.sticky}
        />
      );
    case SECTION_ELEMENTS.LANDING_PAGE_COVER:
      return (
        <ElementColorContextProvider>
          <LandingPageCover
            key={elementKey}
            overline={data.overline}
            title={data.title}
            text={data.text}
            bgImageUrl={data.bgImageUrl}
            imageUrl={data.imageUrl}
            bgColor={data.bgColor}
          />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.KEY_FIGURES:
      return <KeyFigures key={elementKey} items={data.items} />;
    case SECTION_ELEMENTS.OVERVIEW:
      return (
        <Overview
          key={elementKey}
          text={data.text}
          myRole={data.myRole}
          toolsAndMethods={data.toolsAndMethods}
          duration={data.duration}
          bgColor={data.bgColor}
        />
      );
    case SECTION_ELEMENTS.TEXTBOX:
      return (
        <ElementColorContextProvider>
          <Textbox
            key={elementKey}
            title={data.title}
            h={data.h}
            text={data.text}
            imageUrl={data.imageUrl}
            imageAlt={data.imageAlt}
            caption={data.caption}
            flip={data.flip}
            limitMaxWidth={data.limitMaxWidth}
            bgColor={data.bgColor}
          />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.RESULT:
      return (
        <FinalResult
          key={elementKey}
          imageUrl={data.imageUrl}
          bgColor={data.bgColor}
          results={data.results}
          text={data.text}
          flip={data.flip}
        />
      );
    case SECTION_ELEMENTS.IMAGE_GALLERY:
      return (
        <ImageGallery
          key={elementKey}
          images={data.images}
          template={data.template}
          limitMaxWidth={data.limitMaxWidth}
        />
      );
    case SECTION_ELEMENTS.TIMELINE:
      return <Timeline key={elementKey} items={data.items} />;
    case SECTION_ELEMENTS.SOCIAL_MEDIA_LINKS:
      return <SocialMediaLinks />;
    case SECTION_ELEMENTS.IMAGE_WITH_CAPTION:
      return (
        <ImageWithCaption
          key={elementKey}
          imageUrl={data.imageUrl}
          imageAlt={data.imageAlt}
          caption={data.caption}
          bgColor={data.bgColor}
          size={data.size}
          padding
        />
      );
    case SECTION_ELEMENTS.SIDE_BY_SIDE_IMAGES_AND_TEXT:
      return (
        <SideBySideImagesAndText
          key={elementKey}
          bgColor={data.bgColor}
          items={data.items}
        />
      );
    case SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT:
      return (
        <ListOfImagesWithTitleAndText
          key={elementKey}
          items={data.items}
          listTitle={data.listTitle}
          listText={data.listText}
          elementBgColor={data.elementBgColor}
        />
      );
    case SECTION_ELEMENTS.CLIENTS:
      return <Clients key={elementKey} preview={data.preview} />;
    case SECTION_ELEMENTS.CASE_FOOTER:
      return <CaseFooter key={elementKey} />;
    case SECTION_ELEMENTS.ADDITIONAL_CASES:
      return <AdditionalCases key={elementKey} />;
    case SECTION_ELEMENTS.FOOTER:
      return <Footer key={elementKey} />;
    case SECTION_ELEMENTS.QUOTE:
      return (
        <BlockQuote key={elementKey} quote={data.quote} cite={data.cite} />
      );
    case SECTION_ELEMENTS.CASES:
      return (
        <Cases
          key={elementKey}
          title={data.title}
          text={data.text}
          preview={data.preview}
        />
      );
    case SECTION_ELEMENTS.TESTIMONIALS:
      return (
        <Testimonials
          key={elementKey}
          title={data.title}
          text={data.text}
          items={data.items}
        />
      );
    default:
      return null;
  }
};

SectionElementsRenderer.propTypes = {
  elementKey: PropTypes.string.isRequired,
  data: PropTypes.object,
  template: PropTypes.node.isRequired,
};

SectionElementsRenderer.defaultProps = {
  data: null,
};

export default SectionElementsRenderer;
