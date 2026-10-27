import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { technicalSkills } from '../data/portfolioData';
import {
  siCss,
  siDjango,
  siDocker,
  siExpress,
  siFastapi,
  siGithub,
  siGooglegemini,
  siHtml5,
  siJavascript,
  siKeras,
  siMongodb,
  siMysql,
  siNodedotjs,
  siNumpy,
  siOpencv,
  siPandas,
  siPostman,
  siPython,
  siPytorch,
  siReact,
  siRedux,
  siScikitlearn,
  siSqlite,
  siTailwindcss,
} from 'simple-icons';

/* =========================================================
   CUSTOM ICON PATHS
========================================================= */

const skillIcons = {
  Python:
    'M8 4h5a3 3 0 013 3v3H9a3 3 0 00-3 3v1a3 3 0 003 3h4M16 20h-5a3 3 0 01-3-3v-3h7a3 3 0 003-3V10a3 3 0 00-3-3h-3',

  'MERN Stack':
    'M12 3a9 9 0 109 9M12 3v9h9',

  HTML:
    'M5 4l1 15 6 2 6-2 1-15H5zm3 4h7M8 12h6M9 16h3',

  CSS:
    'M6 4h12l-1 15-5 2-5-2L6 4zm3 4h6M9 12h5M10 16h2',

  JavaScript:
    'M5 4h14v16H5V4zm3 10v3h2a2 2 0 002-2v-1m2-1v4h3',

  FastAPI:
    'M5 12h14M12 5l7 7-7 7',

  'REST APIs':
    'M7 7h10M7 12h10M7 17h10M4 7h.01M4 12h.01M4 17h.01',

  MongoDB:
    'M12 3c-2 4-3 6-3 9a3 3 0 006 0c0-3-1-5-3-9zM12 15v6',

  MySQL:
    'M4 17c2-7 5-10 8-10 3 0 4 3 8 3M4 17c2 2 4 2 6 0',

  'Git & GitHub':
    'M12 3a9 9 0 100 18 9 9 0 000-18zm0 4v5l4 2',

  Postman:
    'M6 18l6-12 6 12M8 14h8',

  'Data Structures':
    'M5 5h4v4H5V5zm10 0h4v4h-4V5zM5 15h4v4H5v-4zm10 0h4v4h-4v-4zM9 7h6M7 9v6M17 9v6M9 17h6',

  'Data Structures & Algorithms':
    'M5 5h4v4H5V5zm10 0h4v4h-4V5zM5 15h4v4H5v-4zm10 0h4v4h-4v-4zM9 7h6M7 9v6M17 9v6M9 17h6',

  Algorithms:
    'M5 19l5-5 3 3 6-8M16 9h3v3',

  DBMS:
    'M5 6c0-2 14-2 14 0v12c0 2-14 2-14 0V6zm0 0c0 2 14 2 14 0M5 12c0 2 14 2 14 0',

  Architecture:
    'M4 6h5v5H4V6zm11 0h5v5h-5V6zM4 15h5v5H4v-5zm11 0h5v5h-5v-5zM9 8h6M6 11v4M18 11v4M9 17h6',

  Deployment:
    'M12 3v12m0 0l-4-4m4 4l4-4M5 20h14',
};

/* =========================================================
   OFFICIAL SIMPLE ICONS
========================================================= */

const officialIcons = {
  JavaScript: siJavascript,
  Python: siPython,
  React: siReact,
  'Node.js': siNodedotjs,
  'Express.js': siExpress,
  FastAPI: siFastapi,
  'Redux Toolkit': siRedux,
  'Tailwind CSS': siTailwindcss,
  Django: siDjango,
  'HTML & CSS': siHtml5,
  HTML: siHtml5,
  CSS: siCss,
  MongoDB: siMongodb,
  MySQL: siMysql,
  SQLite: siSqlite,
  'Scikit-learn': siScikitlearn,
  PyTorch: siPytorch,
  Keras: siKeras,
  'NumPy & Pandas': siNumpy,
  'Computer Vision (OpenCV)': siOpencv,
  'Git & GitHub': siGithub,
  Docker: siDocker,
  'Gemini API': siGooglegemini,
  Postman: siPostman,
};

/* =========================================================
   TOOL MONOGRAMS
========================================================= */

const skillMonograms = {
  C: 'C',
  SQL: 'SQL',
  DBMS: 'DBMS',
  'Deep Learning (ANN/CNN/RNN)': 'DL',
  NLP: 'NLP',
  'Matplotlib & Seaborn': 'VIZ',
  'Model Context Protocol (MCP)': 'MCP',
  'OAuth 2.1 & RBAC': 'AUTH',
  'Code Splitting': 'OPT',
  'Rate Limiting': 'SEC',
  'SQL Injection Prevention': 'SEC',
  'Data Structures & Algorithms': 'DSA',
  'Data Analysis & Power BI': 'BI',
  'VS Code': 'VS',
};

