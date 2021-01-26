/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { ElementColorContext } from "../../Context/ElementColorContext";
import { SectionColorContext } from "../../Context/SectionColorContext";
import { ViewColorContext } from "../../Context/ViewColorContext";
import typography from "../../theme/typography";

const { size, lh, inc } = typography;

const styleLink = (small, large, huge) => `
  font-size: ${
    small ? size / 1.2 : large ? size * 1.2 : huge ? size * 1.618 : size
  }rem;
  line-height: ${small ? lh + inc : large ? lh - inc : lh};
`;

const StyledLink = styled(RouterLink)`
  color: ${({ light, theme: { colors } }) =>
    light ? colors.text.light.high : colors.text.dark.high};
  cursor: pointer;
  transition: all 0.5s;
  font-weight: 500;
  :hover {
    color: ${({ light, theme: { colors } }) =>
      light ? colors.text.light.medium : colors.text.dark.medium};
  }

  ${({ small, large, huge }) => styleLink(small, large, huge)}
`;

// TODO: fix link "TO" attribute
const Link = ({ small, large, huge, children, to }) => {
  const [hasViewBgColor] = useContext(ViewColorContext);
  const [hasSectionBgColor] = useContext(SectionColorContext);
  const context = useContext(ElementColorContext);
  // eslint-disable-next-line react/destructuring-assignment
  const hasElementBgColor = !context ? false : context[0];

  const light = hasViewBgColor || hasSectionBgColor || hasElementBgColor;

  return (
    <StyledLink
      small={small || undefined}
      large={large || undefined}
      huge={huge || undefined}
      light={light || undefined}
      to={to}
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  huge: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  small: false,
  large: false,
  huge: false,
};

export default Link;
