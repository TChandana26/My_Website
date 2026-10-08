import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(n => {
      const el = document.getElementById(n.toLowerCase());
      if (el) io.observe(el);
    });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <nav className={scrolled ? "nv scrolled" : "nv"}>
      <div className="wrap nv-in">
        <a href="#home" className="nv-logo"><i>&lt;</i>Tammala Chandana<i>/&gt;</i></a>
        <ul className="nv-links">
          {NAV.map(n => (
            <li key={n} className={active === n.toLowerCase() ? "on" : ""}>
              <a href={`#${n.toLowerCase()}`}>{n}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nv-cta">Let's Connect <ArrowUpRight size={15} /></a>
        <button className="nv-burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="nv-menu">
          {NAV.map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? "on" : ""} onClick={() => setOpen(false)}>{n}</a>
          ))}
        </div>
      )}
    </nav>
  );
}