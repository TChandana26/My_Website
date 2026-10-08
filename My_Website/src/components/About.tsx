import { GraduationCap } from "lucide-react";

const TAGS = ["ML", "Flask", "Jinja2", "REST APIs", "Data Structures and algorithums", "AWS", "Python", "OOP", "SQL", "MySQL", "NoSql" , "MongoDB", "Git/GitHub", "VS Code", "unit/integration/system testing"];

export default function About() {
  return (
    <section id="about" className="alt">
      <div className="wrap">
        <div className="about">
          <div>
            <div className="eyebrow">01 / A little about me</div>
            <h2>About Me</h2>
            <h2 style={{ marginTop: 28 }}>Turning ideas into <span className="serif">working solutions.</span></h2>
          </div>
          <div>
            <p>I’m a Computer Science undergraduate who loves turning ideas into software. My interests span software engineering, backend development, Python, and AI/ML, with a focus on building solutions that are practical, reliable, and meaningful.</p>
            <p>I enjoy working with APIs, databases, and intelligent systems—exploring how thoughtful engineering and creative problem-solving can turn complex challenges into simple experiences. For me, code isn’t just about solving problems; it’s about creating possibilities.</p>
            <div className="tags">{TAGS.map(t => <span key={t} className="tag">{t}</span>)}</div>
          </div>
        </div>
        <div className="edu">
          <div className="ico"><GraduationCap size={20} /></div>
          <div className="grow">
            <small>EDUCATION</small>
            <b>B.Tech — Computer Science Engineering</b>
            <small>Sreyas Institute of Engineering and Technology</small>
          </div>
          <div>
            <small>Expected graduation</small>
            <span className="serif" style={{ color: "var(--ink)", fontSize: 28, fontStyle: "normal" }}>2027</span>
          </div>
        </div>
      </div>
    </section>
  );
}