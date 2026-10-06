import { ArrowRight, Mail, Download, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

/**
 * Hero / Home section — the first thing visitors see.
 * Includes name, title, tagline, intro paragraph, two CTAs,
 * a professional profile image placeholder, and a status badge.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-gradient-to-br from-navy-50 via-white to-blue-50"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-navy-200/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ---- Left: text content ---- */}
          <div className="reveal-left text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
              </span>
              Open to Opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-tight tracking-tight">
              {personalInfo.name}
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-semibold text-blue-700">
              {personalInfo.title}
            </p>

            <p className="mt-4 text-base sm:text-lg text-navy-600 font-medium">
              {personalInfo.tagline}
            </p>

            <p className="mt-6 text-base sm:text-lg text-navy-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {personalInfo.intro}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 active:scale-95 transition-all shadow-md hover:shadow-lg"
              >
                View My Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-navy-800 font-semibold border-2 border-navy-200 hover:border-blue-700 hover:text-blue-700 active:scale-95 transition-all"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            {/* Location quick info */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-navy-500">
              <MapPin size={16} />
              {personalInfo.location}
            </div>
          </div>

          {/* ---- Right: profile image placeholder ---- */}
          <div className="reveal-right flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 to-navy-600 transform rotate-3 transition-transform duration-500" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-3xl bg-gradient-to-br from-navy-100 to-blue-100 border-4 border-white shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8">
                {/* Placeholder icon — replace with <img src="..." alt="Namhla Mnyenjwa" /> later */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-navy-700 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                  NM
                </div>
                <p className="mt-6 text-navy-700 font-semibold text-lg">Namhla Mnyenjwa</p>
                <p className="mt-1 text-navy-500 text-sm text-center">
                  Management Services Graduate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CV download button (home page) */}
        <div className="reveal-fade mt-12 flex justify-center lg:justify-start">
          <a
            href={personalInfo.cvPath}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-blue-200 bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 hover:border-blue-400 transition-all"
          >
            <Download size={16} />
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
