import React from "react";
import PropTypes from "prop-types";
import { SECTION_ELEMENTS } from "../data/dictionaries/SECTION_ELEMENTS";
import SectionHero from "./Section_Elements/SectionHero";
import Overview from "./Section_Elements/UNUSED_Overview";
import Textbox from "./Section_Elements/Textbox";
import SectionTitleAndText from "./Section_Elements/SectionTitleAndText";
import Clients from "./Section_Elements/Clients";
import Cases from "./Section_Elements/Cases";
import CasesPreview from "./Section_Elements/UNUSED_CasesPreview";
import ImageGallery from "./Section_Elements/ImageGallery";
import FinalResult from "./Section_Elements/FinalResult";
import BlockQuote from "./Section_Elements/BlockQuote";
import ContentColumns from "./Section_Elements/Columns";
import ListOfImagesWithTitleAndText from "./Section_Elements/ListOfImagesWithTitleAndText";
import SectionImage from "./Section_Elements/SectionImage";
import Timeline from "./Section_Elements/Timeline";
import AdditionalCases from "./Section_Elements/AdditionalCases";
import KeyFigures from "./Section_Elements/KeyFigures";
import Testimonials from "./Section_Elements/Testimonials";
import ElementColorContextProvider from "../Context/ElementColorContext";
import ContactDetails from "./Section_Elements/ContactDetails";
import Insights from "./Section_Elements/Insights";
import SectionVideo from "./Section_Elements/SectionVideo";
import ListOfCards from "./Section_Elements/ListOfCards";
import Spacer from "./Section_Elements/Spacer";
import { SPACER_SIZES } from "../data/dictionaries/SPACER_SIZES";
import SectionHeroCases from "./Section_Elements/SectionHeroCases";
import SectionClients from "./Section_Elements/SectionClients";
import SectionClientsMarquee from "./Section_Elements/SectionClientsMarquee";

function SectionElementsRenderer({ elementKey, data, template }) {
  if (!template) {
    return null;
  }

  switch (template) {
    case SECTION_ELEMENTS.SECTION_HERO_CASES:
      return (
        <ElementColorContextProvider>
          <SectionHeroCases
            key={elementKey}
            caption={data.caption}
            bgMedia={data.bgMedia}
            bgColor={data.bgColor}
            fgImage={data.fgImage}
            highlights={data.highlights}
          />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.SECTION_HERO:
      return (
        <ElementColorContextProvider>
          <SectionHero
            key={elementKey}
            bgMedia={data.bgMedia}
            bgColor={data.bgColor}
            fgImage={data.fgImage}
            caption={data.caption}
            isLight={data.isLight}
            withGradientBottom={data.withGradientBottom}
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
    case SECTION_ELEMENTS.SPACER_LARGE:
      return <Spacer size={SPACER_SIZES.LARGE} />;
    case SECTION_ELEMENTS.SPACER_MEDIUM:
      return <Spacer size={SPACER_SIZES.MEDIUM} />;
    case SECTION_ELEMENTS.SPACER_SMALL:
      return <Spacer size={SPACER_SIZES.SMALL} />;
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
            overline={data.overline}
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
            overline={data.overline}
            title={data.title}
            h={data.h}
            text={data.text}
            items={data.items}
            bgColor={data.bgColor}
            isTwoColumnsOnDesktop={data.isTwoColumnsOnDesktop}
            isCentered={data.isCentered}
            limitMaxWidth={data.limitMaxWidth}
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
          isPadded={data.isPadded}
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
          mobileImageUrl={data.mobileImageUrl}
          imageAlt={data.imageAlt}
          caption={data.caption}
          limitMaxWidth={data.limitMaxWidth}
          paddedUp={data.paddedUp}
          paddedDown={data.paddedDown}
          isPadded={data.isPadded}
          isSticky={data.isSticky}
        />
      );
    case SECTION_ELEMENTS.SECTION_TITLE_AND_TEXT:
      return (
        <ElementColorContextProvider>
          <SectionTitleAndText
            key={elementKey}
            bgColor={data.bgColor}
            bgMedia={data.bgMedia}
            overline={data.overline}
            title={data.title}
            h={data.h}
            text={data.text}
            paddedUp={data.paddedUp}
            paddedDown={data.paddedDown}
            isPadded={data.isPadded}
            isSticky={data.isSticky}
            isCentered={data.isCentered}
            isFullScreen={data.isFullScreen}
            isHalfScreen={data.isHalfScreen}
            isFadingOnScroll={data.isFadingOnScroll}
          />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.COLUMNS:
      return (
        <ContentColumns
          key={elementKey}
          limitMaxWidth={data.limitMaxWidth}
          items={data.items}
        />
      );
    case SECTION_ELEMENTS.LIST_OF_IMAGES_WITH_TITLE_AND_TEXT:
      return (
        <ElementColorContextProvider>
          <ListOfImagesWithTitleAndText
            key={elementKey}
            items={data.items}
            plainImage={data.plainImage}
            stickyText={data.stickyText}
          />
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
    case SECTION_ELEMENTS.SECTION_CLIENTS:
      return <SectionClients key={elementKey} />;
    case SECTION_ELEMENTS.SECTION_CLIENTS_MARQUEE:
      return <SectionClientsMarquee key={elementKey} />;
    case SECTION_ELEMENTS.ADDITIONAL_CASES:
      return <AdditionalCases key={elementKey} />;
    case SECTION_ELEMENTS.QUOTE:
      return (
        <ElementColorContextProvider>
          <BlockQuote
            key={elementKey}
            quote={data.quote}
            cite={data.cite}
            bgColor={data.bgColor}
            bgMedia={data.bgMedia}
            isFullScreen={data.isFullScreen}
          />
        </ElementColorContextProvider>
      );
    case SECTION_ELEMENTS.CASES:
      return <Cases key={elementKey} featured={data.featured} />;
    case SECTION_ELEMENTS.CASES_PREVIEW:
      return <CasesPreview key={elementKey} />;
    case SECTION_ELEMENTS.TESTIMONIALS:
      return (
        <Testimonials
          key={elementKey}
          inLandingPage={data.inLandingPage}
          limitMaxWidth={data.limitMaxWidth}
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
