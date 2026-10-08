import { useState } from "react";
import {
    Mail,
    Linkedin,
    Github,
    ArrowUpRight,
    Send,
    Check,
} from "lucide-react";

const ACCESS_KEY = "d79799f0-4a50-4676-b8fc-2b2c6b6ce186";

type Status = "idle" | "sending" | "sent" | "error";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const LINKS = [
    {
        icon: <Mail size={20} />,
        label: "Email",
        value: "thamalachandana@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=thamalachandana@gmail.com",

    },
    {
        icon: <Linkedin size={20} />,
        label: "LinkedIn",
        value: "Chandana Tammala",
        href: "https://www.linkedin.com/in/chandana-tammala-477649351/",
    },
    {
        icon: <Github size={20} />,
        label: "GitHub",
        value: "@TChandana26",
        href: "https://github.com/TChandana26",
    },
];

export default function Contact() {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (status === "sent" || status === "error") {
            setStatus("idle");
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: ACCESS_KEY,
                        name: form.name,
                        email: form.email,
                        subject: form.subject,
                        message: form.message,
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {
                setStatus("sent");

                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                console.error("Web3Forms error:", data);
                setStatus("error");
            }
        } catch (error) {
            console.error("Web3Forms error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="alt">
            <div className="wrap contact">
                <div>
                    <div className="eyebrow">05 / Let's connect</div>

                    <h2>
                        Let's Create Something{" "}
                        <span className="serif">Meaningful.</span>
                    </h2>

                    <p className="sub ct-sub">
                        Have an opportunity, project idea or collaboration in
                        mind? I'd love to connect.
                    </p>

                    <div className="ct-links">
                        {LINKS.map((link) => {
                            const isEmail = link.href.startsWith("mailto:");

                            return (
                                <a
                                    href={link.href}
                                    className="ct-link"
                                    key={link.label}
                                    target={isEmail ? undefined : "_blank"}
                                    rel={isEmail ? undefined : "noopener noreferrer"}
                                >
                                    <div className="ico">{link.icon}</div>

                                    <div className="grow">
                                        <small>{link.label}</small>
                                        {link.value}
                                    </div>

                                    <ArrowUpRight
                                        size={16}
                                        className="arr"
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <form
                    className="ct-form"
                    onSubmit={handleSubmit}
                >
                    <h3>Drop me a message</h3>

                    <div className="ct-row">
                        <div>
                            <label htmlFor="name">
                                Name <i>*</i>
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Your name"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">
                                Email <i>*</i>
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <label htmlFor="subject">Subject</label>

                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={form.subject}
                        onChange={handleChange}
                    />

                    <label htmlFor="message">
                        Message <i>*</i>
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell me a little about what you have in mind…"
                        value={form.message}
                        onChange={handleChange}
                    />

                    <button
                        className={`ct-send ${status}`}
                        type="submit"
                        disabled={status === "sending"}
                    >
                        <span>
                            {status === "idle" && "Send Message"}
                            {status === "sending" && "Sending…"}
                            {status === "sent" &&
                                "Message sent — thank you!"}
                            {status === "error" &&
                                "Something went wrong — try again"}
                        </span>

                        {status === "sent" ? (
                            <Check size={18} />
                        ) : (
                            <Send size={18} />
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}