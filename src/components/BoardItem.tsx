import { BoardItemInterface, useGameContext } from "../context/gameContext";
import { motion } from "framer-motion";
import dropSound from "../assets/button-click-arrow2.mp3";
interface Props {
  item: BoardItemInterface;
}

const audio = new Audio(dropSound);

const BoardItem = ({ item }: Props) => {
  const {
    setAnimationComplete,
    setAnimationStarted,
    setAddButtonDisabled,
    winnerStreak,
    sound,
  } = useGameContext();

  let isWinner =
    winnerStreak.findIndex((i) => i.x === item.x && i.y === item.y) !== -1;

  const emptyItemContent = (
    <div
      key={item.x.toString() + item.y.toString()}
      className="
absolute top-0 bottom-0 left-0 right-0   rounded-full flex justify-center items-center
"
    ></div>
  );

  const fullItemContent = isWinner ? (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        zIndex: 100,
        scaleY: [1.05, 1.05, 1.05, 1.05, 1.05],

        scaleX: [1.05, 1.2, 0, 1.2, 1.05],
        transition: {
          type: "tween",
          duration: 1.2,
          // repeat: 1,
          ease: "easeInOut",
        },
      }}
      key={item.x.toString() + item.y.toString()}
      className={`${
        item.player === 1 ? "bg-red shadow-red" : "bg-yellow shadow-yellow"
      } absolute top-0 bottom-0 left-0 right-0 border border-white  rounded-full flex justify-center items-center 
 shadow-lg bg-blend-hard-light
  `}
    ></motion.div>
  ) : (
    <motion.div
      initial={{ y: 270 - (item.x - 1) * 55 }}
      animate={{ y: 0 }}
      onAnimationStart={() => setAnimationStarted((prev) => !prev)}
      onAnimationComplete={() => {
        setAnimationComplete(true);
        setAddButtonDisabled(false);
        if (!sound) return;
        audio.play();
      }}
      transition={{
        duration: 0.4 - item.x * 0.05,
      }}
      key={item.x.toString() + item.y.toString()}
      className={`
${item.player === 1 ? " bg-red  " : item.player === 2 ? " bg-yellow  " : " "}
absolute top-0 bottom-0 left-0 right-0 border-2  rounded-full flex justify-center items-center 
`}
    ></motion.div>
  );

  return (
    <div className="relative w-[40px] h-[40px] rounded-full flex justify-center items-center">
      {item.player == null ? emptyItemContent : fullItemContent}
    </div>
  );
};

export default BoardItem;
