import { useGameContext } from "../context/gameContext";
import Backdrop from "./Backdrop";
import Button from "./Button";

const WinModal = () => {
  const {
    winner,
    setScreen,
    setScore,
    resetGameState,
    winnerStreak,
    setShowWinWindow,
  } = useGameContext();

  const playAgain = () => {
    resetGameState();
    setShowWinWindow(false);
  };

  const exit = () => {
    setScreen("welcome");
    setScore({ red: 0, yellow: 0 });
    resetGameState();
  };

  return (
    <>
      <div className="absolute z-[40] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-max space-y-8 bg-white p-10  shadow-lg border-4 after:absolute  after:bg-outline after:w-full after:h-full after:top-4 after:left-4 after:z-[-1] ">
          {winner === 1 || winner === 2 ? (
            <div className="text-center">
              <h1 className="text-2xl text-outline font-numbers">
                Player <span className="font-numbers">{winner}</span> wins!
              </h1>
            </div>
          ) : (
            <h1>It's a tie!</h1>
          )}
          <div className="relative z-[10]  flex flex-col space-y-4">
            <Button text="Play Again" onClick={() => playAgain()} />
            {/* <Button text="Exit" onClick={() => exit()} /> */}
          </div>
        </div>
      </div>
      <Backdrop />
    </>
  );
};

export default WinModal;
