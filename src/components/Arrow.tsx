import { useEffect, useState } from "react";
import { useGameContext } from "../context/gameContext";
import { motion, AnimatePresence } from "framer-motion";
import { outlineColor } from "../App";

interface MousePositionInterface {
  x: number;
  y: number;
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Arrow = () => {
  const { player, isGameStarted, animationStarted } = useGameContext();
  const [mousePos, setMousePos] = useState<MousePositionInterface | null>(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    if (!isGameStarted) return;
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isGameStarted]);

  const red = "#FF1F74";
  const yellow = "#FFD33C";

  if (!mousePos)
    return (
      <svg
        className="absolute z-10 left-1/2 -top-6  -translate-x-1/2 "
        width="46"
        height="33"
        viewBox="0 0 46 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.298 29.4921L38.3429 14.654C39.4597 13.3837 38.5577 11.3897 36.8663 11.3897H10.7765C9.08512 11.3897 8.18311 13.3837 9.29989 14.654L22.3448 29.4921C23.1277 30.3827 24.515 30.3827 25.298 29.4921Z"
          fill={outlineColor}
          stroke={outlineColor}
          strokeWidth="1.64286"
        />
        <rect
          x="8.21436"
          y="9.03564"
          width="27.9286"
          height="1.64286"
          rx="0.821429"
          fill="white"
        />
        <path
          d="M23.6552 26.2064L36.7001 11.3683C37.8169 10.098 36.9148 8.10401 35.2234 8.10401H9.1337C7.4423 8.10401 6.54029 10.098 7.65707 11.3683L20.7019 26.2064C21.4849 27.097 22.8722 27.097 23.6552 26.2064Z"
          fill={player === 1 ? red : yellow}
          stroke={outlineColor}
          strokeWidth="2"
        />
        <rect x="8" y="9" width="28" height="2" rx="1" fill="white" />
      </svg>
    );

  let position =
    windowSize.innerWidth <= 768
      ? mousePos.x - (windowSize.innerWidth - 330) / 2
      : mousePos.x - (windowSize.innerWidth - 412) / 2;
  let offset =
    windowSize.innerWidth <= 768
      ? (windowSize.innerWidth - 330) / 2
      : (windowSize.innerWidth - 412) / 2;

  return (
    <AnimatePresence mode="wait">
      <motion.svg
        key={animationStarted ? 1 : 0}
        initial={{
          translateX: "-50%",
          top: -18,
          left:
            mousePos.x > (windowSize.innerWidth <= 768 ? 330 : 412) + offset
              ? `100%`
              : mousePos.x < offset
              ? `0%`
              : `${
                  windowSize.innerWidth <= 768
                    ? position / 3.3
                    : position / 4.12
                }%`,
        }}
        animate={{
          translateX: "-50%",
          top: -25,
          left:
            mousePos.x > (windowSize.innerWidth <= 768 ? 330 : 412) + offset
              ? `100%`
              : mousePos.x < offset
              ? `0%`
              : `${
                  windowSize.innerWidth <= 768
                    ? position / 3.3
                    : position / 4.12
                }%`,
        }}
        className="absolute z-10 -top-8  -translate-x-1/2"
        width="46"
        height="33"
        viewBox="0 0 46 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.298 29.4921L38.3429 14.654C39.4597 13.3837 38.5577 11.3897 36.8663 11.3897H10.7765C9.08512 11.3897 8.18311 13.3837 9.29989 14.654L22.3448 29.4921C23.1277 30.3827 24.515 30.3827 25.298 29.4921Z"
          fill={outlineColor}
          stroke={outlineColor}
          strokeWidth="1.64286"
        />
        <rect
          x="8.21436"
          y="9.03564"
          width="27.9286"
          height="1.64286"
          rx="0.821429"
          fill="white"
        />
        <path
          d="M23.6552 26.2064L36.7001 11.3683C37.8169 10.098 36.9148 8.10401 35.2234 8.10401H9.1337C7.4423 8.10401 6.54029 10.098 7.65707 11.3683L20.7019 26.2064C21.4849 27.097 22.8722 27.097 23.6552 26.2064Z"
          fill={player === 1 ? red : yellow}
          stroke={outlineColor}
          strokeWidth="1.64286"
        />
        <rect
          x="8"
          y="9"
          width="28"
          height="2"
          rx="1"
          fill={player === 1 ? "#ff6fa6" : "#ffff"}
        />
      </motion.svg>
    </AnimatePresence>
  );
};

export default Arrow;
