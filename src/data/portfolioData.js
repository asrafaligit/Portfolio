import cricketverseImage from '../assets/cricketverse.jpg';
import airecruitmentImage from '../assets/airecruitment.jpg';
import aakasaskillsImage from '../assets/aakasaskills.jpg';
import aakasanexusImage from '../assets/aakasanexus.webp';
import aakasalmsImage from '../assets/aakasalms.webp';
import aakasacrmImage from '../assets/aakasacrm.jpg';
import aakasahrmsImage from '../assets/aakasahrms.jpg';
import jankitradersImage from '../assets/jankitraders.webp';
import punarnavamImage from '../assets/punarnavam.webp';

// ============================================================
// portfolioData.js — Centralized configuration for Md Asraf Ali's Portfolio
// Built from official resume details.
// ============================================================

export const personalInfo = {
  name: "Md Asraf Ali",
  firstName: "Md Asraf",
  brandName: "MD ASRAF ALI",
  shortBrand: "ASRAF",
  title: "Software Developer & AI/ML Engineer",
  location: "Bangalore, Karnataka, India",
  phone: "+91 7369024123",
  email: "asrafalidhaka123@gmail.com",
  emails: {
    primary: "asrafalidhaka123@gmail.com",
    secondary: "",
  },
  summary:
    "MCA graduate and full-time Software Developer with hands-on experience building production-grade, full-stack web platforms and AI-powered systems using the MERN stack, Tailwind CSS, FastAPI, Python, and machine learning. Architect of scalable commercial ecosystems including Aakasa Skills Academy, Aakasa Nexus, Aakasa Learn LMS, CRM, HRMS, and client platforms like Janki Traders and Punarnavam Clinic. Seeking Software Engineer, Backend, or AI/ML Engineer roles.",
  resumeUrl: "/Md_AsrafAli_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/asrafaligit",
  linkedin: "https://linkedin.com/in/md-asraf-ali-",
  portfolio: "https://md-asraf-ali.vercel.app",
  website: "https://md-asraf-ali.vercel.app",
  email: "mailto:asrafalidhaka123@gmail.com",
  phone: "tel:+917369024123",
  instagram: null,
  tiktok: null,
  discord: null,
};

export const heroContent = {
  greeting: "Hi, I'm Md Asraf Ali",
  titleHighlight: "Software Developer",
  rotatingTitles: [
    "Software Developer",
    "Full Stack Developer",
    "AI / ML Engineer",
    "MERN Stack Specialist",
    "Backend Architect",
  ],
  subtitle:
    "MCA graduate and full-time Software Developer building production-ready web apps, scalable backend systems, and intelligent AI-powered solutions.",
  ctaPrimary: { text: "View Featured Work", href: "#projects" },
  ctaSecondary: {
    text: "Get In Touch",
    href: "#contact",
  },
  ctaResume: { text: "View Resume", href: "/Md_AsrafAli_Resume.pdf" },
};

export const aboutContent = {
  heading: "Engineering Scalable Web & AI Systems",
  bio: `Hi, my name is <span class="text-slate-900 text-xl font-black mx-1 tracking-wide uppercase">Md Asraf Ali</span>. I am an MCA graduate and full-time Software Developer building production-grade web applications, enterprise SaaS platforms, and AI-driven systems.`,
  techStack: ["MERN Stack", "FastAPI & Python", "Tailwind CSS", "Enterprise SaaS", "Machine Learning", "MCP & LLMs"],
  paragraphs: [
    "I am an MCA graduate and full-time Software Developer with extensive hands-on experience architecting and deploying production-ready full-stack applications. My focus centers on building resilient backend architectures, safeguarding application security, and bridging modern software engineering with artificial intelligence.",
    "At Aakasa Sphere, I engineered and deployed a complete digital ecosystem serving active users across India: Aakasa Skills Academy (edtech sales platform), Aakasa Nexus (business growth agency), Aakasa Learn (high-concurrency LMS with automated batch provisioning), an internal visual sales pipeline CRM, and an enterprise HRMS with automated HR letter generation.",
    "Beyond internal platforms, I deliver high-impact client systems — including Janki Traders (B2B industrial materials catalog & dynamic RFQ engine) and Punarnavam Ayurveda Clinic (modern medical portal with custom headless CMS and dynamic XML sitemaps) — alongside cutting-edge AI systems featuring 17 custom Model Context Protocol (MCP) tools and predictive ML models.",
  ]
};

