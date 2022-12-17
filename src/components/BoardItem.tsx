import { BoardItemInterface } from "../context/gameContext";
import { motion } from "framer-motion";

interface Props {
  item: BoardItemInterface;
}

const BoardItem = ({ item }: Props) => {
  const emptyItemContent = (
    <div
      // initial={{ y: 330 - (item.x - 1) * 78 }}
      // animate={{ y: 0 }}
      // transition={{
      //   duration: 0.9 - item.x * 0.1,
      //   type: "spring",
      //   mass: 0.4,
      // }}
      key={item.x.toString() + item.y.toString()}
      className="
absolute top-0 bottom-0 left-0 right-0   rounded-full flex justify-center items-center
"
    ></div>
  );

  const fullItemContent = (
    <motion.div
      initial={{ y: 270 - (item.x - 1) * 55 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1.4 - item.x * 0.1,
        type: "spring",
        mass: 0.37,
      }}
      key={item.x.toString() + item.y.toString()}
      className={`
${item.player === 1 ? "bg-red " : item.player === 2 ? "bg-yellow " : " "}
absolute top-0 bottom-0 left-0 right-0 border-2  rounded-full flex justify-center items-center after:absolute after:w-2 after:h-2 after:border-[1px] after:border-outline  after:bg-white after:rounded-full after:bottom-2 after:left-[6px] after after:z-[1]
`}
    ></motion.div>
  );

  return (
    <div className="relative w-[37px] h-[37px] rounded-full flex justify-center items-center">
      {item.player == null ? emptyItemContent : fullItemContent}
    </div>
  );
};

export default BoardItem;
