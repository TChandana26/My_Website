import { useEffect, useRef } from "react";

const HOVER = "a,button,[role=button],.avatar,.chip,.tag,.skill-card,.pcard,.svc-card,.ct-link";

export default function CursorDots() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // only on devices with a real mouse
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");

    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      dot.current!.style.transform = `translate(${x}px,${y}px)`;
      dot.current!.style.opacity = ring.current!.style.opacity = "1";
    };
    const over = (e: MouseEvent) => {
      const hit = (e.target as HTMLElement).closest(HOVER);
      ring.current!.classList.toggle("hover", !!hit);
      dot.current!.classList.toggle("hover", !!hit);
    };
    const down = () => ring.current!.classList.add("press");
    const up = () => ring.current!.classList.remove("press");
    const leave = () => { dot.current!.style.opacity = ring.current!.style.opacity = "0"; };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.current!.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cur-ring"><span /></div>
      <div ref={dot} className="cur-dot"><span /></div>
    </>
  );
}
