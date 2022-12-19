import ArrowMenu from "./ArrowMenu";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  title: string;
  arrowLeftFunc: () => void;
  arrowRightFunc: () => void;
  value: any;
  disableArrowLeft: boolean;
  disableArrowRight: boolean;
  disabled: boolean;
  width: string;
}

const MenuSetting = ({
  title,
  arrowLeftFunc,
  arrowRightFunc,
  value,
  disableArrowLeft,
  disableArrowRight,
  disabled,
  width,
}: Props) => {
  const [directon, setDirection] = useState<string | null>(null);
  const onClickArrowLeft = () => {
    setDirection("left");
    arrowLeftFunc();
  };
  const onClickArrowRight = () => {
    setDirection("right");
    arrowRightFunc();
  };

  return (
    <div
      className={`${
        disabled ? "pointer-events-none opacity-50 " : ""
      } "  w-full flex justify-between items-center font-numbers space-x-4"`}
    >
      <h1 className="select-none text-xl w-full">{title}</h1>
      <div className="flex justify-center items-center space-x-2 w-full">
        <ArrowMenu
          direction="left"
          onClick={() => onClickArrowLeft()}
          disabled={disableArrowLeft}
        />
        <div
          style={{ width }}
          className={`h-full flex justify-center items-center  overflow-hidden`}
        >
          <motion.p
            key={value}
            initial={{
              opacity: 0,
              x: directon === "left" ? 35 : directon === "right" ? -35 : 0,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
            className="select-none text-center text-xl font-numbers"
          >
            {value}
          </motion.p>
        </div>
        <ArrowMenu
          direction="right"
          onClick={() => onClickArrowRight()}
          disabled={disableArrowRight}
        />
      </div>
    </div>
  );
};

export default MenuSetting;