export const skillsContent = {
  badge: "ENGINEERING PROCESS",
  heading: "How I Architect & Build",
  description:
    "From requirement analysis to high-concurrency production deployments — combining clean architecture, strict security, and AI intelligence at every stage.",
  cards: [
    {
      number: "01",
      title: "Analyze & Architect",
      text: "I start by dissecting requirements, modeling database schemas (MongoDB, SQL), designing RESTful API contracts, and planning robust authentication & authorization workflows.",
      keywords: ["Requirements", "Schema Design", "OAuth 2.1 & RBAC"],
      icon: "understand",
    },
    {
      number: "02",
      title: "Full-Stack Build",
      text: "I develop scalable frontend and backend systems using MERN stack and FastAPI. I prioritize reusable components, code splitting, clean state management, and modern Tailwind CSS.",
      keywords: ["React", "Node.js / Express", "FastAPI", "Tailwind CSS"],
      icon: "design",
    },
    {
      number: "03",
      title: "AI & Pipeline Integration",
      text: "I integrate LLM capabilities via Gemini API and Model Context Protocol (MCP) servers, develop predictive machine learning models, and automate data extraction pipelines.",
      keywords: ["Gemini API", "MCP Tools", "ML Models", "Data Pipelines"],
      icon: "build",
    },
    {
      number: "04",
      title: "Harden & Deploy",
      text: "I secure and optimize applications for production: enforcing API rate limiting, SQL injection defense, Docker containerization, and fine-tuning response latency.",
      keywords: ["Rate Limiting", "SQL Injection Defense", "Docker", "Performance"],
      icon: "refine",
    },
  ],
};

// Technical Skills Data matching Resume
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 94 },
        { name: "Python", level: 92 },
        { name: "C", level: 82 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "FastAPI", level: 88 },
        { name: "Redux Toolkit", level: 86 },
        { name: "Tailwind CSS", level: 94 },
        { name: "Django", level: 82 },
        { name: "HTML & CSS", level: 96 }
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MongoDB", level: 92 },
        { name: "MySQL", level: 86 },
        { name: "SQLite", level: 85 },
        { name: "SQL", level: 88 },
        { name: "DBMS", level: 88 }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", level: 88 },
        { name: "PyTorch", level: 84 },
        { name: "Keras", level: 85 },
        { name: "NumPy & Pandas", level: 92 },
        { name: "Deep Learning (ANN/CNN/RNN)", level: 86 },
        { name: "Computer Vision (OpenCV)", level: 85 },
        { name: "NLP", level: 80 },
        { name: "Matplotlib & Seaborn", level: 86 }
      ]
    },
    {
      title: "Concepts & Security",
      skills: [
        { name: "Model Context Protocol (MCP)", level: 90 },
        { name: "OAuth 2.1 & RBAC", level: 88 },
        { name: "Code Splitting", level: 90 },
        { name: "Rate Limiting", level: 88 },
        { name: "SQL Injection Prevention", level: 92 },
        { name: "Data Structures & Algorithms", level: 88 },
        { name: "Data Analysis & Power BI", level: 84 }
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "Docker", level: 86 },
        { name: "Gemini API", level: 90 },
        { name: "Postman", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    }
  ]
};

