import { useGameContext } from "../context/gameContext";
import { outlineColor, redColor, yellowColor } from "../App";
const Player = ({ player }: { player: number }) => {
  const { score } = useGameContext();
  return (
    <div className="relative">
      <div className="absolute w-20 h-14 top-1/2 -translate-y-1/2 ">
        <div
          className={`${
            player === 1 ? "left-12" : "-left-12"
          } absolute w-full h-full flex items-center bg-white border-2 border-outline z-10`}
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
            player === 1 ? "left-14" : "-left-10"
          } absolute w-full h-full top-2 left-2 bg-outline`}
        ></div>
      </div>

      <div
        className={`${
          player === 1 ? "left-0" : "left-full -translate-x-full "
        } relative `}
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
            fill={outlineColor}
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
