interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="relative  bg-blue-400 hover:bg-blue-300 active:top-[4px] active:left-[4px] text-xl text-white tracking-wide border-[2px] border-outline  font-bold px-4 py-2 after:bg-outline after:absolute after:w-full after:h-full  after:z-[-1] after:left-2 after:top-2 after:active:top-[4px] after:active:left-[4px] before:absolute  before:w-full before:h-full before:top-0 before:left:0 before:right-0 before:bottom-0 before:border-t-2 before:border-l-2 before:border-white transition-all duration-150 w-full
   rounded-full after:rounded-full before:rounded-full
      "
    >
      {text}
    </button>
  );
};

export default Button;
