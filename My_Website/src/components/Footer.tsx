import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <div>
            <b style={{ color: "var(--ink)" }}>&lt;Chandana /&gt;</b><br />
            Software Engineer / Python Developer / AI/ML Enthusiast
          </div>
          <div className="soc"><Github size={18} /><Linkedin size={18} /><Mail size={18} /></div>
        </div>
        <div className="bot" style={{ display: "flex", justifyContent: "space-between" }}>
          <span>© 2026 Tammala Chandana. All Rights Reserved.</span>
          <a href="#home">Back to top <ArrowUpRight size={12} /></a>
        </div>
      </div>
    </footer>
  );
}