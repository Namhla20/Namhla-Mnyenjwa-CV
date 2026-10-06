import { Briefcase, Calendar, MapPin, Check } from 'lucide-react';
import { experiences } from '@/data/portfolio';

/**
 * Experience section — professional role cards showing the job title,
 * organisation, period, and a bulleted list of responsibilities.
 */
export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Section heading ---- */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
            My professional background
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900">
            Experience
          </h2>
          <div className="mt-4 mx-auto w-20 h-1.5 rounded-full bg-blue-700" />
        </div>

        {/* ---- Experience cards ---- */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="reveal-left group bg-neutral-50 rounded-2xl border border-neutral-200 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              {/* Header: icon + role + org */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-700 text-white group-hover:scale-110 transition-transform">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-navy-900">{exp.role}</h3>
                  <p className="text-blue-700 font-medium text-sm mt-0.5">
                    {exp.organisation}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-navy-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-navy-600">
                    <Check size={16} className="flex-shrink-0 text-blue-600 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
