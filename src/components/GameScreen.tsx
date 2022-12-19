import { useGameContext } from "../context/gameContext";
import BoardSection from "./BoardSection";
import Button from "./Button";
import Header from "./Header";
import Player from "./Player";
import PlayerSection from "./PlayerSection";
import StartGame from "./StartGame";
import Timer from "./Timer";

const GameScreen = () => {
  const { setIsGameStarted, isGameStarted, winnerDecided, showWinWindow } =
    useGameContext();
  return (
    <>
      <StartGame />
      <Header />
      <Timer />
      <BoardSection />
      <PlayerSection />
    </>
  );
};

export default GameScreen;
