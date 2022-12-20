import { motion } from "framer-motion";
import { useState } from "react";
import clickSound from "../assets/button-click-arrow.mp3";
import { useGameContext } from "../context/gameContext";

interface Props {
  direction: string;
  onClick: () => void;
  disabled: boolean;
}

const audio = new Audio(clickSound);

const ArrowMenu = ({ direction, onClick, disabled }: Props) => {
  const { sound } = useGameContext();
  const [clicked, setClicked] = useState(false);
  const click = () => {
    onClick();
    setClicked((prev) => !prev);
    if (!sound) return;
    audio.play();
  };
  return (
    <div
      onClick={() => click()}
      className={`${
        disabled ? "opacity-50 pointer-events-none " : ""
      } relative  w-8 h-8  select-none  cursor-pointer`}
    >
      <motion.svg
        key={clicked ? 1 : 0}
        initial={{ x: 0, y: 0 }}
        animate={{ x: -3, y: -3 }}
        style={{ scaleX: direction === "right" ? -1 : 1 }}
        className="w-full absolute z-[10]"
        width="32"
        height="32"
        viewBox="0 0 154 207"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100.328 197.201L103.51 200.383L106.692 197.201L143.484 160.409L146.666 157.227L143.484 154.045L92.9561 103.517L143.491 52.9816L146.673 49.7996L143.491 46.6176L106.692 9.81802L103.51 6.63604L100.328 9.81802L9.818 100.328L6.63602 103.51L9.818 106.692L100.328 197.201Z"
          fill="#00afce"
          stroke="black"
          stroke-width="9"
        />
      </motion.svg>
      <svg
        className={`
         ${
           direction === "right" ? "scale-x-[-1]" : ""
         } w-full absolute top-[1px] left-[1px]`}
        width="32"
        height="32"
        viewBox="0 0 154 207"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100.328 197.201L103.51 200.383L106.692 197.201L143.484 160.409L146.666 157.227L143.484 154.045L92.9561 103.517L143.491 52.9816L146.673 49.7996L143.491 46.6176L106.692 9.81802L103.51 6.63604L100.328 9.81802L9.818 100.328L6.63602 103.51L9.818 106.692L100.328 197.201Z"
          fill="black"
          stroke="black"
          stroke-width="9"
        />
      </svg>
    </div>
  );
};

export default ArrowMenu;
