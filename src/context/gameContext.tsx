import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface WinnerStreakInterface {
  x: number;
  y: number;
}

export interface BoardItemInterface {
  x: number;
  y: number;
  player: number | null;
}

interface Props {
  children: ReactNode;
}

interface GameContextInterface {
  board: BoardItemInterface[];
  setBoard: React.Dispatch<React.SetStateAction<BoardItemInterface[]>>;
  player: number;
  setPlayer: React.Dispatch<React.SetStateAction<number>>;
  winner: number | null;
  setWinner: React.Dispatch<React.SetStateAction<number | null>>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  timeLimit: number;
  setTimeLimit: React.Dispatch<React.SetStateAction<number>>;
  screen: string;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  moves: number;
  setMoves: React.Dispatch<React.SetStateAction<number>>;
  add: (val: number) => void;
  resetGameState: () => void;
  score: {
    red: number;
    yellow: number;
  };
  setScore: React.Dispatch<
    React.SetStateAction<{
      red: number;
      yellow: number;
    }>
  >;
  winnerDecided: boolean;
  setWinnerDecided: React.Dispatch<React.SetStateAction<boolean>>;
  showRulesWindow: boolean;
  setShowRulesWindow: React.Dispatch<React.SetStateAction<boolean>>;
  showWinWindow: boolean;
  setShowWinWindow: React.Dispatch<React.SetStateAction<boolean>>;
  isGameStarted: boolean;
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  animationStarted: boolean;
  setAnimationStarted: React.Dispatch<React.SetStateAction<boolean>>;
  animationComplete: boolean;
  setAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
  winnerStreak: WinnerStreakInterface[];
  setWinnerStreak: React.Dispatch<
    React.SetStateAction<WinnerStreakInterface[]>
  >;
  addButtonDisabled: boolean;
  setAddButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const gameContext = createContext<GameContextInterface | null>(null);

export const useGameContext = () => {
  const context = useContext(gameContext);
  if (!context) throw new Error("Game context was not found.");
  return context;
};

function generateBoard(): BoardItemInterface[] {
  let board = [];
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 7; j++) {
      board.push({ x: i, y: j, player: null });
    }
  }
  return board;
}

const GameContextProvider = ({ children }: Props) => {
  const [showRulesWindow, setShowRulesWindow] = useState(false);
  const [showWinWindow, setShowWinWindow] = useState(false);
  const [board, setBoard] = useState<BoardItemInterface[]>(generateBoard());
  const [screen, setScreen] = useState("welcome");
  const [player, setPlayer] = useState<number>(1);
  const [winner, setWinner] = useState<number | null>(null);
  const [timeLimit, setTimeLimit] = useState(60000);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState({ red: 0, yellow: 0 });
  const [winnerDecided, setWinnerDecided] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [winnerStreak, setWinnerStreak] = useState<WinnerStreakInterface[]>([]);
  const [addButtonDisabled, setAddButtonDisabled] = useState(false);

  const add = (col: number) => {
    setAddButtonDisabled(true);
    // if (!animationComplete) return;
    let tempBoard = [...board];
    let index = tempBoard.findIndex(
      (item) => item.y === col && item.player == null
    );
    if (index === -1) {
      console.log("Column is full");
      return;
    }
    tempBoard[index].player = player;
    setBoard(tempBoard);
  };

  const resetGameState = () => {
    setBoard(generateBoard());
    setPlayer(1);
    setWinner(null);
    setWinnerDecided(false);
    setTimeLimit(timeLimit);
    setTimeLeft(timeLimit);
    setMoves(0);
    setWinnerStreak([]);
  };

  return (
    <gameContext.Provider
      value={{
        board,
        setBoard,
        player,
        setPlayer,
        winner,
        setWinner,
        timeLeft,
        setTimeLeft,
        timeLimit,
        setTimeLimit,
        screen,
        setScreen,
        moves,
        setMoves,
        add,
        resetGameState,
        score,
        setScore,
        winnerDecided,
        setWinnerDecided,
        showRulesWindow,
        setShowRulesWindow,
        isGameStarted,
        animationStarted,
        setAnimationStarted,
        setIsGameStarted,
        animationComplete,
        setAnimationComplete,
        winnerStreak,
        setWinnerStreak,
        addButtonDisabled,
        setAddButtonDisabled,
        showWinWindow,
        setShowWinWindow,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
