import { motion, AnimatePresence } from "framer-motion";
import { backdropVariants } from "../variants";
import Backdrop from "./Backdrop";
interface Props {
  triggerEffect: boolean;
}

const RestartEffect = ({ triggerEffect }: Props) => {
  return (
    <>
      <AnimatePresence>{triggerEffect ? <Backdrop /> : null}</AnimatePresence>
    </>
  );
};

export default RestartEffect;
