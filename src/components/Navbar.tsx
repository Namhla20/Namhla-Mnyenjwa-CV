import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
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

          {/* ---- CV button + mobile hamburger ---- */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.cvPath}
              download
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 active:scale-95 transition-all shadow-sm hover:shadow-md"
            >
              <Download size={16} />
              Download CV
            </a>

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
            <li className="pt-2">
              <a
                href={personalInfo.cvPath}
                download
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-blue-700 text-white text-base font-semibold hover:bg-blue-800 transition-colors"
              >
                <Download size={18} />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
