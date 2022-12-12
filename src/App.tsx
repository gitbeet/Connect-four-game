import { useEffect, useState } from "react";

function generateBoard(): BoardItemInterface[] {
  let board = [];
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 7; j++) {
      board.push({ x: i, y: j, player: null });
    }
  }
  return board;
}

interface BoardItemInterface {
  x: number;
  y: number;
  player: number | null;
}

function App() {
  const [board, setBoard] = useState<BoardItemInterface[]>(generateBoard());
  const [player, setPlayer] = useState<number>(1);
  const [winner, setWinner] = useState<number | null>(null);

  useEffect(() => {
    if (winner == null) return;
    alert(`Player ${winner} has won!`);
  }, [winner]);

  useEffect(() => {
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
    console.log(board);
  };

  return (
    <div className="w-full h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 w-max">
        <div className="grid grid-cols-7 gap-2 p-2 w-full">
          <button onClick={() => add(1)} className="bg-red-400 text-white">
            col1
          </button>
          <button onClick={() => add(2)} className="bg-red-400 text-white">
            col2
          </button>
          <button onClick={() => add(3)} className="bg-red-400 text-white">
            col3
          </button>
          <button onClick={() => add(4)} className="bg-red-400 text-white">
            col4
          </button>
          <button onClick={() => add(5)} className="bg-red-400 text-white">
            col5
          </button>
          <button onClick={() => add(6)} className="bg-red-400 text-white">
            col6
          </button>
          <button onClick={() => add(7)} className="bg-red-400 text-white">
            col7
          </button>
        </div>
        <div className="grid grid-cols-7 bg-gray-600 gap-6 p-4 w-max scale-y-[-1]">
          {board.map((item) => (
            <div
              key={item.x.toString() + item.y.toString()}
              className={`
                ${
                  item.player === 1
                    ? "bg-red-400 "
                    : item.player === 2
                    ? "bg-yellow-200 "
                    : "bg-white"
                }
                 w-12 h-12 rounded-full flex justify-center items-center
              `}
            >
              <p className="scale-y-[-1]">
                {item.x},{item.y}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
