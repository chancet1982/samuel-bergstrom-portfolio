/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useBgColor from "../../utils/useBgColor";
import useFluidTypography from "../../utils/useBodyFluidTypography";
import colors from "../../theme/colors";
import typography from "../../theme/typography";

const StyledParagraph = styled.p`
  color: ${({ light }) =>
    light ? colors.text.light.medium : colors.text.dark.medium};
  max-width: 64ch;
  ${({ fluidType }) => fluidType};
  font-family: ${typography.bodyFont};

  strong {
    color: ${({ light }) =>
      light ? colors.text.light.high : colors.text.dark.high};
  }
`;

const Paragraph = ({ small, large, huge, children }) => {
  const light = useBgColor();

  const mapSizeToNumber = () => {
    if (small) return 1;
    if (large) return 3;
    if (huge) return 4;
    return 2;
  };

  const fluidType = useFluidTypography(mapSizeToNumber());

  return (
    <StyledParagraph
      small={small}
      large={large}
      huge={huge}
      light={light}
      fluidType={fluidType}
    >
      {children}
    </StyledParagraph>
  );
};

Paragraph.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  huge: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  small: false,
  large: false,
  huge: false,
};

export default Paragraph;