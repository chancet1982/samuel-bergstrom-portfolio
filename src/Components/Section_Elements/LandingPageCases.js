/* eslint-disable react/forbid-prop-types */
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "../Shared/Image";
import Link from "../Shared/Link";
import Title from "../Shared/Title";
import Paragraph from "../Shared/Paragraph";

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

const StyledRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-bottom: 5rem;
  gap: 5rem;
`;

const StyledRow2 = styled(motion.div)`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 5rem;
  gap: 5rem;
`;

const StyledHeroParallax = styled(motion.div)`
  transform-style: preserve-3d;
  perspective: 1000px;
  padding-top: 10rem;
  padding-bottom: 10rem;
  overflow: hidden;
  align-self: auto;
  flex-direction: column;
  height: 300vh;
  display: flex;
  position: relative;
  box-sizing: border-box;
`;

const StyledHeroParallaxCaption = styled(motion.div)`
    padding-top: 10rem;
    padding-bottom: 10rem;
    width:100%
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    top:0;
    left:0;
    postion:relative;
`;

export function HeroParallax() {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0.2, 1], ["-100", "100%"]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0.2, 1], ["100%", "-100%"]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <StyledHeroParallax ref={ref}>
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <StyledRow>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </StyledRow>
        <StyledRow2>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </StyledRow2>
        <StyledRow>
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </StyledRow>
      </motion.div>
    </StyledHeroParallax>
  );
}

export function Header() {
  return (
    <StyledHeroParallaxCaption>
      <Title h={1}>
        The Ultimate <br /> development studio
      </Title>
      <Paragraph>
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </Paragraph>
    </StyledHeroParallaxCaption>
  );
}

const StyledProductCard = styled(motion.div)`
  flex-shrink: 0;
  width: 30rem;
  height: 24rem;
  position: relative;
`;

export function ProductCard({ product, translate }) {
  const { title, link, thumbnail } = product;

  return (
    <StyledProductCard
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link href={link} className="block group-hover/product:shadow-2xl ">
        <Image
          imageUrl={thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          imageAlt={title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {title}
      </h2>
    </StyledProductCard>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  translate: PropTypes.any.isRequired,
};
