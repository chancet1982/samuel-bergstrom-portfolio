/* eslint-disable import/prefer-default-export */
export const transition = {
  type: "tween",
  duration: 0.6,
  ease: [0.44, 0, 0.56, 1],
};

export const variants = {
  inView: {
    opacity: 1,
    y: 0,
    transition,
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};
