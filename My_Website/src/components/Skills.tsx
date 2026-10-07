import { Code2, Braces, Database, Brain, Wrench, Check } from "lucide-react";

const SKILLS = [
  { t: "Programming", i: <Code2 size={20} />, l: ["Python", "SQL", "Data Structures & Algorithms", "OOP"] },
  { t: "Backend", i: <Braces size={20} />, l: ["Flask", "REST APIs"] },
  { t: "Databases", i: <Database size={20} />, l: ["MySQL", "MongoDB"] },
  { t: "Data & AI", i: <Brain size={20} />, l: ["Pandas", "NumPy", "Matplotlib", "Machine Learning", "AI/LLM Applications"] },
  { t: "Tools", i: <Wrench size={20} />, l: ["Git", "GitHub", "VS Code", "Linux"] },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">02 / My toolkit</div>
        <h2>Skills &amp; Technologies</h2>
        <p className="sub">The tools I use to bring ideas to life.</p>
        <div className="skills-grid">
          {SKILLS.map(s => (
            <div className="skill-card" tabIndex={0} key={s.t}>
              <div className="ico">{s.i}</div>
              <h3>{s.t}</h3>
              <ul>{s.l.map(x => <li key={x}><Check size={14} />{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}