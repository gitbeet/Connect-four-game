import { useGameContext } from "../context/gameContext";

const Player = ({ player }: { player: number }) => {
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
         px-2 w-full text-4xl`}
        >
          3
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
          fill="#080A0C"
          stroke="black"
          stroke-width="3"
        />
        <circle
          cx="40"
          cy="40"
          r="38.5"
          fill={player === 1 ? "#FF1F74" : "#FFF000"}
          stroke="black"
          stroke-width="3"
        />
        <circle cx="20" cy="21" r="6.5" fill="white" stroke="black" />
      </svg>
    </div>
  );
};

export default Player;
