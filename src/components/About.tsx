import {
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Microscope,
} from 'lucide-react';
import { aboutBio, careerHighlights } from '@/data/portfolio';

/** Map icon names from data to actual Lucide components */
const iconMap: Record<string, typeof GraduationCap> = {
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Microscope,
};

/**
 * About Me section — biography paragraphs + a grid of career highlight
 * cards that give a quick visual summary of Namhla's background.
 */
export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Section heading ---- */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
            Get to know me
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900">
            About Me
          </h2>
          <div className="mt-4 mx-auto w-20 h-1.5 rounded-full bg-blue-700" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* ---- Left: biography ---- */}
          <div className="lg:col-span-3 reveal-left space-y-5">
            {aboutBio.map((paragraph, i) => (
              <p key={i} className="text-navy-600 leading-relaxed text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* ---- Right: career highlights ---- */}
          <div className="lg:col-span-2 reveal-right">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Career Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {careerHighlights.map((item) => {
                const Icon = iconMap[item.icon] ?? GraduationCap;
                return (
                  <div
                    key={item.label}
                    className="group p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-700 text-white mb-3 group-hover:scale-110 transition-transform">
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
      </div>
    </section>
  );
}
