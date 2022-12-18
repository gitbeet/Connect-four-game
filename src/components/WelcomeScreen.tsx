import { useGameContext } from "../context/gameContext";
import Button from "./Button";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      bounce: 0.4,
      staggerChildren: 0.25,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  transition: {
    duration: 0.3,
    type: "spring",
    bounce: 0.2,
  },
};

const WelcomeScreen = () => {
  const { setScreen, setShowRulesWindow } = useGameContext();
  return (
    <div className="absolute  z-20 w-full px-12 h-full flex flex-col justify-center items-center space-y-32 -mt-24">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.5,
          type: "spring",
          stiffness: 550,
        }}
        className="w-full  h-32 flex flex-col justify-center items-center "
      >
        <div className="relative text-center w-full">
          <h1 className="absolute z-10 top-0 bottom-0 left-0 right-0  text-6xl text-white font-black">
            Connect <span className="font-numbers text-7xl">4</span>
          </h1>
          <h1 className="absolute z-0 top-[6px] bottom-0 left-[6px] right-0  text-6xl text-outline font-black">
            Connect <span className="font-numbers text-7xl">4</span>
          </h1>
        </div>
      </motion.div>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, staggerChildren: 0.2 }}
        className="flex flex-col justify-stretch items-stretch space-y-6 w-full"
      >
        <motion.div variants={childrenVariants} className="w-full">
          <Button text="Start Game" onClick={() => setScreen("game")} />
        </motion.div>
        <motion.div className="w-full" variants={childrenVariants}>
          <Button text="Menu" onClick={() => {}} />
        </motion.div>
        <motion.div className="w-full" variants={childrenVariants}>
          <Button text="Rules" onClick={() => setShowRulesWindow(true)} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
