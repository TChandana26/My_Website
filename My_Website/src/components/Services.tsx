import { Terminal, Layers, Globe, Cpu } from "lucide-react";

const SERVICES = [
  { i: <Terminal size={20} />, t: "Python Development", d: "Building Python applications, automation tools and backend solutions." },
  { i: <Layers size={20} />, t: "Backend Development", d: "Developing REST APIs and database-driven applications using Python and Flask." },
  { i: <Globe size={20} />, t: "Web Development", d: "Creating responsive and user-friendly web applications." },
  { i: <Cpu size={20} />, t: "AI / ML Applications", d: "Building practical AI-powered applications and exploring machine learning and LLM technologies." },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="eyebrow">04 / How I can help</div>
        <h2>What I Do</h2>
        <p className="sub">Thoughtful development, from the first idea to the final detail.</p>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <div className="svc-card" tabIndex={0} key={s.t}>
              <span className="n">0{i + 1}</span>
              <div className="ico">{s.i}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}