// Work Experience Data matching Resume
export const internshipsList = [
  {
    organization: "Aakasa Sphere / Aakasa Skills",
    role: "Software Developer",
    duration: "July 2025 – Present",
    location: "Bangalore, India",
    badge: "Full-Time",
    skills: [
      "Architected and deployed full-stack digital ecosystem: Aakasa Skills Academy, Aakasa Nexus, companion LMS (Aakasa Learn), and internal CRM & HRMS platforms.",
      "Engineered automated webhook synchronization connecting external course sales directly to LMS student enrollment and cohort batch assignment.",
      "Built visual Kanban deal pipelines, real-time employee attendance & leave workflows, and hardened endpoints with rate limiting, code splitting, and SQL injection prevention."
    ],
    tech: ["MERN Stack", "React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Recharts", "Webhooks", "RBAC"],
    liveLinks: [
      { label: "Skills Academy", url: "https://aakasaskillsacademy.com" },
      { label: "Aakasa Nexus", url: "https://aakasanexus.com" },
      { label: "LMS Portal", url: "https://learn.aakasaskillsacademy.com" }
    ]
  },
  {
    organization: "Freelance & Technical Consulting",
    role: "Full-Stack Consultant",
    duration: "2024 – Present",
    location: "Bangalore, India",
    badge: "Consulting",
    skills: [
      "Engineered Janki Traders: a full-scale B2B trading & quotation portal featuring industrial insulation materials catalog, verified customer access approvals, and RFQ workflows.",
      "Developed Punarnavam Ayurveda Clinic & CMS: a modern healthcare portal for Vaidya Ankur Singhal with patient consultation booking, therapy directory, and dynamic XML sitemap SEO engine."
    ],
    tech: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "SEO / Sitemaps"]
  },
  {
    organization: "Sankhyana Consultancy Services Pvt Ltd",
    role: "MERN Stack Intern",
    duration: "June 2026 – July 2026",
    location: "Bangalore, India",
    badge: "Internship",
    skills: [
      "Developed backend APIs and business workflows for an enterprise multi-tenant recruitment CRM using Node.js, Express.js, and MongoDB.",
      "Designed and implemented Model Context Protocol (MCP) servers enabling secure AI assistant integrations with OAuth 2.1 and RBAC.",
      "Collaborated with senior engineers to extend production features, debug issues, and optimize backend performance."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "MCP", "OAuth 2.1", "RBAC", "REST APIs"]
  },
  {
    organization: "BLP Industry-ai",
    role: "AI/ML Intern",
    duration: "September 2025 – January 2026",
    location: "Bangalore, India",
    badge: "Internship",
    skills: [
      "Built and deployed machine learning solutions using Django, MongoDB, and deep learning models (ANN, CNN, RNN) for predictive analytics and computer vision tasks.",
      "Automated model retraining pipelines, implemented ROI-based image validation, and containerized services with Docker for scalable, reproducible deployments."
    ],
    tech: ["Django", "MongoDB", "Python", "Deep Learning", "ANN / CNN / RNN", "Computer Vision", "Docker"]
  }
];

// Beyond Code / Journey Data
export const leadershipList = [
  {
    category: "MASTER'S DEGREE",
    title: "MCA – PES College",
    description: "Earned Master in Computer Application (MCA) in Bangalore (August 2025), mastering advanced data structures, full-stack architecture, machine learning, and enterprise system design.",
    label: "PES COLLEGE · BANGALORE",
    motif: "brackets"
  },
  {
    category: "BACHELOR'S DEGREE",
    title: "BCA – Dayananda Sagar College",
    description: "Completed Bachelor in Computer Application at Dayananda Sagar College of Arts, Science and Commerce (September 2022), establishing core CS foundations in programming, DBMS, and algorithms.",
    label: "DAYANANDA SAGAR · BANGALORE",
    motif: "layers"
  },
  {
    category: "FULL-TIME ROLE",
    title: "Software Developer at Aakasa Sphere",
    description: "Architecting and deploying production-grade MERN web platforms (aakasaskillsacademy.com, aakasanexus.com, and learn.aakasaskillsacademy.com) alongside enterprise CRM & HRMS tools with code splitting, API rate limiting, and SQL injection defenses.",
    label: "MERN · TAILWIND · SECURITY · SAAS",
    motif: "cursor"
  },
  {
    category: "CONSULTING & CLIENTS",
    title: "Client & Healthcare Systems",
    description: "Delivered production systems for external clients including Janki Traders (B2B industrial materials catalog & quotation portal) and Punarnavam Ayurveda Clinic (modern medical portal & CMS).",
    label: "REACT 19 · NODE.JS · CMS · SEO",
    motif: "cube"
  },
  {
    category: "AI & PROTOCOLS",
    title: "MCP & AI Assistant Integrations",
    description: "Engineered Model Context Protocol (MCP) servers with 17 tools, enabling AI agents to execute secure candidate workflows with OAuth 2.1 authentication and role-based access control.",
    label: "MODEL CONTEXT PROTOCOL · OAUTH 2.1",
    motif: "layout"
  },
  {
    category: "DEEP LEARNING",
    title: "AI/ML & Computer Vision at BLP",
    description: "Built and deployed ANN, CNN, and RNN predictive analytics and computer vision pipelines, automating retraining workflows and containerizing microservices with Docker.",
    label: "DEEP LEARNING · DOCKER · DJANGO",
    motif: "motion"
  },
  {
    category: "CERTIFICATIONS",
    title: "Continuous Technical Mastery",
    description: "Earned certifications in Neural Networks, Deep Learning with Keras, Python OpenCV, and Advanced SQL to stay at the cutting edge of AI and data engineering.",
    label: "KERAS · OPENCV · SQL · NEURAL NETWORKS",
    motif: "cube"
  },
  {
    category: "LANGUAGES & INTERESTS",
    title: "Multilingual & Cricket Analytics",
    description: "Native Hindi speaker, fluent in English, and beginner in Kannada. Enthusiastic about cricket analytics, mobile gaming, and cinematic storytelling.",
    label: "HINDI · ENGLISH · KANNADA · CRICKET",
    motif: "orbit"
  }
];

