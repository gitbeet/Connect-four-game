import BoardSection from "./BoardSection";
import Header from "./Header";
import Player from "./Player";
import PlayerSection from "./PlayerSection";
import Timer from "./Timer";

const GameScreen = () => {
  return (
    <>
      <Header />
      <Timer />
      <BoardSection />
      <PlayerSection />
    </>
  );
};

export default GameScreen;
