import {
    ArrowUpRight,
    Check,
    Code2,
    Sparkles,
    FileText,
    CheckCircle2,
    Globe,
    Database,
    Braces,
    GitBranch,
    Home,
    Utensils,
    HeartPulse,
} from "lucide-react";

const DsaMock = () => (
    <div className="mock dsa">
        <div className="mh">
            <b>
                <Code2 size={14} /> DSA Tracker
            </b>
            <small>Overview</small>
        </div>

        <div className="stat">
            <div>
                <small>Problems solved</small>
                <div className="big">
                    24 <small>/ 50</small>
                </div>
            </div>

            <div className="ring">
                <span>48%</span>
            </div>
        </div>

        {[
            ["Two Sum", "Easy"],
            ["Valid Parentheses", "Easy"],
            ["Longest Substring", "Medium"],
        ].map(([name, difficulty]) => (
            <div className="row" key={name}>
                <span>
                    <CheckCircle2 size={13} /> {name}
                </span>
                <small>{difficulty}</small>
            </div>
        ))}
    </div>
);

const TutorMock = () => (
    <div className="mock">
        <div className="mh">
            <b>
                <Sparkles size={14} /> AI Tutor
            </b>
            <small>Your study companion</small>
        </div>

        <div className="chip">
            <FileText size={12} /> chapter_01.pdf <Check size={12} />
        </div>

        <div className="bubble">
            Can you explain neural networks?
        </div>

        <div className="ans">
            <Sparkles size={13} /> Think of a neural network as a system
            that learns patterns, one connection at a time.
        </div>

        <div className="ask">
            Ask a question… <ArrowUpRight size={12} />
        </div>
    </div>
);

const ApiMock = () => (
    <div className="apimock">
        <div className="flow">
            <div className="node">
                <Globe size={22} />
                <small>Client</small>
            </div>

            <i />

            <div className="node on">
                <Braces size={26} />
                <small>REST API</small>
            </div>

            <i />

            <div className="node">
                <Database size={22} />
                <small>Database</small>
            </div>
        </div>

        <div className="req">
            <span>GET /api/v1/resources</span>
            <span>
                <Check size={11} /> 200 OK
            </span>
        </div>

        <small className="json">
            {'{ "status": "success", "data": [...] }'}
        </small>
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
            <span>
                <Check size={11} /> 200 OK
            </span>
        </div>

        <small className="json">
            {'{ "items": 24, "status": "extracted" }'}
        </small>
    </div>
);

const CareMock = () => {
    const resources: {
        name: string;
        status: string;
        Icon: React.ElementType;
    }[] = [
        {
            name: "Shelter",
            status: "Available",
            Icon: Home,
        },
        {
            name: "Food Support",
            status: "Available",
            Icon: Utensils,
        },
        {
            name: "Medical Aid",
            status: "Available",
            Icon: HeartPulse,
        },
    ];

    return (
        <div className="mock care">
            <div className="mh">
                <b>
                    <HeartPulse size={14} /> CareConnect
                </b>
                <small>Support</small>
            </div>

            <div className="carestat">
                <div>
                    <small>People connected</small>
                    <div className="big">128</div>
                </div>

                <div className="ring">
                    <span>82%</span>
                </div>
            </div>

            {resources.map(({ name, status, Icon }) => (
                <div className="row" key={name}>
                    <span>
                        <Icon size={13} /> {name}
                    </span>

                    <small>
                        <CheckCircle2 size={11} /> {status}
                    </small>
                </div>
            ))}
        </div>
    );
};

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
            "Jinja2",
            "Chart.js",
        ],
        pts: [
            "Problem tracking with platform and difficulty levels",
            "Topic roadmap and personal solution storage",
            "User authentication and progress analytics",
        ],
        repo: "https://github.com/TChandana26/dsa_tracker",
        demo: "https://dsa-tracker-h0en.onrender.com/",
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
            "PDF Processing",
        ],
        pts: [
            "PDF-based learning and contextual AI Q&A",
            "Chapter explanations and homework assistance",
            "Study planning and personalized learning support",
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
            "Web Scraping",
        ],
        pts: [
            "Extract information from web pages",
            "Parse and organize scraped data",
            "Automate repetitive data collection tasks",
        ],
        repo: "https://github.com/TChandana26/webscrapping.py",
    },

    {
        tag: "Technology for Social Impact.",
        title: "CareConnect",
        bg: "p4",
        mock: <CareMock />,
        desc: "A social-impact platform designed to connect homeless individuals with essential resources, shelters, food, healthcare, and community support.",
        stack: [
            "Python",
            "Web Development",
            "Database",
            "AI/ML",
        ],
        pts: [
            "Connects homeless individuals with nearby essential resources",
            "Helps discover shelters, food, medical aid, and support services",
            "Uses technology to address real-world social challenges",
            "Designed to connect people with NGOs, volunteers, and community support",
        ],
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

                        <p className="sub">
                            A few ideas I've turned into working solutions.
                        </p>
                    </div>

                    <a
                        href="https://github.com/TChandana26"
                        className="muted"
                        style={{ color: "var(--acc)" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore GitHub <ArrowUpRight size={14} />
                    </a>
                </div>

                <div className="pgrid">
                    {PROJECTS.map((project) => (
                        <article
                            className="pcard"
                            tabIndex={0}
                            key={project.title}
                        >
                            <div className={`pvis ${project.bg}`}>
                                {project.mock}
                            </div>

                            <div className="pbody">
                                <div className="ptag">
                                    {project.tag}
                                </div>

                                <h3>{project.title}</h3>

                                <p>{project.desc}</p>

                                <div className="tags">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="tag"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <ul>
                                    {project.pts.map((point) => (
                                        <li key={point}>
                                            <Check size={13} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pfoot">
                                    {project.repo ? (
                                        <a
                                            href={project.repo}
                                            className="btn"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <GitBranch size={15} />
                                            View Repository
                                            <ArrowUpRight size={14} />
                                        </a>
                                    ) : (
                                        <span className="muted">
                                            <Code2 size={14} />
                                            Repository not published
                                        </span>
                                    )}

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn"
                                        >
                                            <Globe size={15} />
                                            Live Demo
                                            <ArrowUpRight size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}