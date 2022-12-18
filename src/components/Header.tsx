import Button from "./Button";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useGameContext } from "../context/gameContext";

const Header = () => {
  const { winner, player, moves, winnerStreak, showWinWindow } =
    useGameContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className="flex justify-between items-center px-8 py-4"
    >
      <div className="scale-125">
        <Logo />
      </div>
      <div>
        <Button text="Menu" onClick={() => {}} />
      </div>
    </motion.div>
  );
};

export default Header;
