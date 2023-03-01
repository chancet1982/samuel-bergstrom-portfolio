import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Span from "../Shared/Span";
import TitleAndText from "../Shared/TitleAndText";
import breakpoints from "../../theme/breakpoints";
import Paragraph from "../Shared/Paragraph";
import padding from "../../theme/padding";
import sizes from "../../theme/sizes";
import Button from "../Shared/Button";

const StyledTimelineWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-right: ${padding.outsideElements.double};
  padding-left: ${padding.outsideElements.double};
  margin: 0;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }

  > button {
    margin: 0 auto;
    width: 100%;
    max-width: calc(
      ${breakpoints.mobile}px - 2 * ${padding.outsideElements.double}
    );
    align-self: center;
    justify-self: center;
  }
`;

const StyledTimeline = styled(motion.dl)`
  margin: 0;
`;

const StyledTimelineItemYear = styled(motion.div)`
  grid-column: 1 / span 1;
  align-items: flex-end;

  width: fit-content;
  box-sizing: border-box;

  span {
    position: sticky;
    top: 0;
  }
`;

const StyledTimelineItemEvents = styled(motion.div)`
  grid-column: 2 / span 1;
  align-items: flex-start;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.desktop}px) {
    width: calc(${sizes.contentWidthLimit}px * 0.8);
  }

  > div {
    margin-bottom: ${padding.insideElements.half};

    p {
      margin: 0;
    }
  }
`;

function TimelineItemYear({ children }) {
  return (
    <StyledTimelineItemYear>
      <Span xxl>
        <strong>{children}</strong>
      </Span>
    </StyledTimelineItemYear>
  );
}

TimelineItemYear.propTypes = {
  children: PropTypes.node.isRequired,
};

function TimelineItemEvent({ title, children }) {
  return (
    <TitleAndText h={5} title={title}>
      <Paragraph>{children}</Paragraph>
    </TitleAndText>
  );
}

TimelineItemEvent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const StyledTimelineItem = styled(motion.dt)`
  position: relative;
  padding-top: calc(${padding.insideElements.single});
  padding-bottom: calc(${padding.insideElements.single});

  @media (min-width: ${breakpoints.mobileLarge}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  :last-of-type {
    ::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 100%;
      ${({ $isPreview }) =>
        $isPreview && {
          background: `linear-gradient(
        0deg,
        rgba(249, 249, 249, 1) 0%,
        rgba(249, 249, 249, 0.8) 30%,
        rgba(249, 249, 249, 0) 100%
      )`,
        }}
    }
  }
  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

function TimelineItem({ year, events, isPreview }) {
  return (
    <StyledTimelineItem
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      $isPreview={isPreview}
    >
      <TimelineItemYear>{year}</TimelineItemYear>
      <StyledTimelineItemEvents>
        {events &&
          events.length &&
          events.map(({ title, content }) => (
            <TimelineItemEvent key={title} title={title}>
              {content}
            </TimelineItemEvent>
          ))}
      </StyledTimelineItemEvents>
    </StyledTimelineItem>
  );
}

TimelineItem.propTypes = {
  year: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  isPreview: PropTypes.bool.isRequired,
};

function Timeline({ items }) {
  const [isPreview, togglePreview] = useState(true);
  const timelineItems = isPreview ? items.slice(0, 3) : items;

  return (
    <StyledTimelineWrapper>
      <StyledTimeline>
        {timelineItems.map(({ year, events }) => (
          <TimelineItem
            key={year}
            year={year}
            events={events}
            isPreview={isPreview}
          />
        ))}
      </StyledTimeline>
      <Button onClick={() => togglePreview(!isPreview)}>
        {isPreview ? "Expand" : "Collapse"}
      </Button>
    </StyledTimelineWrapper>
  );
}

Timeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default Timeline;
