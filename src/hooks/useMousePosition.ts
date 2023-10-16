import { useEffect, useState } from "react";

interface MousePositionInterface {
  x: number;
  y: number;
}

export const useMousePosition = () => {
  const [mousePos, setMousePos] = useState<MousePositionInterface | null>(null);

  useEffect(() => {
    console.log("in arrow useeffect");
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePos;
};
