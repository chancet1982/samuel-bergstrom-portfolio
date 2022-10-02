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

const StyledTimelineItemYear = styled.div`
  grid-column: 1 / span 1;
  align-items: flex-end;
  padding-right: ${padding.horizontal.single};
  padding-left: ${padding.horizontal.double};
  width: fit-content;
  box-sizing: border-box;

  span {
    position: sticky;
    top: 0;
  }
`;

const StyledTimelineItemEvents = styled.div`
  grid-column: 2 / span 1;
  align-items: flex-start;
  width: calc(1280px * 0.8);
  padding-right: ${padding.horizontal.double};
  box-sizing: border-box;

  > div {
    margin-top: ${padding.vertical.half};
    margin-bottom: ${padding.vertical.half};

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

const StyledTimelineItem = styled.dt`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: calc(${padding.vertical.double} - ${padding.vertical.half});
  padding-bottom: calc(${padding.vertical.double} - ${padding.vertical.half});

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
`;

function TimelineItem({ year, events }) {
  return (
    <StyledTimelineItem>
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
};

/* TODO: Collapse timeline based on number of items */
function Timeline({ items }) {
  return (
    <StyledTimeline alternate>
      {items.map(({ year, events }) => (
        <TimelineItem key={year} year={year} events={events} />
      ))}
    </StyledTimeline>
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
