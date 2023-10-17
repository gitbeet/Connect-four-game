import clickSound from "../assets/button-click.mp3";
import { useGameContext } from "../context/gameContext";
interface Props {
  text: string;
  onClick: () => void;
}

const audio = new Audio(clickSound);

const Button = ({ text, onClick }: Props) => {
  const { sound } = useGameContext();
  const click = () => {
    onClick();
    if (!sound) return;
    audio.play();
  };

  return (
    <div
      onClick={click}
      className="select-none cursor-pointer relative text-center  bg-blue-400 hover:bg-blue-300 active:top-[4px] active:left-[4px] text-xl text-white tracking-wide border-2 border-outline  font-bold px-4 py-2 after:bg-outline after:absolute after:w-full after:h-full  after:z-[-1] after:left-2 after:top-2 after:active:top-[4px] after:active:left-[4px] before:absolute  before:w-full before:h-full before:top-0 before:left:0 before:right-0 before:bottom-0 before:border-t-2 before:border-l-2 before:border-blue-200  transition-all duration-150 w-full
   rounded-full after:rounded-full before:rounded-full
      "
    >
      {text}
    </div>
  );
};

export default Button;
