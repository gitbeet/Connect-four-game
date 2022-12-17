import { useEffect, useState } from "react";
import { useGameContext } from "./context/gameContext";
import Board from "./components/Board";
import DropSection from "./components/DropSection";
import GameScreen from "./components/GameScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import WinModal from "./components/WinModal";
import bgElement from "./assets/bg-element.png";
import bgElementTwo from "./assets/bg-element2.png";

function App() {
  const {
    board,
    setBoard,
    player,
    setPlayer,
    winner,
    setWinner,
    activePlayer,
    setActivePlayer,
    timeLimit,
    setTimeLimit,
    timeLeft,
    setTimeLeft,
    screen,
    moves,
    setMoves,
  } = useGameContext();

  useEffect(() => {
    if (timeLeft > 0) return;
    setWinner(activePlayer === 1 ? 2 : 1);
    setTimeLeft(0);
  }, [timeLeft]);

  useEffect(() => {
    if (screen !== "game") return;
    setTimeLeft(timeLimit);
    setActivePlayer((prev) => (prev === 1 ? 2 : 1));
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1000);
    }, 1000);

    if (winner != null) {
      clearInterval(interval);
      setTimeLeft(0);
    }

    return () => clearInterval(interval);
  }, [board, winner]);

  useEffect(() => {
    if (winner == null) return;
  }, [winner]);

  useEffect(() => {
    setMoves((prev) => prev + 1);
    if (moves === 42) {
      setWinner(3);
    }
    setPlayer((prev) => (prev === 1 ? 2 : 1));
    win();
  }, [board]);

  function checkHorizontal(x: number, y: number, player: number) {
    let currentPos = x;
    let horizontalStreak = 1;
    while (
      board.find((i) => i.x === currentPos - 1 && i.y === y)?.player === player
    ) {
      currentPos -= 1;
      horizontalStreak += 1;
    }
    currentPos = x;
    while (
      board.find((i) => i.x === currentPos + 1 && i.x === x)?.player === player
    ) {
      currentPos += 1;
      horizontalStreak += 1;
    }
    return horizontalStreak;
  }

  function checkVertical(y: number, x: number, player: number) {
    let currentPos = y;
    let verticalStreak = 1;
    while (
      board.find((i) => i.y === currentPos - 1 && i.x === x)?.player === player
    ) {
      currentPos -= 1;
      verticalStreak += 1;
    }
    currentPos = y;
    while (
      board.find((i) => i.y === currentPos + 1 && i.x === x)?.player === player
    ) {
      currentPos += 1;
      verticalStreak += 1;
    }
    return verticalStreak;
  }

  function checkDiagonalRight(x: number, y: number, player: number) {
    let streak = 1;
    let currentPosY = y;
    let currentPosX = x;
    while (
      board.find((i) => i.y === currentPosY + 1 && i.x === currentPosX + 1)
        ?.player === player
    ) {
      currentPosX += 1;
      currentPosY += 1;
      streak += 1;
    }
    currentPosY = y;
    currentPosX = x;
    while (
      board.find((i) => i.y === currentPosY - 1 && i.x === currentPosX - 1)
        ?.player === player
    ) {
      currentPosX -= 1;
      currentPosY -= 1;
      streak += 1;
    }
    return streak;
  }

  function checkDiagonalLeft(x: number, y: number, player: number) {
    let streak = 1;
    let currentPosY = y;
    let currentPosX = x;
    while (
      board.find((i) => i.y === currentPosY - 1 && i.x === currentPosX + 1)
        ?.player === player
    ) {
      currentPosX += 1;
      currentPosY -= 1;
      streak += 1;
    }
    currentPosY = y;
    currentPosX = x;
    while (
      board.find((i) => i.y === currentPosY + 1 && i.x === currentPosX - 1)
        ?.player === player
    ) {
      currentPosX -= 1;
      currentPosY += 1;
      streak += 1;
    }
    return streak;
  }

  function win() {
    board.forEach((item) => {
      const { player, x, y } = item;
      if (player == null) return;
      const vertStreak = checkVertical(y, x, player);
      const horStreak = checkHorizontal(x, y, player);
      const diagonalRightStreak = checkDiagonalRight(x, y, player);
      const diagonalLeftStreak = checkDiagonalLeft(x, y, player);
      console.log(`Vertical streak for item ${x},${y} is ${horStreak} `);
      console.log(`Horizontal streak for item ${x},${y} is ${vertStreak} `);
      console.log(
        `Diagonal right streak for item ${x},${y} is ${diagonalRightStreak} `
      );
      console.log(
        `Diagonal left  streak for item ${x},${y} is ${diagonalLeftStreak} `
      );
      console.log("----------------");
      if (
        horStreak > 3 ||
        vertStreak > 3 ||
        diagonalRightStreak > 3 ||
        diagonalLeftStreak > 3
      ) {
        setWinner(player);
      }
    });
  }

  return (
    <div className="w-screen h-screen">
      <div className="absolute z-[-1] bg-bg   w-full h-full"></div>
      <img className="absolute z-[-1] top-0 left-0" src={bgElement} />
      <img
        className="absolute z-[-1] top-full left-full -translate-x-full -translate-y-full"
        src={bgElementTwo}
      />

      {screen === "welcome" ? <WelcomeScreen /> : null}
      {screen === "game" ? <GameScreen /> : null}
      {winner != null ? <WinModal /> : null}
    </div>
  );
}

export default App;
