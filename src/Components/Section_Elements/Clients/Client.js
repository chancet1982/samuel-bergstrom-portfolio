import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import Image from "../../Shared/Image";
import { variants } from "../../../animations/animations";

const StyledClient = styled(motion.div)``;

const Client = ({ imageUrl, imageAlt }) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    }
  }, [intersection]);

  return (
    <StyledClient
      ref={intersectionRef}
      initial="hidden"
      animate={inView ? "inView" : "hidden"}
      variants={variants}
    >
      <Image
        grayscale
        imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`}
        imageAlt={imageAlt}
      />
    </StyledClient>
  );
};

Client.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
};

Client.defaultProps = {
  imageUrl: "default imageUrl",
  imageAlt: "default imageAlt",
};

export default Client;
