import { useGameContext } from "../context/gameContext";
import { motion, AnimatePresence } from "framer-motion";
import { modalVariants } from "../variants";
import Backdrop from "./Backdrop";

const StartGame = () => {
  const { setIsGameStarted, isGameStarted, winnerDecided } = useGameContext();
  return (
    <AnimatePresence>
      {!isGameStarted && !winnerDecided ? (
        <>
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="close"
            className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[40]
w-[min(90%,400px)]"
          >
            <div
              onClick={() => setIsGameStarted(true)}
              className="bg-blue-400 hover:bg-blue-300 select-none cursor-pointer text-white border-[3px] border-outline text-4xl text-center font-numbers  px-8 py-6  after:bg-outline after:absolute after:w-full after:h-full after:top-2 after:left-2 after:z-[-1] transition-all duration-150  before:border-t-2 before:border-l-2 before:border-white before:absolute before:top-[3px] before:left-[3px] before:right-[3px] before:bottom-[3px]"
            >
              {/* <Button text="Press To Start" onClick={() => setIsGameStarted(true)} /> */}
              Press to start
            </div>
          </motion.div>
          <Backdrop />
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default StartGame;
