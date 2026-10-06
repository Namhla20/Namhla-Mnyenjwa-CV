import {
  Award,
  Check,
  TrendingUp,
  Briefcase,
  Microscope,
  Users,
  Megaphone,
  HeartHandshake,
} from 'lucide-react';
import { certifications, achievements } from '@/data/portfolio';
import type { LucideIcon } from 'lucide-react';

const achievementIcons: Record<string, LucideIcon> = {
  HeartHandshake,
  TrendingUp,
  Briefcase,
  Microscope,
  Users,
  Megaphone,
};

/**
 * Certifications & Community Engagement section — shows the UJ Community
 * Engagement certificate with its description and activity list, plus an
 * "Achievements / Highlights" grid summarising key accomplishments.
 */
export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Section heading ---- */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
            Recognition & milestones
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900">
            Certifications & Community Engagement
          </h2>
          <div className="mt-4 mx-auto w-20 h-1.5 rounded-full bg-blue-700" />
        </div>

        {/* ---- Certification cards ---- */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="reveal-scale bg-white rounded-2xl border border-neutral-200 p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-navy-700 text-white shadow-md">
                  <Award size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-navy-900">{cert.title}</h3>
                  <p className="text-sm text-blue-600 font-medium mt-1">{cert.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-navy-600 leading-relaxed">{cert.description}</p>

              {/* Activities */}
              <div className="mt-5">
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-3">
                  Activities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.activities.map((activity) => (
                    <span
                      key={activity}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium"
                    >
                      <Check size={13} />
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---- Achievements / Highlights grid ---- */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-2xl font-bold text-navy-900 mb-8 reveal">
            Achievements & Highlights
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {achievements.map((item, idx) => {
              const Icon = achievementIcons[item.icon] ?? Award;
              return (
                <div
                  key={item.label}
                  className="reveal-scale group flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </div>
                  <p className="text-sm font-semibold text-navy-800 leading-snug">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
