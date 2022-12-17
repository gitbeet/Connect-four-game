import Arrow from "./Arrow";
import Board from "./Board";
import DropSection from "./DropSection";
import { motion } from "framer-motion";

const BoardSection = () => {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3, type: "spring", bounce: 0.4 }}
      style={{ translateY: "-50%", translateX: "-50%" }}
      className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-2"
    >
      <div className="grid grid-cols-7 gap-2 p-2 w-full">
        <Arrow />
        <DropSection />
      </div>
      <Board />
    </motion.div>
  );
};

export default BoardSection;
