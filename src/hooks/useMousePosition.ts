import { useEffect, useState } from "react";

interface MousePositionInterface {
  x: number;
  y: number;
}

export const useMousePosition = (dependency: any) => {
  const [mousePos, setMousePos] = useState<MousePositionInterface | null>(null);

  useEffect(() => {
    if (!dependency) return;
    console.log("in arrow useeffect");
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dependency]);

  return mousePos;
};
