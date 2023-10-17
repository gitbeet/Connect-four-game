import { useGameContext } from "../context/gameContext";
import Backdrop from "./Backdrop";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { modalVariants } from "../variants";
const WinModal = () => {
  const {
    winner,
    setScreen,
    setScore,
    resetGameState,
    showWinWindow,
    setShowWinWindow,
    language,
  } = useGameContext();

  const playAgain = () => {
    resetGameState();
    setShowWinWindow(false);
  };

  const exit = () => {
    setShowWinWindow(false);
    setScreen("welcome");
    setScore({ red: 0, yellow: 0 });
    resetGameState();
  };

  return (
    <AnimatePresence>
      {showWinWindow ? (
        <>
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="close"
            transition={{ type: "spring", duration: 0.2 }}
            className="absolute z-[40] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,450px)] px-6"
          >
            <div className="relative  space-y-12 bg-white py-14 px-8  border-4 border-outline after:absolute  after:bg-outline after:w-full after:h-full after:top-4 after:left-4 after:z-[-1] ">
              {winner === 1 || winner === 2 ? (
                <div className="text-center">
                  <h1 className="text-2xl text-outline font-numbers">
                    {language === "English" ? (
                      <>
                        Player <span className="font-numbers">{winner}</span>{" "}
                        wins!
                      </>
                    ) : (
                      <>
                        Jugador <span className="font-numbers">{winner}</span>{" "}
                        gana!
                      </>
                    )}
                  </h1>
                </div>
              ) : (
                <h1>It's a tie!</h1>
              )}
              <div className="relative z-[10]  flex flex-col space-y-6">
                <Button
                  text={
                    language === "English" ? "Play Again" : "Juega de Nuevo"
                  }
                  onClick={() => playAgain()}
                />
                <Button
                  text={language === "English" ? "Exit" : "Salir"}
                  onClick={() => exit()}
                />
              </div>
            </div>
          </motion.div>
          <Backdrop />
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default WinModal;
