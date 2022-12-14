import { useGameContext } from "../context/gameContext";

const DropSectionElement = ({ columnNumber }: { columnNumber: number }) => {
  const { add } = useGameContext();
  return (
    <button
      onClick={() => add(columnNumber)}
      className="bg-red-400 text-white w-full"
    >
      col1
    </button>
  );
};

export default DropSectionElement;
