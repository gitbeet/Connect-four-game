import { motion, AnimatePresence } from "framer-motion";
import { backdropVariants } from "../variants";

const Backdrop = () => {
  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="close"
      className="fixed z-[30] top-0 left-0 right-0 bottom-0 bg-white"
    ></motion.div>
  );
};

export default Backdrop;
