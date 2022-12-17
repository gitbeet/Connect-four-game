import { useGameContext } from "../context/gameContext";
import DropSectionElement from "./DropSectionElement";

const DropSection = () => {
  const arr = [...Array(7).keys()];
  return (
    // afjusting the cols to fit the board png
    <div className="absolute z-10 w-[93%] h-[calc(100%+6rem)] flex opacity-0 top-screen left-2 right-0 bottom-0">
      {arr.map((section) => (
        <DropSectionElement key={section} columnNumber={section + 1} />
      ))}
    </div>
  );
};

export default DropSection;
