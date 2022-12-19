import { useEffect, useState } from "react";
import { useGameContext } from "./context/gameContext";
import Board from "./components/Board";
import DropSection from "./components/DropSection";
import GameScreen from "./components/GameScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import WinModal from "./components/WinModal";
import bgElement from "./assets/bg-element.png";
import bgElementTwo from "./assets/bg-element2.png";
import Rules from "./components/Rules";
import Menu from "./components/Menu";
import winSound from "./assets/win-sound.mp3";
import bgSound from "./assets/background-music.mp3";
import winModalSound from "./assets/game-won-sound.wav";
export const outlineColor = "#080A0C";
export const redColor = "#f92381";
export const yellowColor = "#FFF000";

const winAudio = new Audio(winSound);
const bgAudio = new Audio(bgSound);
const winModalAudio = new Audio(winModalSound);
winAudio.volume = 0.15;
winModalAudio.volume = 0.2;
bgAudio.loop = true;
bgAudio.volume = 0.1;

function App() {
  const {
    board,
    player,
    setPlayer,
    winner,
    setWinner,
    timeLimit,
    timeLeft,
    setTimeLeft,
    screen,
    moves,
    setMoves,
    setScore,
    winnerDecided,
    setWinnerDecided,
    isGameStarted,
    setIsGameStarted,
    animationComplete,
    setAnimationComplete,
    setWinnerStreak,
    setShowWinWindow,
    sound,
  } = useGameContext();

  useEffect(() => {
    bgAudio.play();
  }, []);

  useEffect(() => {
    if (!sound) {
      bgAudio.pause();
      winAudio.volume = 0;
      winModalAudio.volume = 0;
    } else {
      winAudio.volume = 0.15;
      winModalAudio.volume = 0.15;
      bgAudio.play();
    }
  }, [sound]);

  useEffect(() => {
    if (timeLeft > 0) return;
    setWinner(player === 1 ? 2 : 1);
    setTimeLeft(0);
  }, [timeLeft]);

  useEffect(() => {
    if (screen !== "game" || !isGameStarted) return;
    setTimeLeft(timeLimit);
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1000);
    }, 1000);

    if (winner != null) {
      clearInterval(interval);
      setTimeLeft(0);
    }

    return () => clearInterval(interval);
  }, [board, winner, isGameStarted]);

  useEffect(() => {
    if (winner == null || winnerDecided) return;
    setIsGameStarted(false);
    setWinnerDecided(true);
    if (sound) {
      winAudio.play();
    }
    setTimeout(() => {
      winModalAudio.play();
      setShowWinWindow(true);
      setScore((prev) => {
        return winner === 1
          ? { ...prev, red: prev.red + 1 }
          : winner === 2
          ? { ...prev, yellow: prev.yellow + 1 }
          : prev;
      });
    }, 3000);
  }, [winner]);

  useEffect(() => {
    if (!isGameStarted || !animationComplete) return;

    setMoves((prev) => prev + 1);
    if (moves === 42) {
      setWinner(3);
    }

    let winnerCheck: number | null = null;
    winnerCheck = win();
    setWinner(winnerCheck);
    setPlayer((prev) => (prev === 1 ? 2 : 1));
    setAnimationComplete(false);
  }, [animationComplete]);

  function checkHorizontal(x: number, y: number, player: number) {
    let currentPos = x;
    let horizontalStreak = 1;
    let streakArray = [{ x, y }];
    while (
      board.find((i) => i.x === currentPos - 1 && i.y === y)?.player === player
    ) {
      currentPos -= 1;
      streakArray.push({ x: currentPos, y });
      horizontalStreak += 1;
    }
    currentPos = x;
    while (
      board.find((i) => i.x === currentPos + 1 && i.x === x)?.player === player
    ) {
      currentPos += 1;
      streakArray.push({ x: currentPos, y });
      horizontalStreak += 1;
    }
    if (horizontalStreak > 3) {
      setWinnerStreak(streakArray);
    }
    return horizontalStreak;
  }

  function checkVertical(y: number, x: number, player: number) {
    let currentPos = y;
    let verticalStreak = 1;
    let streakArray = [{ x, y }];

    while (
      board.find((i) => i.y === currentPos - 1 && i.x === x)?.player === player
    ) {
      currentPos -= 1;
      streakArray.push({ x, y: currentPos });
      verticalStreak += 1;
    }
    currentPos = y;
    while (
      board.find((i) => i.y === currentPos + 1 && i.x === x)?.player === player
    ) {
      currentPos += 1;
      streakArray.push({ x, y: currentPos });

      verticalStreak += 1;
    }
    if (verticalStreak > 3) {
      setWinnerStreak(streakArray);
    }
    return verticalStreak;
  }

  function checkDiagonalRight(x: number, y: number, player: number) {
    let streak = 1;
    let streakArray = [{ x, y }];
    let currentPosY = y;
    let currentPosX = x;
    while (
      board.find((i) => i.y === currentPosY + 1 && i.x === currentPosX + 1)
        ?.player === player
    ) {
      currentPosX += 1;
      currentPosY += 1;
      streakArray.push({ x: currentPosX, y: currentPosY });
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
      streakArray.push({ x: currentPosX, y: currentPosY });

      streak += 1;
    }
    if (streak > 3) {
      setWinnerStreak(streakArray);
    }
    return streak;
  }

  function checkDiagonalLeft(x: number, y: number, player: number) {
    let streak = 1;
    let streakArray = [{ x, y }];
    let currentPosY = y;
    let currentPosX = x;
    while (
      board.find((i) => i.y === currentPosY - 1 && i.x === currentPosX + 1)
        ?.player === player
    ) {
      currentPosX += 1;
      currentPosY -= 1;
      streakArray.push({ x: currentPosX, y: currentPosY });

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
      streakArray.push({ x: currentPosX, y: currentPosY });
      streak += 1;
    }
    if (streak > 3) {
      setWinnerStreak(streakArray);
    }
    return streak;
  }

  function win() {
    let currentPlayer = null;
    board.forEach((item) => {
      const { player, x, y } = item;
      if (player == null) return;
      const vertStreak = checkVertical(y, x, player);
      const horStreak = checkHorizontal(x, y, player);
      const diagonalRightStreak = checkDiagonalRight(x, y, player);
      const diagonalLeftStreak = checkDiagonalLeft(x, y, player);
      if (
        horStreak > 3 ||
        vertStreak > 3 ||
        diagonalRightStreak > 3 ||
        diagonalLeftStreak > 3
      ) {
        currentPlayer = player;
      }
    });
    return currentPlayer;
  }

  return (
    <div className="w-screen h-screen">
      <div className="absolute z-[-1] bg-gradient-to-b from-bg-400 to-bg-500   w-full h-full"></div>
      <img
        className="absolute z-[-1] top-0 left-0 hue-rotate-180 "
        src={bgElement}
      />
      <img
        className="absolute z-[-1] top-full left-full -translate-x-full -translate-y-full hue-rotate-180  "
        src={bgElementTwo}
      />

      {screen === "welcome" ? <WelcomeScreen /> : null}
      {screen === "game" ? <GameScreen /> : null}
      <WinModal />
      <Rules />
      <Menu />
    </div>
  );
}

export default App;
