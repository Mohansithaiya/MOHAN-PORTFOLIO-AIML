/**
 * Design reminder — The Engineering Ledger: editorial systems design with
 * warm paper, ink-navy structure, copper signals, and asymmetric information rails.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  TerminalSquare,
  X,
} from "lucide-react";

const resumeUrl = "/manus-storage/Mohan_S_Resume_852b2593.pdf";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Certifications", "#certifications"],
  ["Achievements", "#achievements"],
  ["Contact", "#contact"],
] as const;

const skillGroups = [
  {
    label: "01 / Programming",
    icon: TerminalSquare,
    skills: ["Python", "Java", "C"],
  },
  {
    label: "02 / Web & Data",
    icon: Database,
    skills: ["HTML", "CSS", "JavaScript", "SQL", "DBMS", "REST APIs"],
  },
  {
    label: "03 / Core Engineering",
    icon: Code2,
    skills: ["Object-Oriented Programming", "Data Structures", "Problem Solving", "Linux"],
  },
  {
    label: "04 / AI, Cloud & Security",
    icon: Layers3,
    skills: [
      "Machine Learning",
      "OpenCV",
      "Data Preprocessing",
      "AWS Cloud Fundamentals",
      "Git",
      "GitHub",
      "Ethical Hacking",
      "Vulnerability Assessment",
      "Network Security",
    ],
  },
];

const certifications = [
  "IBM Machine Learning",
  "Google Data Analytics",
  "NVIDIA Computer Vision",
  "DBMS (Colorado)",
  "Relational Databases (Illinois Tech)",
  "Cisco Ethical Hacker",
  "Cyber Threat Management",
];

const achievements = [
  {
    date: "2025",
    title: "Finalist — Yukthi CTF",
    detail: "Cybersecurity Capture The Flag Competition",
  },
  {
    date: "2026",
    title: "Finalist — DEFY, VIT",
    detail: "National-Level Technical Innovation Competition",
  },
  {
    date: "Participated",
    title: "Hackathons & Datathons",
    detail: "Smart India Hackathon, IBM Datathon, IIT Madras, and VIT Hackathons",
  },
];

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-index" aria-hidden="true">
        <span>{index}</span>
        <i />
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-intro">{description}</p>}
      </div>
    </div>
  );
}

function ExternalIcon() {
  return <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 18);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Mohan S home" onClick={closeMenu}>
            <img src="/manus-storage/mohan-ms-mark_77f6fd8d.png" alt="Mohan S monogram" />
            <span>
              <strong>Mohan S</strong>
              <small>Engineering portfolio</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a className="header-contact" href="#contact">
            Let&apos;s connect <ArrowDownRight size={15} aria-hidden="true" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span>0{index + 1}</span>
              {label}
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </header>

      <main id="main-content">
        <section id="home" className="hero section-anchor">
          <div className="hero-rule top-rule" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-copy reveal">
              <p className="eyebrow hero-eyebrow">
                <span className="signal-dot" aria-hidden="true" />
                Chennai, Tamil Nadu · India
              </p>
              <h1>
                Building practical
                <em> intelligence</em>,
                <br />
                one well-structured
                <br />
                system at a time.
              </h1>
              <p className="hero-description">
                I&apos;m <strong>Mohan S</strong>, a B.Tech Artificial Intelligence and Machine Learning student with a hands-on foundation in software development, data, cloud fundamentals, and security.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  <span>View selected work</span>
                  <ArrowDownRight size={17} aria-hidden="true" />
                </a>
                <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer">
                  <span>Download résumé</span>
                  <ExternalIcon />
                </a>
              </div>
              <div className="hero-links" aria-label="Professional links">
                <a href="https://github.com/Mohansithaiya" target="_blank" rel="noreferrer">
                  <Github size={16} aria-hidden="true" /> GitHub <ExternalIcon />
                </a>
                <a href="https://linkedin.com/in/mohanxtech07" target="_blank" rel="noreferrer">
                  <Linkedin size={16} aria-hidden="true" /> LinkedIn <ExternalIcon />
                </a>
                <a href="#contact">
                  <Mail size={16} aria-hidden="true" /> Contact <ArrowDownRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>

            <aside className="hero-profile reveal" aria-label="Profile summary">
              <div className="profile-art">
                <img src="/manus-storage/mohan-hero-ledger_edde92eb.png" alt="Abstract editorial engineering illustration" />
                <div className="profile-art-label">System sketch / 2026</div>
              </div>
              <div className="profile-specs">
                <div>
                  <span>Focus</span>
                  <strong>AI/ML · Software · Full-Stack · Cloud</strong>
                </div>
                <div>
                  <span>Degree</span>
                  <strong>B.Tech in Artificial Intelligence &amp; Machine Learning</strong>
                </div>
                <div>
                  <span>Institution</span>
                  <strong>Saveetha Engineering College</strong>
                </div>
                <div>
                  <span>Timeline</span>
                  <strong>2023 — 2027</strong>
                </div>
              </div>
            </aside>
          </div>
          <a className="hero-scroll" href="#about" aria-label="Scroll to about section">
            <span>Scroll to explore</span>
            <ChevronDown size={18} aria-hidden="true" />
          </a>
        </section>

        <section id="about" className="about section-anchor">
          <div className="content-frame">
            <SectionHeading index="01" eyebrow="About" title="Grounded in fundamentals. Focused on what works." />
            <div className="about-content">
              <div className="about-statement">
                <p>
                  I am pursuing a B.Tech in <strong>Artificial Intelligence and Machine Learning</strong> at Saveetha Engineering College, Chennai. My learning spans software foundations, data systems, intelligent applications, cloud concepts, and security.
                </p>
                <p>
                  I enjoy turning a technical problem into a clear, practical solution—whether that means working with data, building an application workflow, or strengthening the reliability of a system.
                </p>
              </div>
              <div className="about-details">
                <div className="detail-row">
                  <span>Current study</span>
                  <strong>B.Tech — AI &amp; ML</strong>
                </div>
                <div className="detail-row">
                  <span>Relevant coursework</span>
                  <strong>Data Structures, OOP, DBMS, OS, Networks, Machine Learning</strong>
                </div>
                <div className="detail-row">
                  <span>Based in</span>
                  <strong>Chennai, Tamil Nadu, India</strong>
                </div>
                <div className="detail-row">
                  <span>Looking toward</span>
                  <strong>Practical software and scalable technology solutions</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-anchor">
          <div className="technical-pattern" aria-hidden="true" />
          <div className="content-frame">
            <SectionHeading
              index="02"
              eyebrow="Technical skills"
              title="A growing toolkit across systems, data, and delivery."
              description="The foundations I bring to AI/ML and software-oriented work, organised by the way I apply them."
            />
            <div className="skill-list">
              {skillGroups.map(({ label, icon: Icon, skills }) => (
                <article className="skill-row" key={label}>
                  <div className="skill-row-title">
                    <Icon size={19} strokeWidth={1.65} aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                  <div className="skill-tags">
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects section-anchor">
          <div className="content-frame">
            <SectionHeading
              index="03"
              eyebrow="Selected work"
              title="Projects at the intersection of applied AI, automation, and trust."
              description="A concise initial portfolio of project work. Each entry is structured to make room for deeper technical case studies as the work evolves."
            />
            <div className="project-stack">
              <article className="project-card project-card-primary">
                <div className="project-card-head">
                  <div>
                    <p className="project-index">PROJECT / 01</p>
                    <h3>Smart Grocery Expiry Prediction &amp; Alert System</h3>
                  </div>
                  <span className="project-type">Applied AI</span>
                </div>
                <div className="project-grid">
                  <div>
                    <p className="project-summary">
                      An OCR-based application that extracts expiry information from product images, transforms structured data for machine-learning development, and supports automated expiry alerts.
                    </p>
                    <div className="project-points">
                      <span><Check size={14} aria-hidden="true" /> OCR-based expiry information extraction</span>
                      <span><Check size={14} aria-hidden="true" /> Structured data processing and transformation</span>
                      <span><Check size={14} aria-hidden="true" /> Automated alerts for approaching product expiry dates</span>
                    </div>
                  </div>
                  <div className="project-meta">
                    <div>
                      <span>Methods</span>
                      <strong>OCR · Data Processing · Machine Learning</strong>
                    </div>
                    <div>
                      <span>Tools</span>
                      <strong>Python · OpenCV · Pandas</strong>
                    </div>
                  </div>
                </div>
                <footer className="project-footer">
                  <span>Case study details can be expanded here as the project develops.</span>
                  <ArrowDownRight size={18} aria-hidden="true" />
                </footer>
              </article>

              <article className="project-card project-card-secondary">
                <div className="project-visual">
                  <img src="/manus-storage/mohan-project-inferchain_cf5e622f.png" alt="Abstract diagram representing verifiable AI inference workflows" />
                  <span>Workflow sketch / secure inference</span>
                </div>
                <div className="project-secondary-content">
                  <div className="project-card-head">
                    <div>
                      <p className="project-index">PROJECT / 02</p>
                      <h3>InferChain — Verifiable AI Inference Platform</h3>
                    </div>
                    <span className="project-type">AI Systems</span>
                  </div>
                  <p className="project-summary">
                    A platform focused on secure, transparent AI inference workflows, integrating blockchain-based verification to improve trust and traceability for inference requests.
                  </p>
                  <div className="project-points compact">
                    <span><Check size={14} aria-hidden="true" /> Blockchain-based verification mechanisms</span>
                    <span><Check size={14} aria-hidden="true" /> Workflow automation and validation for AI inference requests</span>
                  </div>
                  <div className="project-footer">
                    <span>Expandable project record</span>
                    <ArrowDownRight size={18} aria-hidden="true" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="experience section-anchor">
          <div className="content-frame">
            <SectionHeading index="04" eyebrow="Experience" title="Learning to examine systems with a security mindset." />
            <article className="experience-record">
              <div className="experience-date">Jan 2025</div>
              <div className="experience-role">
                <div className="experience-role-title">
                  <ShieldCheck size={22} strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <p className="eyebrow">Internship</p>
                    <h3>Cybersecurity &amp; Ethical Hacking Intern</h3>
                  </div>
                </div>
                <p className="company-name">Zybeak Technologies Pvt. Ltd. <span>· Chennai</span></p>
                <ul>
                  <li>Performed vulnerability assessments and security analysis on systems and web applications.</li>
                  <li>Worked with cybersecurity tools to identify and analyse security weaknesses.</li>
                  <li>Assisted in penetration testing and troubleshooting activities.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="certifications" className="certifications section-anchor">
          <div className="content-frame">
            <SectionHeading
              index="05"
              eyebrow="Certifications"
              title="Documented learning across data, machine vision, databases, and cyber security."
            />
            <div className="certification-grid">
              {certifications.map((certification, index) => (
                <div className="certification-item" key={certification}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Award size={19} strokeWidth={1.55} aria-hidden="true" />
                  <strong>{certification}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="achievements section-anchor">
          <div className="content-frame">
            <SectionHeading index="06" eyebrow="Achievements" title="A record of building, competing, and learning in public." />
            <div className="achievement-list">
              {achievements.map((achievement) => (
                <article className="achievement-row" key={achievement.title}>
                  <span className="achievement-date">{achievement.date}</span>
                  <div>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.detail}</p>
                  </div>
                  <ArrowUpRight size={21} strokeWidth={1.5} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-anchor">
          <div className="contact-inner">
            <div className="contact-copy">
              <p className="eyebrow">07 / Contact</p>
              <h2>Let&apos;s build something thoughtful.</h2>
              <p>
                I&apos;m always interested in conversations around AI/ML, software development, full-stack work, cloud computing, and meaningful engineering challenges.
              </p>
            </div>
            <div className="contact-options">
              <a className="contact-primary" href="mailto:mohansithaiya@gmail.com">
                <span>Write to me</span>
                <strong>mohansithaiya@gmail.com</strong>
                <ArrowUpRight size={21} aria-hidden="true" />
              </a>
              <div className="contact-secondary-grid">
                <a href="tel:+917397318722">
                  <Phone size={18} aria-hidden="true" />
                  <span>Call</span>
                  <strong>+91 73973 18722</strong>
                </a>
                <a href="https://linkedin.com/in/mohanxtech07" target="_blank" rel="noreferrer">
                  <Linkedin size={18} aria-hidden="true" />
                  <span>Connect</span>
                  <strong>LinkedIn</strong>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
                <a href="https://github.com/Mohansithaiya" target="_blank" rel="noreferrer">
                  <Github size={18} aria-hidden="true" />
                  <span>Explore</span>
                  <strong>GitHub</strong>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
                <a href="https://maps.google.com/?q=Chennai,Tamil+Nadu,India" target="_blank" rel="noreferrer">
                  <MapPin size={18} aria-hidden="true" />
                  <span>Based in</span>
                  <strong>Chennai, India</strong>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src="/manus-storage/mohan-ms-mark_77f6fd8d.png" alt="" />
          <span>Mohan S</span>
        </div>
        <p>AI/ML · Software Development · Full-Stack · Cloud</p>
        <p>© {new Date().getFullYear()} Mohan S</p>
      </footer>
    </div>
  );
}
