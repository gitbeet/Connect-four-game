import { useGameContext } from "../context/gameContext";
import DropSectionElement from "./DropSectionElement";

const DropSection = () => {
  const arr = [...Array(7).keys()];
  return (
    <div className="absolute z-10 w-full h-[calc(100%+6rem)] flex opacity-0 top-screen left-0 right-0 bottom-0">
      {arr.map((section) => (
        <DropSectionElement columnNumber={section + 1} />
      ))}
    </div>
  );
};

export default DropSection;