// Soft Skills Data matching Resume & Strengths
export const softSkillsList = [
  { name: "Problem Solving", icon: "problem-solving", desc: "Deconstructing complex architectural challenges into modular, resilient, and maintainable systems." },
  { name: "Backend Scalability", icon: "leadership", desc: "Designing high-throughput API endpoints, database indexes, rate limiters, and secure RBAC hierarchies." },
  { name: "Team Collaboration", icon: "collaboration", desc: "Collaborating seamlessly with senior engineers, product designers, and cross-functional teams in agile sprints." },
  { name: "Communication", icon: "communication", desc: "Clear, structured technical documentation, API specifications, and articulate cross-team updates." },
  { name: "AI/LLM Workflow Integration", icon: "creativity", desc: "Connecting modern LLMs via MCP servers and Gemini API to automate real-world business workflows." },
  { name: "Security Mindset", icon: "speaking", desc: "Proactively engineering defense-in-depth: SQL injection prevention, OAuth 2.1, and endpoint rate limiting." },
  { name: "Adaptability & Speed", icon: "adaptability", desc: "Rapidly adopting emerging frameworks — from FastAPI microservices to Model Context Protocol tooling." },
  { name: "Production Execution", icon: "time", desc: "Delivering end-to-end features on time with automated Docker builds, linting, and performance testing." }
];

