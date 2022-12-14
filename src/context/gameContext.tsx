import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
  activePlayer: number;
  setActivePlayer: React.Dispatch<React.SetStateAction<number>>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  timeLimit: number;
  setTimeLimit: React.Dispatch<React.SetStateAction<number>>;
  screen: string;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  add: (val: number) => void;
  resetGameState: () => void;
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
  const [board, setBoard] = useState<BoardItemInterface[]>(generateBoard());
  const [screen, setScreen] = useState("welcome");
  const [player, setPlayer] = useState<number>(1);
  const [winner, setWinner] = useState<number | null>(null);
  const [activePlayer, setActivePlayer] = useState(1);
  const [timeLimit, setTimeLimit] = useState(30000);
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  const add = (col: number) => {
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
    setActivePlayer(1);
    setTimeLimit(30000);
    setTimeLeft(timeLimit);
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
        activePlayer,
        setActivePlayer,
        timeLeft,
        setTimeLeft,
        timeLimit,
        setTimeLimit,
        screen,
        setScreen,
        add,
        resetGameState,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
