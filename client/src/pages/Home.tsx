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
  Check,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Github,
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

const resumeUrl = "/MOHAN_RESUME_AIML.pdf";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Volunteering", "#volunteering"],
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

const certificationFilters = ["All", "AI / ML", "Cloud", "Data & Databases", "Software / Web", "Cybersecurity", "Hackathons", "GenAI"] as const;

type CertificationFilter = (typeof certificationFilters)[number];

type CertificationRecord = {
  title: string;
  issuer: string;
  mark: string;
  issueDate: string | null;
  category: Exclude<CertificationFilter, "All">;
  featured: boolean;
  appliedIn: { label: string; href: string } | null;
};

const certifications: readonly CertificationRecord[] = [
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS",
    mark: "AWS",
    issueDate: null,
    category: "Cloud",
    featured: true,
    appliedIn: null,
  },
  {
    title: "Computer Vision for Industrial Inspection",
    issuer: "NVIDIA",
    mark: "NV",
    issueDate: null,
    category: "AI / ML",
    featured: true,
    appliedIn: null,
  },
  {
    title: "IBM Introduction to Machine Learning",
    issuer: "IBM",
    mark: "IBM",
    issueDate: null,
    category: "AI / ML",
    featured: true,
    appliedIn: null,
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    mark: "IBM",
    issueDate: null,
    category: "AI / ML",
    featured: true,
    appliedIn: null,
  },
  {
    title: "Relational Database Implementation and Applications",
    issuer: "Illinois Institute of Technology",
    mark: "IIT",
    issueDate: null,
    category: "Data & Databases",
    featured: true,
    appliedIn: null,
  },
  {
    title: "Database Management Essentials",
    issuer: "University of Colorado Boulder",
    mark: "CU",
    issueDate: null,
    category: "Data & Databases",
    featured: true,
    appliedIn: null,
  },
  {
    title: "J.P. Morgan – Software Engineering Job Simulation",
    issuer: "Forage",
    mark: "JP",
    issueDate: null,
    category: "Software / Web",
    featured: true,
    appliedIn: null,
  },
  {
    title: "Deloitte Australia – Data Analytics Job Simulation",
    issuer: "Forage",
    mark: "DA",
    issueDate: null,
    category: "Data & Databases",
    featured: true,
    appliedIn: null,
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    mark: "G",
    issueDate: null,
    category: "Data & Databases",
    featured: false,
    appliedIn: null,
  },
  {
    title: "Cisco Ethical Hacker",
    issuer: "Cisco",
    mark: "CS",
    issueDate: null,
    category: "Cybersecurity",
    featured: false,
    appliedIn: null,
  },
  {
    title: "Cyber Threat Management",
    issuer: "Not provided",
    mark: "CT",
    issueDate: null,
    category: "Cybersecurity",
    featured: false,
    appliedIn: null,
  },
  {
    title: "IBM Machine Learning",
    issuer: "IBM",
    mark: "IBM",
    issueDate: null,
    category: "AI / ML",
    featured: false,
    appliedIn: null,
  },
  {
    title: "NVIDIA Computer Vision",
    issuer: "NVIDIA",
    mark: "NV",
    issueDate: null,
    category: "AI / ML",
    featured: false,
    appliedIn: null,
  },
  {
    title: "DBMS (Colorado)",
    issuer: "Not provided",
    mark: "DB",
    issueDate: null,
    category: "Data & Databases",
    featured: false,
    appliedIn: null,
  },
  {
    title: "Relational Databases (Illinois Tech)",
    issuer: "Illinois Tech",
    mark: "IT",
    issueDate: null,
    category: "Data & Databases",
    featured: false,
    appliedIn: null,
  },
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
  const [activeCertificationFilter, setActiveCertificationFilter] = useState<CertificationFilter>("All");
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 18);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const filteredCertifications = certifications.filter(
    (certification) => activeCertificationFilter === "All" || certification.category === activeCertificationFilter,
  );
  const visibleCertifications =
    activeCertificationFilter === "All" && !showAllCertifications
      ? filteredCertifications.filter((certification) => certification.featured)
      : filteredCertifications;
  const additionalCertificationCount = certifications.filter((certification) => !certification.featured).length;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Mohan S home" onClick={closeMenu}>
            <img src="/mohan-ms-mark.png" alt="Mohan S monogram" />
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
                <a className="button button-primary" href="#projects" aria-label="View NAMMANADU, the featured project">
                  <span>View featured project</span>
                  <ArrowDownRight size={17} aria-hidden="true" />
                </a>
                <a className="button button-secondary" href={resumeUrl} download="Mohan_S_Resume.pdf">
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
                <img className="hero-photo" src="/MOHAN_S_PHOTO.png" alt="Professional headshot of Mohan S" />
                <div className="profile-art-label">Mohan S / Chennai</div>
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
              <article className="project-card project-card-nammanadu">
                <div className="nammanadu-preview">
                  <p className="preview-label">Project preview</p>
                  <img src="/nammanadu-tamilnadu-glow.png" alt="Tamil Nadu outline from the NAMMANADU project" />
                  <div className="preview-caption">
                    <span>Tamil Nadu</span>
                    <strong>Civic assistance</strong>
                  </div>
                </div>
                <div className="nammanadu-content">
                  <div className="project-card-head">
                    <div>
                      <p className="project-index">FLAGSHIP PROJECT / 01 · CURRENT FULL-STACK WORK</p>
                      <h3>NAMMANADU</h3>
                    </div>
                    <span className="project-type project-type-active">Ongoing · active development</span>
                  </div>
                  <p className="nammanadu-lead">AI-powered civic assistance platform for Tamil Nadu citizens.</p>
                  <p className="project-summary">
                    NAMMANADU is focused on helping citizens access public services, report civic issues, submit complaints, track complaint resolution, explore government schemes, and interact with role-based government workflows. It is an ongoing project under active development, not a completed production government platform.
                  </p>

                  <div className="nammanadu-role" aria-label="Project role and type">
                    <div>
                      <span>Role</span>
                      <strong>Developer</strong>
                    </div>
                    <div>
                      <span>Project type</span>
                      <strong>Full-stack civic assistance platform</strong>
                    </div>
                  </div>

                  <div className="nammanadu-actions" aria-label="NAMMANADU project links">
                    <a className="project-link-primary" href="https://github.com/Mohansithaiya/NAMMANADU-Platform" target="_blank" rel="noreferrer">
                      <Github size={16} aria-hidden="true" /> View source on GitHub <ExternalIcon />
                    </a>
                    <a className="project-link-secondary" href="https://drive.google.com/file/d/1A7ZN4pO02bmKIiHWnH4Qnq63GvULh1SK/view?usp=sharing" target="_blank" rel="noreferrer">
                      Watch 2-minute demo <ExternalIcon />
                    </a>
                  </div>

                  <div className="nammanadu-detail-grid">
                    <div className="nammanadu-capabilities">
                      <p className="mini-label">Key features</p>
                      <div className="capability-tags">
                        <span>Citizen registration &amp; login</span>
                        <span>Citizen dashboard</span>
                        <span>Complaint creation &amp; submission</span>
                        <span>Category &amp; priority</span>
                        <span>District &amp; constituency</span>
                        <span>Complaint tracking &amp; status</span>
                        <span>Evidence / image support</span>
                        <span>Government scheme exploration</span>
                      </div>
                    </div>
                    <div className="nammanadu-system">
                      <p className="mini-label">Implementation foundation</p>
                      <p>Backend API integration · MongoDB database integration · Role-based application foundation</p>
                    </div>
                  </div>

                  <div className="nammanadu-tech">
                    <p className="mini-label">Technologies used</p>
                    <div>
                      <span>JavaScript</span>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>MongoDB</span>
                      <span>Backend API integration</span>
                    </div>
                  </div>

                  <div className="citizen-workflow" aria-label="Main citizen workflow">
                    <p className="mini-label">Main citizen workflow</p>
                    <ol>
                      <li>Register</li>
                      <li>Login</li>
                      <li>Dashboard</li>
                      <li>Create complaint</li>
                      <li>Add details</li>
                      <li>Submit</li>
                      <li>Track complaint</li>
                    </ol>
                  </div>

                  <figure className="architecture-diagram">
                    <figcaption>
                      <span className="mini-label">Technical architecture / current system flow</span>
                      <p>How citizen requests move through the NAMMANADU application foundation.</p>
                    </figcaption>
                    <div className="architecture-flow" aria-label="Citizen to government service workflow layer system flow">
                      <div className="architecture-node">
                        <span>01</span>
                        <strong>Citizen</strong>
                        <small>Registration, login &amp; civic requests</small>
                      </div>
                      <div className="architecture-arrow" aria-hidden="true">→</div>
                      <div className="architecture-node">
                        <span>02</span>
                        <strong>Frontend</strong>
                        <small>Dashboard &amp; complaint flow</small>
                      </div>
                      <div className="architecture-arrow" aria-hidden="true">→</div>
                      <div className="architecture-node">
                        <span>03</span>
                        <strong>Backend / API</strong>
                        <small>Application integration</small>
                      </div>
                      <div className="architecture-arrow" aria-hidden="true">→</div>
                      <div className="architecture-node">
                        <span>04</span>
                        <strong>Authentication</strong>
                        <small>Citizen access &amp; role foundation</small>
                      </div>
                      <div className="architecture-arrow" aria-hidden="true">→</div>
                      <div className="architecture-node">
                        <span>05</span>
                        <strong>Database</strong>
                        <small>MongoDB integration</small>
                      </div>
                      <div className="architecture-arrow" aria-hidden="true">→</div>
                      <div className="architecture-node">
                        <span>06</span>
                        <strong>AI-assisted services</strong>
                        <small>Civic assistance &amp; scheme exploration</small>
                      </div>
                      <div className="architecture-arrow" aria-hidden="true">→</div>
                      <div className="architecture-node">
                        <span>07</span>
                        <strong>Government service / workflow layer</strong>
                        <small>Role-based application workflows</small>
                      </div>
                    </div>
                  </figure>

                  <figure className="complaint-lifecycle">
                    <figcaption>
                      <span className="mini-label">Complaint lifecycle / current user workflow</span>
                      <p>From citizen complaint creation to the updated status shown in the application.</p>
                    </figcaption>
                    <ol className="complaint-lifecycle-flow" aria-label="NAMMANADU complaint lifecycle">
                      <li>
                        <span>01</span>
                        <div>
                          <strong>Create complaint</strong>
                          <small>Citizen begins a civic complaint.</small>
                        </div>
                      </li>
                      <li>
                        <span>02</span>
                        <div>
                          <strong>Add details</strong>
                          <small>Category, priority, district, constituency, and evidence/image support.</small>
                        </div>
                      </li>
                      <li>
                        <span>03</span>
                        <div>
                          <strong>Submit</strong>
                          <small>Citizen submits the completed complaint.</small>
                        </div>
                      </li>
                      <li>
                        <span>04</span>
                        <div>
                          <strong>Complaint recorded</strong>
                          <small>The submitted complaint is recorded in the current application.</small>
                        </div>
                      </li>
                      <li>
                        <span>05</span>
                        <div>
                          <strong>Status tracking</strong>
                          <small>Citizen tracks the complaint and its current status.</small>
                        </div>
                      </li>
                      <li>
                        <span>06</span>
                        <div>
                          <strong>Government / role-based workflow</strong>
                          <small>Role-based application workflows support complaint handling.</small>
                        </div>
                      </li>
                      <li>
                        <span>07</span>
                        <div>
                          <strong>Resolution / status update</strong>
                          <small>Complaint status management updates the recorded status.</small>
                        </div>
                      </li>
                      <li>
                        <span>08</span>
                        <div>
                          <strong>Citizen views updated status</strong>
                          <small>Updated complaint status is visible through tracking.</small>
                        </div>
                      </li>
                    </ol>
                  </figure>

                  <footer className="project-footer nammanadu-footer">
                    <span>Project status</span>
                    <strong>Ongoing civic technology development</strong>
                  </footer>
                </div>
              </article>

              <article id="smart-grocery" className="project-card project-card-primary">
                <div className="project-card-head">
                  <div>
                    <p className="project-index">PROJECT / 02</p>
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
                  <span>Scope: OCR, data preparation, and expiry-alert workflow</span>
                  <ArrowDownRight size={18} aria-hidden="true" />
                </footer>
                <div className="project-source-actions">
                  <a className="project-source-link" href="https://github.com/Mohansithaiya/Smart-Grocery-Expiry-Prediction-and-Alert-System" target="_blank" rel="noreferrer">
                    <Github size={16} aria-hidden="true" />
                    <span>View source on GitHub</span>
                    <ExternalIcon />
                  </a>
                </div>
              </article>

              <article id="inferchain" className="project-card project-card-secondary">
                <div className="project-visual">
                  <img src="/mohan-project-inferchain.png" alt="Abstract diagram representing verifiable AI inference workflows" />
                  <span>Workflow sketch / secure inference</span>
                </div>
                <div className="project-secondary-content">
                  <div className="project-card-head">
                    <div>
                      <p className="project-index">PROJECT / 03</p>
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
                    <span>Scope: verification, automation, and inference traceability</span>
                    <ArrowDownRight size={18} aria-hidden="true" />
                  </div>
                  <div className="project-source-actions">
                    <a className="project-source-link" href="https://github.com/Mohansithaiya/inferchain" target="_blank" rel="noreferrer">
                      <Github size={16} aria-hidden="true" />
                      <span>View source on GitHub</span>
                      <ExternalIcon />
                    </a>
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

        <section id="volunteering" className="volunteering section-anchor">
          <div className="content-frame">
            <SectionHeading index="05" eyebrow="Volunteering" title="Contributing to social welfare and college community activities." />
            <article className="volunteer-record">
              <div className="volunteer-date">Feb 2024 — Present</div>
              <div className="volunteer-role">
                <div className="volunteer-role-title">
                  <BookOpen size={22} strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <p className="eyebrow">Social services</p>
                    <h3>Volunteer</h3>
                  </div>
                </div>
                <p className="organisation-name">National Service Scheme (NSS)</p>
                <p className="volunteer-description">As an NSS volunteer, I actively contributed to various social welfare and college community activities.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="certifications" className="certifications section-anchor">
          <div className="content-frame">
            <SectionHeading
              index="06"
              eyebrow="Certifications"
              title="Evidence of focused learning across AI, cloud, data, and engineering."
              description="A curated recruiter-facing selection, organised by the technical disciplines most relevant to my current work."
            />
            <div className="certification-controls" aria-label="Certification filters">
              <div className="certification-filter-list" role="group" aria-label="Filter certifications by category">
                {certificationFilters.map((filter) => (
                  <button
                    className={activeCertificationFilter === filter ? "is-active" : ""}
                    type="button"
                    key={filter}
                    aria-pressed={activeCertificationFilter === filter}
                    onClick={() => {
                      setActiveCertificationFilter(filter);
                      if (filter !== "All") setShowAllCertifications(true);
                    }}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <p className="certification-count" aria-live="polite">
                Showing {visibleCertifications.length} of {certifications.length} documented credentials
              </p>
            </div>

            <div className="certification-showcase" aria-label="Certification showcase">
              {visibleCertifications.map((certification, index) => (
                <article className="credential-card" key={certification.title}>
                  <header>
                    <span className="credential-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="issuer-mark" aria-hidden="true">{certification.mark}</span>
                    <Award size={18} strokeWidth={1.55} aria-hidden="true" />
                  </header>
                  <h3>{certification.title}</h3>
                  <div className="credential-details">
                    <div>
                      <span>Issuer</span>
                      <strong>{certification.issuer}</strong>
                    </div>
                    <div>
                      <span>Issue date</span>
                      <strong>{certification.issueDate ?? "Not provided"}</strong>
                    </div>
                  </div>
                  <footer>
                    <span className="credential-category">{certification.category}</span>
                    {certification.appliedIn && (
                      <a href={certification.appliedIn.href}>
                        <span>Applied in projects</span>
                        <strong>{certification.appliedIn.label}</strong>
                        <ArrowDownRight size={15} aria-hidden="true" />
                      </a>
                    )}
                  </footer>
                </article>
              ))}
              {visibleCertifications.length === 0 && (
                <div className="certification-empty">
                  <Award size={21} strokeWidth={1.5} aria-hidden="true" />
                  <p>No documented credentials are available in this category.</p>
                </div>
              )}
            </div>
            {activeCertificationFilter === "All" && additionalCertificationCount > 0 && (
              <button
                className="view-all-certifications"
                type="button"
                onClick={() => setShowAllCertifications((current) => !current)}
                aria-expanded={showAllCertifications}
              >
                <span>{showAllCertifications ? "Show featured certifications" : `View All Certifications · ${additionalCertificationCount} additional records`}</span>
                <ChevronDown size={17} aria-hidden="true" />
              </button>
            )}
          </div>
        </section>

        <section id="achievements" className="achievements section-anchor">
          <div className="content-frame">
            <SectionHeading index="07" eyebrow="Achievements" title="A record of building, competing, and learning in public." />
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
              <p className="eyebrow">08 / Contact</p>
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
          <img src="/mohan-ms-mark.png" alt="" />
          <span>Mohan S</span>
        </div>
        <p>AI/ML · Software Development · Full-Stack · Cloud</p>
        <p>© {new Date().getFullYear()} Mohan S</p>
      </footer>
    </div>
  );
}