/* =========================================================
   UI / UX ICON
========================================================= */

const UiUxIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9 overflow-visible"
    >
      {/* Monitor */}
      <rect
        x="3"
        y="3"
        width="18"
        height="14"
        rx="2"
        className="uiux-monitor"
      />

      {/* Browser top bar */}
      <path d="M3 7h18" />

      {/* Browser dots */}
      <circle
        cx="5.5"
        cy="5"
        r=".55"
        fill="currentColor"
        stroke="none"
      />

      <circle
        cx="8"
        cy="5"
        r=".55"
        fill="currentColor"
        stroke="none"
      />

      <circle
        cx="10.5"
        cy="5"
        r=".55"
        fill="currentColor"
        stroke="none"
      />

      {/* UI card */}
      <rect
        x="5.5"
        y="9.5"
        width="5"
        height="5"
        rx="1"
        className="uiux-panel"
      />

      {/* UI text */}
      <path d="M13 10h5" />
      <path d="M13 12h4" />
      <path d="M13 14h3" />

      {/* Cursor */}
      <path
        d="M10 9l5.8 7.8-3.2-.5-1.5 2.7-1.2-.7 1.5-2.7L10 9z"
        fill="currentColor"
        stroke="none"
        className="uiux-cursor"
      />

      {/* Monitor stand */}
      <path d="M9 20h6" />
      <path d="M12 17v3" />
    </svg>
  );
};

/* =========================================================
   SKILL ICON COMPONENT
========================================================= */

const SkillIcon = ({ name }) => {
  const icon = officialIcons[name];

  /* UI / UX */
  if (
    name === 'UI/UX' ||
    name === 'UI/UX Design' ||
    name === 'UX/UI' ||
    name === 'UX Design'
  ) {
    return <UiUxIcon />;
  }

  /* Monograms */
  if (skillMonograms[name]) {
    return (
      <span className="text-sm font-black tracking-tight">
        {skillMonograms[name]}
      </span>
    );
  }

  /* Official Simple Icons */
  if (icon) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-9 h-9"
      >
        <path d={icon.path} />
      </svg>
    );
  }

  /* Custom SVG */
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9"
    >
      <path
        d={
          skillIcons[name] ||
          skillIcons.Architecture
        }
      />
    </svg>
  );
};

/* =========================================================
   SKILL CAROUSEL CARD
========================================================= */

