import { motion, AnimatePresence } from "framer-motion";
import * as ReactDOM from "react-dom";
interface Props {
  triggerEffect: boolean;
}

const RestartEffect = ({ triggerEffect }: Props) => {
  return ReactDOM.createPortal(
    <>
      <AnimatePresence>
        {triggerEffect ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute z-[30] min-w-screen min-h-screen top-0 left-0 right-0 bottom-0 bg-white"
          ></motion.div>
        ) : null}
      </AnimatePresence>
    </>,
    document.getElementById("root") as Element | DocumentFragment
  );
};

export default RestartEffect;
