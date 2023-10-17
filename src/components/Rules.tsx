import { useGameContext } from "../context/gameContext";
import Backdrop from "./Backdrop";
import Button from "./Button";
import { modalVariants } from "../variants";
import { motion, AnimatePresence } from "framer-motion";

const Rules = () => {
  const { setShowRulesWindow, showRulesWindow, language } = useGameContext();
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
            <div className="relative w-full space-y-12 bg-white p-10  border-4 border-outline after:absolute  after:bg-outline after:w-full after:h-full after:top-4 after:left-4 after:z-[-1] ">
              <div className="space-y-8">
                <header className="font-numbers text-2xl text-center">
                  {language === "English" ? "Objective" : "Objetivo"}
                </header>
                <p className="font-rules text-lg">
                  {language === "English"
                    ? `The objective of the game Connect Four is to be the first
                  player to get four of one's own discs of the same color lined
                  up horizontally, vertically, or diagonally. The player who
                  accomplishes this wins the game. If the grid is completely
                  filled with discs and no player has won, the game is a draw.`
                    : `El objetivo del juego Connect Four es ser el primero
                  jugador para obtener cuatro de sus propios discos del mismo color alineados
                  hacia arriba en forma horizontal, vertical o diagonal. el jugador que
                  logra esto gana el juego. Si la rejilla está completamente
                  lleno de discos y ningún jugador ha ganado, el juego es un empate.

`}
                </p>
              </div>
              <div>
                <div className="relative z-[10]">
                  <Button
                    text={language === "English" ? "Close" : "Cerrar"}
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
