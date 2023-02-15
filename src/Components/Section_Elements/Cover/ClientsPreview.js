/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useTransform, useMotionValue, useScroll } from "framer-motion";
import { useWindowSize, useMeasure } from "react-use";
import Image from "../../Shared/Image";
import { CLIENTS } from "../../../data/dictionaries/CLIENTS";
import breakpoints from "../../../theme/breakpoints";

const StyledClientsPreview = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: max-content;
  object-fit: fill;
  object-position: 50% 50%;

  > img {
    height: 64px;
  }

  @media (min-width: ${breakpoints.mobileLarge}px) and (max-width: ${breakpoints.desktop -
    1}px) {
    > img {
      height: 80px;
    }
  }

  @media (min-width: ${breakpoints.desktop}px) {
    > img {
      height: 128px;
    }
  }
`;

function ClientPreview() {
  const viewport = useWindowSize();
  const viewportWidth = viewport.width;
  const [ref, { width }] = useMeasure();

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

  const horizontalScroll = useTransform(
    x,
    [0, viewportWidth],
    [0, -(width - viewportWidth)]
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
    [0.48, 0]
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
          key={item.imageUrl.white}
          grayscale
          imageUrl={`${process.env.PUBLIC_URL}/${item.imageUrl.white}`}
          imageAlt={item.imageAlt}
        />
      ))}
    </StyledClientsPreview>
  );
}

export default ClientPreview;
