import { useState } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, Send, Check } from "lucide-react";

const LINKS = [
  { i: <Mail size={20} />, l: "Email", v: "chandana@example.com", href: "mailto:chandana@example.com" },
  { i: <Linkedin size={20} />, l: "LinkedIn", v: "Chandana Thamala", href: "https://linkedin.com" },
  { i: <Github size={20} />, l: "GitHub", v: "@TChandana26", href: "https://github.com/TChandana26" },
];

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setF({ ...f, [k]: e.target.value });
    if (status === "sent") setStatus("idle");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: replace with a real request (EmailJS, Formspree, your Flask API...)
    setTimeout(() => {
      setStatus("sent");
      setF({ name: "", email: "", subject: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="alt">
      <div className="wrap contact">
        <div>
          <div className="eyebrow">05 / Let's connect</div>
          <h2>Let's Create Something <span className="serif">Meaningful.</span></h2>
          <p className="sub ct-sub">Have an opportunity, project idea or collaboration in mind? I'd love to connect.</p>
          <div className="ct-links">
            {LINKS.map(x => (
              <a href={x.href} className="ct-link" key={x.l} target="_blank" rel="noreferrer">
                <div className="ico">{x.i}</div>
                <div className="grow"><small>{x.l}</small>{x.v}</div>
                <ArrowUpRight size={16} className="arr" />
              </a>
            ))}
          </div>
          <p className="ct-note">Email address is a placeholder until confirmed.</p>
        </div>

        <form className="ct-form" onSubmit={submit}>
          <h3>Drop me a message</h3>
          <div className="ct-row">
            <div><label htmlFor="n">Name <i>*</i></label>
              <input id="n" required placeholder="Your name" value={f.name} onChange={set("name")} /></div>
            <div><label htmlFor="e">Email <i>*</i></label>
              <input id="e" required type="email" placeholder="you@example.com" value={f.email} onChange={set("email")} /></div>
          </div>
          <label htmlFor="s">Subject</label>
          <input id="s" placeholder="What's this about?" value={f.subject} onChange={set("subject")} />
          <label htmlFor="m">Message <i>*</i></label>
          <textarea id="m" required placeholder="Tell me a little about what you have in mind…" value={f.message} onChange={set("message")} />
          <button className={`ct-send ${status}`} type="submit" disabled={status === "sending"}>
            <span>{status === "idle" ? "Send Message" : status === "sending" ? "Sending…" : "Message sent — thank you!"}</span>
            {status === "sent" ? <Check size={18} /> : <Send size={18} />}
          </button>
        </form>
      </div>
    </section>
  );
}