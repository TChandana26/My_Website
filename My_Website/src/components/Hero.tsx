import { useEffect, useRef, useState } from "react";
import { Code2, Github, Linkedin, Mail, ArrowUpRight, ArrowRight, Sparkles, Check } from "lucide-react";
import me from "../assets/profile.jpg";

const ROLES = ["ML Enthusiast", "Software Developer", "Python Developer"];

const CODE: [string, React.ReactNode][] = [
  ["0", <><b className="k">class</b> Developer:</>],
  ["", ""],
  ["1", <><b className="k">def</b> build(self):</>],
  ["2", <>skills = [</>],
  ["3", <b className="s">"Backend",</b>],
  ["3", <b className="s">"SDE",</b>],
  ["3", <b className="s">"ML",</b>],
  ["3", <b className="s">"Problem Solving"</b>],
  ["2", <>]</>],
  ["", ""],
  ["1", <><b className="k">return</b> <b className="s">"Innovation"</b><span className="caret" /></>],
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [ri, setRi] = useState(0);
  const [del, setDel] = useState(false);
  const tilt = useRef<HTMLDivElement>(null);

  // type -> pause -> delete -> next role
  useEffect(() => {
    const full = ROLES[ri];
    let t: ReturnType<typeof setTimeout> | undefined;
    if (!del && typed === full) t = setTimeout(() => setDel(true), 1400);
    else if (del && typed === "") { setDel(false); setRi((ri + 1) % ROLES.length); }
    else t = setTimeout(() => setTyped(full.slice(0, typed.length + (del ? -1 : 1))), del ? 35 : 80);
    return () => clearTimeout(t);
  }, [typed, del, ri]);

  const nextRole = () => { setDel(false); setTyped(""); setRi((ri + 1) % ROLES.length); };

  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.current?.style.setProperty("--ry", `${-8 + x * 14}deg`);
    tilt.current?.style.setProperty("--rx", `${5 - y * 14}deg`);
  };
  const leave = () => {
    tilt.current?.style.setProperty("--ry", "-8deg");
    tilt.current?.style.setProperty("--rx", "5deg");
  };

  return (
    <header id="home" className="hero2">
      <div className="wrap">
        <div>
          <div className="hello">
            <img className="avatar" src={me} alt="Tammala Chandana" />
            <span className="eyebrow"><u />Hello, I'm</span>
          </div>
          <h1>Tammala<br /><span className="serif">Chandana</span><em>.</em></h1>
          <div className="role" role="button" tabIndex={0} title="Click to switch" onClick={nextRole} onKeyDown={e => e.key === "Enter" && nextRole()}><Code2 size={22} /> {typed}<span className="bar-cur" /></div>
          <p className="lead">
            Computer Science undergraduate with a strong foundation in Python, SQL, APIs, databases, and software development. Passionate about building scalable backend systems, practical software solutions, and intelligent applications, with a focus on problem-solving, efficient development, and delivering reliable real-world solutions.
          </p>
          <span className="serif">Art in Algorithms</span>. 
                    <span className="serif"> Creativity in Code</span>. 
                              <span className="serif"> Ideas to Impact.</span>


          <div className="btns">
            <a href="#projects" className="btn-peach">View My Work <ArrowUpRight size={16} /></a>
            <a href="https://docs.google.com/document/d/1760nSZ7MmBM9ZayucbB62wMmWCu1ra13/edit?usp=sharing&ouid=117377528301420957536&rtpof=true&sd=true" className="btn-line">My Resume <ArrowRight size={16} /></a>
          </div>
          <div className="socrow">
            <a href="https://github.com/TChandana26" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/chandana-tammala-477649351/" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=thamalachandana@gmail.com" aria-label="Email"><Mail size={20} /></a>
            <span className="vr" /><small>Learn-Build-Repeat</small>
          </div>
        </div>

        <div className="stage" onMouseMove={move} onMouseLeave={leave}>
          <div className="halo" />
          <div className="win" ref={tilt}>
            <div className="wbar"><span className="d1" /><span className="d2" /><span className="d3" /><small>developer.py</small></div>
            <pre className="wcode">
              {CODE.map(([ind, node], n) => (
                <div key={n} style={{ paddingLeft: `${Number(ind || 0) * 28}px` }}>
                  <span className="ln">{n + 1}</span>{node}
                </div>
              ))}
            </pre>
            <div className="wfoot">UTF-8 <Check size={12} /></div>
          </div>
          <div className="chip c1"><Code2 size={16} /> Built with curiosity.</div>
          <div className="chip c2"><Sparkles size={20} /><span>Thoughtful code.<br />Meaningful solutions.</span></div>
        </div>
      </div>
    </header>
  );
}