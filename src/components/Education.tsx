import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio';

/**
 * Education section — a vertical timeline that alternates left/right on
 * desktop and collapses to a single column on mobile.  Each entry shows
 * the institution, qualification, and study period.
 */
export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Section heading ---- */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
            My academic journey
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900">
            Education
          </h2>
          <div className="mt-4 mx-auto w-20 h-1.5 rounded-full bg-blue-700" />
        </div>

        {/* ---- Timeline ---- */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-12">
            {education.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex items-start gap-4 sm:gap-0 reveal-${
                    isLeft ? 'left' : 'right'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-700 border-4 border-neutral-50 shadow-md">
                      <GraduationCap size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Card — alternating sides on desktop */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto'
                    }`}
                  >
                    <div className="bg-white rounded-2xl border border-neutral-200 p-5 lg:p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                      <div
                        className={`flex items-center gap-2 text-sm text-blue-600 mb-2 ${
                          isLeft ? 'sm:justify-end' : ''
                        }`}
                      >
                        <Calendar size={14} />
                        <span className="font-medium">{item.period}</span>
                      </div>
                      <h3 className="text-base font-bold text-navy-900 leading-snug">
                        {item.qualification}
                      </h3>
                      <p className="mt-1 text-sm text-navy-500 font-medium">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
