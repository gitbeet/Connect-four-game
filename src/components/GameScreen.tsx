import BoardSection from "./BoardSection";
import Header from "./Header";
import PlayerSection from "./PlayerSection";
import StartGame from "./StartGame";
import Timer from "./Timer";

const GameScreen = () => {
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
