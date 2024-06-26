import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import colors from "../../theme/colors";

const StyledList = styled(motion.ul)`
  list-style-type: none;
  padding-inline-start: 0px;

  ${({ columns }) =>
    columns > 1 && {
      columnCount: columns,
    }}
`;

const styleListItem = (size, lh, margin) => `
  font-size: ${size}rem;
  margin-top: ${margin}rem;
  margin-bottom: ${margin}rem;
  line-height: ${lh};
`;

const StyledListItem = styled(motion.li)`
  :before {
    ${({ $plain }) =>
      !$plain && {
        display: "inline-block",
        content: "-",
        width: "1rem",
        marginLeft: "-1rem",
        color: colors.primary,
      }}
  }

  max-width: 80ch;

  ${({
    theme: {
      typography: { size, lh, margin },
    },
  }) => styleListItem(size, lh, margin)}
`;

function List({ items, plain, columns }) {
  return (
    <StyledList columns={columns}>
      {items.map((item) => (
        <StyledListItem key={uuid()} $plain={plain}>
          {item}
        </StyledListItem>
      ))}
    </StyledList>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
  plain: PropTypes.bool,
  columns: PropTypes.number,
};

List.defaultProps = {
  items: [],
  plain: false,
  columns: 1,
};

export default List;
