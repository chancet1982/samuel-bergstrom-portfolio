import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Span from "../Shared/Span";
import TitleAndText from "../Shared/TitleAndText";
import breakpoints from "../../theme/breakpoints";
import Paragraph from "../Shared/Paragraph";
import padding from "../../theme/padding";
import colors from "../../theme/colors";
import sizes from "../../theme/sizes";

const StyledTimeline = styled.dl`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-top: ${padding.vertical.double};
  padding-bottom: ${padding.vertical.double};

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: ${sizes.contentWidthLimit}px;
    margin: 0 auto;
  }
`;

/* const StyledTimelineItemSeparator = styled.div``;
const StyledTimelineItemDot = styled.div``;
const StyledTimelineItemConnector = styled.div``;

 const TimelineItemSeparator = () => (
  <StyledTimelineItemSeparator>
    <StyledTimelineItemDot />
    <StyledTimelineItemConnector />
  </StyledTimelineItemSeparator>
); */

const StyledTimelineItemOppositeContent = styled.div`
  span {
    font-size: 400%;
  }
`;

const TimelineItemOppositeContent = ({ children }) => (
  <StyledTimelineItemOppositeContent>
    <Span huge>
      <strong>{children}</strong>
    </Span>
  </StyledTimelineItemOppositeContent>
);

TimelineItemOppositeContent.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledTimelineItemContent = styled(TitleAndText)``;

const TimelineItemContent = ({ title, children }) => (
  <StyledTimelineItemContent h={5} title={title}>
    <Paragraph>{children}</Paragraph>
  </StyledTimelineItemContent>
);

TimelineItemContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const StyledTimelineItem = styled.dt`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: ${padding.vertical.half};
  padding-bottom: ${padding.vertical.half};

  border-top: solid 1px
    ${({ light }) => (light ? colors.text.light.low : colors.text.dark.low)};

  :last-of-type {
    border-bottom: solid 1px
      ${({ light }) => (light ? colors.text.light.low : colors.text.dark.low)};
  }
  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  > div:first-of-type {
    grid-column: 1 / span 1;
    align-items: flex-end;
    padding-right: ${padding.horizontal.single};
    padding-left: ${padding.horizontal.double};
    width: fit-content;
    box-sizing: border-box;
  }

  > div:last-of-type {
    grid-column: 2 / span 1;
    align-items: flex-start;
    width: calc(1280px * 0.8);
    padding-right: ${padding.horizontal.double};
    box-sizing: border-box;

    p {
      margin: 0;
    }
  }
`;

const TimelineItem = ({ date, title, content }) => (
  <StyledTimelineItem>
    <TimelineItemOppositeContent>{date}</TimelineItemOppositeContent>

    {/* <TimelineItemSeparator /> */}

    <TimelineItemContent title={title}>{content}</TimelineItemContent>
  </StyledTimelineItem>
);

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Timeline = ({ items }) => {
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
