export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    translateX: "-50%",
    translateY: "-50%",
  },
  visible: {
    opacity: 1,
    scale: [1, 1.1, 1],
    translateX: "-50%",
    translateY: "-50%",
    transition: { type: "spring", duration: 0.3 },
  },
  close: {
    scale: [1, 1.1, 0],
    translateX: "-50%",
    translateY: "-50%",
    transition: { type: "spring", duration: 0.3 },
  },
};

export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.4 },
  close: { opacity: 0 },
};
