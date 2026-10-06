import { Briefcase, Laptop, Users, Check } from 'lucide-react';
import { skillCategories, languages } from '@/data/portfolio';

const iconMap: Record<string, typeof Briefcase> = {
  Briefcase,
  Laptop,
  Users,
};

/**
 * Skills section — three category cards (Professional, Technical, Soft)
 * each listing skill chips, followed by a Languages panel.
 */
export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Section heading ---- */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
            What I bring to the table
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900">
            Skills
          </h2>
          <div className="mt-4 mx-auto w-20 h-1.5 rounded-full bg-blue-700" />
        </div>

        {/* ---- Skill category cards ---- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] ?? Briefcase;
            return (
              <div
                key={category.title}
                className="reveal-scale group bg-white rounded-2xl border border-neutral-200 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-700 text-white group-hover:scale-110 transition-transform">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{category.title}</h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 text-navy-700 text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-default"
                    >
                      <Check size={13} className="text-blue-600" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ---- Languages panel ---- */}
        <div className="reveal-fade max-w-2xl mx-auto bg-white rounded-2xl border border-neutral-200 p-6 lg:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-lg font-bold text-navy-900">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex flex-col items-center px-6 py-4 rounded-xl bg-blue-50 border border-blue-100 min-w-[120px]"
              >
                <span className="text-base font-bold text-navy-900">{lang.name}</span>
                <span className="text-sm text-blue-600 mt-1">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
