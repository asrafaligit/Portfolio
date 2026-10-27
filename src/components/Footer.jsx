import { personalInfo, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const contactEmail = personalInfo?.email || 'asrafalidhaka123@gmail.com';

  const footerLinks = [
    {
      label: 'GitHub',
      href: socialLinks?.github || 'https://github.com/asrafaligit',
    },
    {
      label: 'LinkedIn',
      href:
        socialLinks?.linkedin ||
        'https://linkedin.com/in/md-asraf-ali-',
    },
    {
      label: 'Portfolio',
      href: socialLinks?.website || 'https://md-asraf-ali.vercel.app',
    },
    {
      label: 'Email',
      href: `mailto:${contactEmail}`,
    },
  ];

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden border-t border-slate-200 bg-[#f6f5f2] px-6 py-10 font-sans text-slate-900 sm:px-8 sm:py-12 lg:px-12"
    >
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-amber-500/[0.08] blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-slate-900/[0.04] blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top line: Brand & Social Links */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand Identity */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-700 text-base font-black !text-white shadow-md transition-transform duration-300 hover:scale-105">
              A
            </div>

            <div>
              <div className="text-base font-black tracking-tight text-slate-900">
                {personalInfo.name}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {personalInfo.title}
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-2.5">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider !text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-700 hover:bg-amber-700 hover:!text-white hover:shadow-md"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Crisp Divider */}
        <div className="my-8 h-px w-full bg-slate-200" />

        {/* Bottom line: Copyright & Back to Top */}
        <div className="flex flex-col gap-4 text-xs font-medium text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </span>

          <button
            type="button"
            onClick={handleBackToTop}
            className="group flex w-fit items-center gap-2.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold !text-slate-800 shadow-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:!text-white hover:shadow-md"
          >
            <span>Back to top</span>
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold !text-slate-800 transition-colors group-hover:bg-slate-800 group-hover:!text-white"
            >
              ↑
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          footer *,
          footer *::before,
          footer *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;