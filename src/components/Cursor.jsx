import { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    const elements = document.querySelectorAll("a, button");

    window.addEventListener("mousemove", move);
    elements.forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      elements.forEach(el => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      className={`cursor ${hover ? "cursor-hover" : ""}`}
      style={{ left: pos.x, top: pos.y }}
    />
  );
};

export default Cursor;
