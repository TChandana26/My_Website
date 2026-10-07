import { ArrowUpRight, Check, Code2, Sparkles, FileText, CheckCircle2, Globe, Database, Braces, GitBranch, UserRound, HeartPulse, Stethoscope, } from "lucide-react";


const DsaMock = () => (
    <div className="mock dsa">
        <div className="mh"><b><Code2 size={14} /> DSA Tracker</b><small>Overview</small></div>
        <div className="stat">
            <div><small>Problems solved</small><div className="big">24 <small>/ 50</small></div></div>
            <div className="ring"><span>48%</span></div>
        </div>
        {[["Two Sum", "Easy"], ["Valid Parentheses", "Easy"], ["Longest Substring", "Medium"]].map(([n, d]) => (
            <div className="row" key={n}><span><CheckCircle2 size={13} /> {n}</span><small>{d}</small></div>
        ))}
    </div>
);

const TutorMock = () => (
    <div className="mock">
        <div className="mh"><b><Sparkles size={14} /> AI Tutor</b><small>Your study companion</small></div>
        <div className="chip"><FileText size={12} /> chapter_01.pdf <Check size={12} /></div>
        <div className="bubble">Can you explain neural networks?</div>
        <div className="ans"><Sparkles size={13} /> Think of a neural network as a system that learns patterns, one connection at a time.</div>
        <div className="ask">Ask a question… <ArrowUpRight size={12} /></div>
    </div>
);

const ApiMock = () => (
    <div className="apimock">
        <div className="flow">
            <div className="node"><Globe size={22} /><small>Client</small></div>
            <i />
            <div className="node on"><Braces size={26} /><small>REST API</small></div>
            <i />
            <div className="node"><Database size={22} /><small>Database</small></div>
        </div>
        <div className="req"><span>GET /api/v1/resources</span><span><Check size={11} /> 200 OK</span></div>
        <small className="json">{'{ "status": "success", "data": [...] }'}</small>
    </div>
);

const ScrapingMock = () => (
    <div className="scrapingmock">
        <div className="flow">
            <div className="node">
                <Globe size={22} />
                <small>Website</small>
            </div>
            <i />
            <div className="node on">
                <Code2 size={24} />
                <small>Scraper</small>
            </div>
            <i />
            <div className="node">
                <Database size={22} />
                <small>Data</small>
            </div>
        </div>

        <div className="req">
            <span>GET /products</span>
            <span><Check size={11} /> 200 OK</span>
        </div>

        <small className="json">
            {'{ "items": 24, "status": "extracted" }'}
        </small>
    </div>
);

const CareMock = () => (
    <div className="caremock">
        <div className="flow">
            <div className="node">
                <UserRound size={22} />
                <small>User</small>
            </div>
            <i />
            <div className="node on">
                <HeartPulse size={24} />
                <small>CareConnect</small>
            </div>
            <i />
            <div className="node">
                <Stethoscope size={22} />
                <small>Care</small>
            </div>
        </div>

        <div className="req">
            <span>CARE / connect</span>
            <span><Check size={11} /> Connected</span>
        </div>

        <small className="json">
            {'{ "status": "active", "support": "available" }'}
        </small>
    </div>
);

const PROJECTS = [
    {
        tag: "Learn. Solve. Grow.",
        title: "DSA Tracker",
        bg: "p1",
        mock: <DsaMock />,
        desc: "A LeetCode-style DSA learning platform built with Flask and MongoDB to organize coding problems, save solutions, follow a structured roadmap and track learning progress.",
        stack: [
            "Python",
            "Flask",
            "MongoDB",
            "HTML",
            "CSS",
            "JavaScript",
            "Chart.js"
        ],
        pts: [
            "Problem tracking with platform and difficulty levels",
            "Topic roadmap and personal solution storage",
            "User authentication and progress analytics"
        ],
        repo: "https://github.com/TChandana26/dsa_trcaker",
    },

    {
        tag: "Ask. Learn. Understand.",
        title: "AI Tutor",
        bg: "p2",
        mock: <TutorMock />,
        desc: "An AI-powered study assistant that helps students learn from syllabus and textbook content through contextual explanations, interactive Q&A and academic support.",
        stack: [
            "Python",
            "Flask",
            "Groq API",
            "Llama 3.3 70B",
            "PDF Processing"
        ],
        pts: [
            "PDF-based learning and contextual AI Q&A",
            "Chapter explanations and homework assistance",
            "Study planning and personalized learning support"
        ],
        repo: "https://github.com/TChandana26/AI-tutor",
    },

    {
        tag: "Extract. Analyze. Automate.",
        title: "Web Scraping",
        bg: "p3",
        mock: <ScrapingMock />,
        desc: "A Python-based web scraping project focused on extracting and processing structured information from web pages.",
        stack: [
            "Python",
            "BeautifulSoup",
            "Web Scraping"
        ],
        pts: [
            "Extract information from web pages",
            "Parse and organize scraped data",
            "Automate repetitive data collection tasks"
        ],
        repo: "https://github.com/TChandana26/webscrapping.py",
    },

    {
        tag: "Technology for Better Care.",
        title: "CareConnect",
        bg: "p4",
        mock: <CareMock />,
        desc: "A healthcare-focused application designed to connect users with relevant care and support through a technology-driven platform.",
        stack: [
            "Python",
            "Web Development",
            "AI/ML"
        ],
        pts: [
            "Healthcare-focused user experience",
            "Technology-driven care and support workflow",
            "Real-world problem-solving through application development"
        ],
        repo: "https://github.com/TChandana26/careconnect",
    },
];


export default function Projects() {
    return (
        <section id="projects">
            <div className="wrap">
                <div className="head">
                    <div>
                        <div className="eyebrow">03 / Selected work</div>
                        <h2>Featured Projects</h2>
                        <p className="sub">A few ideas I've turned into working solutions.</p>
                    </div>
                    <a href="https://github.com/TChandana26" className="muted" style={{ color: "var(--acc)" }}>Explore GitHub <ArrowUpRight size={14} /></a>
                </div>
                <div className="pgrid">
                    {PROJECTS.map(p => (
                        <article className="pcard" tabIndex={0} key={p.title}>
                            <div className={`pvis ${p.bg}`}>{p.mock}</div>
                            <div className="pbody">
                                <div className="ptag">{p.tag}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="tags">{p.stack.map(t => <span key={t} className="tag">{t}</span>)}</div>
                                <ul>{p.pts.map(x => <li key={x}><Check size={13} />{x}</li>)}</ul>
                                <div className="pfoot">
                                    {p.repo
                                        ? <a href={p.repo} className="btn"><GitBranch size={15} /> View Repository <ArrowUpRight size={14} /></a>
                                        : <span className="muted"><Code2 size={14} /> Repository not published</span>}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}