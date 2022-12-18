import { useGameContext } from "../context/gameContext";
import Backdrop from "./Backdrop";
import Button from "./Button";

const StartGame = () => {
  const { setIsGameStarted } = useGameContext();
  return (
    <>
      <div
        className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[40]
w-[min(90%,400px)]"
      >
        <div
          onClick={() => setIsGameStarted(true)}
          className="bg-blue-400 hover:bg-blue-300 select-none cursor-pointer text-white border-[3px] border-outline text-4xl text-center font-numbers  px-8 py-6  after:bg-outline after:absolute after:w-full after:h-full after:top-2 after:left-2 after:z-[-1] transition-all duration-150"
        >
          {/* <Button text="Press To Start" onClick={() => setIsGameStarted(true)} /> */}
          Press to start
        </div>
      </div>
      <Backdrop />
    </>
  );
};

export default StartGame;
