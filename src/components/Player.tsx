import { useGameContext } from "../context/gameContext";
import { outlineColor, redColor, yellowColor } from "../App";
const Player = ({ player }: { player: number }) => {
  const { score } = useGameContext();
  return (
    <div>
      <div
        className={`${
          player === 1 ? "left-2" : "-left-2"
        } relative w-20 h-14 flex items-center bg-white border-2 border-outline  top-[4.3rem] after:absolute after:w-full after:h-full after:top-2 after:left-2 after:bg-outline after:z-[-1]`}
      >
        <h1
          className={`
         ${player === 1 ? "text-right" : "text-left"}
         px-2 w-full text-4xl font-numbers text-outline`}
        >
          {player === 1 ? score.red : score.yellow}
        </h1>
      </div>
      <svg
        className={`${
          player === 1 ? "left-0" : "left-full"
        } relative -translate-x-1/2`}
        width="86"
        height="85"
        viewBox="0 0 86 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="46"
          cy="45"
          r="38.5"
          fill={outlineColor}
          stroke={outlineColor}
          strokeWidth="3"
        />
        <circle
          cx="40"
          cy="40"
          r="38.5"
          fill={player === 1 ? redColor : yellowColor}
          stroke={outlineColor}
          strokeWidth="3"
        />
        {/* <circle cx="20" cy="21" r="7" fill="white" /> */}
      </svg>
    </div>
  );
};

export default Player;
