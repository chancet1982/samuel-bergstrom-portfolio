/* eslint-disable import/prefer-default-export */
export const textVariants = {
  inView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};

export const imageVariants = {
  inView: {
    opacity: 1,
    transition: { delay: 0.9, duration: 0.9 },
  },
  hidden: {
    opacity: 0,
  },
};
