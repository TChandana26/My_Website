import {
  Code2,
  Mail,
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="wrap">
        <div>
          <div className="eyebrow">— Hello, I'm</div>
          <h1>Tammala<br /><span className="serif">Chandana.</span></h1>
          <div className="role"><Code2 size={20} /> Software Developer</div>
          <p className="lead">
            Computer Science undergraduate passionate about building practical software
            solutions, intelligent applications and scalable backend systems using Python,
            APIs, databases and modern technologies.
          </p>
          <div className="btns">
            <a href="#projects" className="btn p">View My Projects <ArrowUpRight size={16} /></a>
            <a href="#contact" className="btn">Contact Me <ArrowRight size={16} /></a>
          </div>
          <div className="soc"><FaGithub size={18} /><FaLinkedin size={18} /><Mail size={18} /></div>
        </div>
        <div className="code">
          <div className="bar"><span>● ● ●</span><span>developer.py</span><span>&lt;/&gt;</span></div>
          <pre>{`class Developer:
    skills = [
        "Python",
        "Backend",
        "AI / ML",
        "Problem Solving"
    ]

    def build(self):
        return "Innovation"`}</pre>
          <div className="foot">Thoughtful code. Meaningful solutions.</div>
        </div>
      </div>
      <div className="wrap hero-foot">
        <span><ArrowDown size={12} /> A little more about me</span>
        <span>PYTHON + BACKEND + AI &amp; ML</span>
      </div>
    </header>
  );
}