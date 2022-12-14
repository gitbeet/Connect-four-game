import { useEffect, useState } from "react";
import { useGameContext } from "../context/gameContext";
import Arrow from "./Arrow";
import Board from "./Board";
import DropSection from "./DropSection";

const GameScreen = () => {
  const { timeLeft } = useGameContext();

  return (
    <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="grid grid-cols-7 gap-2 p-2 w-full">
        <Arrow />
        <DropSection />
      </div>
      <Board />
      <h1>{timeLeft / 1000}</h1>
    </div>
  );
};

export default GameScreen;
