import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useWindowSize } from "react-use";
import Image from "../../Shared/Image";
import { CLIENTS } from "../../../data/dictionaries/CLIENTS";

const StyledClientsPreview = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: max-content;
  object-fit: fill;
  object-position: 50% 50%;

  > div {
    width: 150px;
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

  const renderClientsPreview = CLIENTS.map((item) => (
    <Image
      key={item.imageUrl}
      grayscale
      imageUrl={`${process.env.PUBLIC_URL}/${item.imageUrl}`}
      imageAlt={item.imageAlt}
    />
  ));
  /* TODO: Replace 5296 with clientPreviewWidth using useMeasure? https://github.com/streamich/react-use/blob/master/docs/useMeasure.md */
  const clientPreviewParallax = useTransform(
    x,
    [0, width],
    [0, -(5296 - width)]
  );

  return (
    <StyledClientsPreview style={{ x: clientPreviewParallax }}>
      {renderClientsPreview}
    </StyledClientsPreview>
  );
}

ClientPreview.propTypes = {};

ClientPreview.defaultProps = {};

export default ClientPreview;
