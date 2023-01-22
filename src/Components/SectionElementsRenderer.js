import React from "react";
import PropTypes from "prop-types";
import { SECTION_ELEMENTS } from "../data/dictionaries/SECTION_ELEMENTS";
import Cover from "./Section_Elements/Cover";
import Overview from "./Section_Elements/Overview";
import Textbox from "./Section_Elements/Textbox";
import Clients from "./Section_Elements/Clients";
import Cases from "./Section_Elements/Cases";
import ImageGallery from "./Section_Elements/ImageGallery";
import FinalResult from "./Section_Elements/FinalResult";
import BlockQuote from "./Section_Elements/BlockQuote";
import SideBySideImagesAndText from "./Section_Elements/SideBySideImagesAndText";
import ListOfImagesWithTitleAndText from "./Section_Elements/ListOfImagesWithTitleAndText";
import SectionImage from "./Section_Elements/SectionImage";
import Timeline from "./Section_Elements/Timeline";
import CaseFooter from "./Section_Elements/CaseFooter";
import AdditionalCases from "./Section_Elements/AdditionalCases";
import Footer from "./Section_Elements/Footer";
import KeyFigures from "./Section_Elements/KeyFigures";
import Testimonials from "./Section_Elements/Testimonials";
import ElementColorContextProvider from "../Context/ElementColorContext";
import ContactDetails from "./Section_Elements/ContactDetails";
import Insights from "./Section_Elements/Insights";
import SectionVideo from "./Section_Elements/SectionVideo";
import ListOfCards from "./Section_Elements/ListOfCards";

function SectionElementsRenderer({ elementKey, data, template }) {
  if (!template) {
    return null;
  }

  switch (template) {
    case SECTION_ELEMENTS.COVER:
      return (
        <ElementColorContextProvider>
          <Cover
            key={elementKey}
            overline={data.overline}
            title={data.title}
            text={data.text}
            bgMedia={data.bgMedia}
            bgColor={data.bgColor}
            fgImage={data.fgImage}
            caption={data.caption}
            highlights={data.highlights}
            clientsPreview={data.clientsPreview}
            isLight={data.isLight}
          />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.KEY_FIGURES:
      return (
        <ElementColorContextProvider>
          <KeyFigures
            key={elementKey}
            items={data.items}
            bgColor={data.bgColor}
            bgMedia={data.bgMedia}
          />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.OVERVIEW:
      return (
        <Overview
          key={elementKey}
          text={data.text}
          toolsAndMethods={data.toolsAndMethods}
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
            isCentered={data.isCentered}
            bgColor={data.bgColor}
            bgMedia={data.bgMedia}
          />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.INSIGHTS:
      return (
        <ElementColorContextProvider>
          <Insights
            key={elementKey}
            title={data.title}
            h={data.h}
            items={data.items}
            bgColor={data.bgColor}
            isTwoColumnsOnDesktop={data.isTwoColumnsOnDesktop}
            text={data.text}
          />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.RESULT:
      return (
        <ElementColorContextProvider>
          <FinalResult
            key={elementKey}
            imageUrl={data.imageUrl}
            mobileImageUrl={data.mobileImageUrl}
            bgColor={data.bgColor}
            results={data.results}
            text={data.text}
            flip={data.flip}
          />
        </ElementColorContextProvider>
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
    case SECTION_ELEMENTS.CONTACT_DETAILS:
      return <ContactDetails key={elementKey} />;
    case SECTION_ELEMENTS.SECTION_IMAGE:
      return (
        <SectionImage
          key={elementKey}
          imageUrl={data.imageUrl}
          imageAlt={data.imageAlt}
          caption={data.caption}
          limitMaxWidth={data.limitMaxWidth}
        />
      );
    case SECTION_ELEMENTS.SIDE_BY_SIDE_IMAGES_AND_TEXT:
      return (
        <SideBySideImagesAndText
          key={elementKey}
          bgColor={data.bgColor}
          limitMaxWidth={data.limitMaxWidth}
          items={data.items}
        />
      );
    case SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT:
      return (
        <ElementColorContextProvider>
          <ListOfImagesWithTitleAndText key={elementKey} items={data.items} />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.LIST_OF_CARDS:
      return (
        <ElementColorContextProvider>
          <ListOfCards key={elementKey} items={data.items} />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.VIDEO:
      return (
        <SectionVideo
          key={elementKey}
          controls={data.controls}
          autoplay={data.autoplay}
          loop={data.loop}
          muted={data.muted}
          source={data.source}
          captions={data.captions}
        />
      );
    case SECTION_ELEMENTS.CLIENTS:
      return <Clients key={elementKey} />;
    case SECTION_ELEMENTS.CASE_FOOTER:
      return <CaseFooter key={elementKey} />;
    case SECTION_ELEMENTS.ADDITIONAL_CASES:
      return <AdditionalCases key={elementKey} />;
    case SECTION_ELEMENTS.FOOTER:
      return <Footer key={elementKey} />;
    case SECTION_ELEMENTS.QUOTE:
      return (
        <ElementColorContextProvider>
          <BlockQuote
            key={elementKey}
            quote={data.quote}
            cite={data.cite}
            bgColor={data.bgColor}
            bgMedia={data.bgMedia}
            limitMaxWidth={data.limitMaxWidth}
          />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.CASES:
      return <Cases key={elementKey} preview={data.preview} />;
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
}

SectionElementsRenderer.propTypes = {
  elementKey: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  template: PropTypes.node.isRequired,
};

SectionElementsRenderer.defaultProps = {
  data: null,
};

export default SectionElementsRenderer;
