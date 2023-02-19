import React, {useRef} from "react";
import styled from "styled-components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useWindowSize } from "react-use";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

const StyledHorizontalScrollingSection = styled(motion.section)`
  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }}
`;

const StyledCamera = styled(motion.div) `
  width: 100vw;
  height: 100vh;
  position: sticky;
  top:0;
`;

const StyledFrame = styled(motion.div) `
    display:flex;
    height: 100%;
`;

 const StyledItem = styled(motion.div)`
  flex-grow: 0;
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 1vmin;

  ${({ $bgColor }) =>
    $bgColor && {
      backgroundColor: $bgColor,
    }}
`; 

function HorizontalScrollingSection({children, bgColor}) {
  // const items =[{bgColor: "red"}, {bgColor: "blue"}, {bgColor: "green"}, {bgColor: "yellow"}, {bgColor: "purple"}]

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  const viewport = useWindowSize();
  const viewportWidth = viewport.width;

  const horizontalScroll = useTransform(
    scrollYProgress,
    [(0.5/children.length), 1],
    [0, -((children.length - 1) * viewportWidth) ]
  );

  const smoothHorizontalScroll = useSpring(horizontalScroll)

  return (
      <StyledHorizontalScrollingSection style={{height:`${children.length * 100}vw`}} ref={ref} $bgColor={bgColor} >
        <StyledCamera> 
        <StyledFrame style={{ x: smoothHorizontalScroll }}>
          {React.Children.map(children, child =>  <StyledItem key={uuid}>{child}</StyledItem>)}
        </StyledFrame>
        </StyledCamera>
      </StyledHorizontalScrollingSection>
  );
}

HorizontalScrollingSection.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
};

HorizontalScrollingSection.defaultProps = {
  bgColor: null,
};

export default HorizontalScrollingSection;