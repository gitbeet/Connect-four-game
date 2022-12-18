import { useGameContext } from "../context/gameContext";
import BoardItem from "./BoardItem";
import boardSmall from "../assets/board-sm3.png";

const Board = () => {
  const { board, player } = useGameContext();
  return (
    <div className="grid grid-cols-7 gap-[3px] p-4 w-max scale-y-[-1] ">
      {board.map((item, i) => (
        <BoardItem key={i} item={item} />
      ))}
      <img
        className="absolute bottom-[5px] left-[4px]  scale-y-[-1]"
        src={boardSmall}
        alt="board"
      />
    </div>
  );
};

export default Board;
