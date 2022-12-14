import { useGameContext } from "../context/gameContext";
import Button from "./Button";

const WinModal = () => {
  const { winner, setScreen, setWinner, resetGameState } = useGameContext();

  const exit = () => {
    setScreen("welcome");
    resetGameState();
  };

  return (
    <>
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max bg-white p-8">
        <h1>Player {winner}</h1>
        <h1>WINS</h1>
        <Button text="Play Again" onClick={() => {}} />
        <Button text="Exit" onClick={() => exit()} />
      </div>
      <div className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-black opacity-25"></div>
    </>
  );
};

export default WinModal;
