import { useGameContext } from "../context/gameContext";

const DropSectionElement = ({ columnNumber }: { columnNumber: number }) => {
  const { add, animationComplete, addButtonDisabled, isGameStarted } =
    useGameContext();
  return (
    <div
      onClick={() => add(columnNumber)}
      className={` ${
        addButtonDisabled || !isGameStarted ? "pointer-events-none " : " "
      } bg-red-400 text-white w-full select-none`}
    >
      col1
    </div>
  );
};

export default DropSectionElement;
