/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useTransform, useMotionValue, useScroll } from "framer-motion";
import { useWindowSize } from "react-use";
import Image from "../../Shared/Image";
import { CLIENTS } from "../../../data/dictionaries/CLIENTS";

const StyledClientsPreview = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: max-content;
  object-fit: fill;
  object-position: 50% 50%;

  > img {
    width: 180px; //TODO: one day we might want to use something fancier...
  }
`;

function ClientPreview() {
  const { width } = useWindowSize();

  const x = useMotionValue(200);

  useEffect(() => {
    const mouseMove = (e) => {
      x.set(e.clientX);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const [clientsWidth, setClientLogosWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setClientLogosWidth(ref.current.scrollWidth);
  }, [ref]);

  const horizontalScroll = useTransform(
    x,
    [0, width],
    [0, -(clientsWidth - width)]
  );

  const { height } = useWindowSize();
  const coverHeight = (height / 100) * 92;
  const { scrollY } = useScroll();

  const clientPreviewPosition = useTransform(
    scrollY,
    [0, coverHeight / 2],
    ["0%", "100%"]
  );
  const clientPreviewOpacity = useTransform(
    scrollY,
    [0, coverHeight / 2],
    [1, 0]
  );

  return (
    <StyledClientsPreview
      ref={ref}
      style={{
        x: horizontalScroll,
        y: clientPreviewPosition,
        opacity: clientPreviewOpacity,
      }}
    >
      {CLIENTS.map((item) => (
        <Image
          key={item.imageUrl}
          grayscale
          imageUrl={`${process.env.PUBLIC_URL}/${item.imageUrl}`}
          imageAlt={item.imageAlt}
        />
      ))}
    </StyledClientsPreview>
  );
}

ClientPreview.propTypes = {};

ClientPreview.defaultProps = {};

export default ClientPreview;
