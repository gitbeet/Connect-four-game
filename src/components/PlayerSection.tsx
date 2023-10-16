import Player from "./Player";
import { motion } from "framer-motion";

const PlayerSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: "-100%" }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className="mx-auto relative w-full  px-8 top-full -translate-y-full flex justify-between items-center"
    >
      <Player player={1} />
      <Player player={2} />
    </motion.div>
  );
};

export default PlayerSection;
