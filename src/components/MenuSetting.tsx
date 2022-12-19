import ArrowMenu from "./ArrowMenu";
import { motion } from "framer-motion";

interface Props {
  title: string;
  arrowLeftFunc: () => void;
  arrowRightFunc: () => void;
  value: any;
  disableArrowLeft: boolean;
  disableArrowRight: boolean;
  disabled: boolean;
}

const MenuSetting = ({
  title,
  arrowLeftFunc,
  arrowRightFunc,
  value,
  disableArrowLeft,
  disableArrowRight,
  disabled,
}: Props) => {
  return (
    <div
      className={`${
        disabled ? "pointer-events-none opacity-50 " : ""
      } " w-full flex justify-between items-center font-numbers space-x-4"`}
    >
      <h1 className="select-none text-xl">{title}</h1>
      <div className="flex justify-center items-center space-x-2">
        <ArrowMenu
          direction="left"
          onClick={() => arrowLeftFunc()}
          disabled={disableArrowLeft}
        />
        <p className="select-none w-12 h-full text-center text-2xl font-numbers">
          {value}
        </p>
        <ArrowMenu
          direction="right"
          onClick={() => arrowRightFunc()}
          disabled={disableArrowRight}
        />
      </div>
    </div>
  );
};

export default MenuSetting;
