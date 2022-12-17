import { useGameContext } from "../context/gameContext";
import { motion, AnimatePresence } from "framer-motion";

const Timer = () => {
  const { timeLeft, player } = useGameContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.4 }}
      className="mt-4 flex w-full justify-center items-center"
    >
      {" "}
      <motion.div
        key={player}
        className={`${timeLeft < 15000 ? " text-outline " : "text-outline "} ${
          player === 1 ? "bg-white" : "bg-white"
        }  flex justify-center items-center relative text-5xl border-[3px] border-outline w-[5rem] h-[5rem] after:absolute after:w-full after:h-full after:top-3 after:left-3 after:bg-outline after:z-[-1] before:absolute before:w-full before:h-full before:border-t-2 before:border-l-2 before:border-white`}
      >
        <AnimatePresence mode="wait">
          <motion.h1
            className="text-outline font-numbers"
            key={timeLeft}
            initial={timeLeft > 9000 ? { opacity: 0 } : { y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {timeLeft / 1000}
          </motion.h1>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Timer;
