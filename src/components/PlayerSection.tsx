import Player from "./Player";
import { motion } from "framer-motion";

const PlayerSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className="absolute w-full px-16 bottom-12 flex justify-between"
    >
      <Player player={1} />
      <Player player={2} />
    </motion.div>
  );
};

export default PlayerSection;