// Projects Data matching all works
export const projects = [
  {
    id: "aakasa-skills",
    number: "01",
    category: "Enterprise & EdTech",
    badge: "Production EdTech Platform",
    title: "Aakasa Skills Academy",
    description:
      "Flagship digital education and professional certification platform serving students and professionals across India. Built with React 19, Tailwind CSS v4, Lenis smooth scrolling, Three.js, and GSAP micro-animations. Features complete course discovery, checkout flows, and automated webhook synchronization dispatching enrollment events directly to the LMS.",
    highlights: [
      "Course discovery & online checkout flow",
      "Interactive Three.js & GSAP visual experience",
      "Automated webhook dispatch to Aakasa Learn LMS",
      "API rate limiting & defensive security hardening"
    ],
    techTags: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "GSAP", "Three.js", "Webhooks"],
    image: aakasaskillsImage,
    links: {
      github: "https://github.com/asrafaligit",
      demo: "https://aakasaskillsacademy.com",
    },
    isFlagship: true,
  },
  {
    id: "aakasa-nexus",
    number: "02",
    category: "Business & Growth",
    badge: "Agency & Business Growth",
    title: "Aakasa Nexus",
    description:
      "Modern digital growth, startup support, and higher-education advisory platform. Engineered with React 19, Tailwind CSS v4, Framer Motion, and GSAP. Features comprehensive service showcases for SEO, AEO, GEO, and PPC, business registration guidance, UG/PG counseling pathways, and dynamic consultation booking modals.",
    highlights: [
      "Next-gen Search & Generative Engine Optimization (AEO/GEO)",
      "Interactive consultation booking modals & drawer navigation",
      "UG / PG higher education admission pathways",
      "Zero-latency component lazy loading & SEO optimization"
    ],
    techTags: ["React 19", "Tailwind CSS v4", "Framer Motion", "GSAP", "Lucide React", "Vite", "SEO / AEO"],
    image: aakasanexusImage,
    links: {
      github: "https://github.com/asrafaligit",
      demo: "https://aakasanexus.com",
    },
    isFlagship: true,
  },
  {
    id: "aakasa-learn",
    number: "03",
    category: "Enterprise & EdTech",
    badge: "Learning Management System",
    title: "Aakasa Learn (LMS)",
    description:
      "High-concurrency LMS engineered for enrolled students, tutors, and administrators. Listens for external sales webhooks to automatically provision student accounts and map them into active course batches. Features live lecture schedules, curriculum player, assignment submission & grading, doubt clearing forums, and automated digital certificate generation.",
    highlights: [
      "Automated student provisioning & batch mapping via webhooks",
      "Role-Based Access Control (Admin, Tutor, Student)",
      "Curriculum player, live classes & assignment tracking",
      "Automated verifiable certificate generation"
    ],
    techTags: ["MERN Stack", "React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "REST APIs"],
    image: aakasalmsImage,
    links: {
      github: "https://github.com/asrafaligit",
      demo: "https://learn.aakasaskillsacademy.com",
    },
    isFlagship: true,
  },
  {
    id: "aakasa-crm",
    number: "04",
    category: "SaaS & Systems",
    badge: "Sales & Pipeline CRM",
    title: "Aakasa CRM",
    description:
      "Enterprise lead management and sales performance CRM tailored for conversion acceleration. Built with a visual drag-and-drop Kanban pipeline across custom deal stages, smart bucket lead allocation algorithms, real-time lead ingestion webhooks, and comprehensive sales KPI dashboards powered by Recharts.",
    highlights: [
      "Visual drag-and-drop Kanban deal pipeline",
      "Intelligent lead ingestion & bucket allocation logic",
      "Executive KPI metrics & revenue trend charts (Recharts)",
      "Granular role-based permissions (Sales Rep, Manager, Admin)"
    ],
    techTags: ["React 19", "Tailwind CSS v4", "Recharts", "Framer Motion", "Node.js", "Express.js", "MongoDB"],
    image: aakasacrmImage,
    links: {
      github: "https://github.com/asrafaligit",
      isInternal: true,
    },
    isFlagship: false,
  },
  {
    id: "aakasa-hrms",
    number: "05",
    category: "SaaS & Systems",
    badge: "Enterprise HR Management",
    title: "Aakasa HRMS",
    description:
      "Full-cycle Human Resource Management System streamlining organization operations from onboarding to offboarding. Handles real-time employee attendance tracking, leave quota calculations and approvals, asset inventory logging, and automated generation and digital signing of offer letters, warning letters, and resignations.",
    highlights: [
      "Real-time attendance tracking & leave approval workflows",
      "Automated PDF document generation (Offer/Warning/Resignation)",
      "Company asset assignment and credential vaults",
      "Comprehensive employee directory & department analytics"
    ],
    techTags: ["React 19", "Tailwind CSS v4", "Axios", "Lucide React", "Node.js", "Express.js", "MongoDB", "RBAC"],
    image: aakasahrmsImage,
    links: {
      github: "https://github.com/asrafaligit",
      isInternal: true,
    },
    isFlagship: false,
  },
  {
    id: "janki-traders",
    number: "06",
    category: "Client Solutions",
    badge: "B2B Trading & Materials Portal",
    title: "Janki Traders",
    description:
      "Production B2B trading and quotation platform for industrial insulation materials, engineering plastics, and laminates (FR4, G10, Bakelite, Delrin, Epoxy sheets). Designed with customer verification approvals, dynamic RFQ (Request for Quote) workflows, catalog search, and an administrative order management dashboard.",
    highlights: [
      "Industrial insulation & engineering plastics product catalog",
      "Dynamic Request for Quote (RFQ) & inquiry workflow",
      "Verified customer onboarding & admin approval system",
      "Administrative catalog, order, and customer management"
    ],
    techTags: ["React 19", "Tailwind CSS v4", "Lucide React", "Node.js", "Express.js", "MongoDB", "Vite"],
    image: jankitradersImage,
    links: {
      github: "https://github.com/asrafaligit",
      isInternal: true,
    },
    isFlagship: false,
  },
  {
    id: "punarnavam",
    number: "07",
    category: "Client Solutions",
    badge: "Healthcare Platform & CMS",
    title: "Punarnavam Ayurveda Clinic & CMS",
    description:
      "Modern healthcare web platform and content management system for Punarnavam Ayurveda Clinic, guided by Vaidya Ankur Singhal (BAMS, MD). Features patient consultation booking, holistic therapy guides (Panchakarma, Shirodhara, Detox), a custom headless admin CMS, and dynamic XML sitemap generation for medical SEO.",
    highlights: [
      "Online patient consultation & appointment booking system",
      "Custom admin CMS for clinic content & medical articles",
      "Dynamic XML sitemap generator for medical SEO indexing",
      "Comprehensive Ayurvedic therapies and herbal directory"
    ],
    techTags: ["React 19", "Vanilla CSS", "Node.js", "Express.js", "MongoDB", "Sitemap SEO", "Vite"],
    image: punarnavamImage,
    links: {
      github: "https://github.com/asrafaligit",
      isInternal: true,
    },
    isFlagship: false,
  },
  {
    id: "ai-recruitment",
    number: "08",
    category: "AI & Analytics",
    badge: "AI Agents & MCP",
    title: "AI Recruitment Platform",
    description:
      "Enterprise multi-tenant AI recruitment platform with OAuth 2.1 authentication and RBAC. Features a high-performance FastAPI microservice with Gemini API to automate resume parsing, candidate scoring, and AI offer generation, alongside a custom 17-tool MCP server supporting job applications and timed MCQ assessments.",
    highlights: [
      "Custom 17-tool Model Context Protocol (MCP) server",
      "FastAPI microservice with Gemini API resume parsing",
      "OAuth 2.1 authentication with role-based access control",
      "Automated candidate scoring & timed assessment engine"
    ],
    techTags: ["React.js", "Redux Toolkit", "FastAPI", "Python", "Node.js", "MongoDB", "OAuth 2.1", "Gemini API", "MCP"],
    image: airecruitmentImage,
    links: {
      github: "https://github.com/asrafaligit",
      demo: "https://md-asraf-ali.vercel.app",
    },
    isFlagship: true,
  },
  {
    id: "cricketverse",
    number: "09",
    category: "AI & Analytics",
    badge: "Full-Stack Analytics & ML",
    title: "CricketVerse",
    description:
      "Full-stack cricket analytics platform delivering live match insights and predictive intelligence. Implemented ensemble-based win-probability prediction via Flask model integration to improve second-inning outcome accuracy, powered by a real-time web scraping data pipeline and fault-tolerant MongoDB storage.",
    highlights: [
      "Ensemble machine learning win-probability prediction",
      "Real-time web scraping pipeline with fault tolerance",
      "Interactive live match analytics & player metrics",
      "Flask ML microservice integrated with MERN frontend"
    ],
    techTags: ["React.js", "Node.js", "Express.js", "MongoDB", "Flask", "Python", "Machine Learning", "Web Scraping"],
    image: cricketverseImage,
    links: {
      github: "https://github.com/asrafaligit",
      demo: "https://md-asraf-ali.vercel.app",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Introduction to Neural Network",
      issuer: "Certification",
      date: "November 2025",
      icon: "🧠",
    },
    {
      name: "Introduction to Deep Learning with Keras",
      issuer: "Certification",
      date: "November 2025",
      icon: "⚡",
    },
    {
      name: "Introduction to Python OpenCV",
      issuer: "Certification",
      date: "November 2025",
      icon: "👁️",
    },
    {
      name: "Advanced SQL",
      issuer: "Certification",
      date: "November 2025",
      icon: "🗄️",
    },
  ],
  viewAllUrl: null,
};

export const education = {
  degree: "Master in Computer Application (MCA)",
  institution: "PES College",
  location: "Bangalore, India",
  graduation: "August 2025",
  bcaDegree: "Bachelor in Computer Application (BCA)",
  bcaInstitution: "Dayananda Sagar College of Arts, Science and Commerce",
  bcaLocation: "Bangalore, India",
  bcaGraduation: "September 2022",
};

export const footerContent = {
  taglines: [
    "Full-Stack Software Developer & AI/ML Engineer",
    "MERN Stack · FastAPI · Python · Model Context Protocol",
    "Scalable Backends · Production Hardened Systems",
  ],
  credential: "MCA (PES College) · BCA (Dayananda Sagar)",
  copyright: `© ${new Date().getFullYear()} Md Asraf Ali | Built with React & Tailwind CSS`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
