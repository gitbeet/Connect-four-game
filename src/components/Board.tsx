import { useGameContext } from "../context/gameContext";
import BoardItem from "./BoardItem";
import boardSmall from "../assets/board-sm.png";

const Board = () => {
  const { board } = useGameContext();
  return (
    <div className="grid grid-cols-7 gap-[3px] p-4 w-max scale-y-[-1] ">
      {board.map((item, i) => (
        <BoardItem key={i} item={item} />
      ))}
      <img
        className="absolute w-fit scale-y-[-1]"
        src={boardSmall}
        alt="board"
      />
    </div>
  );
};

export default Board;
