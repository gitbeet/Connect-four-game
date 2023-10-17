import BoardSection from "./BoardSection";
import Header from "./Header";
import PlayerSection from "./PlayerSection";
import StartGame from "./StartGame";
import Timer from "./Timer";

const GameScreen = () => {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto h-[max(90dvh,700px)] md:p-24;">
      <StartGame />
      <Header />
      <Timer />
      <BoardSection />
      <PlayerSection />
    </div>
  );
};

export default GameScreen;
