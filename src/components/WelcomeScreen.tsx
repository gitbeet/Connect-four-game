import { useGameContext } from "../context/gameContext";
import Button from "./Button";

const WelcomeScreen = () => {
  const { setScreen } = useGameContext();
  return (
    <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-12">
      <h1 className="text-3xl font-black">Connect four</h1>
      <div className="flex flex-col space-y-4">
        <Button text="Start Game" onClick={() => setScreen("game")} />
        <Button text="Settings" onClick={() => {}} />
      </div>
    </div>
  );
};

export default WelcomeScreen;
