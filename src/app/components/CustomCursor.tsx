"use client";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <img
      src="/cursor.png"
      alt="cursor"
      className="fixed w-8 h-8 pointer-events-none z-500"
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
      }}
    />
  );
}
