import { useGameContext } from "../context/gameContext";
import Backdrop from "./Backdrop";
import Button from "./Button";
import { modalVariants } from "../variants";
import { motion, AnimatePresence } from "framer-motion";

const Rules = () => {
  const { setShowRulesWindow, showRulesWindow } = useGameContext();
  return (
    <AnimatePresence>
      {showRulesWindow ? (
        <>
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="close"
            transition={{ type: "spring", duration: 0.3 }}
            className="absolute w-[min(90%,450px)] z-[40] top-1/2 left-1/2"
          >
            <div className="relative w-full space-y-8 bg-white p-10  border-4 after:absolute  after:bg-outline after:w-full after:h-full after:top-4 after:left-4 after:z-[-1] ">
              <div className="space-y-4">
                <header className="font-numbers text-xl">Objective</header>
                <p className="font-numbers opacity-75">
                  The objective of the game Connect Four is to be the first
                  player to get four of one's own discs of the same color lined
                  up horizontally, vertically, or diagonally. The player who
                  accomplishes this wins the game. If the grid is completely
                  filled with discs and no player has won, the game is a draw.
                </p>
              </div>
              <div>
                <div className="relative z-[10]">
                  <Button
                    text="Close"
                    onClick={() => setShowRulesWindow(false)}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <Backdrop />
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Rules;
