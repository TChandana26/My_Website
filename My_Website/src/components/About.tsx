import { GraduationCap } from "lucide-react";

const TAGS = ["Python", "SQL", "DSA", "OOP", "Flask", "MongoDB", "MySQL", "REST APIs", "Git/GitHub", "AI/ML"];

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
            <p>I am a Computer Science undergraduate passionate about software engineering, backend development, Python and artificial intelligence. I enjoy solving problems through clean, practical and useful code.</p>
            <p>From designing REST APIs to exploring AI/ML, I'm drawn to the space where creativity meets real-world impact.</p>
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