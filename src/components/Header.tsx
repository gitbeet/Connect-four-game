import Button from "./Button";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useGameContext } from "../context/gameContext";
import ResetButton from "./ResetButton";

const Header = () => {
  const { setShowMenu, language, resetGameState } = useGameContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className="flex justify-between  px-8 py-4  md:px-32 md:py-12 lg:px-96"
    >
      <div className="scale-125">
        <Logo />
      </div>
      <div className="flex space-x-4 items-center">
        <ResetButton />
        <Button
          text={language === "English" ? "Options" : "Opciones"}
          onClick={() => setShowMenu(true)}
        />
      </div>
    </motion.div>
  );
};

export default Header;
