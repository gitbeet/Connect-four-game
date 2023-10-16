import { useGameContext } from "../context/gameContext";
import { outlineColor, redColor, yellowColor } from "../App";
const Player = ({ player }: { player: number }) => {
  const { score } = useGameContext();
  return (
    <div className="">
      <div
        className={`${
          player === 1 ? "left-12" : "-left-12"
        } relative w-20 h-14 flex items-center bg-white border-2 border-outline  top-[4.3rem] after:absolute after:w-full after:h-full after:top-2 after:left-2 after:bg-outline after:z-[-1]`}
      >
        <h1
          className={`
         ${player === 1 ? "text-right" : "text-left"}
         px-2 w-full text-4xl font-numbers text-outline select-none `}
        >
          {player === 1 ? score.red : score.yellow}
        </h1>
      </div>
      <div
        className={`${
          player === 1 ? "left-0" : "left-full -translate-x-full"
        } relative`}
      >
        <svg
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
            fill="#080A0C"
            stroke={outlineColor}
            stroke-width="3"
          />
          <circle
            cx="40"
            cy="40"
            r="38.5"
            fill={player === 1 ? redColor : yellowColor}
            stroke={outlineColor}
            stroke-width="3"
          />
          <circle
            cx="40"
            cy="40"
            r="35.5"
            fill={player === 1 ? redColor : yellowColor}
            stroke="url(#paint0_linear_98_254)"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Player;
