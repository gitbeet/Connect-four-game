import { useGameContext } from "../context/gameContext";
import Button from "./Button";
import Logo from "./Logo";

const WelcomeScreen = () => {
  const { setScreen } = useGameContext();
  return (
    <div className="absolute z-20 w-full h-full flex flex-col justify-center items-center space-y-24">
      <div className="w-full  h-32 flex flex-col justify-center items-center ">
        <div className="relative text-center w-full">
          <h1 className="absolute z-10 top-0 bottom-0 left-0 right-0  text-6xl text-white font-black">
            Connect
          </h1>
          <h1 className="absolute z-0 top-[6px] bottom-0 left-[6px] right-0  text-6xl text-outline font-black">
            Connect
          </h1>
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <Button text="Start Game" onClick={() => setScreen("game")} />
        <Button text="Settings" onClick={() => {}} />
      </div>
    </div>
  );
};

export default WelcomeScreen;
