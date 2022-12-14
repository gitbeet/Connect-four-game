import { useEffect, useState } from "react";
import arrowSmall from "../assets/arrow-sm.png";

interface MousePositionInterface {
  x: number;
  y: number;
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Arrow = () => {
  const [mousePos, setMousePos] = useState<MousePositionInterface | null>(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    console.log(mousePos);
  }, [mousePos]);

  useEffect(() => {
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
  }, []);

  if (!mousePos) return <h1>loading</h1>;

  let position = mousePos.x - (windowSize.innerWidth - 330) / 2;
  let offset = (windowSize.innerWidth - 330) / 2;

  return (
    <img
      style={{
        left:
          mousePos.x > 330 + offset
            ? `100%`
            : mousePos.x < offset
            ? `0%`
            : `${position}px`,
      }}
      className="absolute z-10 -top-12  -translate-x-1/2 w-8 h-8"
      src={arrowSmall}
      alt="arrow"
    />
  );
};

export default Arrow;
