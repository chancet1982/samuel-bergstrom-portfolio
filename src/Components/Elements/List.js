/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const StyledList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0px;
`;

const styleListItem = (size, lh, margin) => `
  font-size: ${size}rem;
  margin-top: ${margin}rem;
  margin-bottom: ${margin}rem;
  line-height: ${lh};
`;

const StyledListItem = styled.li`
  :before {
    display: inline-block;
    content: "-";
    width: 1rem;
    margin-left: -1rem;
    color: ${({ theme: { colors } }) => colors.primary};
  }

  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.medium : colors.text.dark.medium};
  max-width: 80ch;

  ${({
    theme: {
      typography: { size, lh, margin },
    },
  }) => styleListItem(size, lh, margin)}
`;

const List = ({ items }) => {
  return (
    <StyledList>
      {items.map((item) => (
        <StyledListItem key={uuid()}>{item}</StyledListItem>
      ))}
    </StyledList>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
};

List.defaultProps = {
  items: [],
};

export default List;
