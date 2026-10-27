import { useState, useMemo } from 'react';
import { projects } from '../data/portfolioData';

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg aria-hidden="true" className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LockIcon = () => (
  <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CheckIcon = () => (
  <svg aria-hidden="true" className="h-3 w-3 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" d="M5 13l4 4L19 7" />
  </svg>
);

const ProjectCard = ({ project, index }) => (
  <article 
    data-aos="fade-up" 
    data-aos-delay={(index % 3) * 100} 
    className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(32,38,43,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-700/35 hover:shadow-[0_24px_55px_rgba(32,38,43,0.14)]"
  >
    {/* Card Preview Media */}
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
      <img 
        src={project.image} 
        alt={`${project.title} project preview`} 
        className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]" 
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80" />
      
      {/* Top Left Badge */}
      <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-800 shadow-sm backdrop-blur-md">
        {project.badge}
      </span>

      {/* Top Right Category Pill */}
      <span className="absolute right-4 top-4 rounded-full border border-amber-500/30 bg-slate-950/75 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md">
        {project.category}
      </span>

      {/* Bottom Right Project Number */}
      <span className="absolute bottom-3 right-4 font-mono text-3xl font-black italic tracking-tighter text-white/85">
        {project.number}
      </span>
    </div>

    {/* Card Content */}
    <div className="flex flex-1 flex-col p-6 md:p-7">
      <div className="mb-2">
        <span className="text-[11px] font-black uppercase tracking-wider text-amber-700">
          {project.category}
        </span>
        <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-amber-800 md:text-[1.65rem]">
          {project.title}
        </h3>
      </div>

      <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600 md:text-base">
        {project.description}
      </p>

      {/* Key Architectural Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Key Architecture &amp; Features
          </h4>
          <ul className="space-y-1.5">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-100/90">
                  <CheckIcon />
                </span>
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Tags */}
      <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
        {project.techTags.map((tag) => (
          <span 
            key={tag} 
            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600 transition group-hover:border-amber-700/20 group-hover:bg-amber-50/70 group-hover:text-amber-900"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-2">
        {project.links?.demo && (
          <a 
            href={project.links.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold !text-white shadow-sm transition hover:bg-amber-700 hover:shadow-md"
          >
            <ExternalLinkIcon />
            <span className="!text-white">{project.links.demo.includes('learn.') ? 'LMS Portal' : 'Live Platform'}</span>
          </a>
        )}

        {project.links?.secondaryDemo && (
          <a 
            href={project.links.secondaryDemo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-slate-900 hover:text-slate-900"
          >
            <ExternalLinkIcon />
            <span>LMS Portal</span>
          </a>
        )}

        {project.links?.isInternal && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/90 bg-amber-50/80 px-3.5 py-1.5 text-[11px] font-bold text-amber-900">
            <LockIcon />
            Enterprise Platform
          </span>
        )}

        {project.links?.github && (
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-slate-900 hover:text-slate-900"
          >
            <GithubIcon />
            Source
          </a>
        )}
      </div>
    </div>
  </article>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Derive unique categories dynamically
  const categories = useMemo(() => {
    const list = ['All', 'Enterprise & EdTech', 'Business & Growth', 'SaaS & Systems', 'Client Solutions', 'AI & Analytics'];
    return list.map((cat) => ({
      name: cat,
      count: cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length,
    }));
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative w-full overflow-hidden bg-[#f6f5f2] px-6 pb-32 pt-28 md:px-12 md:pt-36">
      <div className="pointer-events-none absolute right-[-10rem] top-20 h-96 w-96 rounded-full bg-amber-700/5 blur-3xl" />
      <div className="pointer-events-none absolute left-[-10rem] bottom-40 h-96 w-96 rounded-full bg-slate-900/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-12 max-w-3xl md:mb-16">
          <span className="inline-block rounded-full border border-slate-300 bg-white px-5 py-1.5 text-xs font-black uppercase tracking-wider text-slate-600 shadow-sm">
            Featured Portfolio ({projects.length} Platforms)
          </span>
          <h2 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
            Production &amp; Commercial Work
          </h2>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:text-lg">
            Production-grade full-stack systems, multi-tenant SaaS tools, enterprise CRM &amp; HRMS platforms, and intelligent AI/ML pipelines built for real users.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div data-aos="fade-up" className="mb-12 flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveFilter(cat.name)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'border border-slate-900 bg-slate-900 !text-white shadow-md'
                    : 'border border-slate-300 bg-white !text-slate-800 hover:border-slate-700 hover:bg-slate-100 hover:!text-slate-950 shadow-sm'
                }`}
              >
                <span className={isActive ? '!text-white font-black' : '!text-slate-800 font-bold group-hover:!text-slate-950'}>{cat.name}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isActive ? 'bg-white/20 !text-white' : 'bg-slate-100 !text-slate-700 group-hover:bg-slate-200'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;