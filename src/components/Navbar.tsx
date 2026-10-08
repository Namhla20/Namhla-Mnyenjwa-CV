import { useEffect, useState, useRef } from 'react';
import { Menu, X, Download, ChevronDown, FileText, FileType } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/portfolio';

/**
 * Sticky top navigation bar.
 * - Desktop: horizontal links with underline-on-hover + a prominent CV button.
 * - Mobile:  hamburger toggle revealing a full dropdown panel.
 * - Scrolled state adds a solid background + shadow for readability.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight the nav link for whichever section is currently in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  // Close the CV dropdown when clicking outside of it
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) {
        setCvOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ---- Logo / Name ---- */}
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-bold text-navy-900 hover:text-blue-700 transition-colors"
            onClick={handleNavClick}
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-700 text-white text-sm font-bold">
              NM
            </span>
            <span className="hidden sm:inline">Namhla Mnyenjwa</span>
          </a>

          {/* ---- Desktop nav links ---- */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-blue-700 active'
                        : 'text-navy-700 hover:text-blue-700'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ---- CV dropdown + mobile hamburger ---- */}
          <div className="flex items-center gap-3">
            {/* Desktop CV dropdown */}
            <div ref={cvRef} className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setCvOpen(!cvOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 active:scale-95 transition-all shadow-sm hover:shadow-md"
                aria-expanded={cvOpen}
                aria-haspopup="menu"
              >
                <Download size={16} />
                Download CV
                <ChevronDown size={14} className={`transition-transform ${cvOpen ? 'rotate-180' : ''}`} />
              </button>
              {cvOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden z-50"
                  role="menu"
                >
                  <a
                    href={personalInfo.cvPath}
                    download
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-navy-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    role="menuitem"
                  >
                    <FileType size={18} className="text-red-500" />
                    <span>PDF</span>
                  </a>
                  <a
                    href={personalInfo.cvPathWord}
                    download
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-navy-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border-t border-neutral-100"
                    role="menuitem"
                  >
                    <FileText size={18} className="text-blue-600" />
                    <span>Word (.docx)</span>
                  </a>
                </div>
              )}
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-navy-700 hover:bg-neutral-100 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ---- Mobile dropdown menu ---- */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 shadow-lg">
          <ul className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-navy-700 hover:bg-neutral-100'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 space-y-2">
              <p className="px-1 text-xs font-semibold text-navy-400 uppercase tracking-wider">Download CV</p>
              <a
                href={personalInfo.cvPath}
                download
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-blue-700 text-white text-base font-semibold hover:bg-blue-800 transition-colors"
              >
                <FileType size={18} />
                PDF
              </a>
              <a
                href={personalInfo.cvPathWord}
                download
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-white text-blue-700 border-2 border-blue-200 text-base font-semibold hover:bg-blue-50 transition-colors"
              >
                <FileText size={18} />
                Word (.docx)
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
