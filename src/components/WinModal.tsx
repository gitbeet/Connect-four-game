import { useGameContext } from "../context/gameContext";
import Button from "./Button";

const WinModal = () => {
  const { winner, setScreen, setWinner, resetGameState } = useGameContext();

  const exit = () => {
    setScreen("welcome");
    resetGameState();
  };

  const restart = () => {
    resetGameState();
  };

  return (
    <>
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max space-y-16 bg-white p-12 rounded-md shadow-lg ">
        {winner === 1 || winner === 2 ? (
          <div className="text-center">
            {" "}
            <h1 className="text-4xl text-outline">Player {winner} wins!</h1>
          </div>
        ) : (
          <h1>It's a tie!</h1>
        )}
        <div className="flex flex-col space-y-4">
          <Button text="Play Again" onClick={() => restart()} />
          <Button text="Exit" onClick={() => exit()} />
        </div>
      </div>
      <div className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-outline opacity-25"></div>
    </>
  );
};

export default WinModal;
