import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '@/data/portfolio';

/**
 * Footer — name + title, a short tagline, quick navigation links,
 * social icons, and copyright text.
 */
export default function Footer() {
  const footerLinks = navLinks.filter((link) =>
    ['Home', 'About', 'Projects', 'Contact'].includes(link.label)
  );

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* ---- Identity + tagline ---- */}
          <div>
            <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
            <p className="text-blue-300 text-sm mt-1">{personalInfo.title}</p>
            <p className="mt-4 text-navy-300 text-sm leading-relaxed max-w-sm">
              Building meaningful solutions through administration, research,
              coordination and community engagement.
            </p>
          </div>

          {/* ---- Quick links ---- */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-navy-300 hover:text-blue-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Contact + social icons ---- */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-navy-800 hover:bg-blue-700 text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send email"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-navy-800 hover:bg-blue-700 text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <a
              href={personalInfo.cvPath}
              download
              className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 font-medium transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-400 text-center sm:text-left">
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-navy-300 hover:text-blue-300 transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
