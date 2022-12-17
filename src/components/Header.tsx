import Button from "./Button";
import Logo from "./Logo";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className="flex justify-between items-center p-8"
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
