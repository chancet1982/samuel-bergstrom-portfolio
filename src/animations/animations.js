/* eslint-disable import/prefer-default-export */
export const textVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  inView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/* TODO: currently not used in all images. */
export const imageVariants = {
  hidden: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
    transition: { duration: 0.9 },
  },
};

export const authorImageVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  inView: {
    opacity: 1,
    scale: 1,
  },
};

export const formElementsVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  inView: {
    opacity: 1,
    y: 0,
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  inView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