const SkillCard = ({ skill, category }) => {
  const isUiUx =
    skill.name === 'UI/UX' ||
    skill.name === 'UI/UX Design' ||
    skill.name === 'UX/UI' ||
    skill.name === 'UX Design';

  return (
    <div
      className={`
        group relative flex w-[215px] sm:w-[235px] md:w-[250px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 text-center shadow-[0_12px_32px_rgba(32,38,43,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-amber-700/40 hover:shadow-[0_20px_45px_rgba(32,38,43,0.12)] select-none
        ${isUiUx ? 'uiux-tile' : ''}
      `}
    >
      {/* Top Header: Category Tag & Proficiency Level */}
      <div className="flex items-center justify-between gap-2">
        <span className="truncate rounded-full border border-amber-700/20 bg-amber-50 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800">
          {category}
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-xs font-black text-slate-700">
          {skill.level}%
        </span>
      </div>

      {/* Center: Icon Container & Title */}
      <div className="my-5 flex flex-col items-center">
        <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-800 shadow-inner transition-all duration-500 group-hover:rotate-6 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:!text-white group-hover:shadow-[0_10px_25px_rgba(32,38,43,0.2)]">
          <SkillIcon name={skill.name} />
        </div>
        <h3 className="text-base font-black uppercase tracking-tight text-slate-900 transition-colors group-hover:text-amber-800">
          {skill.name}
        </h3>
      </div>

      {/* Bottom: Progress Bar */}
      <div className="mt-auto border-t border-slate-100 pt-3">
        <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] font-bold text-slate-500">
          <span>PROFICIENCY</span>
          <span className="font-black text-slate-800">{skill.level}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-amber-700 transition-all duration-700 ease-out"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT WITH CAROUSEL & CATEGORY FILTERING
========================================================= */

const TechnicalSkills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  // Flatten all skills with their categories
  const allSkills = useMemo(() => {
    return technicalSkills.categories.flatMap((cat) =>
      cat.skills.map((skill) => ({
        ...skill,
        category: cat.title,
      }))
    );
  }, []);

  // Filter categories with short readable labels and live counts
  const categoryFilters = useMemo(() => {
    const filters = [
      { id: 'All', label: 'All Stack', count: allSkills.length },
      { id: 'Programming Languages', label: 'Languages', count: 0 },
      { id: 'Web Technologies', label: 'Web & Frameworks', count: 0 },
      { id: 'Databases & Storage', label: 'Databases', count: 0 },
      { id: 'Machine Learning & AI', label: 'AI & ML', count: 0 },
      { id: 'Concepts & Security', label: 'Security & Concepts', count: 0 },
      { id: 'Tools & Deployment', label: 'Tools & DevOps', count: 0 },
    ];

    technicalSkills.categories.forEach((cat) => {
      const match = filters.find((f) => f.id === cat.title);
      if (match) {
        match.count = cat.skills.length;
      }
    });

    return filters;
  }, [allSkills]);

  // Filter skills based on active category
  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') return allSkills;
    return allSkills.filter((s) => s.category === activeCategory);
  }, [activeCategory, allSkills]);

  // Handle scroll progress and arrow states
  const updateScrollState = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < maxScroll - 15);

    if (maxScroll > 0) {
      const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
      setScrollProgress(progress);
    } else {
      setScrollProgress(100);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Reset scroll to 0 when category changes
    container.scrollTo({ left: 0, behavior: 'smooth' });
    updateScrollState();

    const handleScroll = () => updateScrollState();
    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeCategory, updateScrollState]);

  // Arrow button handlers
  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === 'left' ? -340 : 340;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Mouse drag-to-scroll support for desktop
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeftStart.current = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.6;
    container.scrollLeft = scrollLeftStart.current - walk;
  };

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-[#f6f5f2] px-6 py-28 font-sans md:px-12 md:py-36 border-t border-slate-200"
    >
      {/* Background Ambience Orbs */}
      <div className="pointer-events-none absolute left-10 top-1/4 h-96 w-96 rounded-full bg-amber-700/5 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-slate-900/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 inline-block rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-widest text-slate-700 shadow-sm">
              Technical Stack
            </div>

            <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
              Engineering &amp; Skills
            </h2>

            <p className="mt-4 text-base font-medium leading-relaxed text-slate-600 md:text-lg">
              Explore technologies categorized by engineering domain. Use the filter tabs or navigate the interactive carousel below.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:!text-white disabled:pointer-events-none disabled:opacity-30"
              aria-label="Previous skills"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:!text-white disabled:pointer-events-none disabled:opacity-30"
              aria-label="Next skills"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div data-aos="fade-up" className="mb-10 flex flex-wrap items-center gap-2 md:gap-3">
          {categoryFilters.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'border border-amber-700 bg-amber-700 !text-white shadow-md'
                    : 'border border-slate-300 bg-white !text-slate-800 hover:border-slate-700 hover:bg-slate-100 hover:!text-slate-950 shadow-sm'
                }`}
              >
                <span className={isActive ? '!text-white font-black' : '!text-slate-800 font-bold group-hover:!text-slate-950'}>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-mono font-bold ${
                    isActive ? 'bg-white/25 !text-white' : 'bg-slate-100 !text-slate-700 group-hover:bg-slate-200'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Carousel Container */}
        <div data-aos="fade-up" className="relative">
          {/* Edge Blur Fades for Sleek Scroll Look */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-8 md:w-16 bg-gradient-to-r from-[#f6f5f2] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-8 md:w-16 bg-gradient-to-l from-[#f6f5f2] to-transparent" />

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex cursor-grab active:cursor-grabbing gap-4 md:gap-5 overflow-x-auto py-4 px-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {filteredSkills.map((skill) => (
              <SkillCard
                key={`${skill.category}-${skill.name}`}
                skill={skill}
                category={skill.category}
              />
            ))}
          </div>
        </div>

        {/* Carousel Exploration Bar */}
        <div data-aos="fade-up" className="mt-8 flex flex-col items-center justify-center gap-3">
          <div className="flex w-full max-w-xs items-center gap-3">
            <span className="font-mono text-xs font-bold text-slate-500">01</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-amber-700 transition-all duration-300"
                style={{ width: `${Math.max(12, scrollProgress)}%` }}
              />
            </div>
            <span className="font-mono text-xs font-bold text-slate-500">
              {filteredSkills.length < 10 ? `0${filteredSkills.length}` : filteredSkills.length}
            </span>
          </div>

          <p className="text-xs font-semibold text-slate-500">
            ← Drag or use arrows to navigate • Filter by category above →
          </p>
        </div>
      </div>

      {/* UI/UX SVG Animations & Styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .uiux-tile:hover .uiux-monitor {
          animation: uiuxMonitor 1.8s ease-in-out infinite;
        }
        .uiux-tile:hover .uiux-panel {
          animation: uiuxPanel 1.2s ease-in-out infinite;
        }
        .uiux-tile:hover .uiux-cursor {
          animation: uiuxCursor 1.5s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes uiuxMonitor {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1px); }
        }
        @keyframes uiuxPanel {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
        @keyframes uiuxCursor {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          30% { transform: translate(1px, 1px) rotate(-3deg); }
          60% { transform: translate(2px, -1px) rotate(3deg); }
          80% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default TechnicalSkills;