import { BoardItemInterface, useGameContext } from "../context/gameContext";
import { motion } from "framer-motion";

interface Props {
  item: BoardItemInterface;
}

const BoardItem = ({ item }: Props) => {
  const {
    setAnimationComplete,
    setAnimationStarted,
    setAddButtonDisabled,
    winner,
    winnerStreak,
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
        scaleY: [1, 1.05, 1.05, 1.05, 1],

        scaleX: [1, 1.1, 0, 1.1, 1],
        transition: {
          type: "tween",
          duration: 0.6,

          ease: "easeInOut",
        },
      }}
      key={item.x.toString() + item.y.toString()}
      className={`${
        item.player === 1 ? "bg-red" : "bg-yellow"
      } absolute top-0 bottom-0 left-0 right-0 border-2  rounded-full flex justify-center items-center 
 border-white`}
    ></motion.div>
  ) : (
    <motion.div
      initial={{ y: 270 - (item.x - 1) * 55 }}
      animate={{ y: 0 }}
      onAnimationStart={() => setAnimationStarted((prev) => !prev)}
      onAnimationComplete={() => {
        setAnimationComplete(true);
        setAddButtonDisabled(false);
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
