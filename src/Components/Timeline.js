import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Span from "./Elements/Span";
import TitleAndText from "./TitleAndText";

const StyledTimeline = styled.dl`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const StyledTimelineItemSeparator = styled.div``;
const StyledTimelineItemDot = styled.div``;
const StyledTimelineItemConnector = styled.div``;

const TimelineItemSeparator = () => (
  <StyledTimelineItemSeparator>
    <StyledTimelineItemDot />
    <StyledTimelineItemConnector />
  </StyledTimelineItemSeparator>
);

const StyledTimelineItemOppositeContent = styled.div``;
const TimelineItemOppositeContent = ({ children }) => (
  <StyledTimelineItemOppositeContent>
    <Span>{children}</Span>
  </StyledTimelineItemOppositeContent>
);

const StyledTimelineItemContent = styled(TitleAndText)``;

const TimelineItemContent = ({ title, children }) => (
  <StyledTimelineItemContent h={5} title={title}>
    {children}
  </StyledTimelineItemContent>
);

const StyledTimelineItem = styled.dt`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  > div:first-of-type {
    grid-column: 1 / span 1;
  }

  > div:last-of-type {
    grid-column: 2 / span 1;
  }
`;

const TimelineItem = ({ date, title, content }) => (
  <StyledTimelineItem>
    <TimelineItemOppositeContent>{date}</TimelineItemOppositeContent>

    <TimelineItemSeparator />

    <TimelineItemContent title={title}>{content}</TimelineItemContent>
  </StyledTimelineItem>
);
{
  /** 

     */
}

const Timeline = ({ items }) => {
  console.log(items);
  return (
    <StyledTimeline alternate>
      {items.map(({ date, title, content }) => (
        <TimelineItem key={title} date={date} title={title} content={content} />
      ))}
    </StyledTimeline>
  );
};

Timeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Timeline;
