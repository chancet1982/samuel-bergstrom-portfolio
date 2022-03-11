import React from "react";
import styled from "styled-components";
import Span from "./Span";
import shadows from "../../theme/shadows";

const StyledTag = styled.div`
  position: absolute;
  top: -40px;
  right: -96px;
  transform: rotate(45deg);
  transform-origin: 0;
  padding: 0.5rem 4rem;
  background: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
  ${shadows.soft}
`;

const Tag = () => {
  return (
    <StyledTag>
      <Span>Coming Soon!</Span>
    </StyledTag>
  );
};

Tag.propTypes = {};

export default Tag;
